interface ToggleTagButton2Props {
    children: React.ReactNode
    tag: number
    isToggled: boolean
    onClicked: () => void
}

type tagColorType = {
  [key: number]: string;
};

const tagColorData: tagColorType = {
     0: '-red-500',
    1: '-orange-500',
    2: '-amber-500',
    3: '-yellow-500',
    4: '-lime-500',
    5: '-green-500',
    6: '-teal-500',
    7: '-cyan-500',
    8: '-sky-500',
    9: '-blue-500',
    10: '-indigo-500',
    11: '-violet-500',
    12: '-purple-500',
    13: '-fuchsia-500',
    14: '-pink-500',
    15: '-rose-500',
    16: '-gray-500',
}

export const ToggleTagButton2 = ({children, tag, isToggled, onClicked}: ToggleTagButton2Props) => {

    return (
        <button className={`flex flex-col w-16 h-full items-center place-content-center rounded-lg border-l-4 border${tagColorData[tag]} 
                            hover: ${isToggled ? `bg${tagColorData[tag]} text-white` : `bg-white`} shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]`}
                onClick={onClicked}>
            {children}
        </button>
    )
}