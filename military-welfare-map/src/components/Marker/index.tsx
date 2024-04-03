import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { MapMarker } from "react-kakao-maps-sdk"
import { InfoWindow } from "../InfoWindow"

interface MarkerProps {
    _id: number
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

export const Marker = ({_id, tag, position, address, title, description, telno, setPos, mapClicked, visible, setIdx}: MarkerProps) => {
    console.log(description)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(visible)
    }, [visible])

    useEffect(() => {
        setIsVisible(false)
        // setIdx(-1)
    }, [mapClicked])
    
    return (
        <MapMarker
        position={position}
        image={{
        src: `/images/marker${tag}.png`,
        size: {width: 12, height: 12},
        options: {offset: {x: 6, y: 6}},}}
        onClick={() => {
            setPos({lat: position.lat, lng: position.lng})
            setIsVisible(true)
        }}
        >
            {isVisible && <InfoWindow _id={_id} tag={tag} title={title} address={address} description={description} telno={telno}/>}
        </MapMarker>
    )
}