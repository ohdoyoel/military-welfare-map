import { ReactElement } from "react"
import { tagOrderBorderColor, tagOrderBgColor, tagOrderBgGradientColor, tagOrderHexColor } from "@/src/types/tagColor";
import { tagIconForInfoWindow, tagLabel, tagToOrder } from "@/src/types/tagIconLabel";
import { CustomOverlayMap, MapInfoWindow, MapMarker, Polyline, useMap } from "react-kakao-maps-sdk";

interface AdsWindowProps {
    idx: number
    title: string
    pos: {lat:number, lng:number}
    tag: number
}

const titleToMargin : {[key:string]: string} = {
    "🎖️ 국방부치킨": '-mt-[220px] -ml-[400px]',
    "🎖️ 병무청과일탕후루": '-mt-[48px] -ml-[400px] ',
    "🎖️ 방위사업청플리마켓": 'mt-[208px] -ml-[400px] ',
    "🎖️ 논산훈련소정문이발소": 'mt-[340px] -ml-[400px]',
    "🎖️ 도구해수욕장해병목욕탕": '-mt-[170px] ml-[430px]',
    "🎖️ 진해군항제": 'mt-[150px] ml-[500px]',
    "🎖️ 가리산레포츠파크": '-mt-[220px] ml-[400px]',
}
    
const titleToDelta : {[key:string]: number[]} = {
    "🎖️ 국방부치킨": [220-(128-50),-400+(380-24)], 
    "🎖️ 병무청과일탕후루" : [48,-400+(380-18)],
    "🎖️ 방위사업청플리마켓" :[-208+(128+20),-400+(380-18)], 
    "🎖️ 논산훈련소정문이발소": [-340+(128+50),-400+(380-18)],
    "🎖️ 도구해수욕장해병목욕탕": [170-(128-30),430-(380-30)],
    "🎖️ 진해군항제": [150-(128+40),500-(380-0)],
    "🎖️ 가리산레포츠파크": [220-(128-50),400-(380-10)],
}

const LAT_CONST = 0.00000081
const LNG_CONST = 0.00000074

export const AdsWindow = ({idx, title, pos, tag}: AdsWindowProps) => {
    const map = useMap()

    const adsPos = () => {
        return {
            lat: pos.lat + LAT_CONST * Math.pow(2, map.getLevel()) * titleToDelta[title][0],
            lng: pos.lng + LNG_CONST * Math.pow(2, map.getLevel()) * titleToDelta[title][1]
        }
    }  

    return (
        <>
        <CustomOverlayMap position={pos} zIndex={20}>
            <a href="" className={`${titleToMargin[title]} border-4 ${tagOrderBorderColor[tagToOrder[tag]].light} w-[380px] h-[128px] bg-slate-200 shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] rounded-[3px] flex items-center justify-center`}>
                <p className="text-4xl font-nse text-slate-100">This Is Advertising</p>
            </a>
        </CustomOverlayMap>
        {/* {idxToLine[idx]} */}
        <Polyline
            path={[
            [adsPos(),pos],
            ]}
            strokeWeight={5} // 선의 두께 입니다
            strokeColor={tagOrderHexColor[tagToOrder[tag]].normal} // 선의 색깔입니다
            strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle={"shortdash"} // 선의 스타일입니다
        />
        </>
    )
}