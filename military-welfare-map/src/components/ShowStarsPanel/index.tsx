import { MarkerType } from "@/src/types/data";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";

interface ShowStarsPanelProps {
    markers: MarkerType[]
}

export const ShowStarsPanel = ({markers}: ShowStarsPanelProps) => {
    const [isOpened, setIsOpened] = useState(false)

    return (
        <div className={`group flex flex-col w-80 focus:outline-none
                            items-center place-content-center rounded-[3px] z-20
                            ${isOpened
                                ? `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] bg-gradient-to-br from-emerald-300 to-emerald-600 h-[400px] text-white`
                                : `shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] bg-white h-20 text-emerald-500`
                            }`}>
            <button className="flex flex-row gap-2">
                <FavoriteIcon className="h-full text-2xl"/>
                <p className="text-2xl font-nse">찜 목록</p>
            </button>
        </div>
    )
}