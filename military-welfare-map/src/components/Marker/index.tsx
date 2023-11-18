import { useState } from "react"
import { MapMarker } from "react-kakao-maps-sdk"
import { InfoWindow } from "../InfoWindow"

interface MarkerProps {
    tag: number
    position: {lat: number, lng: number}
    address: string
    title: string
    description?: string
    teleno?: string
}

export const Marker = ({tag, position, address, title, description,teleno}: MarkerProps) => {
    const [isVisible, setIsVisible] = useState(false)
    
    return (
        <MapMarker
        position={position}
        image={{
        src: `/images/marker${tag}.png`,
        size: {width: 16, height: 16},
        options: {offset: {x: 8, y: 8}},}}
        // onClick={(marker) => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}>
            {isVisible && <InfoWindow tag={tag} title={title} address={address} description={description} teleno={teleno}/>}
        </MapMarker>
    )
}