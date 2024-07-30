import React from 'react'
import img  from '../assets/logo.png' 
import Logout from './Logout'
import { Link } from 'react-router-dom'

const UserNav = () => {
  return (
    <>
        <div className="bg-green-500 h-[60px] text-xl shadow-2xl flex">
       <Link to={'/dashboard'}> <img src={img} alt="logo" height={60} width={60}/></Link>
       <span className='mt-4 font-semibold'>Fund A Dream</span>
        <nav className="m-2 pl-2 mt-4">
            <Link to="/projects" className="ml-[60rem] pl-2">View Projects</Link>
            <Link to="/new-project" className="pl-6">Fundraise</Link> &emsp;
            <Logout/>
        </nav>
    </div>
    </>
  )
}

export default UserNav