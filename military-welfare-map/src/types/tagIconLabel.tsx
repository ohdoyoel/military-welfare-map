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
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// 0: 음식점
// 1: 카페
// 2: 미용실
// 3: 목욕탕
// 4: 문화/여가
// 5: 숙박
// 6: 스포츠/레저 (골프장, 체력단련장)
// 7: 항공/교통
// 8: 안경점
// 9: 병원
// 10: 예비군
// 11: 마트
export const orderToTag = [
    0, 1, 11, 2,
    3, 4, 5, 7,
    6, 9, 8, 10
]
export const tagToOrder = [
    0, 1, 3, 4,
    5, 6, 8, 7,
    10, 9, 11, 2
]

export const tagIconForMarker = [
    <RestaurantOutlinedIcon className='text-base'/>,
    <CoffeeOutlinedIcon className='text-base'/>,
    <ContentCutOutlinedIcon className='text-base'/>,
    <HotTubOutlinedIcon className='text-base'/>,
    <AttractionsOutlinedIcon className='text-base'/>,
    <HotelOutlinedIcon className='text-base'/>,
    <SportsSoccerOutlinedIcon className='text-base'/>,
    <TrainOutlinedIcon className='text-base'/>,
    <VisibilityOutlinedIcon className='text-base'/>,
    <LocalHospitalOutlinedIcon className='text-base'/>,
    <MilitaryTechOutlinedIcon className='text-base'/>,
    <ShoppingCartOutlinedIcon className='text-base'/>,
]

// tag to icon
export const tagIconForButton = [
    <RestaurantOutlinedIcon className='text-lg'/>,
    <CoffeeOutlinedIcon className='text-lg '/>,
    <ContentCutOutlinedIcon className='text-lg '/>,
    <HotTubOutlinedIcon className='text-lg '/>,
    <AttractionsOutlinedIcon className='text-lg '/>,
    <HotelOutlinedIcon className='text-lg '/>,
    <SportsSoccerOutlinedIcon className='text-lg '/>,
    <TrainOutlinedIcon className='text-lg '/>,
    <VisibilityOutlinedIcon className='text-lg '/>,
    <LocalHospitalOutlinedIcon className='text-lg '/>,
    <MilitaryTechOutlinedIcon className='text-lg '/>,
    <ShoppingCartOutlinedIcon className='text-lg '/>,
]

export const tagIconForInfoWindow = [
    <RestaurantOutlinedIcon className='text-3xl'/>,
    <CoffeeOutlinedIcon className='text-3xl'/>,
    <ContentCutOutlinedIcon className='text-3xl'/>,
    <HotTubOutlinedIcon className='text-3xl'/>,
    <AttractionsOutlinedIcon className='text-3xl'/>,
    <HotelOutlinedIcon className='text-3xl'/>,
    <SportsSoccerOutlinedIcon className='text-3xl'/>,
    <TrainOutlinedIcon className='text-3xl'/>,
    <VisibilityOutlinedIcon className='text-3xl'/>,
    <LocalHospitalOutlinedIcon className='text-3xl'/>,
    <MilitaryTechOutlinedIcon className='text-3xl'/>,
    <ShoppingCartOutlinedIcon className='text-3xl'/>,
]

export const tagLabel = [
    '음식점',
    '카페',
    '미용실',
    '목욕탕',
    '문화·여가',
    '숙박',
    '스포츠',
    '교통·항공',
    '안경점',
    '병원',
    '예비군',
    '마트'
]

export const tagSearch = [
    '음식점 식당 맛집 먹거리 먹을거 먹을곳 맛있는집 잘하는집',
    '카페 커피 분위기',
    '미용실 헤어 이발소',
    '목욕탕 사우나 씻을곳 샤워',
    '문화·여가 노래방 PC방 당구장',
    '숙박 호텔 모텔 콘도 쉴곳',
    '스포츠 축구 야구 배구 오락',
    '교통·항공 TMO tmo',
    '안경점',
    '병원 신체검사 신검',
    '예비군 집결지',
    '마트 BX bx'
]