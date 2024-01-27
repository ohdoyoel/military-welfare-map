import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { ToggleRegionButton } from "../ToggleRegionButton"

interface ToggleRegionsProps {
    setToggled: Dispatch<SetStateAction<boolean[]>>
}

const NUM_OF_REGIONS = 16

export const ToggleRegions = ({setToggled}: ToggleRegionsProps) => {
    const [isToggled, setIsToggled] = useState(Array.from({length: NUM_OF_REGIONS}, () => false))

    const toggleRegionButtonList = () => {
        const regionData: string[] = [
            '서울','부산','대구','인천',
            '광주','대전','울산','경기',
            '충북','충남','전북','전남',
            '경북','경남','강원','제주'
        ]

        const result = []
        for (let i = 0; i < regionData.length; i++) {
            result.push(
                <ToggleRegionButton onClicked={() => setIsToggled(prevState => prevState.map((item, idx) => idx === i ? !item : item))} isToggled={isToggled[i]} label={regionData[i]} key={i}/>
            )
        }

        return result
    }

    useEffect(() => {
        setToggled(isToggled)
    }, [isToggled])

    return (
        <div className="w-full h-10 bg-emerald-500 px-4 flex items-center pb-1">
            <div className='w-full h-full grid grid-cols-16 gap-11 content-center overflow-x-scroll'>
                {toggleRegionButtonList()}
            </div>
        </div>
    )
}