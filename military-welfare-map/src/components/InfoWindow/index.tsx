import { ReactElement } from "react"
import { tagOrderBgColor, tagOrderBgGradientColor } from "@/src/types/tagColor";
import { tagIconForInfoWindow, tagLabel, tagToOrder } from "@/src/types/tagIconLabel";

interface InfoWindowProps {
    pos: {lat:number, lng:number}
    tag: number
    title: string
    address: string
    description?: string
    telno?: string
    onFire: boolean
}

export const InfoWindow = ({pos, tag, address, title, description, telno, onFire}: InfoWindowProps) => {
    return (
        <div className={`relative flex flex-col absolute -left-1/2 bottom-52 z-20`}>
            <div className="relative flex flex-row h-48 bg-white rounded-[3px] shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]">
                <div className={`flex-none w-1 h-full ${tagOrderBgColor[tagToOrder[tag]].dark} rounded-l-[3px]`}/>
                <div className={`flex-none w-20 h-full ${onFire ? tagOrderBgGradientColor[tagToOrder[tag]]: tagOrderBgColor[tagToOrder[tag]].normal} flex flex-col items-center justify-center text-white`}>
                    {tagIconForInfoWindow[tag]}
                    <p className='text-sm'>{tagLabel[tag]}</p>
                </div>
                <div className="w-fit h-full flex flex-col items-start p-2">
                    <p className='text-left text-lg font-nsb'>{title}</p>
                    <p className='text-left text-base mr-4'>{address}</p>
                    <p className='pt-1 text-left text-sm'>{telno}</p>
                    <p className='pt-2 text-left text-xs whitespace-pre-wrap'>{description}</p>
                    <a className={`absolute bottom-2 grid justify-center right-2 w-20 h-8 ${onFire ? tagOrderBgGradientColor[tagToOrder[tag]]: tagOrderBgColor[tagToOrder[tag]].normal} rounded-[3px] place-content-center`}
                        href={`https://map.kakao.com/link/to/${title},${pos.lat},${pos.lng}`} target='_blank'
                    >
                        <p className="after:content-['_↗'] text-center text-sm align-middle text-white text-pretty">길찾기</p>
                    </a>
                </div>
            </div>
            <svg fill="#FFFFFF" height="20px" width="20px" viewBox="0 0 28.769 28.769" className="absolute -bottom-[16px] self-center drop-shadow-lg">
                <path d="M28.678,5.798L14.713,23.499c-0.16,0.201-0.495,0.201-0.658,0L0.088,5.798C-0.009,5.669-0.027,5.501,0.04,5.353 C0.111,5.209,0.26,5.12,0.414,5.12H28.35c0.16,0,0.31,0.089,0.378,0.233C28.798,5.501,28.776,5.669,28.678,5.798z">
                </path>
            </svg>
        </div>
    )
}