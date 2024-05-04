import { tagOrderBgColor, tagOrderBorderColor } from "@/src/types/tagColor";

interface ShowFireButtonProps {
    isToggled: boolean
    onClicked: () => void
}

export const ShowFireButton = ({isToggled, onClicked}: ShowFireButtonProps) => {
    return (
        <button className={`group flex flex-col w-80 focus:outline-none
                            items-center place-content-center rounded-[3px] z-20
                            ${isToggled
                                ? `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] bg-gradient-to-br from-emerald-300 to-emerald-600 h-[400px] text-white`
                                : `shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] bg-white h-20 text-emerald-500`
                            }`} onClick={onClicked}>
            <p className="text-2xl font-nse">지피티 병장이 쏜다!</p>
            {!isToggled && <p className="hidden group-hover:block text-sm font-nsr">병영생활지도와 제휴를 맺은 업소를 소개합니다.</p>}
            {isToggled && <p className="text-sm font-nsr">지피티 병장이 대부분을 낼테니까, 나머지만 병사가 내요!</p>}
        </button>
    )
}