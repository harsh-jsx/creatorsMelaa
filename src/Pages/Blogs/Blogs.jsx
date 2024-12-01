import React, { useEffect, useRef, useState } from "react";
import "./Blogs.css";
import gsap from "gsap";

const Exclusive = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "http://localhost:1337/api/blogs?populate=image",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setBlogs(data.data);
      console.log(blogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    gsap.fromTo(
      containerRef.current,
      { opacity: 0.3 },
      { opacity: 1, duration: 1 }
    );

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
          ease: "power3.out",
        }
      );

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(card.querySelector("img"), {
          scale: 1.1,
          duration: 0.5,
        });

        gsap.to([card.querySelector("h1"), card.querySelector("p")], {
          color: "#FFD700",
          duration: 0.3,
          stagger: 0.1,
        });

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

        gsap.to(card.querySelector("img"), {
          scale: 1,
          duration: 0.3,
        });

        gsap.to([card.querySelector("h1"), card.querySelector("p")], {
          color: "#fff",
          duration: 0.3,
        });
      });
    });
  }, []);

  console.log(blogs);

  return (
    <>
      <div className="exclusive-container" ref={containerRef}>
        {blogs.map((blog, index) => (
          <a
            href={`/blogs/${blog.documentId}`}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="exclusive-card hover-change kuch-bhi"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <h1>{blog.title}</h1>
              <img
                src={"http://localhost:1337" + blog.image.url}
                alt={blog.title}
              />
              <p>{blog.author}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Exclusive;
