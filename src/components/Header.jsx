import logo from '../assets/logo.jpeg';
import { IoSearch } from "react-icons/io5";
import { BsFillEnvelopeFill } from "react-icons/bs";
import Li from './Li';

function Header() {

    return (
        <header className='w-full flex justify-between py-3 px-7 bg-slate-200 sticky top-0'>
            <div className='flex justify-center items-center gap-8'>
                <div className='w-16 rounded-full overflow-hidden'>
                    <img src={logo} alt="Logo BidKiicks" className='w-full'/>
                </div>
                <div className='flex justify-center items-center border p-2 gap-2 bg-yellow-50'>
                    <IoSearch size={28}/>
                    <input type="text" placeholder='Search for brand, item, etc' className='w-[480px] bg-inherit'/>
                </div>
            </div>
            <div className='flex justify-center items-center font-semibold text-xl gap-8'>
                <nav className='flex justify-center items-center'>
                    <ul className='flex justify-center items-center gap-6'>
                        <Li>About</Li>
                        <Li>Help</Li>
                        <Li>Sell</Li>
                        <li className='flex justify-center items-center cursor-pointer hover:text-yellow-500'>
                            <BsFillEnvelopeFill size={24}/>
                        </li>
                    </ul>
                </nav>
                <div className='flex justify-center items-center gap-7'>
                    <button className='px-7 py-2 border hover:bg-slate-100'>Login</button>
                    <button className='px-7 py-2 border bg-black text-white hover:bg-slate-700'>Sign Up</button>
                </div>
            </div>
        </header>
    )
}

export default Header
