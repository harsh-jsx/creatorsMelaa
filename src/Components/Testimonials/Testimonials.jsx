import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Testimonials.css";

const Carousel = () => {
  const testimonials = [
    {
      name: "Lorem P. Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "https://www.creatorsmela.com/images/clients-says/probo.png",
    },
    {
      name: "Dolor S. Amet",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      image: "https://www.creatorsmela.com/images/clients-says/relevel.png",
    },
    {
      name: "Consectetur A.",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
      image: "https://www.creatorsmela.com/images/clients-says/kukufm.png",
    },
  ];

  const [current, setCurrent] = useState(0);
  const testimonialRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, [current]);

  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         if (entry.isIntersecting) {
  //           overlayRef.current.style.opacity = 1;
  //         } else {
  //           overlayRef.current.style.opacity = 0;
  //         }
  //       },
  //       { threshold: 0.5 }
  //     );

  //     if (testimonialRef.current) {
  //       observer.observe(testimonialRef.current);
  //     }

  //     return () => {
  //       if (testimonialRef.current) {
  //         observer.unobserve(testimonialRef.current);
  //       }
  //     };
  //   }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="carousel-container" ref={testimonialRef}>
        <button className="carousel-button prev" onClick={prevTestimonial}>
          D
        </button>
        <div className="testimonial">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="testimonial-image"
          />
          <h3>{testimonials[current].name}</h3>
          <p>{testimonials[current].text}</p>
        </div>
        <button className="carousel-button next" onClick={nextTestimonial}>
          d
        </button>
        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
