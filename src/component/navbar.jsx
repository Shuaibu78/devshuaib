import React, {useState, useEffect} from 'react'
import Logo from '../images/logo.webp'

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const onScroll = ()=> {
      const isTop = window.scrollY < 80;
      if (isTop !== scroll) {
        setScroll(!scroll);
      }
    };
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  
  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
      <nav className={scroll ? `z-30 bg-gray-hero mx-auto fixed py-2 flex justify-center items-center w-full lg:py-2 lg:justify-between lg:items-center` : `z-30 bg-gray-scroll fixed py-2 flex justify-center mx-auto items-center w-full lg:py-2 lg:justify-between lg:items-center`}>
        <div className={scroll ? `mx-auto flex justify-between items-center w-11/12 sm:w-10/12 lg:py-2 lg:justify-between lg:items-center` : `py-2 flex justify-between mx-auto items-center w-11/12 sm:w-10/12 lg:py-2 lg:justify-between lg:items-center`}>
          <div>
            <img src={Logo} className="" alt="logo"/>
          </div>
          <div class="block md:hidden">
            <button onClick={handleClick} class="flex items-center px-3 py-2 border rounded text-white border-gold-100 appearance-none focus:outline-none">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className=" hidden md:block">
            <div className=" text-white inline-flex">
              <a href="#about" className="px-4 hover:text-gold-100 text-base lg:text-1xl" >About Us</a>
              <a href="#services" className="px-4 hover:text-gold-100 text-base lg:text-1xl" >Services</a>
              <a href="#work" className="px-4 hover:text-gold-100 text-base lg:text-1xl" >Work</a>
            </div>
          </div>
        </div>  
      </nav>
  )
}

export default Navbar
