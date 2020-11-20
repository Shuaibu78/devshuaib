import React from 'react'
import ProfilePic from "../images/profile-icon.png"

const HeroSection = () => {
  return (
    <section id="home" className="mx-auto flex justify-between items-center pt-32 w-full bg-gray-hero">
      <div className=" flex items-center justify-between flex-col w-1/2">
        <div className="pb-6">
          <h1 className="text-white text-6xl">I'm Shuaib</h1>
          <h3 className="text-gray-400 text-2xl">Freelance Frontend Engineer</h3>
        </div>
        <div className="self-start ml-24 ">
          <button type="button" className="bg-gold-100 text-white py-4 px-24 text-1xl font-semibold">
            Hire Me
          </button>
        </div>
      </div>
      <div className="profile-bg w-1/2">
        <img src={ProfilePic} alt="shuaib"/>
      </div>
    </section>
  )
}

export default HeroSection
