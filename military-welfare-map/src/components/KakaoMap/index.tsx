"use client"

import { MarkerType } from '@/src/types/data'
import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Map, MapTypeControl, MapMarker, useMap, MarkerClusterer, AbstractOverlay, Polyline } from 'react-kakao-maps-sdk'
import { Marker } from '../Marker';
import { Alert } from '../Alert';
import ReactDOM from 'react-dom';
import { MarkerImage } from '../MarkerImage';
import { AdsBar } from '../AdsBar';
import { AdsBarFloat } from '../AdsBarFloat';
import { AdsWindow } from '../AdsWindow';

interface TooltipProps {
    idx: number
    tag: number
    position: {lat: number, lng: number}
    address: string
    title: string
    description?: string
    telno?: string
    onFire: boolean
    setPos: Dispatch<SetStateAction<{lat: number, lng: number}>>
    selectedIdx: number
    setSelectedIdx: Dispatch<SetStateAction<number>>
    star: boolean
    setMarkers: Dispatch<SetStateAction<MarkerType[]>>
}

interface KakaoMapProps {
    mapPos: {lat: number, lng: number}
    setMapPos: Dispatch<SetStateAction<{lat: number, lng: number}>>
    markers: MarkerType[]
    curPos: {center:{lat: number, lng: number}, errMsg:string, isLoading:boolean}
    setCurPos: Dispatch<SetStateAction<{center:{lat: number, lng: number}, errMsg:string, isLoading:boolean}>>
    setSelectedIdx: Dispatch<SetStateAction<number>>
    selectedIdx: number
    onFire: boolean
    onFireMarkers: MarkerType[]
    setMarkers: Dispatch<SetStateAction<MarkerType[]>>
    isStarToggled: boolean
}

/**
   * AbstractOverlay를 이용하여 사용자 TooltipMarker를 정의 합니다.
   */
const TooltipMarker = ({idx, tag, position, address, title, description, telno, onFire, setPos, selectedIdx, setSelectedIdx, star, setMarkers}: TooltipProps) => {
    const map = useMap()
    // Marker로 올려질 node 객체를 생성 합니다.
    const node = useRef(document.createElement("div"))
    const [visible, setVisible] = useState(false)
    const [tracerPosition, setTracerPosition] = useState({
      x: 0,
      y: 0,
    })
    const [tracerAngle, setTracerAngle] = useState(0)

    const positionLatlng = useMemo(() => {
      return new kakao.maps.LatLng(position.lat, position.lng)
    }, [position.lat, position.lng])

    function onAdd(this: any) {
      const panel = this.getPanels()
        .overlayLayer
      panel.appendChild(node.current)
    }

    function onRemove() {
      node.current.parentNode!.removeChild(node.current)
    }

    // AbstractOverlay의 필수 구현 메소드.
    // 지도의 속성 값들이 변화할 때마다 호출됩니다. (zoom, center, mapType)
    // 엘리먼트의 위치를 재조정 해 주어야 합니다.
    function draw(this: any) {
      // 화면 좌표와 지도의 좌표를 매핑시켜주는 projection객체
      const projection = this.getProjection()
      // overlayLayer는 지도와 함께 움직이는 layer이므로
      // 지도 내부의 위치를 반영해주는 pointFromCoords를 사용합니다.
      const point = projection.pointFromCoords(positionLatlng)
      // 내부 엘리먼트의 크기를 얻어서

      const width = node.current.offsetWidth
      const height = node.current.offsetHeight

      // 해당 위치의 정중앙에 위치하도록 top, left를 지정합니다.
      node.current.style.left = point.x - width / 2 + "px"
      node.current.style.top = point.y - height / 2 + "px"
    }

    // 클리핑을 위한 outcode
    const OUTCODE = {
      INSIDE: 0, // 0b0000
      TOP: 8, //0b1000
      RIGHT: 2, // 0b0010
      BOTTOM: 4, // 0b0100
      LEFT: 1, // 0b0001
    }

    // viewport 영역을 구하기 위한 buffer값
    // target의 크기가 60x60 이므로
    // 여기서는 지도 bounds에서 상하좌우 30px의 여분을 가진 bounds를 구하기 위해 사용합니다.
    const BOUNDS_BUFFER = 30

    // 클리핑 알고리즘으로 tracker의 좌표를 구하기 위한 buffer값
    // 지도 bounds를 기준으로 상하좌우 buffer값 만큼 축소한 내부 사각형을 구하게 됩니다.
    // 그리고 그 사각형으로 target위치와 지도 중심 사이의 선을 클리핑 합니다.
    // 여기서는 tracker의 크기를 고려하여 40px로 잡습니다.
    const CLIP_BUFFER = 40

    const Tracker = ( {position, angle}: {position: {x:number, y:number}, angle:number} ) => {
      return (
        <div
          className={"tracker"}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          onClick={() => {
            map.setCenter(positionLatlng)
            setVisible(false)
          }}
        >
          <div
            className={"balloon"}
            style={{
              transform: `rotate(${angle}deg)`,
            }}
          ></div>
          <MarkerImage tag={tag} onFire={onFire}/>
        </div>
      )
    }

    // Cohen–Sutherland clipping algorithm
    // 자세한 내용은 아래 위키에서...
    // https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm
    const getClipPosition = useCallback(
      (top:number, right:number, bottom:number, left:number, inner:{x:number,y:number}, outer:{x:number,y:number}) => {
        const calcOutcode = (x:number, y:number) => {
          let outcode = OUTCODE.INSIDE

          if (x < left) {
            outcode |= OUTCODE.LEFT
          } else if (x > right) {
            outcode |= OUTCODE.RIGHT
          }

          if (y < top) {
            outcode |= OUTCODE.TOP
          } else if (y > bottom) {
            outcode |= OUTCODE.BOTTOM
          }

          return outcode
        }

        let ix = inner.x
        let iy = inner.y
        let ox = outer.x
        let oy = outer.y

        let code = calcOutcode(ox, oy)

        while (true) {
          if (!code) {
            break
          }

          if (code & OUTCODE.TOP) {
            ox = ox + ((ix - ox) / (iy - oy)) * (top - oy)
            oy = top
          } else if (code & OUTCODE.RIGHT) {
            oy = oy + ((iy - oy) / (ix - ox)) * (right - ox)
            ox = right
          } else if (code & OUTCODE.BOTTOM) {
            ox = ox + ((ix - ox) / (iy - oy)) * (bottom - oy)
            oy = bottom
          } else if (code & OUTCODE.LEFT) {
            oy = oy + ((iy - oy) / (ix - ox)) * (left - ox)
            ox = left
          }

          code = calcOutcode(ox, oy)
        }

        return { x: ox, y: oy }
      },
      [OUTCODE.BOTTOM, OUTCODE.INSIDE, OUTCODE.LEFT, OUTCODE.RIGHT, OUTCODE.TOP]
    )

    // 말풍선의 회전각을 구하기 위한 함수
    // 말풍선의 anchor가 TooltipMarker가 있는 방향을 바라보도록 회전시킬 각을 구합니다.
    const getAngle = (center:{x:number,y:number}, target:{x:number,y:number}) => {
      const dx = target.x - center.x
      const dy = center.y - target.y
      const deg = (Math.atan2(dy, dx) * 180) / Math.PI

      return ((-deg + 360) % 360 | 0) + 90
    }

    // target의 위치를 추적하는 함수
    const tracking = useCallback(() => {
      const proj = map.getProjection()

      // 지도의 영역을 구합니다.
      const bounds = map.getBounds()

      // 지도의 영역을 기준으로 확장된 영역을 구합니다.
      const extBounds = extendBounds(bounds, proj)

      // target이 확장된 영역에 속하는지 판단하고
      if (extBounds.contain(positionLatlng)) {
        // 속하면 tracker를 숨깁니다.
        setVisible(false)
      } else {
        // target이 영역 밖에 있으면 계산을 시작합니다.

        // 지도 bounds를 기준으로 클리핑할 top, right, bottom, left를 재계산합니다.
        //
        //  +-------------------------+
        //  | Map Bounds              |
        //  |   +-----------------+   |
        //  |   | Clipping Rect   |   |
        //  |   |                 |   |
        //  |   |        *       (A)  |     A
        //  |   |                 |   |
        //  |   |                 |   |
        //  |   +----(B)---------(C)  |
        //  |                         |
        //  +-------------------------+
        //
        //        B
        //
        //                                       C
        // * 은 지도의 중심,
        // A, B, C가 TooltipMarker의 위치,
        // (A), (B), (C)는 각 TooltipMarker에 대응하는 tracker입니다.
        // 지도 중심과 각 TooltipMarker를 연결하는 선분이 있다고 가정할 때,
        // 그 선분과 Clipping Rect와 만나는 지점의 좌표를 구해서
        // tracker의 위치(top, left)값을 지정해주려고 합니다.
        // tracker 자체의 크기가 있기 때문에 원래 지도 영역보다 안쪽의 가상 영역을 그려
        // 클리핑된 지점을 tracker의 위치로 사용합니다.
        // 실제 tracker의 position은 화면 좌표가 될 것이므로
        // 계산을 위해 좌표 변환 메소드를 사용하여 모두 화면 좌표로 변환시킵니다.

        // TooltipMarker의 위치
        const pos = proj.containerPointFromCoords(positionLatlng)

        // 지도 중심의 위치
        // @ts-ignore
        const center = proj.containerPointFromCoords(map.getCenter())

        // 현재 보이는 지도의 영역의 남서쪽 화면 좌표
        const sw = proj.containerPointFromCoords(bounds.getSouthWest())

        // 현재 보이는 지도의 영역의 북동쪽 화면 좌표
        const ne = proj.containerPointFromCoords(bounds.getNorthEast())

        // 클리핑할 가상의 내부 영역을 만듭니다.
        const top = ne.y + CLIP_BUFFER
        const right = ne.x - CLIP_BUFFER
        const bottom = sw.y - CLIP_BUFFER
        const left = sw.x + CLIP_BUFFER

        // 계산된 모든 좌표를 클리핑 로직에 넣어 좌표를 얻습니다.
        const clipPosition = getClipPosition(
          top,
          right,
          bottom,
          left,
          center,
          pos
        )

        // 클리핑된 좌표를 tracker의 위치로 사용합니다.
        setTracerPosition(clipPosition)

        // 말풍선의 회전각을 얻습니다.
        const angle = getAngle(center, pos)

        // 회전각을 CSS transform을 사용하여 지정합니다.
        // 브라우저 종류에따라 표현되지 않을 수도 있습니다.
        // https://caniuse.com/#feat=transforms2d
        setTracerAngle(angle)

        // target이 영역 밖에 있을 경우 tracker를 노출합니다.
        setVisible(true)
      }
    }, [getClipPosition, map, positionLatlng])

    const hideTracker = useCallback(() => {
      setVisible(false)
    }, [])

    useEffect(() => {
      node.current.style.position = "absolute"
      node.current.style.whiteSpace = "nowrap"
    }, [])

    // 상하좌우로 BOUNDS_BUFFER(30px)만큼 bounds를 확장 하는 함수
    //
    //  +-----------------------------+
    //  |              ^              |
    //  |              |              |
    //  |     +-----------------+     |
    //  |     |                 |     |
    //  |     |                 |     |
    //  |  <- |    Map Bounds   | ->  |
    //  |     |                 |     |
    //  |     |                 |     |
    //  |     +-----------------+     |
    //  |              |              |
    //  |              v              |
    //  +-----------------------------+
    //
    // 여기서는 TooltipMaker가 완전히 안보이게 되는 시점의 영역을 구하기 위해서 사용됩니다.
    // TooltipMarker는 60x60 의 크기를 가지고 있기 때문에
    // 지도에서 완전히 사라지려면 지도 영역을 상하좌우 30px만큼 더 드래그해야 합니다.
    // 이 함수는 현재 보이는 지도 bounds에서 상하좌우 30px만큼 확장한 bounds를 리턴합니다.
    // 이 확장된 영역은 TooltipMarker가 화면에서 보이는지를 판단하는 영역으로 사용됩니다.
    const extendBounds = (bounds: kakao.maps.LatLngBounds, proj: kakao.maps.MapProjection) => {
      // 주어진 bounds는 지도 좌표 정보로 표현되어 있습니다.
      // 이것을 BOUNDS_BUFFER 픽셀 만큼 확장하기 위해서는
      // 픽셀 단위인 화면 좌표로 변환해야 합니다.
      const sw = proj.pointFromCoords(bounds.getSouthWest())
      const ne = proj.pointFromCoords(bounds.getNorthEast())

      // 확장을 위해 각 좌표에 BOUNDS_BUFFER가 가진 수치만큼 더하거나 빼줍니다.
      sw.x -= BOUNDS_BUFFER
      sw.y += BOUNDS_BUFFER

      ne.x += BOUNDS_BUFFER
      ne.y -= BOUNDS_BUFFER

      // 그리고나서 다시 지도 좌표로 변환한 extBounds를 리턴합니다.
      // extBounds는 기존의 bounds에서 상하좌우 30px만큼 확장된 영역 객체입니다.
      return new kakao.maps.LatLngBounds(
        proj.coordsFromPoint(sw),
        proj.coordsFromPoint(ne)
      )
    }

    useEffect(() => {
      kakao.maps.event.addListener(map, "zoom_start", hideTracker)
      kakao.maps.event.addListener(map, "zoom_changed", tracking)
      kakao.maps.event.addListener(map, "center_changed", tracking)
      tracking()

      return () => {
        kakao.maps.event.removeListener(map, "zoom_start", hideTracker)
        kakao.maps.event.removeListener(map, "zoom_changed", tracking)
        kakao.maps.event.removeListener(map, "center_changed", tracking)
        setVisible(false)
      }
    }, [map, hideTracker, tracking])

    return (
      <>
        <AbstractOverlay onAdd={onAdd} onRemove={onRemove} draw={draw} />
        {visible
          ? ReactDOM.createPortal(
              <Tracker position={tracerPosition} angle={tracerAngle}/>,
            //   @ts-ignore
              map.getNode()
            )
          : ReactDOM.createPortal(
            <Marker key={idx} idx={idx} tag={tag} position={position} onFire={onFire!}
            telno={telno} description={description} address={address} title={title} setPos={setPos} selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx}
            star={star} setMarkers={setMarkers}/>,
              node.current
            )}
       </>
    )
}

export const KakaoMap = ({mapPos, setMapPos, markers, curPos, setCurPos, setSelectedIdx, selectedIdx, onFire, onFireMarkers, setMarkers, isStarToggled}: KakaoMapProps) => {

    // const [mapPos, setMapPos] = useState({lat: pos.lat, lng:pos.lng})

    const [mapNE, setMapNE] = useState({lat: 0, lng:0});
    const [mapSW, setMapSW] = useState({lat: 0, lng:0});
    const [level, setLevel] = useState(10);

    const tooManyMarkers = useRef(false)
    const noMarkers = useRef(false)

    // get current position and mark

    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
              (position) => {
                  setCurPos((prev) => ({
                      ...prev,
                      center: {
                          lat: position.coords.latitude,
                          lng: position.coords.longitude,
                      },
                      isLoading: false,
                  }))
                  },
              (err) => {
                  setCurPos((prev) => ({
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
                lat: curPos.center.lat,
                lng: curPos.center.lng
            })
        }, [curPos])

        const makeMapMarkers = (mks: MarkerType[], NE: {lat:number, lng:number}, SW: {lat:number, lng:number}) => {
            const result = []
            // let resultLength = 0
            for (let i = 0; i < mks.length; i++) {
                if (SW.lat < mks[i].position.lat && mks[i].position.lat < NE.lat && SW.lng < mks[i].position.lng && mks[i].position.lng < NE.lng) {
                    result.push(
                        <Marker setSelectedIdx={setSelectedIdx} key={i} idx={i} tag={mks[i].tag} position={mks[i].position} onFire={mks[i].onFire!}
                            telno={mks[i].telno} description={mks[i].description} address={mks[i].address} title={mks[i].title} setPos={setMapPos} selectedIdx={selectedIdx}
                            star={mks[i].isStar!} setMarkers={setMarkers}/>
                        )
                }
                if (result.length > 900) {
                    noMarkers.current = false
                    tooManyMarkers.current = true
                    return []
                }
            }
            if (result.length == 0) {
                tooManyMarkers.current = false
                noMarkers.current = true
                return []
            }
            noMarkers.current = false
            tooManyMarkers.current = false
            return result
        }

        const setCenterAndBound = (map: any) => {
            const NE = map.getBounds().getNorthEast()
            setMapNE({lat:NE.getLat(), lng:NE.getLng()})
            const SW = map.getBounds().getSouthWest()
            setMapSW({lat:SW.getLat(), lng:SW.getLng()})
            const latlng = map.getCenter()
            setMapPos({lat:latlng.getLat(), lng:latlng.getLng()})
            // console.log(map.getLevel())
        }

        const floatingAdsOnFire = (markers:MarkerType[]) => {
          let result:JSX.Element[] = []
          let adsIdx = 0;
          for (let i=0; i<markers.length; i++) {
            if (markers[i].onFire) {
              result.push(<AdsWindow key={i} idx={adsIdx} title={markers[i].title} pos={markers[i].position} tag={markers[i].tag}/>)
              adsIdx += 1
            }
          }
          return result
        }
        
        return (
            <Map 
                center={mapPos}
                isPanto={true}
                style={{
                    width: "100%",
                    height: "100%",
                }}
                level={level}
                onClick={() => setSelectedIdx(-1)}
                onDragEnd={setCenterAndBound}
                onIdle={setCenterAndBound}
                onBoundsChanged={setCenterAndBound}
                onCenterChanged={setCenterAndBound}
                onTileLoaded={setCenterAndBound}
                onZoomChanged={(map) => setLevel(map.getLevel())}
                >
                <MarkerClusterer
                averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
                minLevel={8} // 클러스터 할 최소 지도 레벨
                calculator={[50, 100, 200, 300]}
                minClusterSize={1}
                // styles={[{zIndex: -1}, {zIndex: -1}, {zIndex: -1}, {zIndex: -1}]}
                >
                  {!onFire && makeMapMarkers(markers, mapNE, mapSW)}
                </MarkerClusterer>
                {(onFire || isStarToggled || tooManyMarkers.current || (!tooManyMarkers.current && !noMarkers.current)) && markers.map((marker, i) => 
                    marker.onFire && <TooltipMarker setSelectedIdx={setSelectedIdx} key={i} idx={i} tag={marker.tag} position={marker.position} onFire={marker.onFire!}
                    telno={marker.telno} description={marker.description} address={marker.address} title={marker.title} setPos={setMapPos} selectedIdx={selectedIdx} star={marker.isStar!} setMarkers={setMarkers}/>
                )}
                {(onFire || isStarToggled || tooManyMarkers.current || (!tooManyMarkers.current && !noMarkers.current)) && floatingAdsOnFire(markers)}
                {noMarkers.current && onFireMarkers.map((marker, i) => 
                    marker.onFire && <TooltipMarker setSelectedIdx={setSelectedIdx} key={i} idx={i} tag={marker.tag} position={marker.position} onFire={marker.onFire!}
                    telno={marker.telno} description={marker.description} address={marker.address} title={marker.title} setPos={setMapPos} selectedIdx={selectedIdx} star={marker.isStar!} setMarkers={setMarkers}/>
                )}
                {noMarkers.current && floatingAdsOnFire(onFireMarkers)}
                {!curPos.isLoading &&
                <MapMarker position={curPos.center}
                    image={{
                        src: "/images/current-position.png",
                        size: {width: 20, height: 20},
                        options: {offset: {x: 10, y: 10}},
                    }}
                    onClick={() => setMapPos({
                        lat: curPos.center.lat,
                        lng: curPos.center.lng
                    })}
                />}
                <MapTypeControl position={"TOPRIGHT"}/>
                <ReSetttingMapBounds markers={markers}/>
                {!onFire && tooManyMarkers.current &&
                <Alert>
                    <p className='text-lg font-nsb'>⚠️ 표시되는 장소가 너무 많습니다!</p>
                    <p className='text-base'>검색 조건을 다시 설정하거나 지도를 확대하여 주십시오.</p>
                </Alert>
                }
                {!isStarToggled && !onFire && noMarkers.current &&
                <Alert>
                    <p className='text-lg font-nsb'>⚠️ 표시할 장소가 없습니다!</p>
                    <p className='text-base'>검색 조건을 다시 설정하거나 지도를 이동시켜 주십시오.</p>
                </Alert>
                }
                {isStarToggled && !onFire && noMarkers.current &&
                <Alert>
                    <p className='text-lg font-nsb'>⚠️ 현재 찜한 장소가 없습니다!</p>
                    <p className='text-base'>장소들을 💕찜하여 여러분만의 지도를 만들어 보십시오.</p>
                </Alert>
                }
                {isStarToggled && !onFire && !noMarkers.current &&
                <Alert>
                    <p className='text-lg font-nsb'>💕 찜한 장소만 표시하는 중입니다!</p>
                    <p className='text-base'>어디 좋은데 가시나 봅니다?</p>
                </Alert>
                }
            </Map>
    )
}

const ReSetttingMapBounds = ({
    markers,
  }: {
    markers: MarkerType[],
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
        if (markers.length == 0) return;
        else map.setBounds(bounds)
    }, [markers])
  
    return (<p/>)
  }
  