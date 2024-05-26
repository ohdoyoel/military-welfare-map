import { Dispatch, SetStateAction } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import MapIcon from '@mui/icons-material/Map';

interface HeaderProps {
    isStarToggled: boolean
    setIsStarToggled: Dispatch<SetStateAction<boolean>>
}

export const Header = ({isStarToggled, setIsStarToggled}: HeaderProps) => {
        return (
        <div className='flex-none w-full h-12 bg-emerald-500 flex justify-between items-center'>
            <a href="" className="flex flex-row m-1 p-1 sm:p-2">
                <MapIcon className='text-3xl text-white mr-1'/>
                <p className="text-2xl text-white font-nsb">병영생활</p>
                <p className="text-2xl text-white font-nse">지도</p>
            </a>
            {/* ${isStarToggled
            ? `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] bg-emerald-600`
            : `shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]`}  */}
            <button className={`group relative flex flex-row gap-2 px-1 items-center h-8 z-10 rounded-[3px] m-2 focus:outline-none text-white
                                `}
                                onClick={() => setIsStarToggled(!isStarToggled)}>
                {/* <p className="text-xs text-white font-nsr">찜한 장소</p> */}
                <div className="hidden group-hover:block absolute bg-gray-600 inset-y-0 my-auto h-6 -left-[74px] py-1 px-2 after:content-[''] after:absolute after:w-0 after:h-0 after:border-4 after:border-gray-600 after:-right-0.5 after:top-1/2 after:-translate-y-1/2 after:rotate-45 text-gray-200 text-xs rounded-[3px]">찜한 장소</div>
                {isStarToggled ? <FavoriteIcon fontSize="medium"/> : <FavoriteBorder fontSize="medium"/>}
            </button>
        </div>
    )
}