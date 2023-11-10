"use client"

import Image from 'next/image'
import { KakaoMap } from '@/components/KakaoMap'
import { Header } from '@/components/Header'
import { useState } from 'react'

export default function Home() {
  const [isBarShowing, setIsBarShowing] = useState(true)
  
  return (
    <main className="flex flex-row w-screen h-screen">
      <div className={`flex flex-col 
                      transition ease-in-out duration-150 ${isBarShowing ? `w-1/3` : `w-auto`} `}>
        <Header/>
        <button className='w-4 h-4' onClick={() => {setIsBarShowing(!isBarShowing)}}/>
      </div>
      <KakaoMap isBarShowing={isBarShowing}/>
    </main>
  )
}
