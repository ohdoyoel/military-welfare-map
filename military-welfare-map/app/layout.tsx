import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '병영생활지도',
  description: '병영 생활을 도와주는 지도, 병영생활지도',
  icons: {
		icon: "/icon.png",
	},
  applicationName: '병영생활지도',
  authors: {
    url: 'https://github.com/ohdoyoel',
    name: 'ohdoyoel'
  },
  generator: 'Next.js',
  keywords: ['병영생활지도', '국방공공데이터활용경진대회'],
  creator: 'ohdoyoel',
  publisher: 'netlify',
  verification: {
    other: {
    'naver-site-verification': '6297d1ac3e9a48116f889c68bcbc9fd066591f24',
    }
  },
  openGraph: {
    title: '병영생활지도',
    description: '병영 생활을 도와주는 지도, 병영생활지도',
    images: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  )
}
