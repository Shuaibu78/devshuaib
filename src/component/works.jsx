import {projects} from "../tabContents"

const Works = () => {
  return (
    <section id="work" className="mx-auto flex flex-col justify-center items-center w-full bg-gray-about py-16">
      <div className="mx-auto flex flex-col justify-between items-center w-11/12 sm:w-10/12">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-gray-300 text-1xl sm:text-2xl md:text-3xl lg:text-4xl self-center capitalize">Latest Works</h1>
          <span className=" self-center ">
            <hr className="service_line" />
          </span>
        </div>
        <div className="flex items-center justify-center text-gray-500 mt-4">
          <p className="py-4 px-8 p-width text-justify sm:text-center">I have had the opportunity of working with amazing businesses on very interesting projects. These are the recent project i have worked on.</p>
        </div>
        <div class="features projectwidth">
          {projects.map((project) => {
            const {image, alt, projectName, projectLink} = project;
            return (
              <article className="bg-gray-500">
              <a href={projectLink} target="_blank" rel="noreferrer" className="image">
                <img src={image} alt={alt} />
              </a>
              <h3 className="major font-black text-white">{projectName}</h3>
              <a href={projectLink} target="_blank"  rel="noreferrer" className="special font-extrabold text-white">Click to preview</a>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Works
