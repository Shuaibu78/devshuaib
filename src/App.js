import React from "react"
import Navbar from "./component/navbar"
import HeroSection from "./component/hero-section"
import AboutMe from './component/aboutme'
import Services from "./component/services"
import Works from "./component/works"
import Experience from "./component/experience"
import ContactUs from "./component/contactme"
import "./component/style.css"

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Services />
      <Works />
      <Experience />
      <ContactUs />
    </>
  );
}

export default App;