import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { ToggleRegionButton } from "../ToggleRegionButton"
import { ToggleRegionButton2 } from "../ToggleRegionButton2"

interface ToggleRegions2Props {
    toggled: boolean[]
    setToggled: Dispatch<SetStateAction<boolean[]>>
}

const NUM_OF_REGIONS = 16
const regionData: string[] = [
    '서울','부산','대구','인천',
    '광주','대전','울산','경기',
    '충북','충남','전북','전남',
    '경북','경남','강원','제주'
]

export const ToggleRegions2 = ({toggled, setToggled}: ToggleRegions2Props) => {
    // const [isEntireToggled, setIsEntireToggled] = useState(true)
    const [isToggled, setIsToggled] = useState(toggled)

    useEffect(() => {
        setIsToggled(toggled)
    }, [toggled])

    // useEffect(() => {
    //     let isAllToggled = true;
    //     for (let i=0; i<isToggled.length; i++) {
    //         if (isToggled[i] == false) {
    //             isAllToggled = false;
    //             break;
    //         }
    //     }
    //     setIsEntireToggled(isAllToggled)
    // }, [isToggled])
    
    // useEffect(() => {
    //     if (isEntireToggled) setIsToggled(Array.from({length: NUM_OF_REGIONS}, () => true))
    //     else {
    //         let isAllToggled = true;
    //         for (let i=0; i<isToggled.length; i++) {
    //             if (isToggled[i] == false) {
    //                 isAllToggled = false;
    //                 break;
    //             }
    //         }
    //         if (isAllToggled) setIsToggled(Array.from({length: NUM_OF_REGIONS}, () => false))
    //         }
    // }, [isEntireToggled])
    
        useEffect(() => {
            setToggled(isToggled)
        }, [isToggled])

    const toggleRegionButtonList = () => {
        const result = []
        // result.push(
        //     <ToggleRegionButton2 onClicked={() => setIsEntireToggled(!isEntireToggled)} isToggled={isEntireToggled} label={"전체"} key={NUM_OF_REGIONS}/>
        // )
        // result.push(<div key={NUM_OF_REGIONS+1}/>)
        // result.push(<div key={NUM_OF_REGIONS+2}/>)
        // result.push(<div key={NUM_OF_REGIONS+3}/>)
        const order = [
            0, 7, 14, 3,
            8, 9, 5, 2,
            12, 13, 1, 6,
            10, 11, 4, 15
        ]
        for (let i=0; i < order.length; i++) {
            result.push(
                <ToggleRegionButton2 onClicked={() => setIsToggled(prevState => prevState.map((item, idx) => idx==order[i] ? !item : item))} isToggled={isToggled[order[i]]} label={regionData[order[i]]} key={i}/>
            )
        }
        return result
    }

    return (
        <div className="w-fit grid grid-cols-4 pl-2 gap-2">
            {toggleRegionButtonList()}
        </div>
    )
}