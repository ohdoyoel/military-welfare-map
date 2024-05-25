import React, { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';
import { ToggleTagButton } from '../ToggleTagButton';
import { orderToTag, tagIconForButton, tagLabel } from '@/src/types/tagIconLabel';
import { ToggleTagAllButton } from '../ToggleTagAllButton';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

interface ToggleTagsProps {
    toggleState: number
    allToggleClicked: () => void
    toggled: boolean[]
    setToggled: Dispatch<SetStateAction<boolean[]>>
}

const NUM_OF_TAGS = 12

export const ToggleTags = ({toggleState, allToggleClicked, toggled, setToggled}: ToggleTagsProps) => {

    const toggleTagButtonList = () => {
        const result = []

        result.push(
            <ToggleTagAllButton toggleState={toggleState} onClicked={allToggleClicked}>
                {toggleState == 0 ? <CheckBoxOutlineBlankOutlinedIcon className='text-lg' key={0}/> : toggleState == 1 ? <IndeterminateCheckBoxIcon className='text-lg' key={0}/> : <CheckBoxIcon className='text-lg' key={0}/>}
                <p className='text-xs'>모든 태그</p>
            </ToggleTagAllButton>
        )

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