import { useEffect } from "react";

interface ToggleTagButton2Props {
    children: React.ReactNode
    tag: number
    isToggled: boolean
    onClicked: () => void
}

type tagColorType = {
  [key: number]: string;
};

export const tagColorData: tagColorType = {
    0: '-red-500',
    1: '-orange-500',
    // 2: '-amber-500',
    2: '-yellow-500',
    3: '-lime-500',
    4: '-green-500',
    5: '-teal-500',
    // 7: '-cyan-500',
    6: '-sky-500',
    7: '-blue-500',
    8: '-indigo-500',
    9: '-violet-500',
    10: '-purple-500',
    11: '-fuchsia-500',
    12: '-pink-500',
    13: '-rose-500',
    16: '-gray-500',
}

export const ToggleTagButton2 = ({children, tag, isToggled, onClicked}: ToggleTagButton2Props) => {

    return (
        <button className={`flex flex-col w-16 h-10 focus:outline-none
                            items-center place-content-center rounded-[3px] z-20
                            ${isToggled
                                ? `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] bg${tagColorData[tag]} text-white`
                                : `shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] border-l-4 border${tagColorData[tag]} bg-white text-gray-600`
                            }
                            `}

                onClick={onClicked}>
            {children}
        </button>
    )
}