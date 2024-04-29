import React, { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';
import { ToggleTagButton2 } from '../ToggleTagButton2';
import { tagIconForButton, tagLabel } from '@/src/types/tagIconLabel';

interface ToggleTags2Props {
    toggled: boolean[]
    setToggled: Dispatch<SetStateAction<boolean[]>>
}

const NUM_OF_TAGS = 12

export const ToggleTags2 = ({toggled, setToggled}: ToggleTags2Props) => {

    const toggleTagButtonList = () => {
        const result = []

        // 0: 음식점
        // 1: 카페
        // 2: 미용실
        // 3: 목욕탕
        // 4: 문화/여가
        // 5: 숙박
        // 6: 스포츠/레저 (골프장, 체력단련장)
        // 7: 항공/교통
        // 8: 안경점
        // 9: 병원
        // 10: 예비군
        // 11: 마트
        const orderToTag = [
            0, 1, 11, 2,
            3, 4, 5, 7,
            6, 9, 8, 10
        ]

        for (let i = 0; i < NUM_OF_TAGS; i++) {
            result.push(
                <ToggleTagButton2 onClicked={() => setToggled(isToggled => isToggled.map((toggled, idx) => idx == orderToTag[i] ? !toggled : toggled))} isToggled={toggled[orderToTag[i]]} order={i} key={i}>
                    {tagIconForButton[orderToTag[i]]}
                    <p className=' text-xs'>{tagLabel[orderToTag[i]]}</p>
                </ToggleTagButton2>
            )
        }

        return result
    }


    return (
        <div className="w-fit grid grid-cols-4 pt-4 pb-4 pl-2 gap-2">
            {toggleTagButtonList()}
        </div>
    )
}