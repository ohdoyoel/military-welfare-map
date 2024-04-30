import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { CustomOverlayMap } from "react-kakao-maps-sdk"
import { InfoWindow } from "../InfoWindow"
import { tagOrderBgColor, tagOrderFillColor } from "@/src/types/tagColor";
import { tagIconForMarker, tagToOrder } from "@/src/types/tagIconLabel";

interface MarkerProps {
    idx: number
    tag: number
    position: {lat: number, lng: number}
    address: string
    title: string
    description?: string
    telno?: string
    onFire?: boolean
    setPos: Dispatch<SetStateAction<{lat: number, lng: number}>>
    mapClicked: number
    visible: boolean
}

let tagFillColors = `
fill-red-400 fill-red-500 fill-red-600 
fill-pink-400 fill-pink-500 fill-pink-600 
fill-orange-400 fill-orange-500 fill-orange-600 
fill-yellow-400 fill-yellow-500 fill-yellow-600 
fill-lime-400 fill-lime-500 fill-lime-600 
fill-green-400 fill-green-500 fill-green-600 
fill-teal-400 fill-teal-500 fill-teal-600 
fill-sky-400 fill-sky-500 fill-sky-600 
fill-blue-400 fill-blue-500 fill-blue-600 
fill-indigo-400 fill-indigo-500 fill-indigo-600 
fill-violet-400 fill-violet-500 fill-violet-600 
fill-purple-400 fill-purple-500 fill-purple-600 
fill-purple-300 fill-purple-400 fill-purple-500 
fill-amber-700 fill-amber-800 fill-amber-900
fill-fuchsia-400 fill-fuchsia-500 fill-fuchsia-600 
fill-pink-400 fill-pink-500 fill-pink-600 
fill-rose-400 fill-rose-500 fill-rose-600 
fill-amber-400 fill-amber-500 fill-amber-600 
fill-cyan-400 fill-cyan-500 fill-cyan-600 
fill-gray-400 fill-gray-500 fill-gray-600 
`

export const Marker = ({idx, tag, position, address, title, description, telno, onFire, setPos, mapClicked, visible}: MarkerProps) => {
    const [isVisible, setIsVisible] = useState(false)

    const removeZindex = () => {
        let button = document.getElementById(`tagmarker${idx}`) as HTMLButtonElement;
        let customOverlay = button?.parentElement;
        let styleWithoutZindex = customOverlay?.getAttribute('style')?.replace('z-index: 0;', '')
        styleWithoutZindex && customOverlay?.setAttribute('style', styleWithoutZindex)
    }

    useEffect(() => {
        setIsVisible(visible)
    }, [visible])

    useEffect(() => {
        setIsVisible(false)
    }, [mapClicked])
    
    return (
        <CustomOverlayMap position={position} onCreate={removeZindex}>
            <button id={`tagmarker${idx}`} className={`absolute -left-[8px] grid w-8 h-8 ${!onFire ? tagOrderBgColor[tagToOrder[tag]].normal : ''} place-content-center rounded-[3px] text-white opacity-90 z-10`}
                onClick={() => {
                    setPos({lat: position.lat, lng: position.lng})
                    setIsVisible(!isVisible)
                    console.log(onFire)
                }}>
                {onFire && <svg xmlns="http://www.w3.org/2000/svg" className={`w-full h-full ${tagOrderFillColor[tagToOrder[tag]].normal}`} viewBox="0 0 16 16">
                    <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>}
                {onFire && tagIconForMarker[tag]}
                {!onFire && tagIconForMarker[tag]}
            </button>
            {isVisible && <InfoWindow tag={tag} pos={position} title={title} address={address} description={description} telno={telno}/>}
        </CustomOverlayMap>
    )
}