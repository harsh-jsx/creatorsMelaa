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
          <svg
            fill="#ffffff"
            height="200px"
            width="200px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xml:space="preserve"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                id="XMLID_92_"
                d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"
              ></path>{" "}
            </g>
          </svg>
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
          <svg
            fill="#ffffff"
            height="200px"
            width="200px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330.002 330.002"
            xml:space="preserve"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                id="XMLID_103_"
                d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21 l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001 c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"
              ></path>{" "}
            </g>
          </svg>
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
