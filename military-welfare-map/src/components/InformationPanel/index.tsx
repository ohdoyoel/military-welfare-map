import { MarkerType } from "@/src/types/data"
import { LocationItem } from "../LocationItem"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { AlertItem } from "../AlertItem"
import AutorenewIcon from '@mui/icons-material/Autorenew';
// import InfiniteScroll from "react-infinite-scroll-component"
// import InfiniteScroll from "react-infinite-scroller"

interface InformationPanelProps {
    markers: MarkerType[]
    setPos: Dispatch<SetStateAction<{lat: number, lng: number}>>
    setIdx: Dispatch<SetStateAction<number>>
    setMarkers: Dispatch<SetStateAction<MarkerType[]>>
    setLevel: Dispatch<SetStateAction<number>>
}

export const InformationPanel = ({markers, setPos, setIdx, setMarkers, setLevel}: InformationPanelProps) => {
    const [page, setPage] = useState(1)
    
    useEffect(() => {
        let locList =  document.getElementById('locationList') as HTMLDivElement
        locList.addEventListener('scrollend', () => {
            if ((locList.scrollTop + locList.clientHeight) >= locList.scrollHeight) {
                setPage((page) => page+1)
                locList.scrollTo(0, locList.scrollHeight)
            }
        })
    }, [])

    useEffect(() => {
        let locList =  document.getElementById('locationList') as HTMLDivElement
        locList.scrollTo(0,0)
        setPage(1)
    }, [markers])
    
    const LocationList = (posts: MarkerType[]) => {
        const result = []
        let record = Math.min(10*page, posts.length)

        for (let i = 0; i < record; i++) {
            result.push(
                <LocationItem _id={i} position={posts[i].position} tag={posts[i].tag}
                            address={posts[i].address} title={posts[i].title} key={i} setPos={setPos} setIdx={setIdx} description={posts[i].description} onFire={posts[i].onFire!}
                            star={posts[i].isStar!} setMarkers={setMarkers} setLevel={setLevel}/>
            )
        }
        if (record != posts.length) {
            result.push(
                <div className="w-full h-fit scroll-mt-2 snap-start bg-white flex flex-row justify-center" key={posts.length}>
                    <AutorenewIcon className="animate-spin m-4 text-3xl text-gray-600"/>
                </div>
            )
        }
        if (record == 0) {
            result.push(
                <AlertItem key={-1}>
                    <p className='text-xl font-nsb text-gray-600'>표시할 장소가 없습니다!</p>
                    <p className='text-lg text-gray-500'>검색 조건을 다시 설정하여 주십시오.</p>
                </AlertItem>
            )
        }
        
        return result
    }

    return (
        <div className="grow bg-emerald-500 pt-1 pb-2 px-2 overflow-hidden">
            <div id="locationList" className="snap-y h-full bg-white flex flex-col items-start overflow-y-scroll divide-y divide-slate-200">
                {LocationList(markers)}
            </div>
        </div>
    )
}