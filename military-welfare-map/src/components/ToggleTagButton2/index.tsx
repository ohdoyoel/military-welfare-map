import { tagBgColor, tagBorderColor } from "@/src/types/tagColor";
import { useEffect } from "react";

interface ToggleTagButton2Props {
    children: React.ReactNode
    color: number
    isToggled: boolean
    onClicked: () => void
}

// let tagBgColors = `
// bg-red-400 bg-red-500 bg-red-600 
// bg-pink-400 bg-pink-500 bg-pink-600 
// bg-orange-400 bg-orange-500 bg-orange-600 
// bg-yellow-400 bg-yellow-500 bg-yellow-600 
// bg-lime-400 bg-lime-500 bg-lime-600 
// bg-green-400 bg-green-500 bg-green-600 
// bg-teal-400 bg-teal-500 bg-teal-600 
// bg-sky-400 bg-sky-500 bg-sky-600 
// bg-blue-400 bg-blue-500 bg-blue-600 
// bg-indigo-400 bg-indigo-500 bg-indigo-600 
// bg-violet-400 bg-violet-500 bg-violet-600 
// bg-purple-400 bg-purple-500 bg-purple-600 
// bg-purple-300 bg-purple-400 bg-purple-500 
// bg-amber-700 bg-amber-800 bg-amber-900
// bg-fuchsia-400 bg-fuchsia-500 bg-fuchsia-600 
// bg-pink-400 bg-pink-500 bg-pink-600 
// bg-rose-400 bg-rose-500 bg-rose-600 
// bg-amber-400 bg-amber-500 bg-amber-600 
// bg-cyan-400 bg-cyan-500 bg-cyan-600 
// bg-gray-400 bg-gray-500 bg-gray-600 
// `

// let tagBorderColors = `
// border-red-400 border-red-500 border-red-600 
// border-pink-400 border-pink-500 border-pink-600 
// border-orange-400 border-orange-500 border-orange-600 
// border-yellow-400 border-yellow-500 border-yellow-600 
// border-lime-400 border-lime-500 border-lime-600 
// border-green-400 border-green-500 border-green-600 
// border-teal-400 border-teal-500 border-teal-600 
// border-sky-400 border-sky-500 border-sky-600 
// border-blue-400 border-blue-500 border-blue-600 
// border-indigo-400 border-indigo-500 border-indigo-600 
// border-violet-400 border-violet-500 border-violet-600 
// border-purple-400 border-purple-500 border-purple-600 
// border-purple-300 border-purple-400 border-purple-500 
// border-amber-700 border-amber-800 border-amber-900
// border-fuchsia-400 border-fuchsia-500 border-fuchsia-600 
// border-pink-400 border-pink-500 border-pink-600 
// border-rose-400 border-rose-500 border-rose-600 
// border-amber-400 border-amber-500 border-amber-600 
// border-cyan-400 border-cyan-500 border-cyan-600 
// border-gray-400 border-gray-500 border-gray-600 
// `

export const ToggleTagButton2 = ({children, color, isToggled, onClicked}: ToggleTagButton2Props) => {
    return (
        <button className={`flex flex-col w-16 h-10 focus:outline-none
                            items-center place-content-center rounded-[3px] z-20
                            ${isToggled
                                ? `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] ${tagBgColor[color].normal} text-white`
                                : `shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] border-l-4 ${tagBorderColor[color].normal} bg-white text-gray-600`
                            }
                            `}

                onClick={onClicked}>
            {children}
        </button>
    )
}