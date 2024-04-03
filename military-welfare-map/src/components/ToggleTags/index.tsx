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
import React, { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';
import { ToggleTagButton } from '../ToggleTagButton';

interface ToggleTagsProps {
    setToggled: Dispatch<SetStateAction<boolean[]>>
}

interface ToggleTagButtonProps {
    icon: ReactElement<any, any>,
    label: ReactElement<any, any>
}

const NUM_OF_TAGS = 12

const iconAndLabelData: ToggleTagButtonProps[] = [
    {
        icon: <RestaurantOutlinedIcon className='text-lg text-white'/>,
        label: <p className='text-white text-xs'>음식점</p>
    },
    {
        icon: <CoffeeOutlinedIcon className='text-lg text-white'/>,
        label: <p className='text-white text-xs'>카페</p>
    },
    {
        icon: <ContentCutOutlinedIcon className='text-lg text-white'/>,
        label: <p className='text-white text-xs'>미용실</p>
    },
    {
        icon: <HotTubOutlinedIcon className='text-lg text-white'/>,
        label: <p className='text-white text-xs'>목욕탕</p>
    },
    {
        icon: <AttractionsOutlinedIcon className='text-lg text-white'/>,
        label: <p className='text-white text-xs'>문화·여가</p>
    },
    {
        icon: <HotelOutlinedIcon className='text-lg text-white'/>,
        label: <p className='text-white text-xs'>숙박</p>
    },
    {
        icon: <SportsSoccerOutlinedIcon className='text-lg text-white'/>,
        label: <p className='text-white text-xs'>스포츠</p>
    },
    {
        icon: <TrainOutlinedIcon className='text-lg text-white'/>,
        label: <p className='text-white text-xs'>교통·항공</p>
    },
    {
        icon: <VisibilityOutlinedIcon className='text-lg text-white'/>,
        label: <p className='text-white text-xs'>안경점</p>
    },
    {
        icon: <LocalHospitalOutlinedIcon className='text-lg text-white'/>,
        label: <p className='text-white text-xs'>병원</p>
    },
    {
        icon: <MilitaryTechOutlinedIcon className='text-lg text-white'/>,
        label: <p className='text-white text-xs'>예비군</p>
    },
    {
        icon: <GolfCourseOutlinedIcon className='text-lg text-white'/>,
        label: <p className='text-white text-xs'>골프장</p>
    },
]

export const ToggleTags = ({setToggled}: ToggleTagsProps) => {
    const [isEntireToggled, setIsEntireToggled] = useState<boolean|undefined>()
    const [isToggled, setIsToggled] = useState([true, true, true, true, true, true, true, true, false, false, false, false,])
    
    useEffect(() => {
        isEntireToggled!=undefined && setIsToggled(Array.from({length: NUM_OF_TAGS}, () => isEntireToggled))
    }, [isEntireToggled])

    const toggleTagButtonList = () => {
        const result = []
        result.push(
            <ToggleTagButton onClicked={() => setIsEntireToggled(!isEntireToggled ? true : !isEntireToggled)} tag={16} isToggled={!isEntireToggled ? false : isEntireToggled} key={16}>
                <p className='text-white text-xs'>전체</p>
            </ToggleTagButton>
        )
        for (let i = 0; i < iconAndLabelData.length; i++) {
            result.push(
                <ToggleTagButton onClicked={() => setIsToggled(prevState => prevState.map((item, idx) => idx === i ? !item : item))} tag={i} isToggled={isToggled[i]} key={i}>
                    {iconAndLabelData[i].icon}
                    {iconAndLabelData[i].label}
                </ToggleTagButton>
            )
        }

        return result
    }

    useEffect(() => {
        setToggled(isToggled)
    }, [isToggled])


    return (
        <div className="w-full h-16 bg-emerald-500 px-4 flex items-center py-1">
            <div className='w-full h-full grid grid-cols-13 gap-14 content-center overflow-x-auto'>
                {toggleTagButtonList()}
            </div>
        </div>
    )
}