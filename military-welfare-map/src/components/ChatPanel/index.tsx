import { MarkerType } from "@/src/types/data"
import { LocationItem } from "../LocationItem"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { ChatMessage } from "../ChatMessage"
import { botReply, greeting } from "@/src/functions/botReply"
import { andInKorean, thatInKorean } from "@/src/functions/korean"

interface ChatPanelProps {
    setTagsToggled: Dispatch<SetStateAction<boolean[]>>
    setRegionsToggled: Dispatch<SetStateAction<boolean[]>>
    setSearchText: Dispatch<SetStateAction<string>>
    setDistance: Dispatch<SetStateAction<number>>
}

interface MessageProps {
    message: string,
    isBotSide: boolean
}

const tagLabelData = [
    '음식점', '카페', '미용실', '목욕탕', '노래방·PC방·당구장', '숙박업소', '스포츠 경기장', 'TMO·이사업체', '안경점', '병원', '예비군', '골프장', '모두',
]

const placeLabelData = [
    '서울특별시', '부산광역시', '대구광역시', '인천광역시',
    '광주광역시', '대전광역시', '울산광역시', '경기도',
    '충청북도', '충청남도', '전라북도', '전라남도',
    '경상북도', '경상남도', '강원도', '제주도', '주변', '전국'
]

export const ChatPanel = ({setTagsToggled, setRegionsToggled, setSearchText, setDistance}: ChatPanelProps) => {
    const [messages, setMessages] = useState<MessageProps[]>([{message: greeting, isBotSide: true}])
    const [isNear, setIsNear] = useState(false)

    const messageList = (messages: MessageProps[]) => {
        const result = []
        for (let i=0; i<messages.length; i++){
            if (i == messages.length-1) result.push(<ChatMessage message={messages[i].message} isBotSide={messages[i].isBotSide} key={i}/>)
            else result.push(<ChatMessage message={messages[i].message} isBotSide={messages[i].isBotSide} key={i}/>)
        }
        return result
    }

    const scrollDown = () => {
        let ul = document.getElementById("messages") as HTMLUListElement;
        ul.scrollTo({top: ul.scrollHeight, behavior: 'smooth'})
    }

    // tag1와(과) ... tag2을(를)
    const combineTags = (tags: string[]) => {
        let result = ''
        for (let i=0; i<tags.length; i++) {
            const label = tagLabelData[Number(tags[i])]
            if (i == tags.length-1) result += (label + thatInKorean(label))
            else result += (label + andInKorean(label) + ' ')
        }
        return result
    }

    // plc1와(과) ... plc2을(를)

    const replyProperlyTagAndPlc = (tags: string[], plcs: string[]) => {
        if (tags.length > 0 && plcs.length == 0) {
            if (isNear) pushBotMessage(`주변의 ${combineTags(tags)} 보여드리겠습니다 .`)
            else pushBotMessage(`선택하신 지역의 ${combineTags(tags)} 보여드리겠습니다 .`)
        }
        else if (tags.length == 0 && plcs.length > 0) {
            pushBotMessage(`${placeLabelData[Number(plcs[0])]}의 모든 장소를 보여드리겠습니다 .`)
        }
        else if (tags.length > 0 && plcs.length > 0) {
            pushBotMessage(`${placeLabelData[Number(plcs[0])]}의 ${combineTags(tags)} 보여드리겠습니다 .`)
        }
    }

    const beforePushBotMessage = (reply: string) => {
        // pushBotMessage(reply)

        if (!reply.includes('@tag') && !reply.includes('@plc')) {
            pushBotMessage(reply)
            return
        }
        let tag:string[] = []
        let plc:string[] = []
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
        replyProperlyTagAndPlc(tag, plc)
    }

    useEffect(() => {
        if (messages[messages.length-1].isBotSide == false) {
            setTimeout(() => beforePushBotMessage(botReply(messages[messages.length-1].message)), 1000)
        }
        scrollDown()
    }, [messages])

    const pushBotMessage = (message: string) => {
        setMessages([...messages, {message:message, isBotSide: true}])
    }

    const pushUserMessage = (message: string) => {
        setMessages([...messages, {message:message, isBotSide: false}])
    }

    const sendMessage = () => {
        let textarea = document.getElementById("chatInput") as HTMLTextAreaElement;
        let content = textarea.value
        if (!content.trim()) return;
        textarea.value = ""
        pushUserMessage(content)
    }
    
    return (
        <div className="grow flex flex-col w-full">
            <ul id={'messages'} className="grow w-full h-0 bg-emerald-500 px-4 py-4 flex flex-col items-start overflow-y-auto gap-1" style={{scrollBehavior:'smooth'}}>
                {messageList(messages)}
            </ul>
            <div className="flex-none flex h-20 w-full border-t-[1px] border-slate-200">
                <textarea id={"chatInput"} className="flex w-full h-full px-3 py-2 text-lg break-all placeholder-slate-400 focus:outline-none disabled:cursor-not-allowed resize-none"
                placeholder="메시지를 입력하십시오"
                onKeyDown={(e) => {if (e.code == "Enter") {e.preventDefault(); if (!e.nativeEvent.isComposing) { sendMessage(); }}}}/>       
                <button onClick={sendMessage} className="h-full w-20 text-lg font-medium text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none">
                    보내기
                </button>
            </div>
        </div>
    )
}