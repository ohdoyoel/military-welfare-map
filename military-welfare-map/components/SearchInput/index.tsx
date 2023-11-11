interface SearchInputProps {
    onKeyUp: () => void
}

export const SearchInput = ({onKeyUp}: SearchInputProps) => {
        return (
        <div className="w-full h-12 bg-[#3396ff] flex justify-center px-8">
            <div className='relative w-full shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)]'>
                <svg className="absolute inset-y-0 left-3 w-4 h-full text-gray-500 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <input id="searchInput" type="text" onKeyUp={onKeyUp}
                        className="h-full w-full p-3 pl-10 text-base text-gray-900 rounded-[3px]" placeholder="장소 검색">
                </input>
            </div>
        </div>
    )
}