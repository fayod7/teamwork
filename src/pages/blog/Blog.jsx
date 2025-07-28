import React from 'react'
import Services from '../../components/customer-services/Services'
import Reusable from '../../components/reusable-hero/Reusable'
import firstPic from './images/first.png'
import secPic from './images/second.png'
import lastPic from './images/last one.png'
import rec1 from './images/recent1.png'
import rec2 from './images/recent2.png'
import rec3 from './images/recent3.png'
import rec4 from './images/recent4.png'
import rec5 from './images/recent5.png'
import { HiMiniUser } from "react-icons/hi2";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Blog = () => {
  return (
    <div>
      <Reusable title="Blog" link="Blog" />
      <div className="container flex flex-col items-center px-4">
        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[70px] py-[30px] w-full">
          <div className="flex flex-col w-full lg:w-[66%]">
            <img className='mt-[40px] lg:mt-[70px] w-full object-cover' src={firstPic} alt="" />
            <div className="flex flex-wrap items-center mt-[10px] gap-[15px] lg:gap-[30px]">
              <p className="flex text-[16px] lg:text-[20px] gap-[5px] text-gray-400 items-center"><HiMiniUser /> Admin</p>
              <p className="flex text-[16px] lg:text-[20px] gap-[5px] text-gray-400 items-center"><FaCalendar /> 14 Oct 2022</p>
              <p className="flex text-[16px] lg:text-[20px] gap-[5px] text-gray-400 items-center"><FaTag /> Wood</p>
            </div>
            <h2 className="text-[22px] lg:text-[30px] mt-[15px] font-medium mb-[10px]">Going all-in with millennial design</h2>
            <p className="text-gray-400 text-[16px] lg:text-[20px] leading-[1.7]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <b className='mt-[40px] lg:mt-[90px] font-medium text-[18px] lg:text-[20px] border-b w-fit border-gray-400 py-[10px]'>Read more</b>

            <img className='mt-[40px] lg:mt-[70px] w-full object-cover' src={secPic} alt="" />
            <div className="flex flex-wrap items-center mt-[10px] gap-[15px] lg:gap-[30px]">
              <p className="flex text-[16px] lg:text-[20px] gap-[5px] text-gray-400 items-center"><HiMiniUser /> Admin</p>
              <p className="flex text-[16px] lg:text-[20px] gap-[5px] text-gray-400 items-center"><FaCalendar /> 14 Oct 2022</p>
              <p className="flex text-[16px] lg:text-[20px] gap-[5px] text-gray-400 items-center"><FaTag /> Handmade</p>
            </div>
            <h2 className="text-[22px] lg:text-[30px] mt-[15px] font-medium mb-[10px]">Exploring new ways of decorating</h2>
            <p className="text-gray-400 text-[16px] lg:text-[20px] leading-[1.7]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <b className='mt-[40px] lg:mt-[90px] font-medium text-[18px] lg:text-[20px] border-b w-fit border-gray-400 py-[10px]'>Read more</b>

            <img className='mt-[40px] lg:mt-[70px] w-full object-cover' src={lastPic} alt="" />
            <div className="flex flex-wrap items-center mt-[10px] gap-[15px] lg:gap-[30px]">
              <p className="flex text-[16px] lg:text-[20px] gap-[5px] text-gray-400 items-center"><HiMiniUser /> Admin</p>
              <p className="flex text-[16px] lg:text-[20px] gap-[5px] text-gray-400 items-center"><FaCalendar /> 14 Oct 2022</p>
              <p className="flex text-[16px] lg:text-[20px] gap-[5px] text-gray-400 items-center"><FaTag /> Wood</p>
            </div>
            <h2 className="text-[22px] lg:text-[30px] mt-[15px] font-medium mb-[10px]">Handmade pieces that took time to make</h2>
            <p className="text-gray-400 text-[16px] lg:text-[20px] leading-[1.7]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <b className='mt-[40px] lg:mt-[90px] font-medium text-[18px] lg:text-[20px] border-b w-fit border-gray-400 py-[10px]'>Read more</b>
          </div>

          <div className="flex flex-col w-full lg:w-[34%]">
            <div className="flex w-full justify-between items-center border border-gray-400 rounded-xl px-[15px] lg:px-[20px] mt-[40px] lg:mt-[70px]">
              <input type="text" className="outline-none py-[10px] w-full" placeholder="Search..." />
              <CiSearch className="text-[20px]" />
            </div>

            <h2 className="text-[22px] lg:text-[25px] font-medium mt-[30px]">Categories</h2>
            <div className="flex flex-col gap-[30px] lg:gap-[50px] w-full mt-[20px]">
              <p className="text-gray-400 flex justify-between text-[16px] lg:text-[18px]">Crafts <span>2</span></p>
              <p className="text-gray-400 flex justify-between text-[16px] lg:text-[18px]">Design <span>8</span></p>
              <p className="text-gray-400 flex justify-between text-[16px] lg:text-[18px]">Handmade <span>7</span></p>
              <p className="text-gray-400 flex justify-between text-[16px] lg:text-[18px]">Interior <span>1</span></p>
              <p className="text-gray-400 flex justify-between text-[16px] lg:text-[18px]">Wood <span>6</span></p>
            </div>

            <h2 className="text-[22px] lg:text-[25px] font-medium mt-[70px] lg:mt-[100px]">Recent Posts</h2>
            <div className="flex flex-col gap-[30px] mt-[30px]">
              {[rec1, rec2, rec3, rec4, rec5].map((img, i) => (
                <div key={i} className="flex">
                  <img className="w-[70px] h-[70px] object-cover" src={img} alt="" />
                  <div className="flex flex-col ml-[15px]">
                    <b className="text-[16px] lg:text-[18px] font-medium">Post title {i + 1}</b>
                    <p className="text-gray-400 text-[14px]">03 Aug 2022</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-[15px] lg:gap-[20px] mb-[30px] lg:mb-[50px]">
          <div className='bg-[#F9F1E7] text-[16px] lg:text-[20px] px-[20px] lg:px-[25px] rounded-[15px] py-[8px] lg:py-[10px]'>1</div>
          <div className='bg-[#F9F1E7] text-[16px] lg:text-[20px] px-[20px] lg:px-[25px] rounded-[15px] py-[8px] lg:py-[10px]'>2</div>
          <div className='bg-[#F9F1E7] text-[16px] lg:text-[20px] px-[20px] lg:px-[25px] rounded-[15px] py-[8px] lg:py-[10px]'>3</div>
          <div className='bg-[#F9F1E7] text-[16px] lg:text-[20px] px-[20px] lg:px-[25px] rounded-[15px] py-[8px] lg:py-[10px]'>next</div>
        </div>
      </div>
      <Services />
    </div>
  )
}

export default Blog
