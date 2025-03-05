import React, {useEffect, useState } from 'react'

const HeroSection = () => {
const [text, settext] = useState("Website Development")

const changeText = ["Website Development", "ReactJs", "MongoDB","ExpressJs"]


const [cnt , setCnt] = useState(0);

const call = ()=>{
  if(cnt == changeText.length)
  {
  setCnt(0);
  }else
  {
    settext(changeText[cnt]);
    console.log(changeText[cnt],cnt);
   setCnt(cnt+1)
  }
}

useEffect(()=>{
 let interval = setInterval(()=>{
    call();
    },3000)
    return(()=>{
      clearInterval(interval)
    })
},[cnt])

  return (
   <>
   <div className="hero w-full h-[60vh]  relative  shadow-2xl shadow-[#B804B1] ">
    <img className='heroimg h-[100%] object-cover w-full bg-gradient-to-t from-[#B804B1] to-transparent opacity-60 ' src="/HEro.jpg" alt="" />
    <div className='text-white  z-99 absolute top-0 w-full flex justify-center items-center h-[80%] '>
    <h1 className='md:flex gap-2 flex-wrap text-center items-center justify-center h-[50%] md:text-[40px] text-2xl  p-5 rounded-xl font-semibold'>
       <span >Most</span>
       <span>Trusted</span>
        <span className='shadow-2xl shadow-[#fca1a1] text-[#B804B1] flex
         bg-slate-200 italic font-bold'><span>{text}</span> </span>
         <span>Service </span> 
         <span>Provider</span>
         </h1>
         </div>
   </div>
   </>
  )
}

export default HeroSection