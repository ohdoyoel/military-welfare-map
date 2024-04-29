import React, { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';
import { ToggleTagButton } from '../ToggleTagButton';
import { orderToTag, tagIconForButton, tagLabel } from '@/src/types/tagIconLabel';

interface ToggleTagsProps {
    toggled: boolean[]
    setToggled: Dispatch<SetStateAction<boolean[]>>
}

const NUM_OF_TAGS = 12

export const ToggleTags = ({toggled, setToggled}: ToggleTagsProps) => {

    const toggleTagButtonList = () => {
        const result = []

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