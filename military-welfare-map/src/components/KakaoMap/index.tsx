"use client"

import { MarkerType } from '@/src/types/data'
import { useEffect, useRef, useState } from 'react'
import { Map, MapTypeControl, MapMarker } from 'react-kakao-maps-sdk'
import { Marker } from '../Marker';

interface KakaoMapProps {
    pos: {lat: number, lng: number}
    markers: MarkerType[]
}

export const KakaoMap = ({pos, markers}: KakaoMapProps) => {
    const [mapPos, setMapPos] = useState({lat: pos.lat, lng:pos.lng})
    const [cnt, setCnt] = useState(0)

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
        setMapPos(pos)
    }, [pos])
    
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

        const makeMapMarkers = (mks: MarkerType[]) => {
            const result = []
            for (let i = 0; i < mks.length; i++) {
                result.push(
                    <Marker key={i} _id={i} tag={mks[i].tag} position={mks[i].position} mapClicked={cnt}
                            address={mks[i].address} title={mks[i].title} setPos={setMapPos}/>
                )
            }
            return result
        }
        
        return (
            <Map center={mapPos}
                isPanto={true}
                style={{
                    width: "100%",
                    height: "100%",
                }}
                level={10}
                onClick={() => {setCnt(cnt+1)}}>
                {!initialLocationState.isLoading &&
                    <MapMarker position={initialLocationState.center}
                        image={{
                            src: "/images/current-position.png",
                            size: {width: 20, height: 20},
                            options: {offset: {x: 10, y: 10}},
                        }}
                    />}
                <MapTypeControl position={"TOPRIGHT"}/>
                {makeMapMarkers(markers)}
            </Map>
    )
}