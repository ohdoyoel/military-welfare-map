import { MarkerType } from "@/src/types/data"
import { LocationItem } from "../LocationItem"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { ChatMessage } from "../ChatMessage"
import { useMoveScroll } from "@/src/functions/useMoveScroll"

interface ChatPanelProps {
    
}

interface MessageProps {
    message: string,
    isBotSide: boolean
}

export const ChatPanel = ({}: ChatPanelProps) => {
    const [messages, setMessages] = useState<MessageProps[]>(
        [
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕 오상병", isBotSide: false},
        ]
    )
    const {element, onMoveToElement} = useMoveScroll()
    
    useEffect(() => {
    }, [])

    const messageList = (messages: MessageProps[]) => {
        const result = []
        for (let i=0; i<messages.length; i++){
            if (i == messages.length-1) result.push(<ChatMessage message={messages[i].message} isBotSide={messages[i].isBotSide} key={i}/>)
            else result.push(<ChatMessage message={messages[i].message} isBotSide={messages[i].isBotSide} key={i}/>)
        }
        onMoveToElement
        return result
    }

    const pushUserMessage = (message: string) => {
        setMessages([...messages, {message:message, isBotSide: false}])
    }

    const sendMessage = () => {
        let textarea = document.getElementById("chatInput") as HTMLTextAreaElement;
        let content = textarea.value
        textarea.value = ""
        content ? pushUserMessage(content) : ""
    }
    
    return (
        <div className="grow flex flex-col w-full h-full relative">
            <div className="w-full h-0 grow bg-emerald-500 px-4 py-4 flex flex-col items-start overflow-y-auto gap-1" onClick={onMoveToElement}>
                {messageList(messages)}
            </div>

            <div className="flex-none flex h-20 w-full border-t-[1px] border-slate-200">
                <textarea id={"chatInput"} className="flex w-full h-full px-3 py-2 text-lg break-all placeholder-slate-400 focus:outline-none disabled:cursor-not-allowed resize-none"
                placeholder="메시지를 입력해주세요" required
                            onKeyUp={(event) => {if (event.code == "Enter") {event.preventDefault(); sendMessage();}}}/>       
                <button onClick={sendMessage} className="h-full w-20 text-lg font-medium text-white bg-emerald-600 hover:bg-emerald-500">
                    보내기
                </button>
            </div>
        </div>
    )
}