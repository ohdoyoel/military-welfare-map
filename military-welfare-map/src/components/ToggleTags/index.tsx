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
import React, { ReactElement, useState } from 'react';
import { ToggleTagButton } from '../ToggleTagButton';

interface ToggleTagsProps {
}

interface ToggleTagButtonProps {
    icon: ReactElement<any, any>,
    label: string
}

const NUM_OF_TAGS = 12

export const ToggleTags = () => {
    const [isToggled, setIsToggled] = useState(Array.from({length: NUM_OF_TAGS}, () => false))

    const toggleTagButtonList = () => {
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

        const result = []
        for (let i = 0; i < iconAndLabelData.length; i++) {
            result.push(
                <ToggleTagButton onClicked={() => setIsToggled(prevState => prevState.map((item, idx) => idx === i ? !item : item))} isToggled={isToggled[i]} label={iconAndLabelData[i].label} key={i}>
                    {iconAndLabelData[i].icon}
                </ToggleTagButton>
            )
        }

        return result
    }


    return (
        <div className="w-full h-16 bg-emerald-500 px-4 flex items-center">
            <div className='w-full h-14 grid grid-cols-12 gap-14 content-center overflow-x-auto'>
                {toggleTagButtonList()}
            </div>
        </div>
    )
}