import React from 'react'
import dining from "./1.svg"
import bedroom from "./bedroom.svg"
import living from "./living room.svg"

const HomeType = () => {
  return (
    <div className='bg-[#F0F0F0]'>
      <div className='container flex flex-col items-center'>
        <h1 className='text-center font-bold text-[40px] text-[#3A3A3A] mb-7'>Browse The Range</h1>
        <p className='text-center text-[20px] text-light pb-[20px]  text-[#3a3a3a]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex items-center gap-[50px] mb-[20px] justify-between">
          <div className="flex flex-col items-center gap-8">
            <img src={dining} alt="" />
            <b className='text-[20px] text-[#3a3a3a]'>Dining</b>
          </div>
          <div className="flex flex-col items-center gap-8">
            <img src={living} alt="" />
            <b className='text-[20px] text-[#3a3a3a]'>Living</b>
          </div>
          <div className="flex flex-col items-center gap-8">
            <img src={bedroom} alt="" />
            <b className='text-[20px] text-[#3a3a3a]'>Bedroom</b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeType