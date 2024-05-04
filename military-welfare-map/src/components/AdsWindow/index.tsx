import { ReactElement } from "react"
import { tagOrderBorderColor, tagOrderBgColor, tagOrderBgGradientColor, tagOrderHexColor } from "@/src/types/tagColor";
import { tagIconForInfoWindow, tagLabel, tagToOrder } from "@/src/types/tagIconLabel";
import { CustomOverlayMap, MapInfoWindow, MapMarker, Polyline, useMap } from "react-kakao-maps-sdk";

interface AdsWindowProps {
    idx: number
    pos: {lat:number, lng:number}
    tag: number
}

const idxToMargin = [
    '-mt-[220px] -ml-[400px] ',
    '-mt-[48px] -ml-[400px] ',
    'mt-[208px] -ml-[400px] ',
]
    
const idxToDelta = [
    220-(128-50),-400+(380-24), 
    48,-400+(380-18),
    -208+(128+20),-400+(380-18), 
]

const LAT_CONST = 0.00000081
const LNG_CONST = 0.00000074

export const AdsWindow = ({idx, pos, tag}: AdsWindowProps) => {
    const map = useMap()

    const adsPos = () => {
        return {
            lat: pos.lat + LAT_CONST * Math.pow(2, map.getLevel()) * idxToDelta[2*idx],
            lng: pos.lng + LNG_CONST * Math.pow(2, map.getLevel()) * idxToDelta[2*idx+1]
        }
    }  

    return (
        <div>
        <CustomOverlayMap position={pos}>
            <a href="" className={`${idxToMargin[idx]} border-4 ${tagOrderBorderColor[tagToOrder[tag]].light} w-[380px] h-[128px] bg-slate-200 shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] rounded-[3px] flex items-center justify-center`}>
                <p className="text-4xl font-nse text-slate-100">This Is Advertising</p>
            </a>
        </CustomOverlayMap>
        {/* {idxToLine[idx]} */}
        <Polyline
            path={[
            [
                adsPos(),
                pos,
            ],
            ]}
            strokeWeight={5} // 선의 두께 입니다
            strokeColor={tagOrderHexColor[tagToOrder[tag]].normal} // 선의 색깔입니다
            strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle={"solid"} // 선의 스타일입니다
        />,
        </div>
    )
}