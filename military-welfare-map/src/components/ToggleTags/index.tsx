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
    toggled: boolean[]
    setToggled: Dispatch<SetStateAction<boolean[]>>
}

interface ToggleTagButtonProps {
    icon: ReactElement<any, any>,
    label: ReactElement<any, any>
}

const NUM_OF_TAGS = 12

const iconAndLabelData: ToggleTagButtonProps[] = [
    {
        icon: <RestaurantOutlinedIcon className='text-lg '/>,
        label: <p className=' text-xs'>음식점</p>
    },
    {
        icon: <CoffeeOutlinedIcon className='text-lg '/>,
        label: <p className=' text-xs'>카페</p>
    },
    {
        icon: <ContentCutOutlinedIcon className='text-lg '/>,
        label: <p className=' text-xs'>미용실</p>
    },
    {
        icon: <HotTubOutlinedIcon className='text-lg '/>,
        label: <p className=' text-xs'>목욕탕</p>
    },
    {
        icon: <AttractionsOutlinedIcon className='text-lg '/>,
        label: <p className=' text-xs'>문화·여가</p>
    },
    {
        icon: <HotelOutlinedIcon className='text-lg '/>,
        label: <p className=' text-xs'>숙박</p>
    },
    {
        icon: <SportsSoccerOutlinedIcon className='text-lg '/>,
        label: <p className=' text-xs'>스포츠</p>
    },
    {
        icon: <TrainOutlinedIcon className='text-lg '/>,
        label: <p className=' text-xs'>교통·항공</p>
    },
    {
        icon: <VisibilityOutlinedIcon className='text-lg '/>,
        label: <p className=' text-xs'>안경점</p>
    },
    {
        icon: <LocalHospitalOutlinedIcon className='text-lg '/>,
        label: <p className=' text-xs'>병원</p>
    },
    {
        icon: <MilitaryTechOutlinedIcon className='text-lg '/>,
        label: <p className=' text-xs'>예비군</p>
    },
    {
        icon: <GolfCourseOutlinedIcon className='text-lg '/>,
        label: <p className=' text-xs'>골프장</p>
    },
]

export const ToggleTags = ({toggled, setToggled}: ToggleTagsProps) => {
    // const [isEntireToggled, setIsEntireToggled] = useState(false)
    // const [isToggled, setIsToggled] = useState(toggled)

    // useEffect(() => {
    //     setIsToggled(toggled)
    // }, [toggled])

    // useEffect(() => {
    //     let isAllToggled = true;
    //     for (let i=0; i<isToggled.length; i++) {
    //         if (isToggled[i] == false) {
    //             isAllToggled = false;
    //             break;
    //         }
    //     }
    //     setIsEntireToggled(isAllToggled)
    // }, [isToggled])
    
    // useEffect(() => {
    //     if (isEntireToggled) setIsToggled(Array.from({length: NUM_OF_TAGS}, () => true))
    //     else {
    //         let isAllToggled = true;
    //         for (let i=0; i<isToggled.length; i++) {
    //             if (isToggled[i] == false) {
    //                 isAllToggled = false;
    //                 break;
    //             }
    //         }
    //         if (isAllToggled) setIsToggled(Array.from({length: NUM_OF_TAGS}, () => false))
    //     }
    // }, [isEntireToggled])

    const toggleTagButtonList = () => {
        const result = []
        // result.push(
        //     <ToggleTagButton onClicked={() => setIsEntireToggled(!isEntireToggled)} tag={16} isToggled={isEntireToggled} key={16}>
        //         <p className='text-white text-xs'>전체</p>
        //     </ToggleTagButton>
        // )
        for (let i = 0; i < iconAndLabelData.length; i++) {
            result.push(
                <ToggleTagButton onClicked={() => setToggled(isToggled => isToggled.map((toggled, idx) => idx == i ? !toggled : toggled))} tag={i} isToggled={toggled[i]} key={i}>
                    {iconAndLabelData[i].icon}
                    {iconAndLabelData[i].label}
                </ToggleTagButton>
            )
        }

        return result
    }

    // useEffect(() => {
    //     setToggled(isToggled)
    // }, [isToggled])

    return (
        <div className="flex-none w-full h-12 bg-emerald-500 px-4 flex items-center pt-1">
            <div className='w-full h-full grid grid-cols-13 gap-[60px] content-center overflow-x-auto'>
                {toggleTagButtonList()}
            </div>
        </div>
    )
}