import React, { useEffect, useRef, useState } from 'react';
import './AboutBlock.css';

const AboutBlock = ({ title, text, image, reverse }) => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Convert string to array if it's not already an array
  const paragraphs = Array.isArray(text) ? text : text.split('\n\n');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`about-block ${reverse ? 'reverse' : ''}`}>
      <div
        className={`about-text ${visible ? 'slide-in-left' : ''}`}
        ref={textRef}
      >
        <h2>{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div
        className={`about-image ${visible ? 'slide-in-right' : ''}`}
        ref={imageRef}
      >
        <img src={image} alt="About Section" />
      </div>
    </div>
  );
};

export default AboutBlock;
