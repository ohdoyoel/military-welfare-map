import { useState } from "react"
import { ToggleRegionButton } from "../ToggleRegionButton"

interface ToggleTagsProps {
}

const NUM_OF_TAGS = 16

export const ToggleRegions = () => {
    const [isToggled, setIsToggled] = useState(Array.from({length: NUM_OF_TAGS}, () => false))

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


    return (
        <div className="w-full h-16 bg-emerald-500 px-4 flex items-center py-1">
            <div className='w-full h-full grid grid-cols-13 gap-0'>
                {toggleRegionButtonList()}
            </div>
        </div>
    )
}