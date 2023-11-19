import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { MapMarker } from "react-kakao-maps-sdk"
import { InfoWindow } from "../InfoWindow"

interface MarkerProps {
    tag: number
    position: {lat: number, lng: number}
    address: string
    title: string
    description?: string
    teleno?: string
    setPos: Dispatch<SetStateAction<{lat: number, lng: number}>>
    mapClicked: number
}

export const Marker = ({tag, position, address, title, description,teleno, setPos, mapClicked}: MarkerProps) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(false)
    }, [mapClicked])
    
    return (
        <MapMarker
        position={position}
        image={{
        src: `/images/marker${tag}.png`,
        size: {width: 16, height: 16},
        options: {offset: {x: 8, y: 8}},}}
        onClick={() => {
            setPos({lat: position.lat, lng: position.lng})
            setIsVisible(true)
        }}
        // onMouseOver={() => setIsVisible(true)}
        // onMouseOut={() => setIsVisible(false)}
        >
            {isVisible && <InfoWindow tag={tag} title={title} address={address} description={description} teleno={teleno}/>}
        </MapMarker>
    )
}