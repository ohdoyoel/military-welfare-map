"use client"

import Image from 'next/image'
import { KakaoMap } from '@/src/components/KakaoMap'
import { Header } from '@/src/components/Header'
import { useEffect, useState } from 'react'
import { SearchInput } from '@/src/components/SearchInput'
import { ToggleTags } from '@/src/components/ToggleTags'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import axios from 'axios'

export default function Home() {
  const [isBarOpened, setIsBarOpened] = useState(false)

  const glassesStore = async () => {
      try {
          const response = await axios.get(
            "https://cors-anywhere.herokuapp.com/" + "https://openapi.mnd.go.kr/3632313638363232303033333732313531/json/DS_TB_MND_GLAS_LIST/1/5/",
          )
          console.log(response.data)
      } catch (e) {
          console.log(e)
      } finally {
          // console.log(response)
      }
  }

  useEffect(() => {
    glassesStore()
  }, [])
  
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

      <KakaoMap markers={
        [
          {
            position: { lat: 33.450701, lng: 126.570667 },
            title:"kakao",
            tag: 1
          },
          {
            position: { lat: 35.450701, lng: 128.570667 },
            title:"kakao",
            tag: 2
          }
        ]
        }/>

    </main>
  )
}
