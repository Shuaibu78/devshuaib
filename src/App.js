import React from "react"
import Navbar from "./component/navbar"
import HeroSection from "./component/hero-section"
import AboutMe from './component/aboutme'
import Services from "./component/services"
import "./component/style.css"

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Services />
    </>
  );
}

export default App;