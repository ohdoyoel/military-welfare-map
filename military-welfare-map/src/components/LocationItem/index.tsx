import { Dispatch, SetStateAction } from 'react';
import { tagOrderBgColor, tagOrderBgGradientColor } from '@/src/types/tagColor';
import { tagIconForInfoWindow, tagLabel, tagToOrder } from '@/src/types/tagIconLabel';

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
}

export const LocationItem = ({_id, setPos, setIdx, position, tag, address, title, description, onFire}: LocationItemProps) => {
    const handleOnClick = () => {
        setPos({lat: position.lat, lng: position.lng})
        setIdx(_id)    
    }

    return (
        <button onClick={handleOnClick} className="w-full h-fit scroll-mt-2 snap-start bg-white pr-2 flex flex-row">
            <div className={`flex-none w-1 h-full ${tagOrderBgColor[tagToOrder[tag]].dark} rounded-l-[3px]`}/>
            <div className={`flex-none w-20 h-full ${onFire ? tagOrderBgGradientColor[tagToOrder[tag]]: tagOrderBgColor[tagToOrder[tag]].normal} flex flex-col items-center justify-center text-white`}>
                {tagIconForInfoWindow[tag]}
                <p className='text-sm'>{tagLabel[tag]}</p>
            </div>
            <div className={`grow w-0 h-full bg-white flex flex-col items-start p-2`}>
                <p className='text-lg text-start font-nsb'>{title}</p>
                <p className='text-sm text-start truncate w-full text-gray-500'>{address}</p>
                <p className='text-xs text-start truncate w-full text-gray-400'>{description}</p>
            </div>
        </button>
    )
}