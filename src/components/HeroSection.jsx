import React, {useState } from 'react'

const HeroSection = () => {
const [text, settext] = useState([])

const changeText = ["Website Development", "ReactJs", "MongoDB","ExpressJs"]






  return (
   <>
   <div className="hero w-full h-[80vh]  relative  shadow-2xl shadow-[#B804B1] ">
    <img className='heroimg h-[100%] w-full bg-gradient-to-t from-[#B804B1] to-transparent opacity-60 ' src="/HEro.jpg" alt="" />
    <div className='text-white  z-99 absolute top-0 w-full flex justify-center items-center h-[80%] '>
    <h1 className='md:flex gap-2 flex-wrap text-center items-center justify-center h-[50%] md:text-[40px] text-2xl  p-5 rounded-xl font-semibold'>
       <span >Most</span>
       <span>Trusted</span>
        <span className='shadow-2xl shadow-[#fca1a1] text-[#B804B1] flex
         bg-slate-200 italic font-bold'><span>Website</span> <span>Development</span> </span>
         <span>Service </span> 
         <span>Provider</span>
         </h1>
         </div>
   </div>
   </>
  )
}

export default HeroSection