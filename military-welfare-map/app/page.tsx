import Image from 'next/image'
import { KakaoMap } from '@/components/KakaoMap'

export default function Home() {
  
  return (
    <main className="flex w-screen h-screen">
      <KakaoMap/>
    </main>
  )
}
