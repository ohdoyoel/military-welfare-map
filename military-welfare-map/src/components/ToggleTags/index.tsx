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

interface ToggleTagsProps {
}

interface TagToggleButton {
    icon: string,
    label: string
}

export const ToggleTags = () => {
        return (
        <div className="w-full h-16 bg-[#3396ff] px-4 flex items-center">
            <div className='w-full h-full flex flex-row justify-between flex-nowrap overflow-auto'>
            <button className='flex flex-col w-24 items-center text-xs text-white'>
                <RestaurantOutlinedIcon className='text-lg'/>
                음식점
            </button>
            <button className='flex flex-col w-24 items-center text-xs text-white'>
                <CoffeeOutlinedIcon className='text-lg'/>
                카페
            </button>
            <button className='flex flex-col w-24 items-center text-xs text-white'>
                <ContentCutOutlinedIcon className='text-lg'/>
                미용실
            </button>
            <button className='flex flex-col w-24 items-center text-xs text-white'>
                <HotTubOutlinedIcon className='text-lg'/>
                목욕탕
            </button>
            <button className='flex flex-col w-24 items-center text-xs text-white'>
                <AttractionsOutlinedIcon className='text-lg'/>
                문화·여가
            </button>
            <button className='flex flex-col w-24 items-center text-xs text-white'>
                <HotelOutlinedIcon className='text-lg'/>
                숙박
            </button>
            <button className='flex flex-col w-24 items-center text-xs text-white'>
                <SportsSoccerOutlinedIcon className='text-lg'/>
                스포츠
            </button>
            <button className='flex flex-col w-24 items-center text-xs text-white'>
                <TrainOutlinedIcon className='text-lg'/>
                교통·항공
            </button>
            <button className='flex flex-col w-24 items-center text-xs text-white'>
                <VisibilityOutlinedIcon className='text-lg'/>
                안경점
            </button>
            <button className='flex flex-col w-24 items-center text-xs text-white'>
                <LocalHospitalOutlinedIcon className='text-lg'/>
                병원
            </button>
            <button className='flex flex-col w-24 items-center text-xs text-white'>
                <MilitaryTechOutlinedIcon className='text-lg'/>
                예비군
            </button>
            <button className='flex flex-col w-24 items-center text-xs text-white'>
                <GolfCourseOutlinedIcon className='text-lg'/>
                골프장
            </button>

            </div>
            

        </div>
    )
}