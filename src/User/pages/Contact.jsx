import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaLocationPin } from 'react-icons/fa6'
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <>
      <Header />
      <div className='md:px-20 my-5 p-5'>
        <h1 className='text-center font-bold text-3xl my-5'>Contact</h1>
        <p className='text-justify'>We’d love to hear from you! At our bookstore, we believe that every great reading journey begins with a connection. Whether you’re looking for your next 
          favourite book, need assistance with an order, have questions about our collections, or simply want to share your thoughts and suggestions, we’re always happy to help.
          Your satisfaction is our priority, and we are committed to making your shopping experience as smooth and enjoyable as possible. Our team is always ready to assist you with any enquiries, recommendations, or concerns you may have. Don’t hesitate to reach out to us through our contact form, email, or social media platforms.
          We truly value your feedback and appreciate the opportunity to serve you better. Thank you for being a part of our reading community. Let’s stay connected and continue exploring the wonderful world of books together!</p>
          {/* Grid Added : address number email */}
          <div className='md:grid grid-cols-3 items-center mt-5 p-5 md:px-40 md:mt-0'>
            {/* Location */}
            <div className='flex items-center'>
              <div style={{width:'50px',height:'50px',borderRadius:"50%"}} className='flex items-center justify-center bg-gray-300'>
                  <FaLocationPin />
              </div>
              <p className='ms-5'>123 Main Street, Apt 48, Anytown, CA 91234</p>
            </div>
            {/* Numbere */}
            <div className='flex items-center'>
              <div style={{width:'50px',height:'50px',borderRadius:"50%"}} className='flex items-center justify-center bg-gray-300'>
                  <FaPhone />
              </div>
              <p className='ms-5'>+9876534578</p>
            </div>
            {/* Email */}
            <div className='flex items-center'>
              <div style={{width:'50px',height:'50px',borderRadius:"50%"}} className='flex items-center justify-center bg-gray-300'>
                  <FaEnvelope />
              </div>
              <p className='ms-5'>contact@gmail.com</p>
            </div>

          </div>
        {/* Message and Map */}
        <div className='md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40'>
          {/* message */}
          <div className='bg-gray-200 text-center p-5 '>
             <h1 className='font-semi-bold text-2xl'>Send Us Message</h1>
             <form>
              <div className='mb-3 mt-5'>
                <input type="text" placeholder='Name' className='bg-white w-full p-2 border' />
              </div>
               <div className='mb-5 mt-5'>
                <input type="email" placeholder='Email' className='bg-white w-full p-2 border' />
              </div>
               <div className='mb-3 mt-5'>
                <textarea type="text" placeholder='Message' className='bg-white w-full p-2 border' />
              </div>
               <div className='my-5'>
              <button className='bg-black text-white w-full p-2 rounded flex justify-center items-center'>Submit <FaPaperPlane className='ms-2' /></button>
              </div>
             </form>
          </div>
          {/* Map */}
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31355.64433295407!2d76.3522175937999!3d10.77637976981565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d94da37758a1%3A0xc37b1f3ef340c087!2sOttapalam%2C%20Keralam!5e0!3m2!1sen!2sin!4v1795065849121!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact