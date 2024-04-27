interface ToggleRegionButtonProps {
    isToggled: boolean
    onClicked: () => void
    label: string
}

export const ToggleRegionButton = ({isToggled, onClicked, label}: ToggleRegionButtonProps) => {
    return (
        <button className={`flex flex-col w-10 items-center rounded-[3px] focus:outline-none
                            ${isToggled
                                ? `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] bg-emerald-600 `
                                : `bg-emerald-500`
                            }                                
                            `}
                onClick={onClicked}>
            <p className='text-white text-xs'>{label}</p>
        </button>
    )
}