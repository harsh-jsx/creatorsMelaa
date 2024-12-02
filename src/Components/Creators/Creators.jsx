import React, { useEffect, useRef, useState } from "react";
import "./Creators.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Creators = () => {
  const containerRef = useRef(null);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const container = containerRef.current;
    const images = container.querySelectorAll(".creator-card");

    // Horizontal scroll animation
    if (windowWidth > 500) {
      gsap.to(images, {
        xPercent: -200,
        scrollTrigger: {
          trigger: container,
          start: "top 20%", // Adjust to start when the top of the container hits the top of the viewport
          pin: true,
          scrub: 3.5, // Increased scrub value to make animation slower
          end: "3000", // Increased end value to make the scroll distance longer
          invalidateOnRefresh: true,
        },
      });
    } else {
      gsap.to(images, {
        xPercent: -560,
        scrollTrigger: {
          trigger: container,
          start: "top 20%", // Adjust to start when the top of the container hits the top of the viewport
          pin: true,
          scrub: 3.5, // Increased scrub value to make animation slower
          end: "3000", // Increased end value to make the scroll distance longer
          invalidateOnRefresh: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="creators-section">
      <div className="creators-content">
        <h1>Creators</h1>
        <div className="creators-container" ref={containerRef}>
          <div className="creator-card hover-change">
            <img
              src="https://yt3.googleusercontent.com/DcRQ7HTKrEecCRdtutJUUfyYv7xKNrUnXOZzgCXDe9OGSzrOuhbaI_4yiwbu39aV8VrVYVY_Zg=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <h1>Creator Name 1</h1>
            <div className="hover-text"> Creator 1</div>
          </div>
          <div className="creator-card hover-change">
            <img
              src="https://dawnbiopedia.data.blog/wp-content/uploads/2022/09/images-6.jpeg"
              alt=""
            />
            <h1>Creator Name 2</h1>
            <div className="hover-text"> Creator 2</div>
          </div>
          <div className="creator-card hover-change">
            <img
              src="https://static.wixstatic.com/media/44704e_48325c94139647df8a0467680e2976cc~mv2.jpg"
              alt=""
            />
            <h1>Creator Name 3</h1>
            <div className="hover-text"> Creator 3</div>
          </div>
          <div className="creator-card hover-change">
            <img
              src="https://static.wixstatic.com/media/44704e_acfcea8d43354ea7ba214b4c067f8c64~mv2.jpg"
              alt=""
            />
            <h1>Creator Name 4</h1>
            <div className="hover-text"> Creator 4</div>
          </div>
          <div className="creator-card hover-change">
            <img
              src="https://static.wixstatic.com/media/44704e_4e4b2ec92bc446adb06616532d5c30bd~mv2.jpg"
              alt=""
            />
            <h1>Creator Name 5</h1>
            <div className="hover-text"> Creator 5</div>
          </div>
          <div className="creator-card hover-change">
            <img
              src="https://yt3.googleusercontent.com/Wbpsrq8hmGAP1X14xpPKmkuro2d6ys6DNk9-rELaJtQA972uco8mjYrYKJ6tB0ISXd8qx6Fz=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <h1>Creator Name 6</h1>
            <div className="hover-text"> Creator 6</div>
          </div>
          <div className="creator-card creator-card-last hover-change">
            <h1>Know more</h1>
            <h2>
              Click <a href="/exclusive">HERE</a> to know our creators
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creators;
