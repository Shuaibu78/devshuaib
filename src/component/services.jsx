import HandsBump from "../images/hands-bump.webp";
import Workplace from "../images/workplace.webp";

const Services = () => {
  return (
    <section id="services" className="bg-gray-hero flex flex-col py-24">
      <div className="flex flex-col w-11/12 sm:w-10/12 mx-auto">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-gray-300 text-1xl sm:text-2xl md:text-3xl lg:text-4xl self-center capitalize">services</h1>
          <span className=" self-center ">
            <hr className="service_line" />
          </span>
        </div>

        <div className="sm:grid sm:grid-cols-2 block w-80 sm:gap-12 mx-auto mt-10 sm:mt-16">
          <div className="rounded-lg relative mb-10 sm:mb-0">
            <div className="service-description text-white">
              <h2 className="xl:text-2xl lg:text-1xl md:text-lg font-semibold uppercase">web development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae est
                enim corrupti ipsam autem fugiat .
              </p>
            </div>
            <div className="overlay bg-overlay-100"></div>
            <img src={Workplace} className="img-size" alt="workplace" />
          </div>
          <div className="rounded-lg relative">
            <div className="service-description text-white">
              <h2 className="xl:text-2xl lg:text-1xl md:text-lg font-semibold uppercase">mobile development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae est
                enim corrupti ipsam autem fugiat .
              </p>
            </div>
            <div className="overlay bg-overlay-300"></div>
            <img src={HandsBump} className="img-size" alt="workplace" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
