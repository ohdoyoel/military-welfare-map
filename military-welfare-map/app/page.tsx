"use client"

import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { KakaoMap } from '@/components/KakaoMap'
import { Header } from '@/components/Header'
import { useState } from 'react'
import { SearchInput } from '@/components/SearchInput'
import { ToggleTags } from '@/components/ToggleTags'

export default function Home() {
  const [isBarOpened, setIsBarOpened] = useState(false)
  
  return (
    <main className="flex flex-row w-screen h-screen">
      <div className={`${isBarOpened ? `block` : `hidden`} basis-1/2 h-full z-10 h-full shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]`} >
        <Header/>
        <SearchInput onKeyUp={() => console.log("keyup")}/>
        <ToggleTags/>
      </div>

      <div className={`absolute inset-y-0 w-auto z-20
                      ${isBarOpened ? `left-1/3` : `left-0`} flex items-center 
                      `}>
        <button className='w-6 h-12 bg-white rounded-r-[3px] shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]' onClick={() => {setIsBarOpened(!isBarOpened)}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none" transform={`${isBarOpened ? `rotate(180)` : `rotate(0)`}`}>
            <path d="M10.5 8L15 12.5L10.5 17" stroke="#3396ff" strokeWidth="3"/>
          </svg>
        </button>
      </div>

      <div className='basis-full h-full z-0'>
        <KakaoMap/>
      </div>

    </main>
  )
}
