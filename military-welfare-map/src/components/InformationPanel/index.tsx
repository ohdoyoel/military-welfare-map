import { Marker } from "@/src/types/data"
import { LocationItem } from "../LocationItem"

interface InformationPanelProps {
    markers: Marker[]
}

export const InformationPanel = ({markers}: InformationPanelProps) => {
    const LocationList = () => {
        const result = []
        for (let i = 0; i < markers.length; i++) {
            result.push(
                <LocationItem tag={markers[i].tag} region={markers[i].region}
                            address={markers[i].address} title={markers[i].title} key={i}/>
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