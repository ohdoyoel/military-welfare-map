import { ReactElement } from "react"
import { tagOrderBgColor, tagOrderBgGradientColor } from "@/src/types/tagColor";
import { tagIconForInfoWindow, tagLabel, tagToOrder } from "@/src/types/tagIconLabel";
import { CustomOverlayMap, MapInfoWindow, MapMarker } from "react-kakao-maps-sdk";

interface AdsWindowProps {
    idx: number
    pos: {lat:number, lng:number}
}

const idxToMargin = [
    '-ml-80 -mt-40',
    '-ml-80 -mt-4',
    '-ml-80 mt-52',
]

// 부모의 부모의 설정값을 바꿔야 함
export const AdsWindow = ({idx, pos}: AdsWindowProps) => {
    return (
        <CustomOverlayMap position={pos}>
            <div className={`w-0 h-0  ${idxToMargin[idx]}`}>
                <a href="" className="w-80 h-32 bg-slate-200 shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] rounded-[3px] flex items-center justify-center">
                    <p className="text-4xl font-nse text-slate-100">This Is Advertising</p>
                </a>
            </div>
        </CustomOverlayMap>
    )
}