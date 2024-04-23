interface AdsBarProps {
}

export const AdsBar = ({} : AdsBarProps) => {
    return (
        <div className='flex-none w-full h-32 min-h-32 p-2 bg-slate-200'>
            <a href="" className="w-full h-full flex items-center justify-center">
                <p className="text-4xl font-nse text-slate-100">This Is Advertising</p>
            </a>
        </div>
    )
}