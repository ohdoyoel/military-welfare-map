import SearchIcon from '@mui/icons-material/Search';
import { Dispatch, SetStateAction } from 'react';

interface SearchInputProps {
    searchText: string
    setSearchText: Dispatch<SetStateAction<string>>
    onKeyUp: () => void
}

export const SearchInput = ({searchText, setSearchText, onKeyUp}: SearchInputProps) => {

    return (
        <div className="flex-none w-full h-12 bg-emerald-500 flex justify-center px-4">
            <div className='relative w-full h-full flex shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]'>
                <SearchIcon className='absolute top-[12px] left-2.5 text-gray-500' fontSize='medium'/>
                <input id="searchInput" type="text" onKeyUp={onKeyUp}
                        className="h-full w-full p-3 pl-10 text-base text-gray-900 rounded-l-[3px] focus:outline-none" placeholder="상호명, 주소(지역명), 태그, 전화번호로 검색해보십시오"/>

                <button className="h-full text-xl bg-white h-full px-2 text-gray-500 font-nse" onClick={()=>{
                    let input;
                    input = document.getElementById("searchInput") as HTMLInputElement;
                    input.value = ''
                    setSearchText(input.value);
                    input.focus()
                }}>
                    {searchText && `×`}
                </button>
            </div>
        </div>
    )
}