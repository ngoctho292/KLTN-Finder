import React from 'react'
import { NavLink } from 'react-router-dom'

import { headerMenu } from '../ultis/menu'
import logo from '../asset/image/logo.svg'
import user from '../asset/image/user.png'
import icons from '../ultis/icons'

const Header = () => {
    const { AiFillBell, BiSearchAlt2 } = icons
    const ActiveStyle = 'py-2 px-[25px]  text-[16px] text-[#02E7F5] font-bold'
    const noActiveStyle = 'py-2 px-[25px] font-medium text-[16px] text-white'
    return (
        <div className='flex items-center mx-[48px] justify-between'>
            <div className='flex items-center'>
                <div className=" ">
                    <img src={logo} alt="logo" className='object-contain' />
                </div>
                <div className="">
                    {headerMenu.map((item, index) => (
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => isActive ? ActiveStyle : noActiveStyle}
                            key={index}
                        >
                            {item.text}
                        </NavLink>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-4 text-white">
                <AiFillBell size={25} />
                <BiSearchAlt2 size={25} />
                <img src={user} alt="user" className='w-[48px] h-12 rounded-full border border-blue-500' />
            </div>
        </div>
    )
}

export default Header
