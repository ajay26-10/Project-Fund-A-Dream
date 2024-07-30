import React from 'react'
import img  from '../assets/logo.png' 
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className="bg-green-500 h-[60px]  text-xl drop-shadow-2xl	 flex">
        <Link to={'/'}><img src={img} alt="logo" height={60} width={60}/></Link>
        <span className='mt-4 font-semibold'>Fund A Dream</span>
        <nav className="m-2 pl-2 mt-4">
            <Link to={'/adminsignup'} className=" pl-[68rem]">Admin</Link>
            <Link to={'/signup'} className=" pl-[2rem]">Sign Up</Link>
        </nav>
    </header>
    </>
  )
}

export default Navbar
