import { MarkerType } from "@/src/types/data"
import { LocationItem } from "../LocationItem"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { ChatMessage } from "../ChatMessage"
import { botReply } from "@/src/functions/botReply"

interface ChatPanelProps {
    
}

interface MessageProps {
    message: string,
    isBotSide: boolean
}

const greeting = "안녕하세요"

export const ChatPanel = ({}: ChatPanelProps) => {
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

    useEffect(() => {
        if (messages[messages.length-1].isBotSide == false) {
            setTimeout(() => pushBotMessage(botReply(messages[messages.length-1].message)), 1000)
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
        // pushBotMessage(botReply(content))
    }
    
    return (
        <div className="grow flex flex-col w-full">
            <ul id={'messages'} className="grow w-full h-0 bg-emerald-500 px-4 py-4 flex flex-col items-start overflow-y-auto gap-1" style={{scrollBehavior:'smooth'}}>
                {messageList(messages)}
            </ul>
            <div className="flex-none flex h-20 w-full border-t-[1px] border-slate-200">
                <textarea id={"chatInput"} className="flex w-full h-full px-3 py-2 text-lg break-all placeholder-slate-400 focus:outline-none disabled:cursor-not-allowed resize-none"
                placeholder="메시지를 입력해주세요"
                onKeyDown={(e) => {if (e.code == "Enter") {e.preventDefault(); if (!e.nativeEvent.isComposing) { sendMessage(); }}}}/>       
                <button onClick={sendMessage} className="h-full w-20 text-lg font-medium text-white bg-emerald-600 hover:bg-emerald-500">
                    보내기
                </button>
            </div>
        </div>
    )
}