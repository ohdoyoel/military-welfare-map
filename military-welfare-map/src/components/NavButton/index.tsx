interface NavButtonProps {
    children: React.ReactNode
    isToggled: boolean
    onClicked: () => void
}

export const NavButton = ({children, isToggled, onClicked}: NavButtonProps) => {

    return (
        <button className={`flex flex-col w-28 h-full items-center place-content-center rounded-[3px]
                            hover:bg-emerald-600 ${isToggled ? `bg-emerald-600` : `border-transparent`}`}
                onClick={onClicked}>
            {children}
        </button>
    )
}