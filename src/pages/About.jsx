import React from 'react';
import AboutBlock from '../components/AboutUs/AboutBlock';
import rocketImg from '../images/about_us_1.png';
import seoImg from '../images/about_us_2.png';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import AboutSectionOne from '../components/AboutUs/AboutSectionOne';
import AboutTeam from '../components/AboutUs/AboutTeam';

const About = () => {
  return (
    <div>
        <Breadcrumb title="About-US" path="AboutUS" />
      <AboutBlock
  title="Know More About Us!"
  text={[
    "For the music business, social networking is brilliant. Just when you think mand gloom and you have to spend millions of pounds on marketing and and that, you have this amazing thing now called fan power. The whole is linked through a laptop. It’s amazing. And it’s free. I love it.",
    "Because advertising and marketing is an art, the solution to each new prob challenge should begin with a blank canvas and an open mind, not with us borrowing of other people’s mediocrities precisely modern."
  ]}
  image={rocketImg}
  reverse={false}
/>

      <AboutBlock
  title="SEO & Digital Marketing Needed For Every Business & Websites!"
  text={[
    "For the music business, social networking is brilliant. Just when you think mand gloom and you have to spend millions of pounds on marketing and and that, you have this amazing thing now called fan power. The whole is linked through a laptop. It’s amazing. And it’s free. I love it.",
    "Because advertising and marketing is an art, the solution to each new prob challenge should begin with a blank canvas and an open mind, not with us borrowing of other people’s mediocrities precisely modern."
  ]}
  image={rocketImg}
  reverse={true}
/>
<AboutSectionOne/>
<AboutTeam/>
    </div>
  );
};

export default About;
