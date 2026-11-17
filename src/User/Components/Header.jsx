import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {

  const [toggle, setToggle] = useState(false)
  return (
    <>
      {/* Header top part */}
      <div className='grid grid-cols-3 p-3'>
        {/* logo */}
        <div className='flex items-center'>
          <img width={'50px'} height={'50px'} src="https://img.magnific.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
          <h1 className='text-2xl ms-3 font-bold md:hidden'>BOOKSTORE</h1>
        </div>
        {/* Title */}
        <div className='md:flex justify-center items-center hidden'>
          <h1 className='text-3xl font-bold'>BOOKSTORE</h1>

        </div>
        {/* Login */}
        <div className='md:flex items-center justify-end hidden '>
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
          <Link to={'/login'} className='flex justify-center ms-5 border rounded px-3 py-2 hover:bg-black hover:text-white'><FaUser className='me-1' />LOGIN</Link>
        </div>
      </div>
      {/* Navigation part */}
      <nav className='bg-black w-full text-white md:flex justify-center items-center p-3'>
        {/* Menu & login at small screen */}
        <div className='flex justify-between items-center text-2xl md:hidden'>
          <button onClick={() => setToggle(!toggle)}><FaBars /></button>
          <Link to={'/login'} className='flex justify-center ms-5 border border-black rounded px-3 py-2 hover:bg-black hover:text-white'><FaUser className='me-1' />LOGIN</Link>

        </div>
        <ul className={toggle? 'flex flex-col' : 'md:flex hidden'}>
          <li><Link to={'/'} className='md:mx-4'>HOME</Link></li>
          <li><Link to={'/books'} className='md:mx-4'>BOOKS</Link></li>
          <li><Link to={'/contact'} className='md:mx-4'>CONTACT</Link></li>
        </ul>

      </nav>



    </>
  )
}

export default Header
