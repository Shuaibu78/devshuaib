const Experience = () => {
  return (
    <section id="services" className="bg-gray-hero flex flex-col py-24">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-gray-300 text-4xl self-center">Experience</h1>
        <span className=" self-center ">
          <hr className="service_line" />
        </span>
      </div>
      <div className="flex items-center justify-center text-gray-500 mt-4">
        <p className="py-4 px-8 p-width">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam optio corporis explicabo beatae tenetur voluptatum praesentium, nihil possimus culpa officia totam, at perspiciatis fugit. Officia eius nesciunt sequi beatae!</p>
      </div>
      <div className="grid grid-cols-3 container w-full mx-auto mt-4 experience-bg-color" >
        <div className="flex flex-col items-start justify-center p-12 border-gray-300 border">
          <p className="header-color">June 2018 - December 2019</p>
          <h2 className="text-white text-2xl font-bold ">Frontend engineer</h2>
          <p className="header-color">Quictel solution</p>
            <div>
              <p className="experience-text-color py-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Numquam blanditiis esse omnis, repellat amet quisquam consequatur iure eveniet.
              </p>
            </div>
        </div>
        <div className="flex flex-col items-start justify-center p-12 border-gray-300 border">
          <p className="header-color">June 2018 - December 2019</p>
          <h2 className="text-white text-2xl font-bold ">Frontend engineer</h2>
          <p className="header-color">Quictel solution</p>
            <div>
              <p className="experience-text-color py-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Numquam blanditiis esse omnis, repellat amet quisquam consequatur iure eveniet.
              </p>
            </div>
        </div>
        <div className="flex flex-col items-start justify-center p-12 border-gray-300 border">
          <p className="header-color">June 2018 - December 2019</p>
          <h2 className="text-white text-2xl font-bold ">Frontend engineer</h2>
          <p className="header-color">Quictel solution</p>
            <div>
              <p className="experience-text-color py-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Numquam blanditiis esse omnis, repellat amet quisquam consequatur iure eveniet.
              </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;
