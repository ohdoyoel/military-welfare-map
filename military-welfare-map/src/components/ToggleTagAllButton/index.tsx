interface ToggleTagAllButtonProps {
    children: React.ReactNode
    toggleState: number
    onClicked: () => void
}

export const ToggleTagAllButton = ({children, toggleState, onClicked}: ToggleTagAllButtonProps) => {

    return (
        <button className={`flex flex-col w-[55px] h-full items-center place-content-center rounded-[3px] text-white focus:outline-none
                            ${toggleState == 0
                                ? `bg-emerald-500`
                                : toggleState == 1 
                                    ? `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] bg-zinc-400`
                                    : `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] bg-zinc-500`
                            }
                            `}
                onClick={onClicked}>
            {children}
        </button>
    )
}