import { tagBgColor } from "@/src/types/tagColor"

interface ToggleTagButtonProps {
    children: React.ReactNode
    tag: number
    isToggled: boolean
    onClicked: () => void
}

export const ToggleTagButton = ({children, tag, isToggled, onClicked}: ToggleTagButtonProps) => {

    return (
        <button className={`flex flex-col w-[55px] h-full items-center place-content-center rounded-[3px] text-white focus:outline-none
                            ${isToggled
                                ? `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] ${tagBgColor[tag].normal} `
                                : `bg-emerald-500`
                            }
                            `}
                onClick={onClicked}>
            {children}
        </button>
    )
}