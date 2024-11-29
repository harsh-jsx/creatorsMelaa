import React, { useState, useEffect } from "react";
import Loader from "./Components/Loader/Loader";
import Cursor from "./Components/Cursor/Cursor";
import Navbar from "./Components/Navbar/Navbar";
import Clients from "./Components/OurClients/Clients";
import Creators from "./Components/Creators/Creators";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import Offers from "./Components/WhatWeOffer/Offers";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Testimonials from "./Components/Testimonials/Testimonials";
function App() {
  const [loading, setLoading] = useState(true);

  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 500); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);

  return (
    <div id="smooth-wrapper">
      {/* {loading && <Loader setLoading={setLoading} />} */}
      <div id="smooth-content">
        <Cursor />
        <Navbar />
        <Home />
        <Creators />
        <Clients />
        <Offers />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
