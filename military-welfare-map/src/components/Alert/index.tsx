import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface AlertProps {
    children: React.ReactNode
}

export const Alert = ({children} : AlertProps) => {
    return (
        <div className={`absolute top-2 left-0 right-0 m-auto w-[490px] z-10 h-20 bg-white flex flex-row shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] rounded-[3px]`}>
            <div className={`flex-none w-1 h-full bg-cyan-600 rounded-l-[3px]`}/>
            <div className={`flex-none w-20 h-full bg-cyan-500 flex flex-col items-center justify-center`}>
                <InfoOutlinedIcon className='text-3xl text-white'/>
                <p className='text-sm text-white'>알림</p>
            </div>
            <div className={`grow w-0 h-full bg-white text-gray-600 flex flex-col items-start justify-center px-4 rounded-r-[3px]`}>
                {children}
            </div>
        </div>
    )
}