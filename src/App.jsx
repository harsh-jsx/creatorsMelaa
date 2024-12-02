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
import BlogPage from "./Pages/BlogPage/BlogPage";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const [loading, setLoading] = useState(true);
  const progressBarRef = useRef(null);

  const theme = createTheme({
    palette: {
      input: {
        main: "#E3D026",
        light: "#fff",
        dark: "#A29415",
        contrastText: "#242105",
      },
      primary: {
        main: "#6C7588",
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "rgba(108, 117, 136, 0.5)",
            "--TextField-brandBorderHoverColor": "rgba(108, 117, 136, .7)",
            "--TextField-brandBorderFocusedColor": "rgba(108, 117, 136, 1)",
            "& label.Mui-disabled": {
              color: "white", // Disabled input text color
            },
            "& label.Mui-disabled": {
              color: "#fff", // Label text color when disabled
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
            borderWidth: "1px",
            transition: "all ease .3s",
            borderRadius: 12,
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderWidth: "1px",
              borderRadius: 12,
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderWidth: "1px",
              borderRadius: 12,
              boxShadow: "0px 0px 20px 2px var(--TextField-brandBorderColor)",
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
            [`&.Mui-disabled .${outlinedInputClasses.notchedOutline}`]: {
              borderWidth: "1px",
              borderRadius: 12,
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
            "&.Mui-disabled": {
              "& .MuiOutlinedInput-input": {
                color: "#fff !important", // Input text color when disabled
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(108, 117, 136, 0.5)", // Border color for disabled state
              },
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&::before, &::after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

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
    <ThemeProvider theme={theme}>
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
              <Route path="/blogs/:id" element={<BlogPage />} />
            </Routes>
          </Router>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
