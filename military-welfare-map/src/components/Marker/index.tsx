import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk"
import { InfoWindow, tagColorData } from "../InfoWindow"
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
import zIndex from "@mui/material/styles/zIndex";

interface MarkerProps {
    idx: number
    tag: number
    position: {lat: number, lng: number}
    address: string
    title: string
    description?: string
    telno?: string
    setPos: Dispatch<SetStateAction<{lat: number, lng: number}>>
    mapClicked: number
    visible: boolean
    setIdx: Dispatch<SetStateAction<number>>
}

const iconData = [
    <RestaurantOutlinedIcon className='text-base text-white'/>,
    <CoffeeOutlinedIcon className='text-base text-white'/>,
    <ContentCutOutlinedIcon className='text-base text-white'/>,
    <HotTubOutlinedIcon className='text-base text-white'/>,
    <AttractionsOutlinedIcon className='text-base text-white'/>,
    <HotelOutlinedIcon className='text-base text-white'/>,
    <SportsSoccerOutlinedIcon className='text-base text-white'/>,
    <TrainOutlinedIcon className='text-base text-white'/>,
    <VisibilityOutlinedIcon className='text-base text-white'/>,
    <LocalHospitalOutlinedIcon className='text-base text-white'/>,
    <MilitaryTechOutlinedIcon className='text-base text-white'/>,
    <GolfCourseOutlinedIcon className='text-base text-white'/>,
]

export const Marker = ({idx, tag, position, address, title, description, telno, setPos, mapClicked, visible, setIdx}: MarkerProps) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        let button = document.getElementById(`tagmarker${idx}`) as HTMLButtonElement;
        let customOverlay = button?.parentElement;
        let styleWithoutZindex = customOverlay?.getAttribute('style')?.replace('z-index: 0;', '')
        styleWithoutZindex && customOverlay?.setAttribute('style', styleWithoutZindex)
    }, [visible])

    useEffect(() => {
        setIsVisible(visible)
    }, [visible])

    useEffect(() => {
        setIsVisible(false)
        // setIdx(-1)
    }, [mapClicked])
    
    return (
        <CustomOverlayMap position={position}>
            <button id={`tagmarker${idx}`} className={`absolute -left-[8px] grid w-4 h-4 ${tagColorData[tag].normal} place-content-center rounded-[3px] opacity-90`} style={{position:"relative", zIndex:0}}
                onClick={() => {
                    setPos({lat: position.lat, lng: position.lng})
                    setIsVisible(!isVisible)
                }}>
                {iconData[tag]}
            </button>
            {isVisible && <InfoWindow tag={tag} pos={position} title={title} address={address} description={description} telno={telno} isVisible={isVisible}/>}
        </CustomOverlayMap>
    )
}