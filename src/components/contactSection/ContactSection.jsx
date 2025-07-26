import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'

const ContactSection = () => {
  return (
     <div className="flex items-center flex-col md:grid-cols-2 gap-10 py-16">

      <div className="flex items-center w-[700px] text-center gap-8 py-[20px] flex-col">
        <h2 className="text-3xl font-semibold text-gray-800">Get In Touch With Us</h2>
        <p className="text-gray-500">For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>
      <div className="flex gap-[240px] py-[80px] px-[80px] justify-between">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-xl mt-1 " />
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-500">236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
      
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-xl mt-1 " />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-500">Mobile: + (84) 546-6789</p>
                  <p className="text-gray-500">Hotline: + (84) 456-6789</p>
                </div>
              </div>
      
              <div className="flex items-start gap-4">
                <FaClock className="text-xl mt-1 " />
                <div>
                  <h3 className="font-semibold text-gray-800">Working Time</h3>
                  <p className="text-gray-500">Monday–Friday: 9:00 - 22:00</p>
                  <p className="text-gray-500">Saturday–Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
      
            {/* O‘NG TOMON - Form */}
            <div className="space-y-5 w-[500px]">
              <div className="flex flex-col gap-5">
                <p>Your name</p>
                <input type="text" placeholder="Your name" className="w-full border border-gray-300 px-4 py-3 rounded" />
              </div>
              <div className="flex flex-col gap-5">
                <p>Your email</p>
                <input type="email" placeholder="Email address" className="w-full border border-gray-300 px-4 py-3 rounded" />
              </div>
              <div className="flex flex-col gap-5">
                <p>Subject</p>
                <input type="text" placeholder="Subject (This is optional)" className="w-full border border-gray-300 px-4 py-3 rounded" />
              </div>
              <div className="flex flex-col gap-5">
                <p>Message</p>
                <textarea placeholder="Hi! I'd like to ask about..." className="w-full border border-gray-300 px-4 py-3 rounded h-32 resize-none"></textarea>
              </div>
              <button className="bg-[#B88E2F] hover:bg-yellow-500 text-white font-semibold px-[60px] py-[10px] rounded">Submit</button>
            </div>
          </div>

      </div>
  )
}

export default ContactSection