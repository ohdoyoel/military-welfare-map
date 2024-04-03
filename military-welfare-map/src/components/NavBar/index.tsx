export const NavBar = () => {
        return (
        <div className='w-full h-14 bg-emerald-500 flex flex-row justify-around items-center'>
            <button className="w-24 h-10 bg-emerald-600">
                <p className="text-base text-white">장소 검색</p>
            </button>
            <button className="w-24 h-10 bg-emerald-600">
                <p className="text-base text-white">오상병 부르기</p>
            </button>
        </div>
    )
}