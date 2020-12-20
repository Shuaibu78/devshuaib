import React from 'react'
import MailIcon from "../images/envelope.png"
import Phone from "../images/phone-call.png"
import Twitter from "../images/twitter.png"
import Github from "../images/github.png"
import Linkedin from "../images/linkedin.png"

const ContactUs = () => {
  return (
    <section id="contact" className="mx-auto flex flex-col justify-between items-center w-full bg-gray-about pt-24">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-gray-300 font-semibold text-3xl self-center">Contact Me</h1>
        <span className=" self-center ">
          <hr className="service_line" />
        </span>
      </div>
      <div className="flex justify-between items-start w-10/12 my-12">
        <div className="w-5/12 flex flex-col items-start justify-around">
          <h3 className="text-gray-300 font-bold text-lg">Contact Info</h3>
          <div className="flex items-center mt-10 w-2/5">
            <img className="iconWidth" src={MailIcon} alt="email icon" />
            <p className="iconTextColor leading-3 text-base pl-4">Devshuaib@gmail.com</p>
          </div>
          <div className="flex items-center mt-10 mb-16 w-2/5">
            <img className="iconWidth" src={Phone} alt="phone icon" />
            <p className="iconTextColor leading-3 text-base pl-4">+2349024762141</p>
          </div>
          <h3 className="text-gray-300 font-bold text-lg">Follow Me</h3>
          <div className="flex justify-between items-center w-1/5 mt-2">
            <a href="https://twitter.com/the_shuaib">
              <img src={Twitter} alt="twitter" />
            </a>
            <a href="https://www.linkedin.com/in/shuaibu-muhammad-823ab4169/">
              <img src={Linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/Shuaibu78">
              <img src={Github} alt="github" />
            </a>
            {/* <a href="">
              <img src="" alt="" />
            </a> */}
          </div>
        </div>
        <div className="w-7/12 flex flex-col items-start justify-around">
          <div className="flex flex-col w-full mb-6">
            <label htmlFor="name" className="inputTextColor">NAME</label>
            <input type="text" name="name" placeholder="Type your name"  className="inputColor h-12 pl-4 rounded-md" />
          </div>
          <div className="flex items-center justify-between w-full mb-6">
            <div className="flex flex-col w-2/6">
              <label htmlFor="number" className="inputTextColor">PHONE NUMBER</label>
              <input type="tel" name="number" placeholder="Type your phone number"  className="inputColor h-12 pl-4 rounded-md" />
            </div>
            <div className="flex flex-col w-3/6">
              <label htmlFor="email" className="inputTextColor">EMAIL</label>
              <input type="email" name="email" placeholder="Type your emal address"  className="inputColor h-12 pl-4 rounded-md" />
            </div>
          </div>
          <div className="flex flex-col w-full mb-6">
            <label htmlFor="message" className="inputTextColor">MESSAGE</label>
            <textarea name="message" cols="30" rows="8" className="inputColor pl-4 pt-4 rounded-md" placeholder="Type your message"></textarea>
          </div>
          <div className="self-start ml-24 md:self-start ">
            <button type="button" className="bg-gold-100 text-white py-4 px-24 text-1xl font-semibold">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs;
