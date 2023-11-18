interface ToggleTagButtonProps {
    children: React.ReactNode
    tag: number
    isToggled: boolean
    onClicked: () => void
}

type tagColorType = {
  [key: number]: string;
};

const tagColorData: tagColorType = {
    0: 'border-red-500',
    1: 'border-orange-500',
    2: 'border-amber-500',
    3: 'border-yellow-500',
    4: 'border-lime-500',
    5: 'border-green-500',
    6: 'border-teal-500',
    7: 'border-cyan-500',
    8: 'border-sky-500',
    9: 'border-blue-500',
    10: 'border-indigo-500',
    11: 'border-violet-500',
    12: 'border-purple-500',
    13: 'border-fuchsia-500',
    14: 'border-pink-500',
    15: 'border-rose-500',
}

export const ToggleTagButton = ({children, tag, isToggled, onClicked}: ToggleTagButtonProps) => {

    return (
        <button className={`flex flex-col w-[55px] items-center rounded-[3px] border-l-4 
                            hover:bg-emerald-600 ${isToggled ? `bg-emerald-600 ${tagColorData[tag]}` : `border-transparent`}`}
                onClick={onClicked}>
            {children}
        </button>
    )
}