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
import { Dispatch, ReactElement, SetStateAction } from 'react';
import { tagBgColor } from '@/src/types/tagColor';

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
}

interface ToggleTagButtonProps {
    icon: ReactElement<any, any>,
    label: string
}

export const iconAndLabelData: ToggleTagButtonProps[] = [
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

export const LocationItem = ({_id, setPos, setIdx, position, tag, address, title, description}: LocationItemProps) => {
    const handleOnClick = () => {
        setPos({lat: position.lat, lng: position.lng})
        setIdx(_id)    
    }

    return (
        <button onClick={handleOnClick} className="w-full h-24 scroll-mt-2 snap-start bg-white pr-2 flex flex-row">
            <div className={`flex-none w-1 h-full ${tagBgColor[tag].dark} rounded-l-[3px]`}/>
            <div className={`flex-none w-20 h-full ${tagBgColor[tag].normal} flex flex-col items-center justify-center`}>
                {iconAndLabelData[tag].icon}
                <p className='text-sm text-white'>{iconAndLabelData[tag].label}</p>
            </div>
            <div className={`grow w-0 h-full bg-white flex flex-col items-start p-2`}>
                <p className='text-lg font-nsb'>{title}</p>
                <p className='text-sm text-start truncate w-full text-gray-500'>{address}</p>
                <p className='text-xs text-start truncate w-full text-gray-400'>{description}</p>
            </div>
        </button>
    )
}