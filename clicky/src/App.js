import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


function App() {
    return (
      <div className = "container">
          <Navbar />
          <Hero backgroundImage = "https://i.imgur.com/qkdpN.jpg">
            <h1 className = "text-center">Clicky Game!</h1>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </Hero>
        <Footer />
      </div>
    )
  }
  
  export default App;