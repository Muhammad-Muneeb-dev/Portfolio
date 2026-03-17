import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/hero";


const App = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar/>
      <Hero/>

      {/* <section id="home" className="min-h-screen"/>
      <section id="services" className="min-h-screen"/> */}

    </div>
  )
}

export default App