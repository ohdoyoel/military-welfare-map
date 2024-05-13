import { Dispatch, SetStateAction } from "react"

interface ProfileProps {
    setIsProfileOpened: Dispatch<SetStateAction<boolean>>
}

export const Profile = ({setIsProfileOpened}: ProfileProps) => {

    return (
        <div className="absolute inset-x-0 inset-y-0 flex flex-col w-full bg-slate-50 shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] z-20 overflow-y-auto">
            <div className="flex-none flex flex-row justify-between w-full">
                <p className="text-4xl font-bold m-4">병사 프로필</p>
                <p className="text-4xl font-extrabold m-4 cursor-pointer" onClick={() => setIsProfileOpened(false)}>✕</p>
            </div>

            <div className="grow flex flex-row w-full border-b-2 border-slate-200 my-2">
                <div className="w-20 h-20 mx-4">
                    <img className="rounded-[24px] border-[1px] border-slate-300 hover:bg-slate-100 bg-gradient-to-br from-emerald-300 to-emerald-600" src="/images/gpt.png" alt="/images/gpt.png"/>
                </div>
                <div className="grow mx-4">
                    <p className="text-2xl font-bold">병장 지피티</p>
                    <li className="text-lg ml-2">지피티 병장</li>
                </div>
            </div>

            <div className="grow flex flex-row w-full border-b-2 border-slate-200 my-2">
                <div className="w-20 h-20 mx-4">
                    <img className="rounded-[24px] border-[1px] border-slate-300 hover:bg-slate-100" src="/images/sumin.jfif" alt="/images/sumin.jfif"/>
                </div>
                <div className="grow mx-4">
                    <p className="text-2xl font-bold">상병 채수민</p>
                    <li className="text-lg ml-2">지피티 병장</li>
                </div>
            </div>

            <div className="grow flex flex-row w-full border-b-2 border-slate-200 my-2">
                <div className="w-20 h-20 mx-4">
                    <img className="rounded-[24px] border-[1px] border-slate-300 hover:bg-slate-100" src="/images/doyeol.jfif" alt="/images/doyeol.jfif"/>
                </div>
                <div className="grow mx-4">
                    <p className="text-2xl font-bold">일병 오도열</p>
                    <li className="text-lg ml-2">지피티 병장</li>
                </div>
            </div>
        </div>
    )
}