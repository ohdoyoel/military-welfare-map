import { tagOrderBgColor, tagBorderColor } from "@/src/types/tagColor";

interface ShowFireButtonProps {
    isToggled: boolean
    onClicked: () => void
}

export const ShowFireButton = ({isToggled, onClicked}: ShowFireButtonProps) => {
    return (
        <button className={`flex flex-col w-80 h-20 focus:outline-none
                            items-center place-content-center rounded-[3px] z-20
                            ${isToggled
                                ? `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] bg-gradient-to-br from-emerald-300 to-emerald-600 text-white`
                                : `shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] bg-white text-emerald-500`
                            }`} onClick={onClicked}>
            <p className="text-2xl font-nse">지피티 병장이 쏜다!</p>
            <p className="text-sm font-nsr">병영생활지도와 제휴를 맺은 업소를 소개합니다.</p>
        </button>
    )
}