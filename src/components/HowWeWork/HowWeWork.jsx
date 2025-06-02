import React, { useEffect, useRef, useState } from "react";
import "./HowWeWork.css";
import workImage from "../../images/home_1_how_work-768x548.png";
import step1 from "../../images/work1.png";
import step2 from "../../images/work2.png";
import step3 from "../../images/work3.png";

const steps = [
  {
    img: step1,
    title: "We Generate A Good Idea First",
    desc: "Marketing is a contest for people's attention. Seth Godin Because advertising and marketing is an art",
  },
  {
    img: step2,
    title: "Then We Start Applying Ideas",
    desc: "Marketing is a contest for people's attention. Seth Godin Because advertising and marketing is an art",
  },
  {
    img: step3,
    title: "Finish The Task And Deliver The Project",
    desc: "Marketing is a contest for people's attention. Seth Godin Because advertising and marketing is an art",
  },
];

const HowWeWork = () => {
  const imageRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
  }, []);

  return (
    <section className="how-we-work">
      <div className="work-container">
        <div
          className={`work-image ${visible ? "slide-in-left" : ""}`}
          ref={imageRef}
        >
          <img src={workImage} alt="How We Work" />
        </div>
        <div className="work-content">
          <h2>How We Works!</h2>
          <p className="intro">
            Don’t settle: Don’t finish crappy books. If you don’t like the menu,
            leave the restaurant. If you’re not on the right path, get off it.
          </p>
          <div className="work-steps">
            {steps.map((step, index) => (
              <div className="step" key={index}>
                <img src={step.img} alt="Step Icon" className="step-icon" />
                <div className="step-text">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
