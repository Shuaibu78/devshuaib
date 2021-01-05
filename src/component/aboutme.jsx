const AboutMe = () => {
  return (
    <section id="about" className="mx-auto flex lg:flex-row flex-col justify-center items-center w-full bg-gray-about lg:py-16 py-12">
      <div className="mx-auto flex lg:flex-row flex-col justify-between items-center w-11/12 sm:w-10/12">
        <div className="about-bg lg:w-1/2 lg:ml-8 flex flex-col justify-center items-center about-bg-height">
          <h1 className="text-gray-300 text-1xl sm:text-2xl md:text-3xl lg:text-4xl self-center capitalize">about me</h1>
          <span className=" lg:self-start lg:pl-48">
            <hr className="line" />
          </span>
        </div>
        <div className="flex items-center lg:justify-between justify-center flex-col lg:w-1/2 text-gray-500">
          <div className="flex items-center lg:justify-between justify-center flex-col py-2">        
            <p className="py-4 w-full px-8 text-justify">I’m a hard working and dedicated professional front-end developer/user interface designer with a keen eye for detail, and a determination to deliver the very highest quality. I take great pride in my work, and I always try to better myself with every project I work on.
            I like to write semantic, cross browser compatible code that is re-useable, maintainable and easy to understand.
            </p>
            <p className="py-4 w-full px-8" >I am motivated, enthusiastic and well organised, with a keen eye for beautiful design, primarily based around user interfaces.</p>
          </div>
          <div className="flex lg:justify-between justify-center items-center w-90">
            <a href="#work" className="bg-gold-100 border-2 border-gold-100 hover:bg-transparent hover:text-gold-100 text-black py-2 w-32 sm:w-40 lg:w-56 sm:py-4 text-base sm:text-lg md:text-xl lg:text-1xl font-semibold text-center">View Works</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
