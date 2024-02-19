"use client"

import { MarkerType } from '@/src/types/data'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Map, MapTypeControl, MapMarker } from 'react-kakao-maps-sdk'
import { Marker } from '../Marker';
import { SettingsBackupRestoreSharp } from '@mui/icons-material';

interface KakaoMapProps {
    pos: {lat: number, lng: number}
    markers: MarkerType[]
    setCurPos: Dispatch<SetStateAction<{lat: number, lng: number}>>
    // setSWBound: Dispatch<SetStateAction<{La: number | undefined, Ma: number | undefined}>>
    // setNEBound: Dispatch<SetStateAction<{La: number | undefined, Ma: number | undefined}>>
}

export const KakaoMap = ({pos, markers, setCurPos}: KakaoMapProps) => {
    const mapRef = useRef<kakao.maps.Map>(null)
    const [mapPos, setMapPos] = useState({lat: pos.lat, lng:pos.lng})
    const [cnt, setCnt] = useState(0)
    
    // useEffect(() => {
    //     onMapDragged()
    // }, [mapRef.current, pos, cnt])

    useEffect(() => {
        setMapPos(pos)
    }, [pos])
    
    // const onMapDragged = () => {
    //     setSWBound({
    //         La: mapRef.current?.getBounds().getSouthWest().getLng(),
    //         Ma: mapRef.current?.getBounds().getSouthWest().getLat()
    //     })
    //     setNEBound({
    //         La: mapRef.current?.getBounds().getNorthEast().getLng(),
    //         Ma: mapRef.current?.getBounds().getNorthEast().getLat()
    //     })
    //     console.log(mapRef.current?.getBounds().getSouthWest())
    //     console.log(mapRef.current?.getBounds().getNorthEast())
    // }

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
                    setCurPos({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        })
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
        
        useEffect(() => {
            setMapPos({
                lat: initialLocationState.center.lat,
                lng: initialLocationState.center.lng
            })
        }, [initialLocationState])

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
            <Map ref={mapRef}
                center={mapPos}
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