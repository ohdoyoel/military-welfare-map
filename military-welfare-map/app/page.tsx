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
  
  const [isTagsToggled, setIsTagsToggled] = useState<boolean[]>([true, false, false, false, false, false, false, false, false, false, false, false])
  const [isRegionsToggled, setIsRegionsToggled] = useState<boolean[]>(Array.from({length: NUM_OF_REGIONS}, () => true))
  const [searchText, setSearchText] = useState<string>("")
  const [distanceRange, setDistanceRange] = useState(30)
  
  const [filteredMarkers, setFilteredMarkers] = useState<MarkerType[]>([])
  
  const [mapPos, setMapPos] = useState<{lat: number, lng: number}>({lat: 37.5306063, lng: 126.9743034})
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
  
  const [onFireToggled, setOnFireToggled] = useState(false)
  const [isStarToggled, setIsStarToggled] = useState(false)

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

  // useEffect(() => {
  //   // console.log(filteredMarkers)
  //   setMapPos(filteredMarkers.length == 0 ? curPos
  //             :{lat:filteredMarkers.reduce((r, c) => r + c.position.lat, 0) / filteredMarkers.length,
  //               lng:filteredMarkers.reduce((r, c) => r + c.position.lng, 0) / filteredMarkers.length})
  // }, [filteredMarkers])

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
    input.focus()
  }
  useEffect(() => {
    activeChatInput()
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
        <ChatPanel setTagsToggled={setIsTagsToggled} setRegionsToggled={setIsRegionsToggled} setSearchText={setSearchText} setDistance={setDistanceRange}/>
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
        <button className='w-8 h-8 rounded-full shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] place-self-end' onClick={() => setMapPos({lat:curPos.center.lat, lng:curPos.center.lng})}>
          <img src='/images/current-position.png'></img>
        </button>
      </div>
      
      <div className={`w-full h-full`}>
        <KakaoMap mapPos={mapPos} setMapPos={setMapPos} markers={filteredMarkers} curPos={curPos} setCurPos={setCurPos}
                  selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} onFire={onFireToggled} setMarkers={setMarkers} isStarToggled={isStarToggled}/>
      </div>

    </main>
  )
}