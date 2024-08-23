import React, { useState, useEffect } from 'react';
import './ScrollToBottom.scss'; 
import ScrollButton from '../../assets/images/scrollToBottom/ScrollToBottom.svg';

const ScrollToBottom = () => {
  const [isOverFooter, setIsOverFooter] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  let renderTimeout = null;

  const checkFooterPosition = () => {
    const footer = document.querySelector('footer');
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop <= windowHeight) {
      setIsOverFooter(true);
    } else {
      setIsOverFooter(false);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });

    setScrolling(true);

    renderTimeout = setTimeout(() => {
      setScrolling(false); 
    }, 1250);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrolling) {
        clearTimeout(renderTimeout); 
        renderTimeout = setTimeout(() => {
          setScrolling(false); 
        }, 750);
      }
      checkFooterPosition();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(renderTimeout); 
    };
  }, [scrolling]);

  useEffect(() => {
    if (scrolling) {
      const scrollInterval = setInterval(() => {
        window.scrollBy(0, 60); 
      }, 10); 

      return () => clearInterval(scrollInterval);
    }
  }, [scrolling]);

  return (
    <div className={`scroll-to-bottom ${isOverFooter ? 'over-footer' : ''}`} onClick={scrollToBottom}>
      <img src={ScrollButton} alt="Scroll to Bottom" />
    </div>
  );
};

export default ScrollToBottom;


