import React from 'react'
import { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    const liStyle = "ml-10 hover:text-red-500 focus:cursor-pointer"
    const liStyleMobile = "ml-5 hover:text-red-500 mb-2"

    return (
        <>
            <div className='mb-2 mt-0 text-4xl font-medium leading-tight text-primary '>
                {/* Large screen*/}
                <div className='hidden md:block'>
                    <nav className='w-full h-20 p-5 flex'>
                        <h1 className='text-red-500 text-5xl'><a href="/">Sluggan</a></h1>
                        <ul className='flex ml-auto mr-5'>
                            <li className={liStyle}><a href='/about'> About </a></li>
                            <li className={liStyle}><a href='/portfolio'> Portfolio </a></li>
                            <li className={liStyle}><a href='/contact'> Contact </a></li>
                        </ul>
                    </nav>
                </div>

                {/* Mobile screen*/}
                <div className='md:hidden'>
                    <nav className='w-full h-20 p-5 flex'>
                        <h1 className='text-red-500'>Sluggan</h1>
                        <button className='ml-auto' onClick={toggleDropdown}>
                            <FiAlignJustify />
                        </button>
                    </nav>
                    {isOpen && (
                        <ul className='block absolute right-0 p-2'>
                            <li className={liStyleMobile}>About</li>
                            <li className={liStyleMobile}>Portfolio</li>
                            <li className={liStyleMobile}>Contact</li>
                        </ul>
                    )}

                </div>
            </div>
        </>
    )
}
