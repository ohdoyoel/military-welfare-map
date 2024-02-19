"use client"

import { KakaoMap } from '@/src/components/KakaoMap'
import { Header } from '@/src/components/Header'
import { useEffect, useState } from 'react'
import { SearchInput } from '@/src/components/SearchInput'
import { ToggleTags } from '@/src/components/ToggleTags'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { MarkerType } from '@/src/types/data'
import { InformationPanel } from '@/src/components/InformationPanel'
import { ToggleRegions } from '@/src/components/ToggleRegions'
import db from '@/public/data/db.json'
// import { GEOCOORD } from '@/src/api/VW-GEOCOORD'

const NUM_OF_TAGS = 12
const NUM_OF_REGIONS = 16

export default function Home() {
  const [isBarOpened, setIsBarOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [markers, setMarkers] = useState<MarkerType[]>([])

  const [isTagsToggled, setIsTagsToggled] = useState<boolean[]>(Array.from({length: NUM_OF_TAGS}, () => true))
  const [isRegionsToggled, setIsRegionsToggled] = useState<boolean[]>(Array.from({length: NUM_OF_REGIONS}, () => true))
  
  const [filteredMarkers, setFilteredMarkers] = useState<MarkerType[]>([])

  const [mapPos, setMapPos] = useState<{lat: number, lng: number}>({lat: 37.5306063, lng: 126.9743034})
  const [curPos, setCurPos] = useState<{lat: number, lng: number}>({lat: 37.5306063, lng: 126.9743034})

  // const [mapSWBound, setMapSWBound] = useState({La: 124.57080341037309, Ma: 32.876565636738974})
  // const [mapNEBound, setMapNEBound] = useState({La: 131.26848784984313, Ma: 38.66983226943576})

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
    markers.sort((x) => x.distance)
  }, [curPos])

  useEffect(() => {
    setFilteredMarkers(markers.filter((x) => {
      // if (x.position.lng < mapSWBound.La  || mapNEBound.La < x.position.lng  || x.position.lat < mapSWBound.Ma || mapNEBound.Ma < x.position.lat) {
      //   console.log(x)
      //   return false
      // }
      for (let i = 0; i < isTagsToggled.length; i++) {
        for (let j = 0; j < isRegionsToggled.length; j++) {
            if (isTagsToggled[i] && x.tag == i && isRegionsToggled[j] && x.region == j) return true
          }
        }
        return false
      }))
    }, [markers, isTagsToggled, isRegionsToggled])

  useEffect(() => {
    console.log(filteredMarkers)
  }, [filteredMarkers])
  
  return (
    <main className={`flex flex-nowrap flex-row w-screen h-screen ${isLoading ? `opacity-50`:``}`}>
      <div className={`${isBarOpened ? `w-[460px]` : `hidden`} h-full z-10 flex flex-col shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]`} >
        <Header/>
        <SearchInput onKeyUp={() => console.log("keyup")}/>
        <ToggleTags setToggled={setIsTagsToggled}/>
        <ToggleRegions setToggled={setIsRegionsToggled}/>
        <InformationPanel markers={filteredMarkers} setPos={setMapPos}/>
      </div>
      

      <div className={`absolute inset-y-0 w-auto z-20
                      ${isBarOpened ? `left-[460px]` : `left-0`} flex items-center 
                      `}>
        <button className='w-6 h-12 bg-white rounded-r-[3px] shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]' onClick={() => {setIsBarOpened(!isBarOpened)}}>
          {isBarOpened ? <NavigateBeforeIcon className='text-emerald-500'/> : <NavigateNextIcon className='text-emerald-500'/>}
        </button>
      </div>

      <div className={`w-full h-full`}>
        <KakaoMap pos={mapPos} markers={filteredMarkers} setCurPos={setCurPos}/>
      </div>

    </main>
  )
}
