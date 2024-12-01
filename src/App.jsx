import { ScrollTrigger } from "gsap/all";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";
import Loader from "./Components/Loader/Loader";
import Cursor from "./Components/Cursor/Cursor";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/HomePage/Home";
import ContactForm from "./Pages/ContactPage/ContactUs";
import InfluencerForm from "./Pages/InfluencerForm/Influencer-form";
import Footer from "./Components/Footer/Footer";
import Exclusive from "./Pages/Exclusive/Exclusive";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  const [loading, setLoading] = useState(true);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 500); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      {loading && <Loader setLoading={setLoading} />}
      <div ref={progressBarRef} className="progress-bar"></div>
      <div id="smooth-content">
        <Navbar />
        <Cursor />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/influencer-contact" element={<InfluencerForm />} />
            <Route path="/exclusive" element={<Exclusive />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
