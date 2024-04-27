interface ToggleRegionButton2Props {
    isToggled: boolean
    onClicked: () => void
    label: string
}

export const ToggleRegionButton2 = ({isToggled, onClicked, label}: ToggleRegionButton2Props) => {
    return (
        <button className={`flex flex-col w-16 items-center rounded-[3px] shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]
                            ${isToggled
                                ? `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] bg-emerald-500 text-white `
                                : `shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] bg-white text-gray-600`
                            }
                            `}
                onClick={onClicked}>
            <p className='text-sm'>{label}</p>
        </button>
    )
}