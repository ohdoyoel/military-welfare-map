import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
    onKeyUp: () => void
}

export const SearchInput = ({onKeyUp}: SearchInputProps) => {

    return (
        <div className="w-full h-12 bg-emerald-500 flex justify-center px-4">
            <div className='relative w-full shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]'>
                <SearchIcon className='absolute top-2.5 left-2.5 text-gray-500' fontSize='medium'/>
                <input id="searchInput" type="text" onKeyUp={onKeyUp}
                        className="h-full w-full p-3 pl-10 text-base text-gray-900 rounded-[3px] focus:outline-none" placeholder="상호명, 주소(지역명), 종류, 전화번호로 검색보세요">
                </input>
            </div>
        </div>
    )
}