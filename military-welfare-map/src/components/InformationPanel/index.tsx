import { MarkerType } from "@/src/types/data"
import { LocationItem } from "../LocationItem"
import { Dispatch, SetStateAction, useState } from "react"
// import InfiniteScroll from "react-infinite-scroller"

interface InformationPanelProps {
    markers: MarkerType[]
    setPos: Dispatch<SetStateAction<{lat: number, lng: number}>>
}

export const InformationPanel = ({markers, setPos}: InformationPanelProps) => {
    
    // const itemsPerPage = 10;
    // const [hasMore, setHasMore] = useState(true);
    // const [records, setRecords] = useState(itemsPerPage);
    // const loadMore = () => {
    //     if (records >= markers.length) {
    //         setHasMore(false);
    //     } else {
    //     setTimeout(() => {
    //         setRecords(records + itemsPerPage);
    //     }, 1000);
    //     }
    // };
    
    const LocationList = (posts: MarkerType[]) => {
        const result = []
        for (let i = 0; i < posts.length; i++) {
            result.push(
                <LocationItem position={posts[i].position} tag={posts[i].tag}
                            address={posts[i].address} title={posts[i].title} key={i} setPos={setPos}/>
            )
        }

        return result
    }


    return (
        <div className="w-full h-full bg-white px-4 py-2 flex flex-col items-start overflow-y-scroll">
            <div className="w-full h-full">
            {LocationList(markers)}
            </div>
        </div>
    )
}