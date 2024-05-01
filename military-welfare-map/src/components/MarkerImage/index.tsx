import { tagOrderBgColor, tagOrderBgGradientColor, tagOrderTextColor } from "@/src/types/tagColor";
import { tagIconForButton, tagIconForInfoWindow, tagIconForMarker, tagToOrder } from "@/src/types/tagIconLabel";

interface MarkerImageProps {
    // idx: number
    tag: number
    // position: {lat: number, lng: number}
    // address: string
    // title: string
    // description?: string
    // telno?: string
    onFire: boolean
    // setPos: Dispatch<SetStateAction<{lat: number, lng: number}>>
    // mapClicked: number
    // visible: boolean
}

// let tagTextColors = `
// text-red-400 text-red-500 text-red-600 
// text-pink-400 text-pink-500 text-pink-600 
// text-orange-400 text-orange-500 text-orange-600 
// text-yellow-400 text-yellow-500 text-yellow-600 
// text-lime-400 text-lime-500 text-lime-600 
// text-green-400 text-green-500 text-green-600 
// text-teal-400 text-teal-500 text-teal-600 
// text-sky-400 text-sky-500 text-sky-600 
// text-blue-400 text-blue-500 text-blue-600 
// text-indigo-400 text-indigo-500 text-indigo-600 
// text-violet-400 text-violet-500 text-violet-600 
// text-purple-400 text-purple-500 text-purple-600 
// text-purple-300 text-purple-400 text-purple-500 
// text-amber-700 text-amber-800 text-amber-900
// text-fuchsia-400 text-fuchsia-500 text-fuchsia-600 
// text-pink-400 text-pink-500 text-pink-600 
// text-rose-400 text-rose-500 text-rose-600 
// text-amber-400 text-amber-500 text-amber-600 
// text-cyan-400 text-cyan-500 text-cyan-600 
// text-gray-400 text-gray-500 text-gray-600 
// `
// let tagOrderBgGradientColors = `
// bg-gradient-to-br from-red-300 to-red-600
// bg-gradient-to-br from-pink-300 to-pink-600
// bg-gradient-to-br from-orange-300 to-orange-600
// bg-gradient-to-br from-yellow-300 to-yellow-600
// bg-gradient-to-br from-lime-300 to-lime-600
// bg-gradient-to-br from-green-300 to-green-600
// bg-gradient-to-br from-teal-300 to-teal-600
// bg-gradient-to-br from-sky-300 to-sky-600
// bg-gradient-to-br from-blue-300 to-blue-600
// bg-gradient-to-br from-indigo-300 to-indigo-600
// bg-gradient-to-br from-violet-300 to-violet-600
// bg-gradient-to-br from-purple-200 to-purple-500
// `

export const MarkerImage = ({tag, onFire }: MarkerImageProps) => {
    // const removeZindex = () => {
    //     let button = document.getElementById(`tagmarker${idx}`) as HTMLButtonElement;
    //     let customOverlay = button?.parentElement;
    //     let styleWithoutZindex = customOverlay?.getAttribute('style')?.replace('z-index: 0;', '')
    //     styleWithoutZindex && customOverlay?.setAttribute('style', styleWithoutZindex)
    // }
    
    return (
        <div
        // id={`tagmarker${idx}`}
        className={`grid ml-[7px] mt-[12px] w-[45px] h-[45px] rounded-full ${onFire ? tagOrderBgGradientColor[tagToOrder[tag]]: tagOrderBgColor[tagToOrder[tag]].normal} place-content-center rounded-[3px] text-white opacity-90 z-10`}
            onClick={() => {}}>
            {tagIconForInfoWindow[tag]}
        </div>
    )
}