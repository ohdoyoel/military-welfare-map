import React, { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';
import { ToggleTagButton2 } from '../ToggleTagButton2';
import { orderToTag, tagIconForButton, tagLabel } from '@/src/types/tagIconLabel';
import { ToggleTagAllButton2 } from '../ToggleTagAllButton2';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

interface ToggleTags2Props {
    toggleState: number
    allToggleClicked: () => void
    toggled: boolean[]
    setToggled: Dispatch<SetStateAction<boolean[]>>
}

const NUM_OF_TAGS = 12

export const ToggleTags2 = ({toggleState, allToggleClicked, toggled, setToggled}: ToggleTags2Props) => {

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
        <div className="flex flex-row ml-2">
            <ToggleTagAllButton2 toggleState={toggleState} onClicked={allToggleClicked}>
                {toggleState == 0 ? <CheckBoxOutlineBlankOutlinedIcon className='text-lg' key={0}/> : toggleState == 1 ? <IndeterminateCheckBoxIcon className='text-lg' key={0}/> : <CheckBoxIcon className='text-lg' key={0}/>}
                <p className=' text-xs'>모든 태그</p>
            </ToggleTagAllButton2>
            <div className="w-fit grid grid-cols-4 pt-2 pb-4 pl-2 gap-2">
                {toggleTagButtonList()}
            </div>
        </div>
    )
}