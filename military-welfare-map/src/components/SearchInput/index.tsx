import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
    onKeyUp: () => void
}

export const SearchInput = ({onKeyUp}: SearchInputProps) => {

    return (
        <div className="w-full h-12 bg-[#3396ff] flex justify-center px-4">
            <div className='relative w-full shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]'>
                <SearchIcon className='absolute top-3 left-3 text-gray-500' fontSize='medium'/>
                <input id="searchInput" type="text" onKeyUp={onKeyUp}
                        className="h-full w-full p-3 pl-10 text-base text-gray-900 rounded-[3px] focus:outline-none" placeholder="장소 검색">
                </input>
            </div>
        </div>
    )
}