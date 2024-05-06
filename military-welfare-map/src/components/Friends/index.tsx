import { Dispatch, SetStateAction } from "react"

interface FriendsProps {
    setIsFriendsOpened: Dispatch<SetStateAction<boolean>>
}

export const Friends = ({setIsFriendsOpened}: FriendsProps) => {
    return (
        <div className="absolute inset-x-0 inset-y-0 flex flex-col w-full bg-slate-50 shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] z-20 overflow-y-auto">
            <div className="flex-none flex flex-row justify-start w-full">
                <p className="text-4xl font-bold m-4">개발자 정보</p>
            </div>

            <div className="flex-none flex flex-row items-center w-full border-b-2 border-slate-200">
                <div className="w-16 h-16 bg-blue-200 m-4 rounded-[20px]"/>
                <p className="text-2xl m-2">나</p>
            </div>
            
            <p className="flex-none text-slate-400 mx-4 mt-2">챗봇</p>
            <div className="flex-none flex flex-row items-center w-full py-2 border-b-2 border-slate-200 cursor-pointer hover:bg-slate-100"
                onClick={() => setIsFriendsOpened(false)}>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-300 to-emerald-600 mx-4 rounded-[20px]"/>
                <div className="flex flex-col">
                    <span className="text-xl mx-1">병장 지피티</span>
                    <span className="text-sm mx-1 text-slate-400">프로필을 클릭하여 지피티 병장과 대화를 이어 나가보세요!</span>
                </div>
            </div>

            <p className="flex-none text-slate-400 mx-4 mt-2">지피티 병장의 후임들</p>
            <div className="flex-none flex flex-row items-center w-full py-2">
                <div className="w-12 h-12 mx-4">
                    <img className="rounded-[20px] border-[1px] border-slate-300" src="/images/sumin.jfif" alt="/images/sumin.jfif"/>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl mx-1">상병 채수민</span>
                    <span className="text-sm mx-1 text-slate-400">디자이너⋅기획가</span>
                </div>
            </div>
            <div className="flex-none flex flex-row items-center w-full py-2 border-b-2 border-slate-200 ">
                <div className="w-12 h-12 mx-4">
                    <img className="rounded-[20px] border-[1px] border-slate-300" src="/images/doyeol.jfif" alt="/images/doyeol.jfif"/>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl mx-1">일병 오도열</span>
                    <span className="text-sm mx-1 text-slate-400">개발자⋅리더</span>
                </div>
            </div>

            <p className="flex-none text-slate-400 mx-4 mt-2">도움주신 분들</p>
            <a className="flex-none flex flex-row items-center w-full py-2 hover:bg-slate-100" href={'https://www.mnd.go.kr/mbshome/mbs/mnd/index.jsp'} target="_blank">
                <div className="w-12 h-12 mx-4 rounded-[20px] border-[1px] border-slate-300 ">
                    <img className="p-1.5" src="/images/mnd.png" alt="/images/mnd.png" />
                </div>
                <span className="text-xl m-1">대한민국 국방부</span>
            </a>
            <a className="flex-none flex flex-row items-center w-full py-2 hover:bg-slate-100" href={'https://www.mma.go.kr/index.do'} target="_blank">
                <div className="w-12 h-12 mx-4 ">
                    <img className="rounded-[20px] border-[1px] border-slate-300 p-1" src="/images/mma.gif" alt="/images/mma.gif" />
                </div>
                <span className="text-xl m-1">병무청</span>
            </a>
            <a className="flex-none flex flex-row items-center w-full py-2 border-b-2 border-slate-200 hover:bg-slate-100" href={'https://www.dapa.go.kr/dapa/main.do'} target="_blank">
                <div className="w-12 h-12 mx-4 rounded-[20px] border-[1px] border-slate-300 ">
                    <img className="p-1.5" src="/images/dapa.png" alt="/images/dapa.png" />
                </div>
                <span className="text-xl m-1">방위사업청</span>
            </a>

            <p className="flex-none text-slate-400 mx-4 mt-2">활용공공데이터</p>
            <div className="flex-none flex flex-row items-center w-full py-2">
                <div className="w-12 h-12 bg-emerald-500 mx-4 rounded-[20px]"/>
                <span className="text-xl m-1">대한민국 국방부</span>
            </div>
            <div className="flex-none flex flex-row items-center w-full py-2">
                <div className="w-12 h-12 bg-emerald-500 mx-4 rounded-[20px]"/>
                <span className="text-xl m-1">병무청</span>
            </div>
            <div className="flex-none flex flex-row items-center w-full pt-2 pb-4 border-b-2 border-slate-200 ">
                <div className="w-12 h-12 bg-emerald-500 mx-4 rounded-[20px]"/>
                <span className="text-xl m-1">방위사업청</span>
            </div>
        </div>
    )
}