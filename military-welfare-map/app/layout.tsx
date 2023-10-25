import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Head } from 'next/document'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '병영생활지도',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=8708ed5b7fa1b785f401de678b66f96e&libraries=services,clusterer&autoload=false"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  )
}
