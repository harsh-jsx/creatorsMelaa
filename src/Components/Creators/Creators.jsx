import React, { useEffect, useRef } from "react";
import "./Creators.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Creators = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const images = container.querySelectorAll(".creator-card");

    // Horizontal scroll animation
    gsap.to(images, {
      xPercent: -100 * (images.length - 1),
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: container,
        start: "top 25%",
        pin: true,
        scrub: 1,
        end: "+=3500",
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="creators-section">
      <div className="creators-content">
        <h1>Creators</h1>
        <div className="creators-container" ref={containerRef}>
          <div className="creator-card">
            <img
              src="https://yt3.googleusercontent.com/DcRQ7HTKrEecCRdtutJUUfyYv7xKNrUnXOZzgCXDe9OGSzrOuhbaI_4yiwbu39aV8VrVYVY_Zg=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <div className="creator-card">
            <img
              src="https://dawnbiopedia.data.blog/wp-content/uploads/2022/09/images-6.jpeg"
              alt=""
            />
          </div>
          <div className="creator-card">
            <img
              src="https://static.wixstatic.com/media/44704e_48325c94139647df8a0467680e2976cc~mv2.jpg"
              alt=""
            />
          </div>
          <div className="creator-card">
            <img
              src="https://static.wixstatic.com/media/44704e_acfcea8d43354ea7ba214b4c067f8c64~mv2.jpg"
              alt=""
            />
          </div>
          <div className="creator-card">
            <img
              src="https://static.wixstatic.com/media/44704e_4e4b2ec92bc446adb06616532d5c30bd~mv2.jpg"
              alt=""
            />
          </div>
          <div className="creator-card">
            <img
              src="https://yt3.googleusercontent.com/Wbpsrq8hmGAP1X14xpPKmkuro2d6ys6DNk9-rELaJtQA972uco8mjYrYKJ6tB0ISXd8qx6Fz=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <div className="creator-card">
            <h1>Know more</h1>
            <h2>
              Click <a href="/creators">HERE</a> to know more about our creators
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creators;
