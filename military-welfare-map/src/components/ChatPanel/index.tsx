import { MarkerType } from "@/src/types/data"
import { LocationItem } from "../LocationItem"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { ChatMessage } from "../ChatMessage"
import { botReply, greeting } from "@/src/functions/botReply"
import { andInKorean, booleanArrayToList, isTrimedTextAllIncluded, thatInKorean } from "@/src/functions/korean"
import { tagSearch } from "@/src/types/tagIconLabel"

interface ChatPanelProps {
    markers: MarkerType[]
    setIdx: Dispatch<SetStateAction<number>>
    tagsToggled: boolean[]
    setTagsToggled: Dispatch<SetStateAction<boolean[]>>
    regionsToggled: boolean[]
    setRegionsToggled: Dispatch<SetStateAction<boolean[]>>
    setSearchText: Dispatch<SetStateAction<string>>
    setDistance: Dispatch<SetStateAction<number>>
}

interface MessageProps {
    message: string,
    isBotSide: boolean
    tag: number
}

const tagLabelData = [
    '음식점', '카페', '미용실', '목욕탕',
    '문화·여가 시설', '숙박업소', '운동 시설',
    '', '군 제휴 안경점', '군병원과 병무청지정병원',
    '예비군집결지', 'BX(영외마트)', '모두',
]

const placeLabelData = [
    '서울특별시', '부산광역시', '대구광역시', '인천광역시',
    '광주광역시', '대전광역시', '울산광역시', '경기도',
    '충청북도', '충청남도', '전북특별자치도', '전라남도',
    '경상북도', '경상남도', '강원특별자치도', '제주특별자치도', '주변', '전국'
]

export const ChatPanel = ({markers, setIdx, tagsToggled, setTagsToggled, regionsToggled, setRegionsToggled, setSearchText, setDistance}: ChatPanelProps) => {
    const [messages, setMessages] = useState<MessageProps[]>([
        {
            message: `안녕하십니까!
- 육군
- 해군
- 해병대
- 공군
- 민간인 (군 가족 및 지인)
\n중 어떤 집단에 속하여 계십니까?`, isBotSide: true, tag: -1}
    ])
    const [isNear, setIsNear] = useState(false)
    const user = useRef(0)

    const messageList = (messages: MessageProps[]) => {
        const result = []
        for (let i=0; i<messages.length; i++){
            result.push(<ChatMessage message={messages[i].message} isBotSide={messages[i].isBotSide} tag={messages[i].tag} key={i}/>)
        }
        return result
    }

    const scrollDown = () => {
        let ul = document.getElementById("messages") as HTMLUListElement;
        ul.scrollTo({top: ul.scrollHeight, behavior: 'smooth'})
    }

    // tag1와(과) ... tag2
    const combineTags = (tags: string[]) => {
        if (tags.length == 12) return '모든 장소'
        let result = ''
        for (let i=0; i<tags.length; i++) {
            const label = tagLabelData[Number(tags[i])]
            if (i == tags.length-1) result += label
            else result += (label + andInKorean(label) + ' ')
        }
        return result
    }

    // plc1와(과) ... plc2
    const combinePlcs = (plcs: string[]) => {
        if (plcs.length == 16) return '전국'
        let result = ''
        for (let i=0; i<plcs.length; i++) {
            const label = placeLabelData[Number(plcs[i])]
            if (i == plcs.length-1) result += label
            else result += (label + andInKorean(label) + ' ')
        }
        return result
    }

    const replyRcmdProperlyTagAndPlcAndSearch = (tags: string[], plcs: string[], searchText:string) => {
        const filtered = markers.filter((marker) => {
            return (tags.includes(marker.tag.toString()) && plcs.includes(marker.region.toString())
                && isTrimedTextAllIncluded((marker.title + ' ' + marker.address + ' ' + marker.telno + ' ' + marker.description + ' ' + tagSearch[marker.tag]).toLowerCase(), searchText.toLowerCase()))
        })

        const randomIdx = Math.floor(Math.random() * (filtered.length-1))        
        const rcmdMarker = filtered[randomIdx]
        setSearchText(rcmdMarker.title)
        setIdx(0)
        pushRcmdMessage(
            `### ${rcmdMarker.title}\n#### ${rcmdMarker.address}\n##### ${rcmdMarker.telno}\n##### ${rcmdMarker.description}   
[길찾기↗](https://map.kakao.com/link/to/${rcmdMarker.title.replaceAll('(','_').replaceAll(')','_').replaceAll(' ','_')},${rcmdMarker.position.lat},${rcmdMarker.position.lng})`,
            true,
            rcmdMarker.tag)
    }

    const replyProperlyTagAndPlcAndSearch = (tags: string[], plcs: string[], searchText:string) => {
        const combineTagsString = combineTags(tags)
        const tagsToggledString = combineTags(booleanArrayToList(tagsToggled))
        const combinePlcsString = combinePlcs(plcs)
        const plcsToggledString = combinePlcs(booleanArrayToList(regionsToggled))

        if (searchText == '') {
            if (tags.length > 0 && plcs.length == 0) {
                if (isNear) pushMessage(`주변의 ${combineTagsString+thatInKorean(combineTagsString)} 보여드리겠습니다.`, true)
                else pushMessage(`${plcsToggledString}의 ${combineTagsString+thatInKorean(combineTagsString)} 보여드리겠습니다.`, true)
            }
            else if (tags.length == 0 && plcs.length > 0) {
                pushMessage(`${combinePlcsString}의 ${tagsToggledString+thatInKorean(tagsToggledString)} 보여드리겠습니다.`, true)
            }
            else if (tags.length > 0 && plcs.length > 0) {
                pushMessage(`${combinePlcsString}의 ${combineTagsString+thatInKorean(combineTagsString)} 보여드리겠습니다.`, true)
            }
        } else {
            if (tags.length == 0 && plcs.length == 0) {
                pushMessage(`${plcsToggledString}의 ${tagsToggledString} 중, ${searchText+thatInKorean(searchText)} 검색한 결과를 보여드리겠습니다..`, true)
            }
            else if (tags.length > 0 && plcs.length == 0) {
                if (isNear) pushMessage(`주변의 ${combineTagsString} 중, ${searchText+thatInKorean(searchText)} 검색한 결과를 보여드리겠습니다.`, true)
                else pushMessage(`${plcsToggledString}의 ${combineTagsString} 중, ${searchText+thatInKorean(searchText)} 검색한 결과를 보여드리겠습니다.`, true)
            }
            else if (tags.length == 0 && plcs.length > 0) {
                pushMessage(`${combinePlcsString}의 ${tagsToggledString} 중, ${searchText+thatInKorean(searchText)} 검색한 결과를 보여드리겠습니다.`, true)
            }
            else if (tags.length > 0 && plcs.length > 0) {
                pushMessage(`${combinePlcsString}의 ${combineTagsString} 중, ${searchText+thatInKorean(searchText)} 검색한 결과를 보여드리겠습니다.`, true)
            }
        }
    }

    const beforePushBotMessage = (reply: string) => {
        if (reply.includes('@hi')) {
            pushMessage(greeting[user.current], true)
            return
        }
        else if (reply.includes('@user:')) {
            user.current = Number(reply.split('@user:')[1][0])
            pushMessage(greeting[user.current], true)
            return
        }
        else if (!reply.includes('@tag:') && !reply.includes('@plc:') && !reply.includes('@search:')) {
            pushMessage(reply, true)
            return
        }

        let tag:string[] = []
        let plc:string[] = []
        let searchText = ''
        if (reply.includes('@tag:')) {
            reply.split('@tag:').forEach((item, idx) => {
                if (idx == 0) return
                tag.push(item.trim().split(' ')[0])
            })
            let tagsToggled: boolean[] = (Array.from({length: 12}, () => false))
            tag.forEach((t) => {
                if (Number(t) == 12) {
                    tagsToggled = (Array.from({length: 16}, () => true))
                }
                else tagsToggled[Number(t)] = true
            })
            setTagsToggled(tagsToggled)
        }
        if (reply.includes('@plc:')) {
            reply.split('@plc:').forEach((item, idx) => {
                if (idx == 0) return
                plc.push(item.trim().split(' ')[0])
            })
            let plcsToggled: boolean[] = (Array.from({length: 16}, () => false))
            plc.forEach((p) => {
                if (Number(p) == 17) {
                    plcsToggled = (Array.from({length: 16}, () => true))
                    setDistance(30); setIsNear(false)
                }
                if (Number(p) == 16) {
                    plcsToggled = (Array.from({length: 16}, () => true))
                    setDistance(0.05); setIsNear(true)
                }
                else {
                    setDistance(30)
                    setIsNear(false)
                    plcsToggled[Number(p)] = true
                }
            })
            setRegionsToggled(plcsToggled)
        }
        if (reply.includes('@search:')) {
            searchText = reply.split('@search:')[1].trim()
            setSearchText(searchText)
            if (tag.length==0) {
                setTagsToggled(Array.from({length: 12}, () => true))
                tag = Array.from(Array(12).keys()).map((x) => x.toString())
            }
            if (plc.length==0) {
                setRegionsToggled(Array.from({length: 16}, () => true))
                plc = Array.from(Array(16).keys()).map((x) => x.toString())
            }
        } else {
            searchText = ''
            setSearchText(searchText)
        }

        if (reply.includes('@rcmd')) {
            replyRcmdProperlyTagAndPlcAndSearch(tag, plc, searchText)
            return
        } else {
            replyProperlyTagAndPlcAndSearch(tag, plc, searchText)
            return
        }
    }

    useEffect(() => {
        if (messages[messages.length-1].isBotSide == false) {
            setTimeout(() => beforePushBotMessage(botReply(messages[messages.length-1].message)), 1000)
        }
        scrollDown()
    }, [messages])

    const pushRcmdMessage = (message: string, isBot: boolean, tag: number) => {
        setMessages([...messages, {message:message, isBotSide: isBot, tag: tag}])
    }

    const pushMessage = (message: string, isBot: boolean) => {
        setMessages([...messages, {message:message, isBotSide: isBot, tag:-1}])
    }

    const sendMessage = () => {
        let textarea = document.getElementById("chatInput") as HTMLTextAreaElement;
        let content = textarea.value
        if (!content.trim()) return;
        textarea.value = ""
        pushMessage(content, false)
    }
    
    return (
        <div className="grow flex flex-col w-full">
            <ul id={'messages'} className="grow w-full h-0 bg-emerald-500 px-4 py-4 flex flex-col items-start overflow-y-auto gap-1" style={{scrollBehavior:'smooth'}}>
                {messageList(messages)}
            </ul>
            <div className="flex-none flex h-20 w-full border-t-[1px] border-slate-200">
                <textarea id={"chatInput"} className="flex w-full h-full px-3 py-2 text-lg placeholder-slate-400 focus:outline-none disabled:cursor-not-allowed resize-none"
                placeholder="메시지를 입력하십시오"
                onKeyDown={(e) => {if (e.code == "Enter") {e.preventDefault(); if (!e.nativeEvent.isComposing) { sendMessage(); }}}}/>       
                <button onClick={sendMessage} className="h-full w-20 text-lg font-medium text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none">
                    보내기
                </button>
            </div>
        </div>
    )
}