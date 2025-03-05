import React, { useState } from 'react'

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <>
    <div className='pb-10 w-full pt-4   bg-gradient-to-t from-[#B804B1] to-transparent opacity-80'>
   <div className="heading text-white flex justify-center  ">
   <h2 className='text-5xl italic font-bold'>Contact Us</h2>
   </div>
     
      <div 
        className=" mt-6 max-w-lg mx-auto hover:bg-[#B804B1] hover:opacity-100
       bg-gradient-to-t from-[#db19d5] to-transparent opacity-80 p-6 rounded-lg shadow-lg" id='contact'>
        <form  onSubmit={handleSubmit} className="flex flex-col">
          <label className="text-gray-300">Full Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />

          <label className="text-gray-300 mt-4">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />

          <label className="text-gray-300 mt-4">Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            placeholder="Type your message here"
          ></textarea>

          <button 
            type="submit"
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
        </div>
      
      <footer className=" text-center p-4 text-gray-400">
        © {new Date().getFullYear()} AgencyName. All rights reserved.
      </footer>
   </div>
   </>
  )
}

export default Footer