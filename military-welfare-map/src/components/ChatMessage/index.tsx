import { tagOrderBgColor, tagOrderBorderColor, tagOrderTextColor } from "@/src/types/tagColor";
import { tagToOrder } from "@/src/types/tagIconLabel";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChatMessageProps {
    message: string
    isBotSide: boolean
    tag: number
}

export const ChatMessage = ({message, isBotSide, tag}: ChatMessageProps) => {
    
    const nowTime = () : string => {
        const date = new Date()
        return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2)
    }
    
    return (
        <div className="flex flex-col w-full mt-2">
            <p className={`mb-2 text-lg text-white font-semibold ${!isBotSide ? "text-end" : ""}`}>
                    {isBotSide ? "병장 지피티" : "나"}
            </p>
            <div className={`flex items-start gap-2.5 ${isBotSide ? "self-start flex-row-reverse" : "self-end"}`}>
                <p className="text-base font-normal text-white self-end" suppressHydrationWarning>{nowTime()}</p>
                <div className="flex flex-col gap-1 w-fit max-w-[330px]">
                    <div className={`flex flex-col py-1 px-2 bg-white ${isBotSide ? "rounded-r-lg rounded-bl-lg" : "rounded-l-lg rounded-br-lg"} shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] border-l-4 ${tag!=-1 && tagOrderBorderColor[tagToOrder[tag]].normal}`}>
                        <ReactMarkdown className={`prose relative text-base`} remarkPlugins={[remarkGfm]}
                        components={{
                            a: ({ node, ...props }) => (
                                <a {...props} target="_blank" className={`${tag!=-1 && tagOrderBgColor[tagToOrder[tag]].normal} mt-3 p-1 text-white no-underline inline-block`}/>
                                ),
                            p: ({ node, ...props }) => (
                            <p {...props} className="my-2"/>
                            ),
                            li: ({ node, ...props }) => (
                                <li {...props} className="my-0"/>
                            ),
                            ul: ({ node, ...props }) => (
                                <ul {...props} className="my-1" style={{paddingInlineEnd: 0}}/>
                            ),
                            h2: ({ node, ...props }) => (
                                <h2 {...props} className="my-1"/>
                            ),
                            h3: ({ node, ...props }) => (
                                <h3 {...props} className="my-1"/>
                            ),
                        }}>
                            {message}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>

    )
}