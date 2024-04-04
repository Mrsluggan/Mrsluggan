import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    const navItems = [
        { id: 1, text: 'Home', link: "/" },
        { id: 2, text: 'Portfolio', link: "/portfolio" },
        { id: 3, text: 'About', link: "/about" },
        { id: 4, text: 'Contact', link: "/contact" }
    ]

    return (
        <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            {/* Logo */}
            <h1 className='w-full text-3xl font-bold text-[#F2613F]'>SLUGGAN</h1>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <a href={item.link}>
                    <li
                        key={item.id}
                        className='p-4 hover:bg-[#9B3922] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                    >
                        {item.text}
                    </li>
                    </a>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                {/* Mobile Logo */}
                <h1 className='w-full text-3xl font-bold text-[#F2613F] m-4'>SLUGGAN</h1>

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 border-b rounded-xl hover:bg-[#9B3922] duration-300 hover:text-black cursor-pointer border-gray-600'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};