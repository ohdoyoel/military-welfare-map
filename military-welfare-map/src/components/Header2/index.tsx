import MapIcon from '@mui/icons-material/Map';

export const Header2 = () => {
    return (
        <div className='w-fit h-10 bg-white rounded-[3px] p-1 sm:p-2 text-sm flex items-center'>
            <a href="" className="flex flex-row">
                <MapIcon className='text-3xl text-emerald-500 mr-1'/>
                <p className="text-2xl text-emerald-500 font-nsb">병영생활</p>
                <p className="text-2xl text-emerald-500 font-nse">지도</p>
            </a>
        </div>
    )
}