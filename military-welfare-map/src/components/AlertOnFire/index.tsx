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
        <div className={`absolute top-2 left-0 right-0 m-auto w-[450px] z-10 h-20 bg-white flex flex-row shadow-[2px_2px_2px_0_rgba(0,0,0,0.3)] rounded-[3px]`}>
            <div className={`flex-none w-1 h-full bg-emerald-600 rounded-l-[3px]`}/>
            <div className={`flex-none w-20 h-full bg-gradient-to-br from-emerald-300 to-emerald-600 text-white flex flex-col gap-1 items-center justify-center`}>
                <DiscountOutlinedIcon className='text-3xl text-white'/>
                <p className='text-sm text-white'>초특가 세일</p>
            </div>
            <div className={`grow w-0 h-full bg-white text-gray-600 flex flex-col items-start justify-center px-4 rounded-r-[3px]`}>
                {children}
            </div>
        </div>
    )
}