"use client"

import { useEffect, useState } from 'react'
import { Map, MapTypeControl, ZoomControl, MapMarker } from 'react-kakao-maps-sdk'

interface KakaoMapProps {
    isBarShowing: boolean
}

export const KakaoMap = (isBarShowing: KakaoMapProps) => {

    // get current position and mark

    const [initialLocationState, setInitialLocationState] = useState({
        center: {
            lat: 33.450701,
            lng: 126.570667,
        },
        errMsg: "",
        isLoading: true,
    })
    
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setInitialLocationState((prev) => ({
                        ...prev,
                        center: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        },
                        isLoading: false,
                    }))
                    setLocationState((prev) => ({
                        ...prev,
                        center: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        },
                        isPanTo: true,
                    }))
                },
                (err) => {
                    setInitialLocationState((prev) => ({
                        ...prev,
                        errMsg: err.message,
                        isLoading: false,
                    }))
                }
                )
            }
        }, [])
        
        // move map function
        
        const [locationState, setLocationState] = useState({
            center: {
                lat: initialLocationState.center.lat,
                lng: initialLocationState.center.lng,
            },
            isPanTo: true,
        })
        
        return (
        <div className='w-full h-full'>        
            <Map center={locationState.center}
                isPanto={locationState.isPanTo}
                style={{
                    width: "100%",
                    height: "100%",
                }}
                level={10}>
                {!initialLocationState.isLoading &&
                    <MapMarker position={initialLocationState.center}
                        image={{
                            src: "/current-position.png",
                            size: {width: 20, height: 20},
                            options: {offset: {x: 0, y: 0}},
                        }}
                    />}
                <MapTypeControl position={"TOPRIGHT"} />
                <ZoomControl position={"RIGHT"} />
            </Map>
        </div>
    )
}