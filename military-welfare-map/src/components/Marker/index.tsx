import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk"
import { InfoWindow, tagColorData } from "../InfoWindow"

interface MarkerProps {
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

export const Marker = ({tag, position, address, title, description, telno, setPos, mapClicked, visible, setIdx}: MarkerProps) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(visible)
    }, [visible])

    useEffect(() => {
        setIsVisible(false)
        // setIdx(-1)
    }, [mapClicked])
    
    return (
        <CustomOverlayMap position={position}>
            <div className={`w-8 h-8 ${tagColorData[tag].normal}`}
                onClick={() => {
                setPos({lat: position.lat, lng: position.lng})
                setIsVisible(true)
            }}>
                {tag}
            </div>
            {isVisible && <InfoWindow tag={tag} pos={position} title={title} address={address} description={description} telno={telno}/>}
        </CustomOverlayMap>
    )
}