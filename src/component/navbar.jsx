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

  return (
      <nav className={scroll ? `z-30 bg-gray-hero fixed px-6 py-2 flex justify-between items-center w-full lg:px-6 lg:py-2 lg:justify-between lg:items-center` : `z-30 bg-gray-scroll fixed px-6 py-2 flex justify-between items-center w-full lg:px-6 lg:py-2 lg:justify-between lg:items-center`}>
        <div>
          <img src={Logo} className="" alt="logo"/>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-white border-gold-100 appearance-none focus:outline-none">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          </button>
        </div>
        <div className=" hidden lg:block">
          <div className=" text-white inline-flex">
            <a href="#home" className="px-4 hover:text-gold-100" >
                Home
            </a>
            <a href="#about" className="px-4 hover:text-gold-100" >
                About Us
            </a>
            <a href="#services" className="px-4 hover:text-gold-100" >Services</a>
            <a href="#work" className="px-4 hover:text-gold-100" >Work</a>
            <a href="#contact" className="px-4 hover:text-gold-100" >Contact</a>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
