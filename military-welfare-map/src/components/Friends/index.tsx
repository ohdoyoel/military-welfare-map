import { Dispatch, SetStateAction, useState } from "react"
import usedData from '@/public/data/usedData.json'

interface FriendsProps {
    setIsFriendsOpened: Dispatch<SetStateAction<boolean>>
}

export const Friends = ({setIsFriendsOpened}: FriendsProps) => {
    const [dyProfileOpened, setDyProfileOpened] = useState(false)
    const [smProfileOpened, setSmProfileOpened] = useState(false)
    const [usedDataOpened, setUsedDataOpened] = useState(false)

    return (
        <div className="absolute inset-x-0 inset-y-0 flex flex-col w-full bg-slate-50 shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] z-20 overflow-y-auto">
            <div className="flex-none flex flex-row justify-start w-full">
                <p className="text-4xl font-bold m-4">개발자 정보</p>
            </div>
            {/* <div className="flex-none flex flex-row items-center w-full border-b-2 border-slate-200">
                <div className="w-16 h-16 bg-blue-200 m-4 rounded-[20px]"/>
                <p className="text-2xl m-2">나</p>
            </div> */}
            
            <div className="flex flex-col pb-2 border-b-2 border-slate-200 ">
                <p className="flex-none text-slate-400 mx-4">챗봇</p>
                <div className="flex-none flex flex-row items-center w-full my-2 cursor-pointer hover:bg-emerald-100"
                    onClick={() => setIsFriendsOpened(false)}>
                    <div className="w-16 h-16 mx-4 my-2">
                        <img className="rounded-[20px] border-[1px] border-slate-300 bg-gradient-to-br from-emerald-300 to-emerald-600" src="/images/gpt.png" alt="/images/gpt.png"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl mx-1">병장 지피티</span>
                        <span className="text-sm mx-1 text-slate-400">프로필을 클릭하여 지피티 병장과 대화를 이어 나가보세요!</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col pb-2 border-b-2 border-slate-200 ">
                <p className="flex-none text-slate-400 mx-4 my-2">지피티 병장의 후임들</p>
                <div className="flex-none flex flex-row items-center w-full py-2">
                    <div className="w-12 h-12 mx-4">
                        <img className="rounded-[20px] border-[1px] border-slate-300" src="/images/sumin.jfif" alt="/images/sumin.jfif"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg mx-1">상병 채수민</span>
                        <span className="text-sm mx-1 text-slate-400">디자이너⋅기획가</span>
                    </div>
                </div>
                <div className="flex-none flex flex-row items-center w-full py-2">
                    <div className="w-12 h-12 mx-4">
                        <img className="rounded-[20px] border-[1px] border-slate-300" src="/images/doyeol.jfif" alt="/images/doyeol.jfif"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg mx-1">일병 오도열</span>
                        <span className="text-sm mx-1 text-slate-400">개발자⋅리더</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col pb-2 border-b-2 border-slate-200 ">
                <p className="flex-none text-slate-400 mx-4 my-2">도움주신 분들</p>
                <a className="flex-none flex flex-row items-center w-full py-2 hover:bg-slate-100" href={'https://www.mnd.go.kr/mbshome/mbs/mnd/index.jsp'} target="_blank">
                    <div className="w-12 h-12 mx-4 rounded-[20px] border-[1px] border-slate-300 ">
                        <img className="p-1.5" src="/images/mnd.png" alt="/images/mnd.png" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg mx-1">대한민국 국방부</span>
                        <span className="text-sm mx-1 text-slate-400">정예선진강군</span>
                    </div>
                </a>
                <a className="flex-none flex flex-row items-center w-full py-2 hover:bg-slate-100" href={'https://www.mma.go.kr/index.do'} target="_blank">
                    <div className="w-12 h-12 mx-4 ">
                        <img className="rounded-[20px] border-[1px] border-slate-300 p-1" src="/images/mma.gif" alt="/images/mma.gif" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg mx-1">병무청</span>
                        <span className="text-sm mx-1 text-slate-400">공정하고 정의로운, 병역이 자랑스러운 대한민국</span>
                    </div>
                </a>
                <a className="flex-none flex flex-row items-center w-full py-2 hover:bg-slate-100" href={'https://www.dapa.go.kr/dapa/main.do'} target="_blank">
                    <div className="w-12 h-12 mx-4 rounded-[20px] border-[1px] border-slate-300 ">
                        <img className="p-1.5" src="/images/dapa.png" alt="/images/dapa.png" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg mx-1">방위사업청</span>
                        <span className="text-sm mx-1 text-slate-400">대한민국의 미래를 견인하는 튼튼한 국방</span>
                    </div>
                </a>
            </div>

            <div className="flex flex-col pb-2 border-b-2 border-slate-200 ">
                <p className="flex-none text-slate-400 mx-4 my-2">활용 기술</p>
                <a className="flex-none flex flex-row items-center w-full py-2 hover:bg-slate-100" href="https://nextjs.org/" target="_blank">
                    <div className="w-12 h-12 mx-4 rounded-[20px] border-[1px] border-slate-300 grid place-content-center">
                        <img src="/images/nextjs.png" alt="/images/nextjs.png"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg mx-1">Next.js</span>
                        <span className="text-sm mx-1 text-slate-400">JSX</span>
                    </div>
                </a>
                <a className="flex-none flex flex-row items-center w-full py-2 hover:bg-slate-100" href="https://tailwindcss.com/" target="_blank">
                    <div className="w-12 h-12 mx-4 rounded-[20px] border-[1px] border-slate-300 grid place-content-center">
                        <img width={'36px'} height={'36px'} src="/images/tailwindcss.svg" alt="/images/tailwindcss.svg"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg mx-1">TailwindCSS</span>
                        <span className="text-sm mx-1 text-slate-400">CSS</span>
                    </div>
                </a>
                <a className="flex-none flex flex-row items-center w-full py-2 hover:bg-slate-100" href="https://apis.map.kakao.com/" target="_blank">
                    <div className="w-12 h-12 mx-4 rounded-[20px] border-[1px] bg-slate-200 border-slate-300 grid place-content-center">
                        <img width={'30px'} height={'30px'} src="/images/kakaomap.png" alt="/images/kakaomap.png"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg mx-1">Kakao 지도 Web API</span>
                        <span className="text-sm mx-1 text-slate-400">Map API</span>
                    </div>
                </a>
                <a className="flex-none flex flex-row items-center w-full py-2 hover:bg-slate-100" href="https://www.netlify.com/" target="_blank">
                    <div className="w-12 h-12 mx-4 grid place-content-center">
                        <img className="rounded-[20px] border-[1px] bg-slate-200 border-slate-300" src="/images/netlify.webp" alt="/images/netlify.webp"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg mx-1">Netlify</span>
                        <span className="text-sm mx-1 text-slate-400">Deploy</span>
                    </div>
                </a>
            </div>

            <div className="flex flex-col pb-2 border-b-2 border-slate-200">
                <p className="flex-none text-slate-400 mx-4 my-2 cursor-pointer" onClick={() => setUsedDataOpened(!usedDataOpened)}>
                    활용공공데이터 {usedDataOpened ? '▼' : '◄'}
                </p>
                {usedDataOpened && usedData.map(({title, imgSrc, desc, link}) => (
                    <a className="flex-none flex flex-row items-center w-full py-2 hover:bg-slate-100" href={link} target="_blank">
                        <div className="flex-none w-8 h-8 mx-4 rounded-[12px] border-[1px] border-slate-300 ">
                            <img className="p-1.5" src={imgSrc} alt={imgSrc} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base mx-1 pr-4">{title}</span>
                            <span className="text-xs mx-1 text-slate-400 pr-4">{desc}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}