"use client"

import { KakaoMap } from '@/src/components/KakaoMap'
import { Header } from '@/src/components/Header'
import { useEffect, useRef, useState } from 'react'
import { SearchInput } from '@/src/components/SearchInput'
import { ToggleTags } from '@/src/components/ToggleTags'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { APIProps, Marker } from '@/src/types/data'
import { GLAS } from '@/src/api/MND_GLAS'

export default function Home() {
  const [isBarOpened, setIsBarOpened] = useState(false)
  const [markers, setMarkers] = useState<Marker[]>([])
  const [mapPos, setMapPos] = useState<{lat: number, lng: number}>({lat: 0, lng: 0})

  const apiPropsRef = useRef<APIProps>(
    {
      position:
      {
        lat: 0,
        lng: 0,
      },
      size: 5
    }
  )

  useEffect(() => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                apiPropsRef.current.position.lat = position.coords.latitude
                apiPropsRef.current.position.lng = position.coords.longitude
                setMapPos({lat: position.coords.latitude, lng: position.coords.longitude})
            },
            (err) => {
                console.log(err)
            }
        )
    }

    const response = GLAS(apiPropsRef.current)

  }, [])

  useEffect(() => {
    // console.log(markers)
  }, [markers])
  
  return (
    <main className="flex flex-row w-screen h-screen">
      <div className={`${isBarOpened ? `block` : `hidden`} grow-0 w-[460px] h-full z-10 h-full shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]`} >
        <Header/>
        <SearchInput onKeyUp={() => console.log("keyup")}/>
        <ToggleTags/>
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
