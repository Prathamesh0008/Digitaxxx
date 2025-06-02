import React from "react";
import Slider from "react-slick";
import "./TeamSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import team1 from "../../images/team1.png";
import team2 from "../../images/team2.png";
import team3 from "../../images/team3.png";
import team4 from "../../images/team4.png";
import team5 from "../../images/team5.png";
import team6 from "../../images/team6.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  { img: team1, name: "Alice", role: "Project Manager" },
  { img: team2, name: "Bob", role: "UI/UX Designer" },
  { img: team3, name: "Charlie", role: "Frontend Developer" },
  { img: team4, name: "Diana", role: "Backend Developer" },
  { img: team5, name: "Eve", role: "QA Engineer" },
  { img: team6, name: "Frank", role: "Marketing Lead" },
];

const TeamSection = () => {
    const settings = {
        dots: true, // ✅ Enable dots here
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
          },
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2 }
          }
        ]
      };
      

  return (
    <section className="team-section">
      <div className="team-header">
        <h2>Meet The Team</h2>
        <p>
          Don't settle: Don't finish copy books. If you don't like the menu,
          leave the restaurant. If you're not on the right path, get off it.
        </p>
      </div>
      <div className="carousel-wrapper">
        <Slider {...settings} className="team-slider">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} className="imgmem" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="team-socials">
  <a href="#" className="facebook"><FaFacebookF /></a>
  <a href="#" className="twitter"><FaTwitter /></a>
  <a href="#" className="linkedin"><FaLinkedinIn /></a>
</div>

          </div>          
          ))}
      </Slider>
      </div>
    </section>
  );
};

export default TeamSection;
