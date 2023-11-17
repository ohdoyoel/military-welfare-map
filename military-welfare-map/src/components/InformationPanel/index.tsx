import { Marker } from "@/src/types/data"

interface InformationPanelProps {
    markers: Marker[]
}

export const InformationPanel = ({markers}: InformationPanelProps) => {
    const LocationList = () => {
        const result = []
        for (let i = 0; i < markers.length; i++) {
            result.push(
                <p key={i}>{markers[i].title}</p>
            )
        }

        return result
    }


    return (
        <div className="w-full h-full bg-white px-4 flex flex-col items-start overflow-y-scroll">
            {LocationList()}
        </div>
    )
}