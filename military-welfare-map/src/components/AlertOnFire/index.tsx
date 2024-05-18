import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoneyIcon from '@mui/icons-material/Money';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DiscountIcon from '@mui/icons-material/Discount';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';

interface AlertOnFireProps {
    children: React.ReactNode
}

export const AlertOnFire = ({children} : AlertOnFireProps) => {
    return (
        <div className={`absolute top-12 sm:top-2 left-1 sm:left-0 right-1 sm:right-0 m-auto sm:w-[450px] z-10 sm:h-20 h-12 bg-white flex flex-row shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] rounded-[3px]`}>
            <div className={`flex-none w-1 h-full bg-emerald-600 rounded-l-[3px]`}/>
            <div className={`flex-none sm:w-20 w-10 h-full bg-gradient-to-br from-emerald-300 to-emerald-600 text-white flex flex-col items-center justify-center`}>
                <DiscountOutlinedIcon className='text-white sm:text-3xl text-xl'/>
                <p className='hidden sm:blcok text-base text-white'>초특가 세일</p>
                <p className='block sm:hidden text-sm text-white'>세일</p>
            </div>
            <div className={`grow w-0 h-full bg-white text-gray-600 flex flex-col items-start justify-center sm:px-4 px-3 rounded-r-[3px]`}>
                {children}
            </div>
        </div>
    )
}