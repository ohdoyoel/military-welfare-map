interface ToggleTagButtonProps {
    children: React.ReactNode
    isToggled: boolean
    onClicked: () => void
    label: string
}

export const ToggleTagButton = ({children, isToggled, onClicked, label}: ToggleTagButtonProps) => {
    return (
        <button className={`flex flex-col w-[50px] items-center rounded-[3px]
                            hover:bg-emerald-600 ${isToggled ? `bg-emerald-700` : `bg-emerald-500`}`}
                onClick={onClicked}>
            {children}
            <p className='text-white text-xs'>{label}</p>
        </button>
    )
}