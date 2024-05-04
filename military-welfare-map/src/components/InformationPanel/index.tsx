import { MarkerType } from "@/src/types/data"
import { LocationItem } from "../LocationItem"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { AlertItem } from "../AlertItem"
// import InfiniteScroll from "react-infinite-scroll-component"
// import InfiniteScroll from "react-infinite-scroller"

interface InformationPanelProps {
    markers: MarkerType[]
    setPos: Dispatch<SetStateAction<{lat: number, lng: number}>>
    setIdx: Dispatch<SetStateAction<number>>
    setMarkers: Dispatch<SetStateAction<MarkerType[]>>
}

export const InformationPanel = ({markers, setPos, setIdx, setMarkers}: InformationPanelProps) => {
    
    // const itemsPerPage = 10;
    // const [hasMore, setHasMore] = useState(true);
    // const [records, setRecords] = useState(itemsPerPage);
    // const [showingMarkers, setShowingMarkers] = useState<MarkerType[]>(markers.slice(0,itemsPerPage))

    // const loadMore = () => {
    //     console.log("loadMore")
    //     if (records >= markers.length) {
    //         setHasMore(false);
    //     } else {
    //         setTimeout(() => {
    //             setRecords(records + itemsPerPage)
    //         }, 1000);
    //     }
    // };

    // useEffect(() => {
    //     console.log(records)
    //     setShowingMarkers(markers.slice(0, records))
    // }, [records])
    
    const LocationList = (posts: MarkerType[]) => {
        const result = []
        for (let i = 0; i < posts.length; i++) {
            result.push(
                <LocationItem _id={i} position={posts[i].position} tag={posts[i].tag}
                            address={posts[i].address} title={posts[i].title} key={i} setPos={setPos} setIdx={setIdx} description={posts[i].description} onFire={posts[i].onFire!}
                            star={posts[i].isStar!} setMarkers={setMarkers}/>
            )
        }
        if (result.length == 0) result.push(
            <AlertItem key={-1}>
                <p className='text-xl font-nsb text-gray-600'>표시할 장소가 없습니다!</p>
                <p className='text-lg text-gray-500'>검색 조건을 다시 설정하여 주십시오.</p>
            </AlertItem>
        )
        return result
    }

    return (
        <div className="grow bg-emerald-500 pt-1 pb-2 px-2 overflow-hidden">
            <div id="locationList" className="snap-y h-full bg-white flex flex-col items-start overflow-y-scroll divide-y divide-slate-200">
                {LocationList(markers)}
                    {/* <InfiniteScroll
                        dataLength={showingMarkers.length}
                        next={loadMore}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        >
                        {showingMarkers.map((i, index) => (
                            <LocationItem _id={index} position={i.position} tag={i.tag}
                            address={i.address} title={i.title} key={index} setPos={setPos}/>
                        ))}
                        {LocationList(showingMarkers)}
                    </InfiniteScroll> */}
            </div>
        </div>
    )
}