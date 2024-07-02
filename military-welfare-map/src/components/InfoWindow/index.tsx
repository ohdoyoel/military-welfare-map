import { Dispatch, ReactElement, SetStateAction, useEffect, useRef, useState } from "react"
import { tagOrderBgColor, tagOrderBgGradientColor, tagOrderBorderColor, tagOrderTextColor } from "@/src/types/tagColor";
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
    const [imgSrc, setImgSrc] = useState('')

    useEffect(() => {
        if (description?.includes('@img(')) {
            setImgSrc(description.substring(description.indexOf('(') + 1, description.lastIndexOf(')')))
        }
    }, [])

    return (
        <div className={`relative cursor-default flex flex-col items-center z-40  ${onFire ? '-mt-[240px] -ml-[202px] sm:-ml-[370px]' : '-mt-[236px] -ml-[202px]'} `}>
            <div className="flex flex-row h-48 w-4/5 sm:w-auto bg-white rounded-[3px] shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]">
                <div className={`flex-none w-1 h-full ${tagOrderBgColor[tagToOrder[tag]].dark} rounded-l-[3px]`}/>
                <div className={`hidden sm:flex w-20 h-full ${onFire ? tagOrderBgGradientColor[tagToOrder[tag]]: tagOrderBgColor[tagToOrder[tag]].normal} flex-col items-center justify-center text-white`}>
                    {tagIconForInfoWindow[tag]}
                    <p className='text-sm'>{tagLabel[tag]}</p>
                </div>
                <div className="relative w-full sm:w-fit h-full flex flex-col items-start p-3 pb-10" style={{minWidth: '400px', maxWidth: '600px'}}>
                    <p className='text-left text-lg font-nsb whitespace-pre-wrap leading-5'>{title}</p>
                    <p className='pt-1 text-left text-base mr-4 whitespace-pre-wrap leading-5'>{address}</p>
                    <p className='pt-1 text-left text-sm'>{telno}</p>
                    <p className='pt-2 w-full h-full text-left text-xs whitespace-pre-wrap'>{imgSrc ? description?.substring(description.lastIndexOf(')')+1) : description}</p>                    
                    <button className={`absolute bottom-2 right-[172px] sm:right-24 w-8 h-8 grid place-content-center`} onClick={() => starToggle(title)}>
                        {star ? <FavoriteIcon className={`text-lg ${tagOrderTextColor[tagToOrder[tag]].normal}`}/> : <FavoriteBorderIcon className={`text-lg ${tagOrderTextColor[tagToOrder[tag]].normal}`}/>}
                    </button>
                    <a className={`absolute bottom-2 right-[88px] sm:right-2 grid justify-center w-20 h-8 ${onFire ? tagOrderBgGradientColor[tagToOrder[tag]]: tagOrderBgColor[tagToOrder[tag]].normal} rounded-[3px] place-content-center`}
                        href={`https://map.kakao.com/link/to/${title},${pos.lat},${pos.lng}`} target='_blank'>
                        <p className="after:content-['_↗'] text-center text-sm align-middle text-white text-pretty">길찾기</p>
                    </a>
                </div>
                {imgSrc &&
                    <img className="cursor-pointer h-full p-2 bg-slate-200 rounded-[3px] shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]" src={imgSrc} alt={'약도'}
                        onClick={() => window.open(imgSrc, '_blank')}/>
                }
                {onFire && <a href="" className={`border-4 ${tagOrderBorderColor[tagToOrder[tag]].light} hidden sm:flex bg-slate-200 w-96 shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] rounded-[3px] items-center justify-center`}>
                    <p className="text-4xl font-nse text-slate-100 whitespace-pre-line text-center">This Is Advertising</p>
                </a>}
            </div>
            <div className={`absolute ${onFire ? `sm:left-[360px]` : `sm:left-[192px]`} -bottom-[12px]`} style={{width:'22px', height: '12px', background: 'url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png)'}}/>
        </div>
    )
}