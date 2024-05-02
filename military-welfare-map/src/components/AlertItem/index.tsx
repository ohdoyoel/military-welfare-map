import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface AlertItemProps {
    children: React.ReactNode
}

export const AlertItem = ({children} : AlertItemProps) => {
    return (
        <div className={`w-full z-10 h-full bg-white flex flex-col rounded-[3px]`}>
            {/* <div className={`flex-none w-1 h-full bg-cyan-600 rounded-l-[3px]`}/>
            <div className={`flex-none w-20 h-full bg-cyan-500 flex flex-col items-center justify-center`}>
                <InfoOutlinedIcon className='text-3xl text-white'/>
                <p className='text-sm text-white'>알림</p>
            </div> */}
            <div className={`grow h-full bg-white text-gray-600 flex flex-col items-center justify-center px-4 rounded-r-[3px]`}>
                <InfoOutlinedIcon className='w-16 h-16 text-gray-600 mb-4'/>
                {children}
            </div>
        </div>
    )
}