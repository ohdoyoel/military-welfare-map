import { NavButton } from "../NavButton"
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface NavBarProps {
    setIsSearch: Dispatch<SetStateAction<boolean>>
}

export const NavBar = ({setIsSearch} : NavBarProps) => {
    const [isSearch, _setIsSearch] = useState(true)
    const [isChat, setIsChat] = useState(false)

    useEffect(() => {
        setIsSearch(isSearch)
    }, [isSearch])

    return (
        <div className='w-full h-20 p-2 bg-emerald-500 flex flex-row justify-around items-center'>
            <NavButton isToggled={isSearch} onClicked={() => {_setIsSearch(true); setIsChat(false)}}>
                <SearchIcon className='text-white' fontSize='medium'/>
                <p className={`text-sm text-white ${isSearch ? 'font-nsb' : 'font-nsr'}`}>장소 검색</p>
            </NavButton>
            <NavButton isToggled={isChat} onClicked={() => {setIsChat(true); _setIsSearch(false)}}>
                <ChatIcon className='text-white' fontSize='medium'/>
                <p className={`text-sm text-white ${isChat ? 'font-nsb' : 'font-nsr'}`}>오상병 부르기</p>
            </NavButton>
        </div>
    )
}