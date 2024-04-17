import { NavButton } from "../NavButton"
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';

export const NavBar = () => {
    const isClicked = () => {
        console.log("hello")
    }

    return (
        <div className='w-full h-20 p-2 bg-emerald-500 flex flex-row justify-around items-center'>
            <NavButton isToggled={true} onClicked={isClicked}>
                <SearchIcon className='text-white' fontSize='medium'/>
                <p className="text-base text-white font-nsr">장소 검색</p>
            </NavButton>
            <NavButton isToggled={false} onClicked={isClicked}>
                <ChatIcon className='text-white' fontSize='medium'/>
                <p className="text-base text-white font-nsr">오상병 부르기</p>
            </NavButton>
        </div>
    )
}