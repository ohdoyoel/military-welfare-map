interface ToggleTagAllButton2Props {
    children: React.ReactNode
    toggleState: number
    onClicked: () => void
}

export const ToggleTagAllButton2 = ({children, toggleState, onClicked}: ToggleTagAllButton2Props) => {

    return (
        <button className={`flex flex-col w-14 focus:outline-none
                            items-center place-content-center rounded-[3px] z-20
                            ${toggleState == 0
                                ? `bg-white shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] border-l-4 border-zinc-500 text-gray-600`
                                : toggleState == 1 
                                    ? `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] text-white bg-gray-400`
                                    : `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] text-white bg-gray-500`
                            }
                            `}
                onClick={onClicked}>
            {children}
        </button>
    )
}