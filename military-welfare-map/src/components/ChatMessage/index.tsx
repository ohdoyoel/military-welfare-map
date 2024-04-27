import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChatMessageProps {
    message: string
    isBotSide: boolean
}

export const ChatMessage = ({message, isBotSide}: ChatMessageProps) => {
    
    const nowTime = () : string => {
        const date = new Date()
        return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2)
    }
    
    return (
        <div className="flex flex-col w-full mt-2">
            <p className={`text-lg font-semibold text-white ${!isBotSide ? "text-end" : ""}`}>
                    {isBotSide ? "병영생활지G도PT" : "나"}
            </p>
            <div className={`flex items-start gap-2.5 ${isBotSide ? "self-start flex-row-reverse" : "self-end"}`}>
                <p className="text-base font-normal text-white self-end" suppressHydrationWarning>{nowTime()}</p>
                <div className="flex flex-col gap-1 w-fit max-w-[320px]">
                    <div className={`flex flex-col p-2 bg-white ${isBotSide ? "rounded-r-lg rounded-bl-lg" : "rounded-l-lg rounded-br-lg"} shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] border-l-2`}>
                        <ReactMarkdown className="text-lg font-normal">
                            {message}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>

    )
}