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
    <RestaurantOutlinedIcon className='text-base' key={0}/>,
    <CoffeeOutlinedIcon className='text-base' key={1}/>,
    <ContentCutOutlinedIcon className='text-base' key={2}/>,
    <HotTubOutlinedIcon className='text-base' key={3}/>,
    <AttractionsOutlinedIcon className='text-base' key={4}/>,
    <HotelOutlinedIcon className='text-base' key={5}/>,
    <SportsSoccerOutlinedIcon className='text-base' key={6}/>,
    <TrainOutlinedIcon className='text-base' key={7}/>,
    <VisibilityOutlinedIcon className='text-base' key={8}/>,
    <LocalHospitalOutlinedIcon className='text-base' key={9}/>,
    <MilitaryTechOutlinedIcon className='text-base' key={10}/>,
    <ShoppingCartOutlinedIcon className='text-base' key={11}/>,
]

// tag to icon
export const tagIconForButton = [
    <RestaurantOutlinedIcon className='text-lg' key={0}/>,
    <CoffeeOutlinedIcon className='text-lg ' key={1}/>,
    <ContentCutOutlinedIcon className='text-lg ' key={2}/>,
    <HotTubOutlinedIcon className='text-lg ' key={3}/>,
    <AttractionsOutlinedIcon className='text-lg ' key={4}/>,
    <HotelOutlinedIcon className='text-lg ' key={5}/>,
    <SportsSoccerOutlinedIcon className='text-lg ' key={6}/>,
    <TrainOutlinedIcon className='text-lg ' key={7}/>,
    <VisibilityOutlinedIcon className='text-lg ' key={8}/>,
    <LocalHospitalOutlinedIcon className='text-lg ' key={9}/>,
    <MilitaryTechOutlinedIcon className='text-lg ' key={10}/>,
    <ShoppingCartOutlinedIcon className='text-lg ' key={11}/>,
]

export const tagIconForInfoWindow = [
    <RestaurantOutlinedIcon className='text-3xl' key={0}/>,
    <CoffeeOutlinedIcon className='text-3xl' key={1}/>,
    <ContentCutOutlinedIcon className='text-3xl' key={2}/>,
    <HotTubOutlinedIcon className='text-3xl' key={3}/>,
    <AttractionsOutlinedIcon className='text-3xl' key={4}/>,
    <HotelOutlinedIcon className='text-3xl' key={5}/>,
    <SportsSoccerOutlinedIcon className='text-3xl' key={6}/>,
    <TrainOutlinedIcon className='text-3xl' key={7}/>,
    <VisibilityOutlinedIcon className='text-3xl' key={8}/>,
    <LocalHospitalOutlinedIcon className='text-3xl' key={9}/>,
    <MilitaryTechOutlinedIcon className='text-3xl' key={10}/>,
    <ShoppingCartOutlinedIcon className='text-3xl' key={11}/>,
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
    '문화 여가',
    '숙박 호텔 모텔 콘도 쉴곳',
    '스포츠 축구 야구 배구 오락',
    '교통 항공 TMO tmo',
    '안경점',
    '병원 신체검사 신검',
    '예비군 집결지',
    '복지단 국군복지단 마트 BX B.X bx PX P.X px',
    '모두 모든'
]

export const rcmdMsg = [
    '음식점 식당 맛집 먹거리 먹을거 먹을곳 맛있는집 잘하는집',
    '카페 커피 분위기',
    '미용실 헤어 이발소',
    '목욕탕 사우나 씻을곳 샤워',
    '문화 여가',
    '숙박 호텔 모텔 콘도 쉴곳',
    '스포츠 축구 야구 배구 오락',
    '교통 항공 TMO tmo',
    '안경점',
    '병원 신체검사 신검',
    '예비군 집결지',
    '복지단 국군복지단 마트 BX B.X bx PX P.X px',
    '모두 모든'
]
