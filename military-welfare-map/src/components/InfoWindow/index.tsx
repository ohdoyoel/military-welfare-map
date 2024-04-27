import { ReactElement } from "react"
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import CoffeeOutlinedIcon from '@mui/icons-material/CoffeeOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCut';
import HotTubOutlinedIcon from '@mui/icons-material/HotTubOutlined';
import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import GolfCourseOutlinedIcon from '@mui/icons-material/GolfCourseOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface InfoWindowProps {
    isVisible: boolean
    pos: {lat:number, lng:number}
    tag: number
    title: string
    address: string
    description?: string
    telno?: string
}

interface ToggleTagButtonProps {
    icon: ReactElement<any, any>,
    label: string
}

const iconAndLabelData: ToggleTagButtonProps[] = [
    {
        icon: <RestaurantOutlinedIcon className='text-3xl text-white'/>,
        label: '음식점'
    },
    {
        icon: <CoffeeOutlinedIcon className='text-3xl text-white'/>,
        label: '카페'
    },
    {
        icon: <ContentCutOutlinedIcon className='text-3xl text-white'/>,
        label: '미용실'
    },
    {
        icon: <HotTubOutlinedIcon className='text-3xl text-white'/>,
        label: '목욕탕'
    },
    {
        icon: <AttractionsOutlinedIcon className='text-3xl text-white'/>,
        label: '문화·여가'
    },
    {
        icon: <HotelOutlinedIcon className='text-3xl text-white'/>,
        label: '숙박'
    },
    {
        icon: <SportsSoccerOutlinedIcon className='text-3xl text-white'/>,
        label: '스포츠'
    },
    {
        icon: <TrainOutlinedIcon className='text-3xl text-white'/>,
        label: '교통·항공'
    },
    {
        icon: <VisibilityOutlinedIcon className='text-3xl text-white'/>,
        label: '안경점'
    },
    {
        icon: <LocalHospitalOutlinedIcon className='text-3xl text-white'/>,
        label: '병원'
    },
    {
        icon: <MilitaryTechOutlinedIcon className='text-3xl text-white'/>,
        label: '예비군'
    },
    {
        icon: <GolfCourseOutlinedIcon className='text-3xl text-white'/>,
        label: '골프장'
    },
]

export type tagColorType = {
  [key: number]: {
    light: string,
    normal: string,
    dark: string
  };
};

export const tagColorData:tagColorType = {
    0: {
        light: 'bg-red-400',
        normal: 'bg-red-500',
        dark: 'bg-red-600'
    },
    1: {
        light: 'bg-orange-400',
        normal: 'bg-orange-500',
        dark: 'bg-orange-600'
    },
    2: {
        light: 'bg-amber-400',
        normal: 'bg-amber-500',
        dark: 'bg-amber-600'
    },
    3: {
        light: 'bg-yellow-400',
        normal: 'bg-yellow-500',
        dark: 'bg-yellow-600'
    },
    4: {
        light: 'bg-lime-400',
        normal: 'bg-lime-500',
        dark: 'bg-lime-600'
    },
    5: {
        light: 'bg-green-400',
        normal: 'bg-green-500',
        dark: 'bg-green-600'
    },
    6: {
        light: 'bg-teal-400',
        normal: 'bg-teal-500',
        dark: 'bg-teal-600'
    },
    7: {
        light: 'bg-cyan-400',
        normal: 'bg-cyan-500',
        dark: 'bg-cyan-600'
    },
    8: {
        light: 'bg-sky-400',
        normal: 'bg-sky-500',
        dark: 'bg-sky-600'
    },
    9: {
        light: 'bg-blue-400',
        normal: 'bg-blue-500',
        dark: 'bg-blue-600'
    },
    10: {
        light: 'bg-indigo-400',
        normal: 'bg-indigo-500',
        dark: 'bg-indigo-600'
    },
    11: {
        light: 'bg-violet-400',
        normal: 'bg-violet-500',
        dark: 'bg-violet-600'
    },
    12: {
        light: 'bg-purple-400',
        normal: 'bg-purple-500',
        dark: 'bg-purple-600'
    },
    13: {
        light: 'bg-fuchsia-400',
        normal: 'bg-fuchsia-500',
        dark: 'bg-fuchsia-600'
    },
    14: {
        light: 'bg-pink-400',
        normal: 'bg-pink-500',
        dark: 'bg-pink-600'
    },
    15: {
        light: 'bg-rose-400',
        normal: 'bg-rose-500',
        dark: 'bg-rose-600'
    },
}

export const InfoWindow = ({pos, tag, address, title, description, telno, isVisible}: InfoWindowProps) => {
    return (
        <div className={`relative flex flex-col absolute -left-1/2 bottom-56 z-20`}>
            <div className="relative flex flex-row h-48 bg-white rounded-[3px] shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]">
                <div className={`flex-none w-1 h-full ${tagColorData[tag].dark} rounded-l-[3px]`}/>
                <div className={`flex-none w-20 h-full ${tagColorData[tag].normal} flex flex-col items-center justify-center`}>
                    {iconAndLabelData[tag].icon}
                    <p className='text-sm text-white'>{iconAndLabelData[tag].label}</p>
                </div>
                <div className="w-96 h-full flex flex-col items-start p-2">
                    <p className='text-left text-lg font-nsb'>{title}</p>
                    <p className='text-left text-base'>{address}</p>
                    <p className='pt-1 text-left text-sm'>{telno}</p>
                    <p className='pt-2 text-left text-xs whitespace-pre-wrap'>{description}</p>
                    <a className={`absolute bottom-2 grid justify-center right-2 w-20 h-8 ${tagColorData[tag].normal} rounded-[3px] place-content-center`}
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