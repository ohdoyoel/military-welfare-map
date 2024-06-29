import { MarkerType } from "@/src/types/data"
import { LocationItem } from "../LocationItem"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { ChatMessage } from "../ChatMessage"
import { ads, botReply, greeting, help, err } from "@/src/functions/botReply"
import { andInKorean, booleanArrayToList, isTrimedTextAllIncluded, thatInKorean } from "@/src/functions/korean"
import { rcmdMsg, tagSearch } from "@/src/types/tagIconLabel"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Friends } from "../Friends"
import { Profile } from "../Profile"
import { gptReply } from "@/src/functions/geminiReply"

interface ChatPanelProps {
    markers: MarkerType[]
    setIdx: Dispatch<SetStateAction<number>>
    tagsToggled: boolean[]
    setTagsToggled: Dispatch<SetStateAction<boolean[]>>
    regionsToggled: boolean[]
    setRegionsToggled: Dispatch<SetStateAction<boolean[]>>
    setSearchText: Dispatch<SetStateAction<string>>
    distance: number
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
    'TMO·교통 시설', '군 제휴 안경점', '군병원·병무청지정병원',
    '예비군훈련장', '군 영외마트', '모든 장소',
]

const placeLabelData = [
    '서울특별시', '부산광역시', '대구광역시', '인천광역시',
    '광주광역시', '대전광역시', '울산광역시', '경기도',
    '충청북도', '충청남도', '전북특별자치도', '전라남도',
    '경상북도', '경상남도', '강원특별자치도', '제주특별자치도', '주변', '전국'
]

const onFireTitle = [
    "🎖️ 국방부치킨",
    "🎖️ 병무청과일탕후루",
    "🎖️ 방위사업청플리마켓",
    "🎖️ 논산훈련소정문이발소",
    "🎖️ 도구해수욕장해병목욕탕",
    "🎖️ 진해군항제",
    "🎖️ 가리산레포츠파크"
]

export const ChatPanel = ({markers, setIdx, tagsToggled, setTagsToggled, regionsToggled, setRegionsToggled, setSearchText, distance, setDistance}: ChatPanelProps) => {
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
    const [isFriendsOpened, setIsFriendsOpened] = useState(false)
    const [isProfileOpened, setIsProfileOpened] = useState(false)
    const user = useRef(0)
    const [isTyping, setIsTyping] = useState(false)

    const messageList = (messages: MessageProps[]) => {
        const result = []
        for (let i=0; i<messages.length; i++){
            result.push(<ChatMessage message={messages[i].message} isBotSide={messages[i].isBotSide} tag={messages[i].tag} setIsProfileOpened={setIsProfileOpened} key={i}/>)
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
            console.log(label)
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

    const explain = (tags: string[], plcs: string[], searchText:string, isRcmd:boolean) => {
        const combineTagsString = combineTags(tags)
        const tagsToggledString = combineTags(booleanArrayToList(tagsToggled))
        const combinePlcsString = combinePlcs(plcs)
        const plcsToggledString = combinePlcs(booleanArrayToList(regionsToggled))

        if (searchText == '') {
            if (tags.length > 0 && plcs.length == 0) {
                if (isNear) return `주변의 ${combineTagsString}${isRcmd ? ' 중 하나를 추천해드리겠습니다.' : thatInKorean(combineTagsString) + ' 보여드리겠습니다.'}`
                else return `${plcsToggledString}의 ${combineTagsString}${isRcmd ? ' 중 하나를 추천해드리겠습니다.' : thatInKorean(combineTagsString) + ' 보여드리겠습니다.'}`
            }
            else if (tags.length == 0 && plcs.length > 0) {
                return `${combinePlcsString}의 ${tagsToggledString}${isRcmd ? ' 중 하나를 추천해드리겠습니다.' : thatInKorean(tagsToggledString) + ' 보여드리겠습니다.'}`
            }
            else if (tags.length > 0 && plcs.length > 0) {
                return `${combinePlcsString}의 ${combineTagsString}${isRcmd ? ' 중 하나를 추천해드리겠습니다.' : thatInKorean(combineTagsString) + ' 보여드리겠습니다.'}`
            }
        } else {
            if (tags.length == 0 && plcs.length == 0) {
                return `${plcsToggledString}의 ${tagsToggledString} 중, ${searchText+thatInKorean(searchText)} 검색한 결과${isRcmd ? ' 속 하나를 추천해드리겠습니다.' : '를 보여드리겠습니다.'}`
            }
            else if (tags.length > 0 && plcs.length == 0) {
                if (isNear) return `주변의 ${combineTagsString} 중, ${searchText+thatInKorean(searchText)} 검색한 결과${isRcmd ? ' 속 하나를 추천해드리겠습니다.' : '를 보여드리겠습니다.'}`
                else return `${plcsToggledString}의 ${combineTagsString} 중, ${searchText+thatInKorean(searchText)} 검색한 결과${isRcmd ? ' 속 하나를 추천해드리겠습니다.' : '를 보여드리겠습니다.'}`
            }
            else if (tags.length == 0 && plcs.length > 0) {
                return `${combinePlcsString}의 ${tagsToggledString} 중, ${searchText+thatInKorean(searchText)} 검색한 결과${isRcmd ? ' 속 하나를 추천해드리겠습니다.' : '를 보여드리겠습니다.'}`
            }
            else if (tags.length > 0 && plcs.length > 0) {
                return `${combinePlcsString}의 ${combineTagsString} 중, ${searchText+thatInKorean(searchText)} 검색한 결과${isRcmd ? ' 속 하나를 추천해드리겠습니다.' : '를 보여드리겠습니다.'}`
            }
        }

        return ''
    }

    const replyRcmdProperlyTagAndPlcAndSearch = (tags: string[], plcs: string[], searchText:string) => {
        const filtered = markers.filter((marker) => {
            return ((tags.length > 0 ? (tags.includes(marker.tag.toString()) || tags.includes('12')) : tagsToggled[marker.tag]) && (plcs.length > 0 ? (plcs.includes(marker.region.toString()) || plcs.includes('16') || plcs.includes('17')) : regionsToggled[marker.tag])
                && marker.distance! < distance && isTrimedTextAllIncluded((marker.title + ' ' + marker.address + ' ' + marker.telno + ' ' + marker.description + ' ' + tagSearch[marker.tag]).toLowerCase(), searchText.toLowerCase()))
        })

        if (filtered.length == 0) {
            pushMessage(`추천드릴 장소가 없습니다! 검색 조건을 다시 설정해주십시오.`, true)
            setIdx(-1)
            return
        }

        let rcmdMarkerIdx = -1

        for (let i=0; i<onFireTitle.length; i++) {
            let cand = filtered.findIndex((val) => val.title == onFireTitle[i])
            if (cand != -1) {
                rcmdMarkerIdx = cand
                break
            }
        }

        if (rcmdMarkerIdx == -1) {
            rcmdMarkerIdx = Math.floor(Math.random() * (filtered.length-1))
        }
   
        const rcmdMarker = filtered[rcmdMarkerIdx]
        setSearchText(rcmdMarker.title)
        setIdx(0)
        pushRcmdMessage(
            `### ${explain(tags, plcs, searchText, true)}
            \n${rcmdMsg[rcmdMarker.tag]}
            \n### ${rcmdMarker.title.trim()}
            \n**${rcmdMarker.address.trim()}**
            \n##### ${rcmdMarker.telno?.trim()}
            \n${rcmdMarker.description && rcmdMarker.description.replaceAll('~', '&#126;').replace(/@img(.*)/gi, '')}   
[길찾기↗](https://map.kakao.com/link/to/${rcmdMarker.title.replaceAll('(','_').replaceAll(')','_').replaceAll(' ','_')},${rcmdMarker.position.lat},${rcmdMarker.position.lng})`,
            true,
            rcmdMarker.tag)
    }

    const pushRcmd = (tagsToggled: boolean[], regionsToggled: boolean[], searchText:string, reply:string) => {
        const filtered = markers.filter((marker) => {
            return tagsToggled[marker.tag] && regionsToggled[marker.region]
                && marker.distance! < distance && isTrimedTextAllIncluded((marker.title + ' ' + marker.address + ' ' + marker.telno + ' ' + marker.description + ' ' + tagSearch[marker.tag]).toLowerCase(), searchText.toLowerCase())
        })

        // if (filtered.length == 0) {
        //     pushMessage(`추천드릴 장소가 없습니다! 검색 조건을 다시 설정해주십시오.`, true)
        //     setIdx(-1)
        //     return
        // }

        let rcmdMarkerIdx = -1

        for (let i=0; i<onFireTitle.length; i++) {
            let cand = filtered.findIndex((val) => val.title == onFireTitle[i])
            if (cand != -1) {
                rcmdMarkerIdx = cand
                break
            }
        }

        if (rcmdMarkerIdx == -1) {
            rcmdMarkerIdx = Math.floor(Math.random() * (filtered.length-1))
        }
   
        const rcmdMarker = filtered[rcmdMarkerIdx]
        setSearchText(rcmdMarker.title)
        setIdx(0)
        pushRcmdMessage(
            `${reply}
            \n### ${rcmdMarker.title.trim()}
            \n**${rcmdMarker.address.trim()}**
            \n##### ${rcmdMarker.telno?.trim()}
            \n${rcmdMarker.description && rcmdMarker.description.replaceAll('~', '&#126;').replace(/@img(.*)/gi, '')}   
[길찾기↗](https://map.kakao.com/link/to/${rcmdMarker.title.replaceAll('(','_').replaceAll(')','_').replaceAll(' ','_')},${rcmdMarker.position.lat},${rcmdMarker.position.lng})`,
            true,
            rcmdMarker.tag)
    }

    const replyProperlyTagAndPlcAndSearch = (tags: string[], plcs: string[], searchText:string) => {
        setIdx(-1)
        pushMessage(explain(tags, plcs, searchText, false), true)
    }

    // if search -> 
    //          tag가 없으면 -> tag는 모두 true
    //          plc가 없으면 -> plc는 모두 true
    // else -> tag, plc는 이전 것을 따름
    const beforePushBotMessageDeprecated = (reply: string) => {
        if (reply.includes('@hi')) {
            pushMessage(greeting[user.current], true)
            return
        }
        else if (reply.includes('@help')) {
            pushMessage(help, true)
            return
        }
        else if (reply.includes('@ads')) {
            pushMessage(ads, true)
            return
        }
        else if (reply.includes('@err')) {
            pushMessage(err, true)
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
                    tagsToggled = (Array.from({length: 12}, () => true))
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
            if (tag.length==0) {
                setTagsToggled(Array.from({length: 12}, () => true))
                tag = Array.from(Array(12).keys()).map((x) => x.toString())
            }
            if (plc.length==0) {
                setRegionsToggled(Array.from({length: 16}, () => true))
                plc = Array.from(Array(16).keys()).map((x) => x.toString())
            }
        }
        setSearchText(searchText)

        if (reply.includes('@rcmd')) {
            replyRcmdProperlyTagAndPlcAndSearch(tag, plc, searchText)
            return
        } else {
            replyProperlyTagAndPlcAndSearch(tag, plc, searchText)
            return
        }
    }

    const beforePushBotMessage = (reply:string) => {
        if (!reply.includes('@tag:') && !reply.includes('@plc:') && !reply.includes('@search:')) {
            pushMessage(reply, true)
            return
        }

        let tagsToggled: boolean[] = (Array.from({length: 12}, () => false))
        let plcsToggled: boolean[] = (Array.from({length: 16}, () => false))
        let searchText = ''

        if (reply.includes('@tag:')) {
            for (const match of reply.matchAll(/@tag:\d+/g)) {
                const t = Number(match[0].match(/\d+/g)![0])
                if (t == 12) tagsToggled = (Array.from({length: 12}, () => true))
                tagsToggled[t] = true
            }
            setTagsToggled(tagsToggled)
        }
        if (reply.includes('@plc:')) {
            for (const match of reply.matchAll(/@plc:\d+/g)) {
                const p = Number(match[0].match(/\d+/g)![0])
                if (p == 17) {
                    plcsToggled = (Array.from({length: 16}, () => true))
                    setDistance(30); setIsNear(false)
                }
                else if (p == 16) {
                    plcsToggled = (Array.from({length: 16}, () => true))
                    setDistance(0.05); setIsNear(true)
                }
                else {
                    setDistance(30)
                    setIsNear(false)
                    plcsToggled[p] = true
                }
            }
            setRegionsToggled(plcsToggled)
        }

        if (reply.includes('@search:')) {
            searchText = reply.match(/@search:[^\n\r\s]+/g)![0].substring(8)
        }
        setSearchText(searchText)

        if (reply.includes('@rcmd')) {
            pushRcmd(tagsToggled, regionsToggled, searchText, reply.match(/^[^@]*/g)![0])
            return
        } else {
            setIdx(-1)
            pushMessage(reply.match(/^[^@]*/g)![0], true)
            return
        }

    }

    useEffect(() => {
        if (messages[messages.length-1].isBotSide == false) {
            // setTimeout(() => beforePushBotMessageDeprecated(botReply(messages[messages.length-1].message)), 1000)
            pushMessage('@loading', true)
            gptReply(messages[messages.length-1].message).then(res => {
                messages.splice(messages.length-1, 0)
                console.log(res)
                beforePushBotMessage(res)
            })
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
        <div className="grow relative flex flex-col w-full">
            {isFriendsOpened && <Friends setIsFriendsOpened={setIsFriendsOpened} setIsProfileOpened={setIsProfileOpened}/>}
            {isProfileOpened && <Profile setIsProfileOpened={setIsProfileOpened}/>}
            <div className="flex-none flex flex-row h-12 w-full bg-emerald-500 shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] z-10 text-white">
                <button className="w-10 h-10 my-1 mx-1 hover:bg-emerald-600 hover:rounded-[3px]" onClick={() => setIsFriendsOpened(true)}>
                    <ArrowBackIcon fontSize="medium"/>
                </button>
                <p className="grid place-content-center text-xl font-bold">병장 지피티</p>
            </div>
            <ul id={'messages'} className="grow w-full h-0 bg-emerald-500 pl-2 pr-4 py-4 flex flex-col items-start overflow-y-auto gap-1" style={{scrollBehavior:'smooth'}}>
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