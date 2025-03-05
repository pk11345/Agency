import React from 'react'

const Services = () => {
  return (
    <>
    <div className='pb-10 w-full pt-4 
      bg-gradient-to-t from-[#B804B1] to-transparent opacity-80 shadow-2xl shadow-[#B804B1]'>
    <div className="heading text-white flex justify-center  ">
      <h1 className='text-5xl italic font-bold'>SERVICES</h1>
    </div>
    <div className="containers md:flex-row pt-30 pb-20 md:justify-center md:items-center gap-20 flex flex-col items-center
     w-full h-[100%] ">
      <div className="box w-[250px] h-[250px] flex justify-center items-center hover:bg-[#B804B1] hover:opacity-100
       bg-gradient-to-t from-[#db19d5] to-transparent opacity-80 clip-hexagon hover:scale-150">
        <h2 className='text-2xl text-white font-bold italic pl-2 pr-2 flex font-bold italic gap-1'><span>Blog</span> <span>Website</span></h2>
      </div>
      <div className="box w-[250px] h-[250px] flex justify-center items-center hover:bg-[#B804B1] hover:opacity-100
       bg-gradient-to-t from-[#db19d5] to-transparent opacity-80 clip-hexagon hover:scale-150 ">
     <h2 className='text-2xl text-white pl-2 pr-2 flex font-bold italic gap-1'><span>Functional</span> <span>Website</span></h2>
      </div>
      <div className="box w-[250px] h-[250px] flex justify-center items-center hover:bg-[#B804B1] hover:opacity-100
       bg-gradient-to-t from-[#db19d5] to-transparent opacity-80 clip-hexagon hover:scale-150">
      <h2 className='text-2xl pl-2 pr-2 md:flex-row flex-col  text-white font-bold italic'><span>MERN</span><span>Stack</span><span>Website</span></h2>
      </div>
    </div>
    </div>
    </>
  )
}


export default Services