"use client"

import PreviousMap from 'postcss/lib/previous-map'
import { useEffect, useState } from 'react'
import { Map, MapTypeControl, ZoomControl, MapMarker } from 'react-kakao-maps-sdk'

export const KakaoMap = () => {

    // get current position and mark

    const [currentPositionState, setCurrentPositionState] = useState({
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
                    setCurrentPositionState((prev) => ({
                        ...prev,
                        center: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        },
                        isLoading: false,
                    }))
                    setLocationState((prev) => ({
                        center: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        }
                    }))
                },
                (err) => {
                    setCurrentPositionState((prev) => ({
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
                lat: currentPositionState.center.lat,
                lng: currentPositionState.center.lng,
            },
            isPanTo: false,
        })
        
        // const panTo = (lat:number, lng:number) => {
        //     setLocationState({
        //         center: {
        //             lat: lat,
        //             lng: lng,
        //         },
        //         isPanTo: true
        //     })
        // }
        
        return (
        <div className='relative w-full h-full'>        
            <Map center={locationState.center}
                isPanto={locationState.isPanTo}
                style={{
                    width: "100%",
                    height: "100%",
                }}
                level={10}>
                {!currentPositionState.isLoading &&
                    <MapMarker position={currentPositionState.center}
                        image={{
                            src: "/current-position.png",
                            size: {width: 20, height: 20},
                            options: {offset: {x: 0, y: 0}},
                        }}
                    />}
                <MapTypeControl position={"TOPRIGHT"} />
                <ZoomControl position={"RIGHT"} />
            </Map>
            {/* <span className="material-icons w-10 h-10 absolute bottom-0 right-0 z-10" onClick={panTo(currentPositionState.center.lat, currentPositionState.center.lng)}/> */}
        </div>
    )
}