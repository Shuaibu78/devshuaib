import HandsBump from "../images/hands-bump.webp"
import Workplace from "../images/workplace.webp"

const Services = () => {
  return (
    <section id="services" className="bg-gray-hero flex flex-col py-24">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-gray-300 text-4xl self-center">Services</h1>
        <span className=" self-center ">
          <hr className="service_line" />
        </span>
      </div>
      <div className="flex items-center justify-center text-gray-500 mt-4">
        <p className="py-4 px-8 p-width">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam optio corporis explicabo beatae tenetur voluptatum praesentium, nihil possimus culpa officia totam, at perspiciatis fugit. Officia eius nesciunt sequi beatae!</p>
      </div>
      <div className="grid grid-cols-3 container gap-4 w-full mx-auto mt-4">
        <div className="rounded-lg relative">
          <div className="service-description text-white">
            <h2 className="text-2xl font-semibold">WEB DEVELOPMENT</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae est enim corrupti ipsam autem fugiat .</p>
          </div>
          <div className="overlay bg-overlay-100"></div>
          <img src={Workplace} className="img-size" alt="workplace" />
        </div>
        <div className="rounded-lg relative">
        <div className="service-description text-white">
            <h2 className="text-2xl font-semibold">MOBILE DEVELOPMENT</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae est enim corrupti ipsam autem fugiat .</p>
          </div>
          <div className="overlay bg-overlay-200"></div>
            <img src={HandsBump} className="img-size" alt="workplace" />
        </div>
        <div className="rounded-lg relative">
        <div className="service-description text-white">
            <h2 className="text-2xl font-semibold">BRANDING</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae est enim corrupti ipsam autem fugiat .</p>
          </div>
          <div className="overlay bg-overlay-300"></div>
            <img src={Workplace} className="img-size" alt="workplace" />
        </div>
      </div>
    </section>
  )
}

export default Services
