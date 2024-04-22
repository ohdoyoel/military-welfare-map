"use client"

import { KakaoMap } from '@/src/components/KakaoMap'
import { Header } from '@/src/components/Header'
import { NavBar } from '@/src/components/NavBar'
import { ChatPanel } from '@/src/components/ChatPanel'
import { useEffect, useState } from 'react'
import { SearchInput } from '@/src/components/SearchInput'
import { ToggleTags } from '@/src/components/ToggleTags'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { MarkerType } from '@/src/types/data'
import { InformationPanel } from '@/src/components/InformationPanel'
import { ToggleRegions } from '@/src/components/ToggleRegions'
import db from '@/public/data/db.json'
import { iconAndLabelData } from '@/src/components/LocationItem'
import { Header2 } from '@/src/components/Header2'
import { ToggleTags2 } from '@/src/components/ToggleTags2'
import { ToggleRegions2 } from '@/src/components/ToggleRegions2'

const NUM_OF_TAGS = 12
const NUM_OF_REGIONS = 16

export default function Home() {
  const [isBarOpened, setIsBarOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [markers, setMarkers] = useState<MarkerType[]>([])

  const [isTagsToggled, setIsTagsToggled] = useState<boolean[]>([true, true, true, true, true, true, true, true, false, false, false, false])
  const [isRegionsToggled, setIsRegionsToggled] = useState<boolean[]>(Array.from({length: NUM_OF_REGIONS}, () => true))
  const [searchText, setSearchText] = useState<string>("")
  const [isSearch, setIsSearch] = useState(true)
  
  const [filteredMarkers, setFilteredMarkers] = useState<MarkerType[]>([])

  const [mapPos, setMapPos] = useState<{lat: number, lng: number}>({lat: 37.5306063, lng: 126.9743034})
  const [selectedIdx, setSelectedIdx] = useState(-1)
  const [curPos, setCurPos] = useState<{lat: number, lng: number}>({lat: 37.5306063, lng: 126.9743034})

  useEffect(() => {
    setMarkers(db)
  }, [])

  useEffect(() => {
    console.log(markers)
    setIsLoading(false)
  }, [markers])

  useEffect(() => {
    markers.forEach((x) => {
      x.distance = (curPos.lat - x.position.lat) ** 2 + (curPos.lng - x.position.lng) ** 2
    })
    markers.sort((a, b) => (!a.distance || !b.distance) ? 0 : a.distance - b.distance)
  }, [curPos])

  useEffect(() => {
    setFilteredMarkers(markers.filter((x) => {
      for (let i = 0; i < isTagsToggled.length; i++) {
        for (let j = 0; j < isRegionsToggled.length; j++) {
          if (33 < x.position.lat && x.position.lat < 42 && 124 < x.position.lng && x.position.lng < 130
            && isTagsToggled[i] && x.tag == i && isRegionsToggled[j] && x.region == j
            && (x.title + x.address + x.telno + x.description + iconAndLabelData[x.tag].label).indexOf(searchText) > -1
          ) return true
        }
      }
      return false
    }))
    }, [markers, isTagsToggled, isRegionsToggled, searchText])

  useEffect(() => {
    console.log(filteredMarkers)
    setMapPos(filteredMarkers.length == 0 ? curPos
              :{lat:filteredMarkers.reduce((r, c) => r + c.position.lat, 0) / filteredMarkers.length,
                lng:filteredMarkers.reduce((r, c) => r + c.position.lng, 0) / filteredMarkers.length})
  }, [filteredMarkers])

  const onSearchInputKeyUp = () => { 
    let input;
    input = document.getElementById("searchInput") as HTMLInputElement;
    setSearchText(input.value)
  }
  
  return (
    <main className={`flex flex-nowrap flex-row w-screen h-screen ${isLoading ? `opacity-50`:``}`}>
      <div className={`fixed ${isBarOpened ? `w-[460px]` : `hidden`} h-full z-10 flex flex-col shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]`} >
        <Header/>
        <SearchInput onKeyUp={onSearchInputKeyUp}/>
        <ToggleTags toggled={isTagsToggled} setToggled={setIsTagsToggled}/>
        <ToggleRegions toggled={isRegionsToggled} setToggled={setIsRegionsToggled}/>
        {isSearch ? <InformationPanel markers={filteredMarkers} setPos={setMapPos} setIdx={setSelectedIdx}/> : <ChatPanel/>}
        <NavBar setIsSearch={setIsSearch}/>
      </div>

      <div className={`fixed ${isBarOpened ? `hidden` : ``} z-10`} >
        <Header2/>
        <ToggleTags2 toggled={isTagsToggled} setToggled={setIsTagsToggled}/>
        <ToggleRegions2 toggled={isRegionsToggled} setToggled={setIsRegionsToggled}/>
      </div>

      <div className={`absolute inset-y-0 w-auto z-20
                      ${isBarOpened ? `left-[460px]` : `left-0`} flex items-center 
                      `}>
        <button className='w-6 h-12 bg-white rounded-r-[3px] shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]' onClick={() => {setIsBarOpened(!isBarOpened)}}>
          {isBarOpened ? <NavigateBeforeIcon className='text-emerald-500'/> : <NavigateNextIcon className='text-emerald-500'/>}
        </button>
      </div>

      <div className='z-10 absolute top-12 right-1
                        w-8 h-8 bg-white rounded-lg shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]'>
        <button className='w-full h-full' onClick={() => setMapPos({lat:curPos.lat, lng:curPos.lng})}>
          <img src='/images/current-position.png'></img>
        </button>
      </div>
      
      <div className={`w-full h-full`}>
        <KakaoMap pos={mapPos} markers={filteredMarkers} setCurPos={setCurPos} selectedIdx={selectedIdx} setIdx={setSelectedIdx}/>
      </div>

    </main>
  )
}