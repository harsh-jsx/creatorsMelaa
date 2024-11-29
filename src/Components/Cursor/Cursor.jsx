import React, { useEffect, useRef } from "react";
import "./Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorTextRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    const cursorText = cursorTextRef.current;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Animate the outer circle
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      // Animate the inner dot
      gsap.to(cursorDot, {
        x: clientX,
        y: clientY,
        duration: 0.025,
      });
    };

    // Enhanced hover handling
    const handleMouseEnter = (e) => {
      cursor.classList.add("cursor--hover");
      cursorDot.classList.add("cursor-dot--hover");

      // Special handling for hover-change elements
      if (e.target.classList.contains("hover-change")) {
        cursor.classList.add("cursor--view");
        cursorText.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("cursor--hover", "cursor--view");
      cursorDot.classList.remove("cursor-dot--hover");
      cursorText.style.opacity = "0";
    };

    // Add event listeners
    document.addEventListener("mousemove", moveCursor);

    // Add hover effect for all clickable elements
    const clickables = document.querySelectorAll(
      "a, button, .creator-card, .case-card, .hover-change"
    );
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}>
        <span className="cursor-text" ref={cursorTextRef}>
          VIEW
        </span>
      </div>
      <div className="cursor-dot" ref={cursorDotRef}></div>
    </>
  );
};

export default Cursor;
