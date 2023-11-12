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
import { useState } from 'react';

interface ToggleTagsProps {
}

interface TagToggleButton {
    icon: string,
    label: string
}

export const ToggleTags = () => {
    // const [r, setR] = useState(true)
    // const [c, setC] = useState(true)
    // const [h, setH] = useState(true)
    // const [b, setB] = useState(true)
    // const [a, setA] = useState(true)
    // const [h, setH] = useState(true)
    // const [s, setS] = useState(true)
    // const [t, setT] = useState(true)
    // const [g, setG] = useState(true)
    // const [h, setH] = useState(true)
    // const [m, setM] = useState(true)
    // const [g, setG] = useState(true)

    return (
        <div className="w-full h-16 bg-[#3396ff] px-4 flex items-center">
            <div className='w-full h-14 grid grid-cols-12 gap-12 content-center overflow-x-auto'>
                <button className='flex flex-col w-[50px] items-center text-xs text-white rounded-[3px] hover:bg-black'>
                    <RestaurantOutlinedIcon className='text-lg'/>
                    음식점
                </button>
                <button className='flex flex-col w-[50px] items-center text-xs text-white rounded-[3px] hover:bg-black'>
                    <CoffeeOutlinedIcon className='text-lg'/>
                    카페
                </button>
                <button className='flex flex-col w-[50px] items-center text-xs text-white rounded-[3px] hover:bg-black'>
                    <ContentCutOutlinedIcon className='text-lg'/>
                    미용실
                </button>
                <button className='flex flex-col w-[50px] items-center text-xs text-white rounded-[3px] hover:bg-black'>
                    <HotTubOutlinedIcon className='text-lg'/>
                    목욕탕
                </button>
                <button className='flex flex-col w-[50px] items-center text-xs text-white rounded-[3px] hover:bg-black'>
                    <AttractionsOutlinedIcon className='text-lg'/>
                    문화·여가
                </button>
                <button className='flex flex-col w-[50px] items-center text-xs text-white rounded-[3px] hover:bg-black'>
                    <HotelOutlinedIcon className='text-lg'/>
                    숙박
                </button>
                <button className='flex flex-col w-[50px] items-center text-xs text-white rounded-[3px] hover:bg-black'>
                    <SportsSoccerOutlinedIcon className='text-lg'/>
                    스포츠
                </button>
                <button className='flex flex-col w-[50px] items-center text-xs text-white rounded-[3px] hover:bg-black'>
                    <TrainOutlinedIcon className='text-lg'/>
                    교통·항공
                </button>
                <button className='flex flex-col w-[50px] items-center text-xs text-white rounded-[3px] hover:bg-black'>
                    <VisibilityOutlinedIcon className='text-lg'/>
                    안경점
                </button>
                <button className='flex flex-col w-[50px] items-center text-xs text-white rounded-[3px] hover:bg-black'>
                    <LocalHospitalOutlinedIcon className='text-lg'/>
                    병원
                </button>
                <button className='flex flex-col w-[50px] items-center text-xs text-white rounded-[3px] hover:bg-black'>
                    <MilitaryTechOutlinedIcon className='text-lg'/>
                    예비군
                </button>
                <button className='flex flex-col w-[50px] items-center text-xs text-white rounded-[3px] hover:bg-black'>
                    <GolfCourseOutlinedIcon className='text-lg'/>
                    골프장
                </button>
            </div>
        </div>
    )
}