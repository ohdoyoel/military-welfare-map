import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { tagOrderBgColor, tagOrderBgGradientColor, tagOrderTextColor } from '@/src/types/tagColor';
import { tagIconForInfoWindow, tagLabel, tagToOrder } from '@/src/types/tagIconLabel';
import { MarkerType } from '@/src/types/data';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface LocationItemProps {
    _id: number
    setPos: Dispatch<SetStateAction<{lat: number, lng: number}>>
    setIdx: Dispatch<SetStateAction<number>>
    position: {
        lat: number,
        lng: number
    }
    tag: number,
    address: string,
    title: string,
    description? : string
    onFire: boolean
    star: boolean
    setMarkers: Dispatch<SetStateAction<MarkerType[]>>
    setLevel: Dispatch<SetStateAction<number>>
}

export const LocationItem = ({_id, setPos, setIdx, position, tag, address, title, description, onFire, star, setMarkers, setLevel}: LocationItemProps) => {
    const imgSrcRef = useRef('')
    const handleOnClick = () => {
        setLevel(3)
        setPos(position)
        setIdx(_id)  
    }
    const starToggle = (title: string) => {
        setMarkers((markers) =>
            [...markers].map((marker) => {
                if (marker.title == title) {
                    marker.isStar = !marker.isStar
                    return marker
                }
                return marker
        })
        )
    }
    useEffect(() => {
        if (description?.includes('@img(')) {
            imgSrcRef.current = description.substring(description.indexOf('(') + 1, description.lastIndexOf(')'))
        }
    }, [])

    return (
        <button onClick={handleOnClick} className="w-full h-fit scroll-mt-2 snap-start bg-white flex flex-row">
            <div className={`flex-none w-1 h-full ${tagOrderBgColor[tagToOrder[tag]].dark} rounded-l-[3px]`}/>
            <div className={`flex-none w-20 h-full ${onFire ? tagOrderBgGradientColor[tagToOrder[tag]]: tagOrderBgColor[tagToOrder[tag]].normal} flex flex-col items-center justify-center text-white`}>
                {tagIconForInfoWindow[tag]}
                <p className='text-sm'>{tagLabel[tag]}</p>
            </div>
            <div className={`grow w-0 h-full bg-white flex flex-col items-start p-2`}>
                <p className='text-lg text-start font-nsb leading-5'>{title}</p>
                <p className='text-sm text-start truncate w-full text-gray-500'>{address}</p>
                <p className='text-xs text-start truncate w-full text-gray-400'>{imgSrcRef.current ? description?.substring(description.lastIndexOf(')')+1) : description}</p>
            </div>
            <div className={`flex-none w-10 h-full grid place-content-center ${tagOrderTextColor[tagToOrder[tag]].normal}`} onClick={() => starToggle(title)}>
                    {star ? <FavoriteIcon className='text-lg'/> : <FavoriteBorderIcon className='text-lg'/>}
            </div>
        </button>
    )
}