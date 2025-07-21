import React from 'react'
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import logo from "../../assets/productsBranch/headerlogo.svg"
import { headerList } from '../../static';
const Header = () => {
  return (
    <header className="header w-full sticky top-0 left-0 bg-white z-50">
      <nav className="container flex justify-between items-center py-[20px]">
        <NavLink><img src={logo} alt="" /></NavLink>
        <ul className="flex justify-between items-center gap-[50px] max-[950px]:hidden">
          {
            headerList?.map(({id, link})=>(
              <a key={id}><span className='text-black font-medium duration-200 hover:cursor-pointer hover:underline'>{link}</span></a>
            ))
          }
        </ul>
        <ul className="flex justify-between items-center gap-[50px] max-[550px]:gap-5">
          <a href="#">
            <FaRegUser className='size-5'/>
          </a>
          <a href="#">
            <MdOutlineSearch className='size-6'/>
          </a>
          <a href="#">
            <FaRegHeart className='size-5'/>
          </a>
          <a href="#">
            <AiOutlineShoppingCart className='size-6'/>
          </a>
        </ul>
      </nav>
    </header>
  )
}

export default Header