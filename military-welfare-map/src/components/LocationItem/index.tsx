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
import { ReactElement } from 'react';

interface LocationItemProps {
    tag: number,
    region: number,
    address: string,
    title: string
}

interface ToggleTagButtonProps {
    icon: ReactElement<any, any>,
    label: string
}

const iconAndLabelData: ToggleTagButtonProps[] = [
    {
        icon: <RestaurantOutlinedIcon className='text-lg text-white'/>,
        label: '음식점'
    },
    {
        icon: <CoffeeOutlinedIcon className='text-lg text-white'/>,
        label: '카페'
    },
    {
        icon: <ContentCutOutlinedIcon className='text-lg text-white'/>,
        label: '미용실'
    },
    {
        icon: <HotTubOutlinedIcon className='text-lg text-white'/>,
        label: '목욕탕'
    },
    {
        icon: <AttractionsOutlinedIcon className='text-lg text-white'/>,
        label: '문화·여가'
    },
    {
        icon: <HotelOutlinedIcon className='text-lg text-white'/>,
        label: '숙박'
    },
    {
        icon: <SportsSoccerOutlinedIcon className='text-lg text-white'/>,
        label: '스포츠'
    },
    {
        icon: <TrainOutlinedIcon className='text-lg text-white'/>,
        label: '교통·항공'
    },
    {
        icon: <VisibilityOutlinedIcon className='text-lg text-white'/>,
        label: '안경점'
    },
    {
        icon: <LocalHospitalOutlinedIcon className='text-lg text-white'/>,
        label: '병원'
    },
    {
        icon: <MilitaryTechOutlinedIcon className='text-lg text-white'/>,
        label: '예비군'
    },
    {
        icon: <GolfCourseOutlinedIcon className='text-lg text-white'/>,
        label: '골프장'
    },
]

export const LocationItem = ({tag, region, address, title}: LocationItemProps) => {

    return (
        <button className="w-full h-20 bg-white pr-4 mt-2 rounded-r-[3px] shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]
                        flex flex-row">
            <div className="w-20 h-full bg-black flex items-center">
                {iconAndLabelData[tag].icon}
                {iconAndLabelData[tag].label}
            </div>
        </button>
    )
}