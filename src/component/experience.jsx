import ExperienceData from "../experienceData";

const Experience = () => {
  return (
    <section id="services" className="bg-gray-hero flex flex-col py-24">
      <div className="flex flex-col w-11/12 sm:w-10/12 mx-auto">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-gray-300 text-1xl sm:text-2xl md:text-3xl lg:text-4xl self-center capitalize">
            experience
          </h1>
          <span className=" self-center ">
            <hr className="service_line" />
          </span>
        </div>

        <div className="sm:grid sm:grid-cols-2 block w-10/12 container mx-auto mt-16 experience-bg-color">
          {ExperienceData.map((data) => {
            const { date, position, companyName, Description } = data;

            return (
              <div className="flex flex-col items-start justify-center xl:p-6 p-4 border-gray-300 border hover:bg-gold-100 exp-card-height">
                <p className="header-color text-base xl:text-lg">{date}</p>
                <h2 className="text-white xl:text-2xl lg:text-1xl text-xl font-bold capitalize">
                  {position}
                </h2>
                <p className="header-color capitalize">{companyName}</p>
                <div>
                  <p className="experience-text-color xl:py-10 py-6">{Description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
