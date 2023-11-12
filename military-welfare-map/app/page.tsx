"use client"

import Image from 'next/image'
import { KakaoMap } from '@/src/components/KakaoMap'
import { Header } from '@/src/components/Header'
import { useState } from 'react'
import { SearchInput } from '@/src/components/SearchInput'
import { ToggleTags } from '@/src/components/ToggleTags'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Home() {
  const [isBarOpened, setIsBarOpened] = useState(false)
  
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
          {isBarOpened ? <NavigateBeforeIcon className='text-[#3396ff]'/> : <NavigateNextIcon className='text-[#3396ff]'/>}
        </button>
      </div>

      <KakaoMap/>

    </main>
  )
}
