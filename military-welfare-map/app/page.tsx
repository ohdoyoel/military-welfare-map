"use client"

import data from '@/public/data/db.json'
// import { promises as fs } from 'fs';
import { KakaoMap } from '@/src/components/KakaoMap'
import { Header } from '@/src/components/Header'
import { ChatPanel } from '@/src/components/ChatPanel'
import { useEffect, useState } from 'react'
import { SearchInput } from '@/src/components/SearchInput'
import { ToggleTags } from '@/src/components/ToggleTags'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { MarkerType } from '@/src/types/data'
import { InformationPanel } from '@/src/components/InformationPanel'
import { ToggleRegions } from '@/src/components/ToggleRegions'
import { Header2 } from '@/src/components/Header2'
import { ToggleTags2 } from '@/src/components/ToggleTags2'
import { ToggleRegions2 } from '@/src/components/ToggleRegions2'
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import { AdsBar } from '@/src/components/AdsBar'
import { tagSearch } from '@/src/types/tagIconLabel'
import { isTrimedTextAllIncluded } from '@/src/functions/korean'
import { ShowFireButton } from '@/src/components/ShowFireButton'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ShowStarsPanel } from '@/src/components/ShowStarsPanel'
import { validateDB } from '@/src/functions/validateDB'

const NUM_OF_TAGS = 12
const NUM_OF_REGIONS = 16
const NUM_OF_FIRE_IN_DB = 1

export default function Home() {
  // const dbFile = await fs.readFile('data/db.json', 'utf8');
  // const dbData = JSON.parse(dbFile);

  const [isBarOpened, setIsBarOpened] = useState(false)
  const [isChatOpened, setIsChatOpened] = useState(false)
  
  const [isLoading, setIsLoading] = useState(true)
  const [markers, setMarkers] = useState<MarkerType[]>(data)
  const [onFireMarkers, setOnFireMarkers] = useState<MarkerType[]>([
    {
        "title": "🎖️ 국방부치킨",
        "tag": 0,
        "address": "서울특별시 용산구 한강로동 이태원로 22",
        "position": {
            "lat": 37.5306063,
            "lng": 126.9743034
        },
        "region": 0,
        "description": "대한민국 국방부가 군 장병들에게 공짜로 치킨을 쏩니다! [MOCK]",
        "telno": "02-748-1111",
        "distance": 0.0925290779174901,
        "onFire": true,
        "isStar": false
    },
    {
        "title": "🎖️ 병무청과일탕후루",
        "tag": 1,
        "address": "서울특별시 영등포구 여의대방로43길 13",
        "position": {
            "lat": 37.5055216,
            "lng": 126.9192084
        },
        "region": 1,
        "description": "먹으면 신체검사 1급은 따놓은 당상! 달콤한 탕후루로 나누는 끈끈한 전우애! 군 장병 인증 시 50% 할인, SNS 홍보 시 1+1 이벤트 중! [MOCK]",
        "telno": "1588-9090",
        "distance": 0.12252739497615867,
        "onFire": true,
        "isStar": false
    },
    {
        "title": "🎖️ 방위사업청플리마켓",
        "tag": 11,
        "address": "경기도 과천시 47 정부 중앙동 관문로 청사 3동",
        "position": {
            "lat": 37.4253371,
            "lng": 126.9836011
        },
        "region": 7,
        "description": "중고로 안파는 무기가 없다! 공중 급유 가능 전투기와 적의 모공도 볼 수 있는 정찰 위성까지! 군인에게는 위성 구매 시 20% 할인 및 AK47 무료 증정, SNS 구매 인증 시 공격형 드론 사은품 [MOCK]",
        "telno": "1577-1118",
        "distance": 0.16137730084690088,
        "onFire": true,
        "isStar": false
    },
    {
        "title": "🎖️ 논산훈련소정문이발소",
        "tag": 2,
        "address": "충남 논산시 연무읍 득안대로 491 (금곡리)",
        "position": {
            "lat": 36.1145279,
            "lng": 127.0979632
        },
        "region": 9,
        "description": "훈련소 처음이라 무서우시죠? 현역 입대 장병의 머리는 공짜로 잘라드립니다! 군복무의 시작을 저희 이발소와 함께하세요! (3mm만 조발 한정) [MOCK]",
        "telno": "1577-8007",
        "distance": 2.8893212411942626,
        "onFire": true,
        "isStar": false
    },
    {
        "title": "🎖️ 도구해수욕장해병목욕탕",
        "tag": 3,
        "address": "경북 포항시 남구 동해면 도구리 729-17",
        "position": {
            "lat": 35.9922,
            "lng": 129.4427701
        },
        "region": 12,
        "description": "극기주를 체험할 수 있는 해수욕장 뷰의 목욕탕! 해병대 입대•현역 장병 인증시 출입 무료, SNS 인증 시 식혜 제공 [MOCK]",
        "telno": "054-270-6224",
        "distance": 8.88310873849848,
        "onFire": true,
        "isStar": false
    },
    {
        "title": "🎖️ 진해군항제",
        "tag": 4,
        "address": "경남 창원시 진해구 대천동 3",
        "position": {
            "lat": 35.1493942,
            "lng": 128.659554
        },
        "region": 13,
        "description": "@img(https://www.urinews.co.kr/imgdata/urinews_co_kr/202403/2024031848378682.jpg)군 장병 인증 시 진해벛꽃샌드, 진해제과벛꽃빵 중 택1 증정 [MOCK]",
        "telno": "055-552-8532",
        "distance": 9.583520604997052,
        "onFire": true,
        "isStar": false
    },
    {
        "title": "🎖️ 가리산레포츠파크",
        "tag": 6,
        "address": "강원 홍천군 두촌면 가리산길 426 가리산자연휴양림내 가리산레포츠파크",
        "position": {
            "lat": 37.8656358,
            "lng": 127.9811498
        },
        "region": 14,
        "description": "@img(https://www.hongcheon.go.kr/site/tour/images/contents/cts1899_img.jpg)‘경찰, 군 훈련 시스템’과 동일한 규격의 GRP 밀리터리 서바이벌! 군 장병 인증 시 50% 할인 및 추가 탄약 증정! 부대 만발 인증 시 [MOCK]",
        "telno": "0507-1417-8138",
        "distance": 0.807274867787601,
        "onFire": true,
        "isStar": false
    }
])
  
  const [isTagsToggled, setIsTagsToggled] = useState<boolean[]>(Array.from({length: NUM_OF_REGIONS}, () => false))
  const [isRegionsToggled, setIsRegionsToggled] = useState<boolean[]>(Array.from({length: NUM_OF_REGIONS}, () => true))
  const [searchText, setSearchText] = useState<string>("")
  const [distanceRange, setDistanceRange] = useState(30)
  
  const [filteredMarkers, setFilteredMarkers] = useState<MarkerType[]>([])
  
  const [mapPos, setMapPos] = useState<{lat: number, lng: number}>({lat: 37, lng: 128})
  // const [curPos, setCurPos] = useState<{lat: number, lng: number}>({lat: 37.5306063, lng: 126.9743034})
  const [curPos, setCurPos] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: "",
    isLoading: true,
  })
  const [selectedIdx, setSelectedIdx] = useState(-1)
  const [level, setLevel] = useState(13);
  
  const [onFireToggled, setOnFireToggled] = useState(false)
  const [isStarToggled, setIsStarToggled] = useState(false)

  useEffect(() => {
    validateDB(markers)
  }, [])

  useEffect(() => {
    if (markers.length > 0 && isLoading) {
      setIsLoading(false)
    }
  }, [markers])

  useEffect(() => {
    if (markers.length > 0) {
      let tempMarkers = [...markers]
      tempMarkers.forEach((x) => {
        x.distance = (curPos.center.lat - x.position.lat) ** 2 + (curPos.center.lng - x.position.lng) ** 2
        x.onFire = x.description != undefined && x.description.includes('[MOCK]')
        x.isStar = false
      })
      tempMarkers.sort((a, b) => (!a.distance || !b.distance) ? 0 : a.distance - b.distance)
      setMarkers(tempMarkers)
    }
  }, [curPos])
  
  useEffect(() => {
    let tempMarkers = [...markers]
    tempMarkers = tempMarkers.filter((x) => {
      return (33 < x.position.lat && x.position.lat < 42 && 124 < x.position.lng && x.position.lng < 130 &&
        ((onFireToggled && x.onFire)
        || (!onFireToggled && (isStarToggled && x.isStar))
        || (!onFireToggled && !isStarToggled
          && isTagsToggled[x.tag] && isRegionsToggled[x.region]
          && isTrimedTextAllIncluded((x.title + ' ' + x.address + ' ' + x.telno + ' ' + x.description + ' ' + tagSearch[x.tag]).toLowerCase(), searchText.toLowerCase())
          && x.distance! < distanceRange)))
    })
    setFilteredMarkers(tempMarkers)
    }, [isTagsToggled, isRegionsToggled, searchText, distanceRange, onFireToggled, isStarToggled])

  useEffect(() => {
    let input;
    input = document.getElementById("searchInput") as HTMLInputElement;
    input.value = searchText
  }, [searchText])

  const onSearchInputKeyUp = () => { 
    let input;
    input = document.getElementById("searchInput") as HTMLInputElement;
    setSearchText(input.value)
  }

  const activeSearchInput = () => {
    let input;
    input = document.getElementById("searchInput") as HTMLInputElement;
    input.focus()
  }
  useEffect(() => {
    activeSearchInput()
  }, [isBarOpened])

  const activeChatInput = () => {
    let input;
    input = document.getElementById("chatInput") as HTMLTextAreaElement;
    input && input.focus()
  }
  useEffect(() => {
    isChatOpened && activeChatInput()
  }, [isChatOpened])
  
  return (
    <main className={`flex flex-nowrap flex-row w-screen h-screen ${isLoading ? `opacity-50`:``}`}>
      
      {/* InformationPanel */}
      <div className={`fixed ${isBarOpened ? `w-[460px]` : `hidden`} h-full z-10 flex flex-col shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]`} >
        <Header isStarToggled={isStarToggled} setIsStarToggled={setIsStarToggled}/>
        <SearchInput searchText={searchText} setSearchText={setSearchText} onKeyUp={onSearchInputKeyUp}/>
        <ToggleTags toggled={isTagsToggled} setToggled={setIsTagsToggled}/>
        <ToggleRegions toggled={isRegionsToggled} setToggled={setIsRegionsToggled} setDistance={setDistanceRange}/>
        <InformationPanel markers={filteredMarkers} setPos={setMapPos} setIdx={setSelectedIdx} setMarkers={setMarkers}/>
        <AdsBar/>
      </div>

      {/* DefaultPanel */}
      <div className={`fixed ${isBarOpened ? `hidden` : ``} z-10`} >
        <div className='flex'> 
          <Header2/>
          <button className='flex flex-row w-fit h-10 z-10 bg-white rounded-[3px] m-2 py-2 shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] focus:outline-none' onClick={() => {setIsBarOpened(true);}}>
            <SearchIcon className='w-10 text-gray-600' fontSize='medium'/>
            {searchText != "" && <p className='pr-3'>{searchText}</p>}
          </button>
          <button className='w-10 h-10 z-10 bg-white rounded-[3px] m-2 p-2 shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] focus:outline-none' onClick={() => setIsChatOpened(!isChatOpened)}>
            <ChatIcon className='text-gray-600' fontSize='medium'/> 
          </button>
          <button className={`w-10 h-10 z-10 rounded-[3px] m-2 p-2  focus:outline-none
                            ${isStarToggled
                              ? `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] bg-emerald-500 text-white`
                              : `shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] bg-white text-gray-600`} 
                            `} onClick={() => {setIsStarToggled(!isStarToggled); setIsBarOpened(true)}}>
            <FavoriteIcon fontSize='medium'/>
          </button>
        </div>
        <div className='flex flex-col'> 
        <ToggleTags2 toggled={isTagsToggled} setToggled={setIsTagsToggled}/>
        <ToggleRegions2 toggled={isRegionsToggled} setToggled={setIsRegionsToggled} setDistance={setDistanceRange}/>
        </div>
      </div>

      {/* InformationPanel Open Btn */}
      <div className={`flex items-center`}>
        <button className={`group w-12 h-20 bg-white rounded-r-[3px] shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] focus:outline-none
                          absolute z-10 ${isBarOpened ? `left-[461px]` : `left-0`}`}
                onClick={() => {setIsBarOpened(!isBarOpened)}}>
          {isBarOpened ? <NavigateBeforeIcon className='text-emerald-500' fontSize='large'/> : <SearchIcon className='text-emerald-500 group-hover:hidden' fontSize='large'/>}
          {!isBarOpened ? <NavigateNextIcon className='text-emerald-500 hidden group-hover:inline' fontSize='large'/> : ""}
        </button>
      </div>

      {/* ChatPanel */}
      <div className={`fixed right-0 ${isChatOpened ? `w-[460px]` : `hidden`} h-full z-20 flex flex-col shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]`} >
        <ChatPanel markers={markers} setIdx={setSelectedIdx} tagsToggled={isTagsToggled} setTagsToggled={setIsTagsToggled} regionsToggled={isRegionsToggled} setRegionsToggled={setIsRegionsToggled} setSearchText={setSearchText} setDistance={setDistanceRange}/>
        <AdsBar/>
      </div>

      {/* ChatPanel Open Btn */}
      <div className={`flex items-center`}>
        <button className={`group w-12 h-20 bg-white rounded-l-[3px] shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] focus:outline-none
                          absolute z-10 ${isChatOpened ? `right-[461px]` : `right-0`}`}
                onClick={() => {setIsChatOpened(!isChatOpened)}}>
          {isChatOpened ? <NavigateNextIcon className='text-emerald-500' fontSize='large'/> : <ChatIcon className='text-emerald-500 group-hover:hidden' fontSize='large'/>}
          {!isChatOpened ? <NavigateBeforeIcon className='text-emerald-500 hidden group-hover:inline' fontSize='large'/> : ""}
        </button>
      </div>

      {/* <div className='z-10 absolute bottom-1 left-1 flex flex-col gap-2'>
        <ShowStarsPanel markers={markers}/>
      </div> */}

      <div className='z-10 absolute bottom-1 right-1 flex flex-col gap-2'>
        <ShowFireButton isToggled={onFireToggled} onClicked={() => {
          setOnFireToggled(!onFireToggled)
        }}/>
      </div>

      <div className='z-10 absolute top-12 right-1 flex flex-col gap-2'>
        <button className='w-8 h-8 rounded-full shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] place-self-end' onClick={() => setMapPos(curPos.center)}>
          <img src='/images/current-position.png'></img>
        </button>
      </div>
      
      <div className={`w-full h-full`}>
        <KakaoMap mapPos={mapPos} setMapPos={setMapPos} markers={filteredMarkers} curPos={curPos} setCurPos={setCurPos} isChatOpened={isChatOpened} level={level} setLevel={setLevel}
                  selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} onFire={onFireToggled} onFireMarkers={onFireMarkers!} setMarkers={setMarkers} isStarToggled={isStarToggled}/>
      </div>

    </main>
  )
}