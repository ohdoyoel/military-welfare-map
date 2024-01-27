interface ToggleRegionButtonProps {
    isToggled: boolean
    onClicked: () => void
    label: string
}

export const ToggleRegionButton = ({isToggled, onClicked, label}: ToggleRegionButtonProps) => {
    return (
        <button className={`flex flex-col w-10 items-center rounded-[3px]
                            hover:bg-emerald-600 ${isToggled ? `bg-emerald-600` : ``}`}
                onClick={onClicked}>
            <p className='text-white text-xs'>{label}</p>
        </button>
    )
}