interface ToggleRegionButton2Props {
    isToggled: boolean
    onClicked: () => void
    label: string
}

export const ToggleRegionButton2 = ({isToggled, onClicked, label}: ToggleRegionButton2Props) => {
    return (
        <button className={`flex flex-col w-16 items-center rounded-lg shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]
                            hover: bg-emerald-200 ${isToggled ? `bg-emerald-500 text-white` : `bg-white text-black`}`}
                onClick={onClicked}>
            <p className='text-sm'>{label}</p>
        </button>
    )
}