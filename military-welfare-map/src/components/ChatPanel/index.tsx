import { MarkerType } from "@/src/types/data"
import { LocationItem } from "../LocationItem"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { ChatMessage } from "../ChatMessage"
import { botReply, greeting } from "@/src/functions/botReply"
import { PlayCircleSharp } from "@mui/icons-material"

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

export const ChatPanel = ({setTagsToggled, setRegionsToggled, setSearchText, setDistance}: ChatPanelProps) => {
    const [messages, setMessages] = useState<MessageProps[]>([{message: greeting, isBotSide: true}])

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

    const replyProperlyTagAndPlc = (tags: string[], plcs: string[]) => {
        if (tags.length > 0 && plcs.length == 0) {
            pushBotMessage(`선택하신 지역의 ${Number(tags[0])}을 보여드리겠습니다 .`)
        }
        else if (tags.length == 0 && plcs.length > 0) {
            pushBotMessage(`${Number(plcs[0])}의 모든 장소를 보여드리겠습니다 .`)
        }
        else if (tags.length > 0 && plcs.length > 0) {
            pushBotMessage(`${Number(plcs[0])}의 ${Number(tags[0])}을 보여드리겠습니다 .`)
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
                    return;
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
                if (Number(p) == 16) {
                    setDistance(0.05)
                    plcsToggled = (Array.from({length: 16}, () => true))
                    return;
                }
                else plcsToggled[Number(p)] = true
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