"use client"

import { KakaoMap } from '@/src/components/KakaoMap'
import { Header } from '@/src/components/Header'
import { useEffect, useMemo, useRef, useState } from 'react'
import { SearchInput } from '@/src/components/SearchInput'
import { ToggleTags } from '@/src/components/ToggleTags'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { MarkerType } from '@/src/types/data'
import { GLAS } from '@/src/api/MND_GLAS'
import { InformationPanel } from '@/src/components/InformationPanel'
import { ToggleRegions } from '@/src/components/ToggleRegions'
import { GEOCOORD } from '@/src/api/VW-GEOCOORD'

const NUM_OF_TAGS = 12
const NUM_OF_REGIONS = 16

export default function Home() {
  const [isBarOpened, setIsBarOpened] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [markers, setMarkers] = useState<MarkerType[]>(
    [
      {
        tag: 1,
        region: 0,
        position: {
          lat: 37.5518911,
          lng: 126.9917937
        },
        address: "서울특별시 어딘가",
        title: '서울군인카페',
      },
      {
        tag: 0,
        region: 0,
        position: {
          lat: 37.5018911,
          lng: 126.9917937
        },
        address: "서울특별시 어딘가",
        title: '서울군인식당',
      }
    ]
    )
  
  const [isTagsToggled, setIsTagsToggled] = useState<boolean[]>(Array.from({length: NUM_OF_TAGS}, () => false))
  const [isRegionsToggled, setIsRegionsToggled] = useState<boolean[]>(Array.from({length: NUM_OF_REGIONS}, () => false))
  
  const [filteredMarkers, setFilteredMarkers] = useState<MarkerType[]>([])

  const [mapPos, setMapPos] = useState<{lat: number, lng: number}>({lat: 37.5306063, lng: 126.9743034})
  const isGLASLoadedRef = useRef(false)

  useEffect(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setMapPos({lat: position.coords.latitude, lng: position.coords.longitude})
            },
            (err) => {
                console.log(err)
            }
        )
    }
    console.log(GEOCOORD('서울특별시 서대문구 충정로3가 190-36'))
  }, [])

  // useEffect(() => {
  //   if (!isGLASLoadedRef.current) {
  //     setIsLoading(true)
  //     GLAS().then((res) => {
  //       setMarkers([...markers, ...res])
  //       isGLASLoadedRef.current = true
  //       setIsLoading(false)
  //     })
  //   }
  // }, [])

  useEffect(() => {
    console.log(markers)
  }, [markers])

  useEffect(() => {
    setFilteredMarkers(markers.filter((x) => {
      for (let i = 0; i < isTagsToggled.length; i++) {
        for (let j = 0; j < isRegionsToggled.length; j++) {
          if (isTagsToggled[i] && x.tag == i
            && isRegionsToggled[j] && x.region == j) return true
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
        <KakaoMap pos={mapPos} markers={filteredMarkers}/>
      </div>

    </main>
  )
}
