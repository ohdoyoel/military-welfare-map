"use client"

import { Marker } from '@/src/types/data'
import { useEffect, useState } from 'react'
import { Map, MapTypeControl, MapMarker } from 'react-kakao-maps-sdk'

interface KakaoMapProps {
    markers: Marker[]
}

export const KakaoMap = ({markers}: KakaoMapProps) => {

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

        const makeMapMarkers = (mks: Marker[]) => {
            const result = []
            for (let i = 0; i < mks.length; i++) {
                result.push(
                    <MapMarker position={mks[i].position} title={mks[i].title} key={i}/>
                )
            }

            return result
        }
        
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
                                src: "/images/current-position.png",
                                size: {width: 20, height: 20},
                                options: {offset: {x: 0, y: 0}},
                            }}
                        />}
                    <MapTypeControl position={"TOPRIGHT"} />
                    {makeMapMarkers(markers)}
                </Map>
            </div>
    )
}