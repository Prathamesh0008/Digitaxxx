import React, { useEffect, useRef, useState } from "react";
import "./ExclusiveServices.css";
import { Link } from "react-router-dom";

import service1 from "../../images/services-1.jpg";
import service2 from "../../images/services-2.jpg";
import service4 from "../../images/services-3.jpg";
import service3 from "../../images/services-4.jpg";
import service5 from "../../images/services-5.jpg";
import service6 from "../../images/services-6.jpg";
import overly from "../../images/about_us_bg_icon.png";

const servicesData = [
  {
    title: "Brand Promotion",
    desc: "A brand for a company is like a reputation for a person...",
    img: service1,
    link: "/brand-promo",
  },
  {
    title: "Video Marketing",
    desc: "A brand for a company is like a reputation for a person...",
    img: service2,
    link: "/services/video-marketing",
  },
  {
    title: "Site Analysis",
    desc: "A brand for a company is like a reputation for a person...",
    img: service3,
    link: "/services/website-analysis",
  },
  {
    title: "Social Media Marketing",
    desc: "A brand for a company is like a reputation for a person...",
    img: service4,
    link: "/service/service-digital",
  },
  {
    title: "SEO Optimization",
    desc: "A brand for a company is like a reputation for a person...",
    img: service5,
    link: "/service-Seo",
  },
  {
    title: "SMM Report",
    desc: "A brand for a company is like a reputation for a person...",
    img: service6,
    link: "/services/service-smm",
  },
];

const ExclusiveServices = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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
    <div>
      <section className="exclusive-containerr" ref={sectionRef}>
        <div className="exclusive-header">
          <h2>Our Exclusive Services</h2>
          <p>
            Don't settle: Don't finish copy books. If you don't like the menu,
            leave the restaurant. If you're not on the right path, get off it.
          </p>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className={`service-box ${visible ? "fade-up" : ""}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="image-wrapper">
                {/* <img
                  src={overly}
                  alt="Overlay"
                  className="overlay-image"
                /> */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="main-image"
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExclusiveServices;
