import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <div className='flex justify-center  '>
    <div className="nav w-[60vw] text-white text-2xl pt-3 pb-3 pl-4 pr-4 hover:shadow-2xl hover:shadow-[#B804B1]
     flex justify-between items-center border-b-2 border-[#B804B1]">
        <h1 className=''>AgencyName</h1>

        <ul className='contacts md:flex items-center text-[#B804B1] gap-3 hidden'>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="menu md:hidden">
          <GiHamburgerMenu onClick={toggleMenu}/>
        </div>
    </div>
    </div>
     {/* Mobile Menu Sidebar */}
     <div
        className={`md:hidden absolute top-15 right-0 h-[50vh] w-64 bg-[#B804B1] text-white text-2xl p-4 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="flex flex-col gap-3">
          <li>LinkedIn</li>
          <li>Instagram</li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

    </>
  )
}

export default Nav