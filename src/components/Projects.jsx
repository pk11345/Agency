import React from 'react'

const Projects = () => {
  return (
    <>
     <div className='pb-20 w-full pt-4  bg-gradient-to-t from-[#B804B1] to-transparent opacity-80 shadow-2xl shadow-[#B804B1]'>
    <div className="heading text-white flex justify-center  ">
      <h1 className='text-5xl italic font-bold'>PROJECTS</h1>
    </div>

    <div className="containers flex flex-col justify-center items-center gap-10 pt-10 w-full h-[80%]">

      <div className="box w-[80%]  flex flex-col justify-center items-center hover:bg-[#B804B1] hover:opacity-100
       bg-gradient-to-t from-[#db19d5] to-transparent opacity-80 p-10 gap-5 ">
        <h1 className='text-2xl text-amber-500 font-bold italic'>Project Name</h1>
        <p className='text-xl text-white font-bold '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quo expedita tempore quidem omnis minima quae cupiditate excepturi natus eius, molestiae itaque necessitatibus illum odio enim quaerat, nostrum error vitae?</p>
        <button className='pt-2 pb-3 pl-4 pr-4 bg-red-400 text-xl font-semibold text-white '>View Project</button>
      </div>

      <div className="box w-[80%]  flex flex-col justify-center items-center hover:bg-[#B804B1] hover:opacity-100
       bg-gradient-to-t from-[#db19d5] to-transparent opacity-80 p-10 gap-5 ">
        <h1 className='text-2xl text-amber-500 font-bold italic'>Project Name</h1>
        <p className='text-xl text-white font-bold '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quo expedita tempore quidem omnis minima quae cupiditate excepturi natus eius, molestiae itaque necessitatibus illum odio enim quaerat, nostrum error vitae?</p>
        <button className='pt-2 pb-3 pl-4 pr-4 bg-red-400 text-xl font-semibold text-white '>View Project</button>
      </div>

      <div className="box w-[80%]  flex flex-col justify-center items-center hover:bg-[#B804B1] hover:opacity-100
       bg-gradient-to-t from-[#db19d5] to-transparent opacity-80 p-10 gap-5 ">
        <h1 className='text-2xl text-amber-500 font-bold italic'>Project Name</h1>
        <p className='text-xl text-white font-bold '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quo expedita tempore quidem omnis minima quae cupiditate excepturi natus eius, molestiae itaque necessitatibus illum odio enim quaerat, nostrum error vitae?</p>
        <button className='pt-2 pb-3 pl-4 pr-4 bg-red-400 text-xl font-semibold text-white '>View Project</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Projects