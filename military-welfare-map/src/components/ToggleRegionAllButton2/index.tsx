import PublicIcon from '@mui/icons-material/Public';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PublicOffIcon from '@mui/icons-material/PublicOff';

interface ToggleRegionAllButton2Props {
    toggleState: number
    onClicked: () => void
    label: string
}

export const ToggleRegionAllButton2 = ({toggleState, onClicked, label}: ToggleRegionAllButton2Props) => {

    return (
        <button className={`flex flex-col w-14 items-center justify-center rounded-[3px] shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] focus:outline-none
                            ${toggleState == 0
                                ? `bg-white shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] text-gray-600`
                                : toggleState == 1 
                                    ? `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] text-white bg-zinc-400`
                                    : `shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.3)] text-white bg-zinc-500`
                            }
                            `}
                onClick={onClicked}>
            {toggleState == 0 ? <PublicOffIcon className='text-lg' key={0}/> : toggleState == 1 ? <TravelExploreIcon className='text-lg' key={0}/> : <PublicIcon className='text-lg' key={0}/>}
            <p className='text-sm'>{label}</p>
        </button>
    )
}