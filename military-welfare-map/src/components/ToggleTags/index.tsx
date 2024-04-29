import React, { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';
import { ToggleTagButton } from '../ToggleTagButton';
import { tagIconForButton, tagLabel } from '@/src/types/tagIconLabel';

interface ToggleTagsProps {
    toggled: boolean[]
    setToggled: Dispatch<SetStateAction<boolean[]>>
}

const NUM_OF_TAGS = 12

export const ToggleTags = ({toggled, setToggled}: ToggleTagsProps) => {

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
                <ToggleTagButton onClicked={() => setToggled(isToggled => isToggled.map((toggled, idx) => idx == orderToTag[i] ? !toggled : toggled))} isToggled={toggled[orderToTag[i]]} order={i} key={i}>
                    {tagIconForButton[orderToTag[i]]}
                    <p className=' text-xs'>{tagLabel[orderToTag[i]]}</p>
                </ToggleTagButton>
            )
        }

        return result
    }

    // useEffect(() => {
    //     setToggled(isToggled)
    // }, [isToggled])

    return (
        <div className="flex-none w-full h-12 bg-emerald-500 px-4 flex items-center pt-1">
            <div className='w-full h-full grid grid-cols-13 gap-[60px] content-center overflow-x-auto'>
                {toggleTagButtonList()}
            </div>
        </div>
    )
}