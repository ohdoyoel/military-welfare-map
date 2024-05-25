import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { ToggleRegionButton } from "../ToggleRegionButton"
import { ToggleRegionAllButton } from "../ToggleRegionAllButton"

interface ToggleRegionsProps {
    toggleState: number
    allToggleClicked: () => void
    toggled: boolean[]
    setToggled: Dispatch<SetStateAction<boolean[]>>
    setDistance: Dispatch<SetStateAction<number>>
}

const NUM_OF_REGIONS = 16
const regionData: string[] = [
    '서울','부산','대구','인천',
    '광주','대전','울산','경기',
    '충북','충남','전북','전남',
    '경북','경남','강원','제주'
]

export const ToggleRegions = ({toggleState, allToggleClicked, toggled, setToggled, setDistance}: ToggleRegionsProps) => {

    const toggleRegionButtonList = () => {

        const result = []
        result.push(
            <ToggleRegionAllButton toggleState={toggleState} onClicked={allToggleClicked} label={"전국"} key={16}/>
        )

        // 서울 0
        // 경기 7
        // 인천 3
        // 강원 14
        // 충북 8
        // 충남 9
        // 대전 5
        // 대구 2
        // 경북 12
        // 경남 13
        // 부산 1
        // 울산 6
        // 전북 10
        // 전남 11
        // 광주 4
        // 제주 15
        const orderToRel = [
                        0, 7, 3, 14,
                        8, 9, 5, 2,
                        12, 13, 1, 6,
                        10, 11, 4, 15
                    ]
        for (let i = 0; i < orderToRel.length; i++) {
            result.push(
                <ToggleRegionButton onClicked={() => setToggled(isToggled => isToggled.map((toggled, idx) => idx == orderToRel[i] ? !toggled : toggled))} isToggled={toggled[orderToRel[i]]} label={regionData[orderToRel[i]]} key={i}/>
            )
        }

        return result
    }

    // useEffect(() => {
    //     setToggled(isToggled)
    // }, [isToggled])

    return (
        <div className="flex-none w-full h-8 bg-emerald-500 px-4 flex items-center pb-1" onClick={() => setDistance(30)}>
            <div className='w-full h-full grid grid-cols-17 gap-11 content-center overflow-x-scroll'>
                {toggleRegionButtonList()}
            </div>
        </div>
    )
}