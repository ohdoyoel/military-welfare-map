"use client"

import { KakaoMap } from '@/src/components/KakaoMap'
import { Header } from '@/src/components/Header'
import { useEffect, useState } from 'react'
import { SearchInput } from '@/src/components/SearchInput'
import { ToggleTags } from '@/src/components/ToggleTags'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Marker } from '@/src/types/data'
import { GLAS } from '@/src/api/MND_GLAS'
import { InformationPanel } from '@/src/components/InformationPanel'

export default function Home() {
  const [isBarOpened, setIsBarOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [markers, setMarkers] = useState<Marker[]>([])
  const [mapPos, setMapPos] = useState<{lat: number, lng: number}>({lat: 37.5306063, lng: 126.9743034})

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

    GLAS().then((res) => {
      setIsLoading(false)
      setMarkers(res)
    })

  }, [])

  useEffect(() => {
    console.log(markers)
  }, [markers])
  
  return (
    <main className={`flex flex-row w-screen h-screen ${isLoading ? `opacity-50`:``}`}>
      <div className={`${isBarOpened ? `block` : `hidden`} w-[460px] h-full z-10 h-full flex flex-col shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]`} >
        <Header/>
        <SearchInput onKeyUp={() => console.log("keyup")}/>
        <ToggleTags/>
        <InformationPanel markers={markers}/>
      </div>

      <div className={`absolute inset-y-0 w-auto z-20
                      ${isBarOpened ? `left-[460px]` : `left-0`} flex items-center 
                      `}>
        <button className='w-6 h-12 bg-white rounded-r-[3px] shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]' onClick={() => {setIsBarOpened(!isBarOpened)}}>
          {isBarOpened ? <NavigateBeforeIcon className='text-emerald-500'/> : <NavigateNextIcon className='text-emerald-500'/>}
        </button>
      </div>

      <KakaoMap pos={mapPos} markers={markers}/>

    </main>
  )
}
