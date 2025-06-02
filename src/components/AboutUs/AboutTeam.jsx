import React, { useEffect, useRef, useState } from "react";
import "./AboutTeam.css";
import teamImg from "../../images/about_team_img.png";
import icon1 from "../../images/about_team1.png";
import icon2 from "../../images/about_team2.png";
import icon3 from "../../images/about_team3.png";
import icon4 from "../../images/about_team4.png";

const AboutTeam = () => {
  const titleRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (titleRef.current) titleObserver.observe(titleRef.current);
    return () => titleObserver.disconnect();
  }, []);

  useEffect(() => {
    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (leftRef.current) contentObserver.observe(leftRef.current);
    return () => contentObserver.disconnect();
  }, []);

  return (
    <section className="abt-team-section">
      <div
        className={`abt-team-title ${titleVisible ? "fade-down" : ""}`}
        ref={titleRef}
      >
        <h2>About The Team</h2>
        <p className="abt-team-quote">
          Don’t settle: Don’t finish copy books. If you don’t like the menu,
          leave the restaurant. If you’re not on the right path, get off it.
        </p>
      </div>

      <div className="abt-team-container">
        <div
          className={`abt-team-left ${contentVisible ? "slide-in-left" : ""}`}
          ref={leftRef}
        >
          <p className="abt-team-description">
            For the music business, social networking is brilliant. Just when
            you think it’s doom and gloom and you have to spend millions of
            pounds on marketing and this and that, you have this amazing thing
            now called fan power...
          </p>

          <div className="abt-features-grid">
            <div className="abt-feature-box">
              <img src={icon1} alt="A Great Team" />
              <h4>A Great Team</h4>
              <p>
                Digital marketing methods such as search engine optimization
                search.
              </p>
            </div>
            <div className="abt-feature-box">
              <img src={icon2} alt="We Are Dedicated" />
              <h4>We Are Dedicated</h4>
              <p>
                Digital marketing methods such as search engine optimization
                search.
              </p>
            </div>
            <div className="abt-feature-box">
              <img src={icon3} alt="Life Time Support" />
              <h4>Life Time Support</h4>
              <p>
                Digital marketing methods such as search engine optimization
                search.
              </p>
            </div>
            <div className="abt-feature-box">
              <img src={icon4} alt="Dependable Team" />
              <h4>Dependable Team</h4>
              <p>
                Digital marketing methods such as search engine optimization
                search.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`abt-team-right ${contentVisible ? "slide-in-right" : ""}`}
          ref={rightRef}
        >
          <img src={teamImg} alt="Our Team" />
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
