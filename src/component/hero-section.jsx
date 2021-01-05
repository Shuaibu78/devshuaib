import React from 'react'
import ProfilePic from "../images/profile-pic.png"

const HeroSection = () => {
  return (
    <section id="home" className="flex justify-center items-center pt-32 w-full bg-gray-hero">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between w-11/12 sm:w-10/12 mx-auto">
        <div className=" flex items-center pb-24 justify-between flex-col w-11/12 sm:w-1/2">
          <div className="pb-6 sm:self-start self-center">
            <span className="text-white text-xl md:text-2xl lg:text-3xl capitalize">hello, I'm shuaib muhammad,</span>
            <h1 className="text-gray-400 font-bold text-2xl leading-snug md:text-3xl lg:leading-tight lg:text-4xl capitalize">a frontend engineer.</h1>
          </div>
          <div className="sm:self-start self-center my-6">
            <a href="#contact" className="bg-gold-100 text-black py-4 px-10 sm:px-16 text-sm sm:text-base md:text-lg lg:text-xl xl:text-1xl font-semibold">
              let's chat
            </a>
          </div>
        </div>
        <div className="profile-bg w-11/12 sm:w-1/2 flex items-center justify-center">
          <img src={ProfilePic} alt="shuaib"/>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
