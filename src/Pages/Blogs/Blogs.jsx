import React, { useEffect, useRef, useState } from "react";
import "./Blogs.css";
import gsap from "gsap";
import axios from "axios";

const Exclusive = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:1337/api/blogs");
      const data = await res.json();
      setBlogs(data.data);
      console.log(data.data);
      const blogs = data.data;
      const blogData = blogs.map((blog) => {
        return {
          title: blog.title,
        };
      });
      setBlogs(blogData);
      console.log(blogData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
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

  //   const blogs = [
  //     {
  //       title: "Blog 1",
  //       image: "https://picsum.photos/200/200",
  //       description: "This is the description of the blog",
  //       date: "2024-01-01",
  //       author: "John Doe",
  //     },
  //     {
  //       title: "Blog 2",
  //       image: "https://picsum.photos/200/200",
  //       description: "This is the description of the blog",
  //       date: "2024-01-01",
  //       author: "John Doe",
  //     },
  //     {
  //       title: "Blog 3",
  //       image: "https://picsum.photos/200/200",
  //       description: "This is the description of the blog",
  //       date: "2024-01-01",
  //       author: "John Doe",
  //     },
  //     {
  //       title: "Blog 4",
  //       image: "https://picsum.photos/200/200",
  //       description: "This is the description of the blog",
  //       date: "2024-01-01",
  //       author: "John Doe",
  //     },
  //     {
  //       title: "Blog 5",
  //       image: "https://picsum.photos/200/200",
  //       description: "This is the description of the blog",
  //       date: "2024-01-01",
  //       author: "John Doe",
  //     },
  //   ];

  // Fetching Blogs from API

  return (
    <>
      <div className="exclusive-container" ref={containerRef}>
        {blogs.map((blog, index) => (
          <div
            className="exclusive-card hover-change kuch-bhi"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <h1>{blog.title}</h1>
            <img src={blog.image} alt={blog.title} />
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Exclusive;
{
  /* {blogs.map((blog, index) => (
  <div
    className="exclusive-card hover-change kuch-bhi"
  </div>
))} */
}

// key={index}
// ref={(el) => (cardsRef.current[index] = el)}
// onClick={() => openModal(creator)}
//   >
{
  /* <img src={blog?.image} alt={blog?.name} /> */
}
{
  /* <h1>{blog?.title}</h1>
            <p>{blog?.author}</p> */
}
