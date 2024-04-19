import { LegacyRef } from "react"

interface ChatMessageProps {
    ref?: LegacyRef<HTMLDivElement>
    message: string
    isBotSide: boolean
}

export const ChatMessage = ({ref, message, isBotSide}: ChatMessageProps) => {
    
    const nowTime = () : string => {
        const date = new Date()
        return date.getHours() + ":" + date.getMinutes()
    }
    
    return (
        <div className={`flex items-start gap-2.5 ${isBotSide ? "self-start" : "self-end mt-4"}`} ref={ref}>
            {!isBotSide ? <span className="text-sm font-normal text-gray-500 self-end">{nowTime()}</span> : ""}
            <div className="flex flex-col gap-1 w-full max-w-[320px]">
                <span className={`text-sm font-semibold text-gray-900 ${!isBotSide ? "text-end" : ""}`}>
                    {isBotSide ? "오상병" : "나"}
                </span>
                <div className={`flex flex-col leading-1.5 p-4 bg-white ${isBotSide ? "rounded-r-lg rounded-bl-lg" : "rounded-l-lg rounded-br-lg"} shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] border-l-2`}>
                    <p className="text-sm font-normal text-gray-900">{message}</p>
                </div>
            </div>
            {isBotSide ? <span className="text-sm font-normal text-gray-500 self-end">{nowTime()}</span> : ""}
        </div>
    )
}