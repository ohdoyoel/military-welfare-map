"use client"

import { KakaoMap } from '@/src/components/KakaoMap'
import { Header } from '@/src/components/Header'
import { useEffect, useRef, useState } from 'react'
import { SearchInput } from '@/src/components/SearchInput'
import { ToggleTags } from '@/src/components/ToggleTags'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import axios from 'axios'
import { Marker } from '@/src/types/data'

export default function Home() {
  const [isBarOpened, setIsBarOpened] = useState(false)
  const [markers, setMarkers] = useState<Marker[]>([])
  const markersRef = useRef<Marker[]>([])
  
  const geocoder = new window.kakao.maps.services.Geocoder()

  const GLAS = async () => {
      try {
        const preRes = await axios.get(
          process.env.NEXT_PUBLIC_PROXY_SERVER + `https://openapi.mnd.go.kr/${process.env.NEXT_PUBLIC_OPENAPI_KEY}/json/DS_TB_MND_GLAS_LIST/1/1`,
        )
        const cnt = preRes.data.DS_TB_MND_GLAS_LIST.list_total_count
        const response = await axios.get(
          process.env.NEXT_PUBLIC_PROXY_SERVER + `https://openapi.mnd.go.kr/${process.env.NEXT_PUBLIC_OPENAPI_KEY}/json/DS_TB_MND_GLAS_LIST/1/${cnt}`,
        )
        const data = response.data.DS_TB_MND_GLAS_LIST.row
        console.log(data)
        for (let i = 0; i < cnt; i++) {
          geocoder.addressSearch(data[i].address+data[i].addressdetail, (result, status) => {

          if (status === kakao.maps.services.Status.OK) {
          markersRef.current.push(
            {
              position:
                {
                  lat: +result[0].y,
                  lng: +result[0].x
                },
              title: data[i].shop,
              tag: 8
            }
          )
          }})
        }
      } catch (e) {
        console.log(e)
      } finally {
        setMarkers(markersRef.current)
      }
  }

  useEffect(() => {
    GLAS()
  }, [])

  useEffect(() => {
    console.log(markers)
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

      <KakaoMap markers={markers}/>

    </main>
  )
}
