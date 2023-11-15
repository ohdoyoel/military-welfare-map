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

export const ToggleTags = () => {
    const [isToggled01, setToggleButton01] = useState(false)
    const [isToggled02, setToggleButton02] = useState(false)
    const [isToggled03, setToggleButton03] = useState(false)
    const [isToggled04, setToggleButton04] = useState(false)
    const [isToggled05, setToggleButton05] = useState(false)
    const [isToggled06, setToggleButton06] = useState(false)
    const [isToggled07, setToggleButton07] = useState(false)
    const [isToggled08, setToggleButton08] = useState(false)
    const [isToggled09, setToggleButton09] = useState(false)
    const [isToggled10, setToggleButton10] = useState(false)
    const [isToggled11, setToggleButton11] = useState(false)
    const [isToggled12, setToggleButton12] = useState(false)

    const onToggleButtonClicked = (btnIdx: Number) => {
        switch(btnIdx) { 
            case 1: { 
                setToggleButton01(!isToggled01)
                break; 
            } case 2: { 
                setToggleButton02(!isToggled02)
                break; 
            } case 3: {
                setToggleButton03(!isToggled03)
                break;
            } case 4: { 
                setToggleButton04(!isToggled04)
                break; 
            } case 5: { 
                setToggleButton05(!isToggled05)
                break; 
            } case 6: { 
                setToggleButton06(!isToggled06)
                break; 
            } case 7: { 
                setToggleButton07(!isToggled07)
                break; 
            } case 8: { 
                setToggleButton08(!isToggled08)
                break; 
            } case 9: { 
                setToggleButton09(!isToggled09)
                break; 
            } case 10: { 
                setToggleButton10(!isToggled10)
                break; 
            } case 11: { 
                setToggleButton11(!isToggled11)
                break; 
            } case 12: { 
                setToggleButton12(!isToggled12)
                break; 
            } default: { 
                console.log("btnIdx error")
                break; 
            } 
        } 
    }

    const isToggled = (btnIdx: Number) => {
        switch(btnIdx) { 
            case 1: { 
                return isToggled01
            } case 2: { 
                return isToggled02
            } case 3: {
                return isToggled03
            } case 4: { 
                return isToggled04
            } case 5: { 
                return isToggled05
            } case 6: { 
                return isToggled06
            } case 7: { 
                return isToggled07
            } case 8: { 
                return isToggled08
            } case 9: { 
                return isToggled09
            } case 10: { 
                return isToggled10
            } case 11: { 
                return isToggled11
            } case 12: { 
                return isToggled12
            } default: { 
                console.log("btnIdx error")
                return false
            } 
        } 
    }

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
                <ToggleTagButton onClicked={() => onToggleButtonClicked(i+1)} isToggled={isToggled(i+1)} label={iconAndLabelData[i].label} key={i}>
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