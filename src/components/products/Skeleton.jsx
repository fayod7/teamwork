import React from 'react'
import "./style.css"
const Skeleton = () => {
  return (
     <section className='w-full min-h-screen py-14 bg-[#f0f0f0]'>
          <div className="container">
        <h2 className='text-center font-bold text-[40px] text-[#3A3A3A] mb-7'>Our Products</h2>
            <div className="grid grid-cols-4 gap-6  max-[1150px]:grid-cols-3 max-[950px]:gap-4 max-[750px]:grid-cols-2 max-[450px]:grid-cols-1">
              {
                Array(8).fill().map((_, inx)=>(
                     <div key={inx} className="flex flex-col gap-3 bg-white rounded-lg overflow-hidden py-5 px-4 animate-pulse"
             style={{
                 boxShadow: `rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
                             rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
                             rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
                             rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
                             rgba(42, 51, 70, 0.04) 0px 5px 5px -2.5px,
                             rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
                             rgba(42, 51, 70, 0.03) 0px 24px 24px -8px`
             }}
        >
            <div className="overflow-hidden flex justify-center items-center h-48 w-full relative animation rounded-md">
                <div className="absolute top-2 right-4 bg-gray-300 rounded-full p-3 w-8 h-8"></div>
                <div className="absolute bottom-1.5 right-4 bg-gray-300 rounded-full p-3 w-8 h-8"></div>
            </div>
            <div className="h-6 animation rounded-md w-3/4 mt-2"></div>
            <div className="h-4 animation rounded-md w-full mt-1"></div>
            <div className="h-4 animation rounded-md w-5/6"></div>
            <div className="flex justify-between items-center mt-auto">
                <div className="h-6 animation rounded-md w-1/4"></div>
                <div className="h-4 animation rounded-md w-1/5"></div>
            </div>
        </div>
                ))
              }
            </div>
          </div>
        </section>
  )
}

export default React.memo(Skeleton)