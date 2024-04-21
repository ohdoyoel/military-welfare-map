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
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
            {message: "안녕하세요", isBotSide: true},
        ]
    )
    const {element, onMoveToElement} = useMoveScroll()
    
    useEffect(() => {
    }, [])

    const messageList = (messages: MessageProps[]) => {
        const result = []
        for (let i=0; i<messages.length; i++){
            if (i == messages.length-1) result.push(<ChatMessage ref={element} message={messages[i].message} isBotSide={messages[i].isBotSide}/>)
            else result.push(<ChatMessage message={messages[i].message} isBotSide={messages[i].isBotSide}/>)
        }
        onMoveToElement
        return result
    }

    const pushUserMessage = (message: string) => {
        setMessages([...messages, {message:message, isBotSide: false}])
    }
    
    return (
        <div className="flex flex-col w-full h-full relative">
            <div className="w-full h-0 grow bg-emerald-200 px-4 py-4 flex flex-col items-start overflow-y-auto gap-2" onClick={onMoveToElement}>
                {messageList(messages)}
            </div>

            <div className="flex-none flex h-12 items-center justify-center w-full border-t-[1px] border-slate-200">
                <input className="flex w-full h-full px-3 py-2 text-sm placeholder-slate-400 focus:outline-none disabled:cursor-not-allowed" placeholder="메시지를 입력해주세요"/>       
                <button className="h-full w-20 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500">
                    보내기
                </button>
            </div>
        </div>
    )
}