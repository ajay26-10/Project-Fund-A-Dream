import React from 'react'
import DisplayProjects from '../components/DisplayProjects'

const Homepage = () => {
  return (
    <>
      <div className="h-[150px] bg-slate-100 m-[50px] rounded-lg align-center shadow-2xl">      
        <p className="text-[35px] ml-[15%]">Community Driven, Dreams Funded.</p>
        <span className="text-[35px] ml-[45%]">Let's Make Dreams Come True.</span>
      </div>

    <div className=' pl-2'>
      <DisplayProjects/> 
    </div>
    </>
  )
}

export default Homepage