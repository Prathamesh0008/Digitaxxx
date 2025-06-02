import React, { useEffect, useRef, useState } from "react";
import "./ExclusiveService.css";
import service1 from "../../../images/service1.png";
import service2 from "../../../images/service2.png";
import service3 from "../../../images/service3.png";
import overlyy from "../../../images/about-service.png"

const servicesData = [
  {
    title: "Brand Promotion",
    desc: "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
    img: service1,
  },
  {
    title: "Video Marketing",
    desc: "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
    img: service2,
  },
  {
    title: "Site Analysis",
    desc: "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
    img: service3,
  },
  {
    title: "Social Media Marketing",
    desc: "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
    img: service1,
  },
  {
    title: "SEO Optimization",
    desc: "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
    img: service2,
  },
  {
    title: "SMM Report",
    desc: "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
    img: service3,
  },
];

const ExclusiveService = () => {
  const sectionRef = useRef(null);
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
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section className="exclusive-container" ref={sectionRef}>
      <div className="exclusive-header">
        <h2>Our Exclusive Services</h2>
        <p>
          Don't settle: Don't finish copy books. If you don't like the menu,
          leave the restaurant. If you're not on the right path, get off it.
        </p>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className={`service-box ${visible ? "fade-up" : ""}`} key={index}>
          <div className="image-wrapper">
  <img src={overlyy} alt="Overlay" className="overlay-image" />
  <img src={service.img} alt={service.title} className="main-image" />
</div>

          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </div>
        
        ))}
      </div>
    </section>
  );
};

export default ExclusiveService;