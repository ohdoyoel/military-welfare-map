import { MarkerType } from "@/src/types/data"
import { LocationItem } from "../LocationItem"
import { Dispatch, SetStateAction } from "react"

interface InformationPanelProps {
    markers: MarkerType[]
    setPos: Dispatch<SetStateAction<{lat: number, lng: number}>>
}

export const InformationPanel = ({markers, setPos}: InformationPanelProps) => {
    const LocationList = () => {
        const result = []
        for (let i = 0; i < markers.length; i++) {
            result.push(
                <LocationItem position={markers[i].position}tag={markers[i].tag}
                            address={markers[i].address} title={markers[i].title} key={i} setPos={setPos}/>
            )
        }

        return result
    }


    return (
        <div className="w-full h-full bg-white px-4 py-2 flex flex-col items-start overflow-y-scroll">
            {LocationList()}
        </div>
    )
}