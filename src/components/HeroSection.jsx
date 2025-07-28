import React from 'react'
import bgvideo from "../../public/assets/bgvideo.mp4"

const HeroSection = () => {
  return (
    <div className='relative w-full h-[43vh] lg:h-screen overflow-hidden bg-black z-[-2] flex items-center '>
        <video
        src={bgvideo}
        autoPlay
        loop
        muted
        className="w-full h-[50vh] lg:h-full object-contain absolute top-0 z-[-1]"
      />
        {/* <div className='text-whitew-max pl-40 pb-40 hidden lg:block'>
            <h1 className='text-white text-[50px] font-semibold mb-4'>Nidhi Saxena</h1>
            <p className='font-semibold text-gray-400 text-xl pt-3'>Filmmaker, Writer and Visual Storyteller</p>
        </div> */}
      
    </div>
  )
}

export default HeroSection




