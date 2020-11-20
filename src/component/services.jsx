import React from 'react'
import FistBump from "../images/fist-bump.webp"
import HandsBump from "../images/hands-bump.webp"
import Office from "../images/office-illustration.webp"
import Workplace from "../images/workplace.webp"

const Services = () => {
  return (
    <section id="services" className="bg-gray-hero flex flex-col">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-gray-300 text-4xl self-center">Services</h1>
        <span className=" self-center ">
          <hr className="service_line" />
        </span>
      </div>
      <div className="flex items-center justify-center container mx-auto text-gray-400 p-width mt-4">
        <p className="py-4 w-full px-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam optio corporis explicabo beatae tenetur voluptatum praesentium, nihil possimus culpa officia totam, at perspiciatis fugit. Officia eius nesciunt sequi beatae!</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 w-full ">
        <div className="rounded-lg">
            <img src={FistBump} className="img-size" alt="workplace" />
        </div>
        <div className="rounded-lg">
            <img src={HandsBump} className="img-size" alt="workplace" />
        </div>
        <div className="rounded-lg ">
            <img src={Office} className="img-size" alt="workplace" />
        </div>
        <div className="rounded-lg">
            <img src={Workplace} className="img-size" alt="workplace" />
        </div>
      </div>
    </section>
  )
}

export default Services
