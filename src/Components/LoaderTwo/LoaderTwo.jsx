import React, { useEffect } from "react";
import LoaderImage from "../../assets/LoaderImage.png";
import "./LoaderTwo.css";
import gsap from "gsap";

const LoaderTwo = ({ setLoading }) => {
  const loaderImages = [
    LoaderImage,
    LoaderImage,
    LoaderImage,
    LoaderImage,
    LoaderImage,
    LoaderImage,
    LoaderImage,
    LoaderImage,
    LoaderImage,
    LoaderImage,
    LoaderImage,
  ];

  useEffect(() => {
    gsap.set(".loader-two-container", {
      xPercent: 180,
    });
    gsap.to(".loader-two-container", {
      xPercent: -117.3,
      delay: 1,
      duration: 5,
      ease: "power4.out",
      onComplete: () => {
        gsap.to(`#loader-image-${loaderImages.length - 1}`, {
          width: "100%",
          height: "100vh",
          duration: 1,
          x: document.getElementById("bg-home-video").getBoundingClientRect()
            .left,
          y: document.getElementById("bg-home-video").getBoundingClientRect()
            .top,
          ease: "power4.inOut",
          onComplete: () => {
            setLoading(false);
          },
        });
      },
    });
  });

  return (
    <div className="loader-two-container">
      {loaderImages.map((image, index) => (
        <img id={`loader-image-${index}`} src={image} />
      ))}
    </div>
  );
};

export default LoaderTwo;
