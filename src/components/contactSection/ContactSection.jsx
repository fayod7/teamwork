import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const ContactSection = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [data, setData] = useState([])
  const handleSubmit = (e) =>{
    e.preventDefault()
    const newChat = {
      name,
      email,
      subject,
      message,
      id: new Date().getTime()
    }
    setData([...data, newChat])
    setName('')
    setEmail('')
    setMessage('')
    setSubject('')
    
  }
  return (
    <section className="w-full py-[100px] bg-white">
      <h2 className="text-center font-semibold text-4xl">Get In Touch With Us</h2>
      <h3 className="text-[#9F9F9F] text-[16px]/[1.4] text-center mt-3">
        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </h3>
      <div className="container mt-[60px] grid grid-cols-2 max-[930px]:grid-cols-1">
      <div className="flex flex-col gap-10 px-[15px] py-[10px]">

       <div className="flex gap-3">
        <FaMapMarkerAlt className="size-[25px]"/>
        <div className="flex flex-col gap-1.5 max-w-[220px]">
          <h3 className="text-[24px] font-medium">Addres</h3>
          <h4>236 5th SE Avenue, New York NY10000, United States</h4>
        </div>
       </div>
       <div className="flex gap-3">
        <FaPhoneAlt className="size-[25px]"/>
        <div className="flex flex-col gap-1.5 max-w-[220px]">
          <h3 className="text-[24px] font-medium">Addres</h3>
          <h4>236 5th SE Avenue, New York NY10000, United States</h4>
        </div>
       </div>
       <div className="flex gap-3">
        <FaClock className="size-[25px]"/>
        <div className="flex flex-col gap-1.5 max-w-[220px]">
          <h3 className="text-[24px] font-medium">Addres</h3>
          <h4>236 5th SE Avenue, New York NY10000, United States</h4>
        </div>
       </div>


      </div>
      <form onSubmit={handleSubmit} className="p-[30px] gap-5 flex flex-col max-[930px]:pr-40 max-[700px]:pr-30 max-[550px]:pr-16 max-[500px]:pr-[15px]">
        <label className='flex flex-col gap-2' htmlFor="name">
          Your name
          <input required value={name} onChange={(e)=> setName(e.target.value)} className='py-[13px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'id='name' type="text" placeholder='Your name' />
      </label>
        <label className='flex flex-col gap-2' htmlFor="emailadd">
          Email address
          <input required value={email} onChange={(e)=> setEmail(e.target.value)} className='py-[13px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'id='emailadd' type="email" placeholder='Email address' />
      </label>
        <label className='flex flex-col gap-2' htmlFor="subject">
          Subject
          <input value={subject} onChange={(e)=> setSubject(e.target.value)} className='py-[13px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'id='subject' type="text" placeholder='This is an optional' />
      </label>
        <label className='flex flex-col gap-2' htmlFor="message">
          Message
          <input value={message} onChange={(e)=> setMessage(e.target.value)} className='py-[22px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'id='message' type="text" placeholder='Hi! i’d like to ask about' />
      </label>
      <div>
        <button type="submit" className="py-[14px] px-[85px] text-white bg-[#B88E2F] duration-200 hover:text-[#B88E2F] hover:bg-white hover:cursor-pointer border border-[#B88E2F] rounded-[5px]">Submit</button>
      </div>
      </form>
      </div>
    </section>
  );
};

export default ContactSection;
