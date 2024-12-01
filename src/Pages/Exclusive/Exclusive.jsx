import React, { useEffect, useRef, useState } from "react";
import "./Exclusive.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

const Exclusive = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const modalRef = useRef(null);
  const [selectedCreator, setSelectedCreator] = useState(null);

  // useGSAP(() => {

  // gsap.to(".kuch-bhi", {
  //   opacity: 1,
  //   duration: 1,
  //   delay: 2.2,
  //   stagger: 0.3,
  // });

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0.3 },
      { opacity: 1, duration: 1 }
    );

    // Animate cards
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          // delay: index * 0.2,
          ease: "power3.out",
        }
      );

      // Add hover animations
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        });

        // Animate image
        gsap.to(card.querySelector("img"), {
          scale: 1.1,
          duration: 0.5,
        });

        // Animate text
        gsap.to([card.querySelector("h1"), card.querySelector("p")], {
          color: "#FFD700",
          duration: 0.3,
          stagger: 0.1,
        });

        // Add subtle rotation
        gsap.to(card, {
          rotationY: 5,
          rotationX: 5,
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          rotationY: 0,
          rotationX: 0,
          duration: 0.3,
          ease: "power2.out",
        });

        // Reset image
        gsap.to(card.querySelector("img"), {
          scale: 1,
          duration: 0.3,
        });

        // Reset text
        gsap.to([card.querySelector("h1"), card.querySelector("p")], {
          color: "#fff",
          duration: 0.3,
        });
      });
    });
  }, []);

  const openModal = (creator) => {
    setSelectedCreator(creator);
    if (modalRef.current) {
      modalRef.current.style.display = "flex";
      gsap.fromTo(
        modalRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          modalRef.current.style.display = "none";
          setSelectedCreator(null);
        },
      });
    }
  };

  const creators = [
    {
      name: "Creator Name",
      image:
        "https://pbs.twimg.com/profile_images/1574632616485330944/sjgI-3q6_400x400.jpg",
      role: "Creator Role",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Creator Name",
      image:
        "https://pbs.twimg.com/profile_images/1574632616485330944/sjgI-3q6_400x400.jpg",
      role: "Creator Role",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Creator Name",
      image:
        "https://pbs.twimg.com/profile_images/1574632616485330944/sjgI-3q6_400x400.jpg",
      role: "Creator Role",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Creator Name",
      image:
        "https://pbs.twimg.com/profile_images/1574632616485330944/sjgI-3q6_400x400.jpg",
      role: "Creator Role",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Creator Name",
      image:
        "https://pbs.twimg.com/profile_images/1574632616485330944/sjgI-3q6_400x400.jpg",
      role: "Creator Role",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Creator Name",
      image:
        "https://pbs.twimg.com/profile_images/1574632616485330944/sjgI-3q6_400x400.jpg",
      role: "Creator Role",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Creator Name",
      image:
        "https://pbs.twimg.com/profile_images/1574632616485330944/sjgI-3q6_400x400.jpg",
      role: "Creator Role",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Creator Name",
      image:
        "https://pbs.twimg.com/profile_images/1574632616485330944/sjgI-3q6_400x400.jpg",
      role: "Creator Role",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <div className="exclusive-container" ref={containerRef}>
        {creators.map((creator, index) => (
          <div
            className="exclusive-card hover-change kuch-bhi"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            onClick={() => openModal(creator)}
          >
            <img src={creator.image} alt={creator.name} />
            <h1>{creator.name}</h1>
            <p>{creator.role}</p>
          </div>
        ))}
      </div>

      <div
        className="modal"
        ref={modalRef}
        onClick={closeModal}
        style={{
          display: "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: "black",
            padding: "20px",
            color: "white",
            borderRadius: "10px",
            maxWidth: "500px",
            width: "90%",
          }}
        >
          {selectedCreator && (
            <>
              <img
                src={selectedCreator.image}
                alt={selectedCreator.name}
                style={{ width: "100%", height: "auto", borderRadius: "5px" }}
              />
              <h2>{selectedCreator.name}</h2>
              <h3>{selectedCreator.role}</h3>
              <p>{selectedCreator.description}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Exclusive;
