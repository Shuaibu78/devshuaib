const AboutMe = () => {
  return (
    <section id="about" className="mx-auto flex justify-between items-center w-full bg-gray-about py-24">
      <div className="about-bg w-1/2 flex flex-col justify-center items-center about-bg-height">
        <h1 className="text-gray-300 text-4xl self-center">About Me</h1>
        <span className=" self-start pl-20">
          <hr className="line" />
        </span>
      </div>
      <div className="flex items-center justify-between flex-col w-1/2 text-gray-500">
        <div className="flex items-center justify-between flex-col py-2">        
          <p className="py-4 w-full px-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio facere dolore, quibusdam aperiam adipisci! Cupiditate porro, culpa minus commodi non reprehenderit perspiciatis iusto magni esse illum ex unde nesciunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, vitae accusamus maxime dolore impedit amet rem modi magnam nisi in laudantium, sed perspiciatis rerum voluptate quas reprehenderit ipsa praesentium minus?
          </p>
          <p className="py-4 w-full px-8" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ab dignissimos provident eos temporibus sint qui veritatis aliquam, earum quibusdam voluptatem ducimus similique</p>
        </div>
        <div className="flex justify-between items-center px-8 w-full">
          <button type="button" className="bg-gold-100 border-2 border-gold-100 text-white py-4 px-16 text-1xl font-semibold">View Works</button>
          <button type="button" className=" border-2 border-gold-100 text-gold-100 py-4 px-16 text-1xl font-semibold">Download Cv</button>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
