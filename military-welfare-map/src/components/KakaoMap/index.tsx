"use client"

import { MarkerType } from '@/src/types/data'
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'
import { Map, MapTypeControl, MapMarker, useMap, CustomOverlayMap } from 'react-kakao-maps-sdk'
import { Marker } from '../Marker';

interface KakaoMapProps {
    pos: {lat: number, lng: number}
    markers: MarkerType[]
    setCurPos: Dispatch<SetStateAction<{lat: number, lng: number}>>
    setIdx: Dispatch<SetStateAction<number>>
    selectedIdx: number
}

export const KakaoMap = ({pos, markers, setCurPos, setIdx, selectedIdx}: KakaoMapProps) => {

    const [mapPos, setMapPos] = useState({lat: pos.lat, lng:pos.lng})
    const [cnt, setCnt] = useState(0)

    const [mapNE, setMapNE] = useState({lat: 0, lng:0});
    const [mapSW, setMapSW] = useState({lat: 0, lng:0});

    useEffect(() => {
        setMapPos(pos)
    }, [pos])
    
    // const map = useMap()
    // const bounds = useMemo(() => {
    //   const bounds = new kakao.maps.LatLngBounds()
    
    //   markers.forEach((marker) => {
    //     bounds.extend(new kakao.maps.LatLng(marker.position.lat, marker.position.lng))
    //   })
    //   return bounds
    // }, [markers])

    // useEffect(() => {
    //     map.setBounds(bounds)
    // })

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

        const makeMapMarkers = (mks: MarkerType[], NE: {lat:number, lng:number}, SW: {lat:number, lng:number}) => {
            const result = []
            for (let i = 0; i < mks.length; i++) {
                if (SW.lat < mks[i].position.lat && mks[i].position.lat < NE.lat
                    && SW.lng < mks[i].position.lng && mks[i].position.lng < NE.lng)
                result.push(
                    <Marker key={i} tag={mks[i].tag} position={mks[i].position} mapClicked={cnt}
                            telno={mks[i].telno} description={mks[i].description} address={mks[i].address} title={mks[i].title} setPos={setMapPos} visible={selectedIdx==i ? true : false} setIdx={setIdx}/>
                )
            }
            return result
        }

        const setCenterAndBound = (map: any) => {
            const NE = map.getBounds().getNorthEast()
            setMapNE({lat:NE.getLat(), lng:NE.getLng()})
            const SW = map.getBounds().getSouthWest()
            setMapSW({lat:SW.getLat(), lng:SW.getLng()})
            const latlng = map.getCenter()
            setMapPos({lat:latlng.getLat(), lng:latlng.getLng()})
        }
        
        return (
            <>
            <Map 
                center={mapPos}
                isPanto={true}
                style={{
                    width: "100%",
                    height: "100%",
                }}
                level={10}
                onClick={() => {setCnt(cnt+1)}}
                onDragEnd={setCenterAndBound}
                onIdle={setCenterAndBound}
                onBoundsChanged={setCenterAndBound}
                onCenterChanged={setCenterAndBound}
                onTileLoaded={setCenterAndBound}
                >
                {!initialLocationState.isLoading &&
                    <MapMarker position={initialLocationState.center}
                        image={{
                            src: "/images/current-position.png",
                            size: {width: 20, height: 20},
                            options: {offset: {x: 10, y: 10}},
                        }}
                    />}
                <MapTypeControl position={"TOPRIGHT"}/>
                {makeMapMarkers(markers, mapNE, mapSW)}
                <ReSetttingMapBounds markers={markers} mapPos={mapPos}/>
            </Map>
            </>
    )
}

const ReSetttingMapBounds = ({
    markers,
    mapPos
  }: {
    markers: MarkerType[],
    mapPos: {lat: number, lng: number}
  }) => {
    const map = useMap()
    const bounds = useMemo(() => {
      const bounds = new kakao.maps.LatLngBounds()
  
      markers.forEach((marker) => {
        bounds.extend(new kakao.maps.LatLng(marker.position.lat, marker.position.lng))
      })
      return bounds
    }, [markers])

    useEffect(() => {
        if (markers.length != 0) map.setBounds(bounds)
        else {
            map.setCenter(new kakao.maps.LatLng(mapPos.lat, mapPos.lng));
            map.setLevel(3)
        }
    }, [markers])
  
    return (<p/>)
  }
  