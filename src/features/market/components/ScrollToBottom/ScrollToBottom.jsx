import React, { useState, useEffect, useRef } from "react";
import "./ScrollToBottom.scss";
import ScrollButton from "@assets/images/scrollToBottom/ScrollToBottom.svg";

const ScrollToBottom = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false); 
  const footerRef = useRef(null);
  let renderTimeout = useRef(null);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });

    setScrolling(true);

    renderTimeout.current = setTimeout(() => {
      setScrolling(false);
    }, 1250);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverFooter(entry.isIntersecting); 
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
      clearTimeout(renderTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (scrolling) {
      const scrollInterval = setInterval(() => {
        window.scrollBy(0, 50);
      }, 10);

      return () => clearInterval(scrollInterval);
    }
  }, [scrolling]);

  return (
    <div className={`scroll-to-bottom ${isOverFooter ? "over-footer" : ""}`} onClick={scrollToBottom}>
      <img src={ScrollButton} alt="Scroll to Bottom" />
      <footer ref={footerRef} />
    </div>
  );
};

export default ScrollToBottom;


