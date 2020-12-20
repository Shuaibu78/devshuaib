import React from 'react'
import {projects} from "./tabContents"

const Works = () => {
  return (
    <section id="work" className="mx-auto flex flex-col justify-between items-center w-full bg-gray-about py-24">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-gray-300 font-semibold text-4xl self-center">Latest Works</h1>
        <span className=" self-center ">
          <hr className="service_line" />
        </span>
      </div>
      <div className="flex items-center justify-center text-gray-500 mt-4">
        <p className="py-4 px-8 p-width">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam optio corporis explicabo beatae tenetur voluptatum praesentium, nihil possimus culpa officia totam, at perspiciatis fugit. Officia eius nesciunt sequi beatae!</p>
      </div>
      <div class="features projectwidth">
        {projects.map((project) => {
          const {image, alt, projectName, projectLink} = project;
          return (
            <article>
            <a href={projectLink} target="_blank" rel="noreferrer" className="image">
              <img src={image} alt={alt} />
            </a>
            <h3 className="major font-black text-white">{projectName}</h3>
            <a href={projectLink} target="_blank"  rel="noreferrer" className="special font-extrabold text-white">Click to preview</a>
          </article>
          )
        })}
      </div>
    </section>
  )
}

export default Works
