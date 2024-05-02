interface AdsBarFloatProps {
}

export const AdsBarFloat = ({} : AdsBarFloatProps) => {
    return (
        <div className='flex-none w-full h-32 min-h-32 p-2 bg-slate-200 shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] rounded-[3px]'>
            <a href="" className="w-full h-full flex items-center justify-center">
                <p className="text-4xl font-nse text-slate-100">This Is Advertising</p>
            </a>
        </div>
    )
}