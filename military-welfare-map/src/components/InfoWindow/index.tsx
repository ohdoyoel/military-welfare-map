import { Dispatch, ReactElement, SetStateAction, useEffect, useRef } from "react"
import { tagOrderBgColor, tagOrderBgGradientColor, tagOrderTextColor } from "@/src/types/tagColor";
import { tagIconForInfoWindow, tagLabel, tagToOrder } from "@/src/types/tagIconLabel";
import { MarkerType } from "@/src/types/data";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface InfoWindowProps {
    pos: {lat:number, lng:number}
    tag: number
    title: string
    address: string
    description?: string
    telno?: string
    onFire: boolean
    star: boolean
    setMarkers: Dispatch<SetStateAction<MarkerType[]>>
}

export const InfoWindow = ({pos, tag, address, title, description, telno, onFire, star, setMarkers}: InfoWindowProps) => {
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
    const imgSrcRef = useRef('')

    useEffect(() => {
        if (description?.includes('@img(')) {
            imgSrcRef.current = description.substring(description.indexOf('(') + 1, description.lastIndexOf(')'))
        }
    }, [])

    return (
        <div className={`relative flex flex-col absolute -left-1/2 ${onFire ? `ml-8` : `ml-6`} bottom-[236px] z-40`}>
            <div className="flex flex-row h-48 bg-white rounded-[3px] shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]">
                <div className={`flex-none w-1 h-full ${tagOrderBgColor[tagToOrder[tag]].dark} rounded-l-[3px]`}/>
                <div className={`flex-none w-20 h-full ${onFire ? tagOrderBgGradientColor[tagToOrder[tag]]: tagOrderBgColor[tagToOrder[tag]].normal} flex flex-col items-center justify-center text-white`}>
                    {tagIconForInfoWindow[tag]}
                    <p className='text-sm'>{tagLabel[tag]}</p>
                </div>
                <div className="relative w-fit h-full flex flex-col items-start p-2" style={{minWidth: '320px'}}>
                    <p className='text-left text-lg font-nsb'>{title}</p>
                    <p className='text-left text-base mr-4'>{address}</p>
                    <p className='pt-1 text-left text-sm'>{telno}</p>
                    <p className='pt-2 text-left text-xs whitespace-pre-wrap'>{imgSrcRef.current ? description?.substring(description.lastIndexOf(')')+1) : description}</p>                    
                    <button className={`absolute bottom-2 right-24 w-8 h-8 grid place-content-center`} onClick={() => starToggle(title)}>
                        {star ? <FavoriteIcon className={`text-lg ${tagOrderTextColor[tagToOrder[tag]].normal}`}/> : <FavoriteBorderIcon className={`text-lg ${tagOrderTextColor[tagToOrder[tag]].normal}`}/>}
                    </button>
                    <a className={`absolute bottom-2 right-2 grid justify-center w-20 h-8 ${onFire ? tagOrderBgGradientColor[tagToOrder[tag]]: tagOrderBgColor[tagToOrder[tag]].normal} rounded-[3px] place-content-center`}
                        href={`https://map.kakao.com/link/to/${title},${pos.lat},${pos.lng}`} target='_blank'>
                        <p className="after:content-['_↗'] text-center text-sm align-middle text-white text-pretty">길찾기</p>
                    </a>
                </div>
                {imgSrcRef.current &&
                    <img className="cursor-pointer h-full p-2 bg-slate-200 rounded-[3px] shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]" src={imgSrcRef.current} alt={imgSrcRef.current}
                        onClick={() => window.open(imgSrcRef.current, '_blank')}/>
                }
            </div>
            <svg fill="#FFFFFF" height="20px" width="20px" viewBox="0 0 28.769 28.769" className="absolute -bottom-[16px] self-center drop-shadow-lg">
                <path d="M28.678,5.798L14.713,23.499c-0.16,0.201-0.495,0.201-0.658,0L0.088,5.798C-0.009,5.669-0.027,5.501,0.04,5.353 C0.111,5.209,0.26,5.12,0.414,5.12H28.35c0.16,0,0.31,0.089,0.378,0.233C28.798,5.501,28.776,5.669,28.678,5.798z">
                </path>
            </svg>
        </div>
    )
}