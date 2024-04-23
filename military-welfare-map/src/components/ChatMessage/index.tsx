interface ChatMessageProps {
    message: string
    isBotSide: boolean
}

export const ChatMessage = ({message, isBotSide}: ChatMessageProps) => {
    
    const nowTime = () : string => {
        const date = new Date()
        // return date.getHours() + ":" + date.getMinutes()
        return ""
    }
    
    return (
        <div className={`flex items-start gap-2.5 ${isBotSide ? "self-start" : "self-end mt-4"}`}>
            {!isBotSide ? <p className="text-base font-normal text-gray-500 self-end">{nowTime()}</p> : ""}
            <div className="flex flex-col gap-1 w-full max-w-[320px]">
                <p className={`text-lg font-semibold text-white ${!isBotSide ? "text-end" : ""}`}>
                    {isBotSide ? "병영생활지G도PT" : "나"}
                </p>
                <div className={`flex flex-col leading-1.5 p-4 bg-white ${isBotSide ? "rounded-r-lg rounded-bl-lg" : "rounded-l-lg rounded-br-lg"} shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] border-l-2 text-sm font-normal text-gray`}>
                    <p className="text-lg font-normal">{message}</p>
                </div>
            </div>
            {isBotSide ? <p className="text-base font-normal text-gray-500 self-end">{nowTime()}</p> : ""}
        </div>
    )
}