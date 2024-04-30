import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { CustomOverlayMap } from "react-kakao-maps-sdk"
import { InfoWindow } from "../InfoWindow"
import { tagOrderBgColor } from "@/src/types/tagColor";
import { tagIconForMarker, tagToOrder } from "@/src/types/tagIconLabel";

interface MarkerProps {
    idx: number
    tag: number
    position: {lat: number, lng: number}
    address: string
    title: string
    description?: string
    telno?: string
    setPos: Dispatch<SetStateAction<{lat: number, lng: number}>>
    mapClicked: number
    visible: boolean
    setIdx: Dispatch<SetStateAction<number>>
}

export const Marker = ({idx, tag, position, address, title, description, telno, setPos, mapClicked, visible, setIdx}: MarkerProps) => {
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
            <button id={`tagmarker${idx}`} className={`absolute -left-[8px] grid w-6 h-6 ${tagOrderBgColor[tagToOrder[tag]].normal} place-content-center rounded-[3px] text-white opacity-90 z-10`}
                onClick={() => {
                    setPos({lat: position.lat, lng: position.lng})
                    setIsVisible(!isVisible)
                }}>
                {tagIconForMarker[tag]}
            </button>
            {isVisible && <InfoWindow tag={tag} pos={position} title={title} address={address} description={description} telno={telno}/>}
        </CustomOverlayMap>
    )
}