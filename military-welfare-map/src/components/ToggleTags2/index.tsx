import React, { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';
import { ToggleTagButton2 } from '../ToggleTagButton2';
import { orderToTag, tagIconForButton, tagLabel } from '@/src/types/tagIconLabel';

interface ToggleTags2Props {
    toggled: boolean[]
    setToggled: Dispatch<SetStateAction<boolean[]>>
}

const NUM_OF_TAGS = 12

export const ToggleTags2 = ({toggled, setToggled}: ToggleTags2Props) => {

    const toggleTagButtonList = () => {
        const result = []

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