import { Dispatch, SetStateAction } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

interface HeaderProps {
    isStarToggled: boolean
    setIsStarToggled: Dispatch<SetStateAction<boolean>>
}

export const Header = ({isStarToggled, setIsStarToggled}: HeaderProps) => {
        return (
        <div className='flex-none w-full h-14 bg-emerald-500 flex justify-between items-center'>
            <a href="" className="flex flex-row p-4">
                <p className="text-2xl text-white font-nsb">병영생활</p>
                <p className="text-2xl text-white font-nse">지도</p>
            </a>
            <button className={`flex flex-row gap-2 px-1 items-center h-8 z-10 rounded-[3px] m-2 focus:outline-none text-white text-2xl
                                ${isStarToggled
                                    ? `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] bg-emerald-600`
                                    : `shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]`} 
                                `} onClick={() => setIsStarToggled(!isStarToggled)}>
                <p className="text-sm text-white font-nsr">찜 장소만 표시</p>
                {isStarToggled ? <FavoriteIcon/> : <FavoriteBorder/>}
            </button>
        </div>
    )
}