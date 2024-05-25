interface ToggleRegionAllButtonProps {
    toggleState: number
    onClicked: () => void
    label: string
}

export const ToggleRegionAllButton = ({toggleState, onClicked, label}: ToggleRegionAllButtonProps) => {

    return (
        <button className={`flex flex-col w-10 items-center rounded-[3px] focus:outline-none
                            ${toggleState == 0
                                ? `bg-emerald-500`
                                : toggleState == 1 
                                    ? `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] bg-zinc-400`
                                    : `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] bg-zinc-500`
                            }
                            `}
                onClick={onClicked}>
            <p className='text-white text-xs'>{label}</p>
        </button>
    )
}