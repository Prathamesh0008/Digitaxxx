import React from 'react';
import AboutBlock from '../components/AboutUs/AboutBlock';
import clientImage from '../images/smm-4.jpg';
import clientImage2 from '../images/smm-2.jpg';
import clientImage3 from '../images/smm-3.jpg';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import "./ServiceSeo.css"
import CounterSection from '../components/Services/CounterSection/CounterSection';
import PricingSection from '../components/PricingSection/PricingSection';
import Blogsection from '../components/Blogsection/Blogsection';

const Smm = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb title="Service-Smm" path="ServiceSmm" />

      {/* Hero Section with Title and Subtitle */}
      {/* <section className="brand-hero">
        <h1 className="brand-title">Search Engine Optimization</h1>
        <p className="brand-subtitle">
          Don’t settle: Don’t finish crappy books. If you don’t like the menu, leave the restaurant.
          If you’re not on the right path, get off it.
        </p>
      </section> */}

      {/* About Sections */}
      <AboutBlock
        title="Social Media Marketing"
        text={`Don't settle: Don't finish crappy books. If you leave a restaurant you're not enjoying, walk out.\n\nWe believe in high standards and client satisfaction.`}
        image={clientImage}
        reverse={false}
      />
      <AboutBlock
        title="Thousands Clients Rated Us 5 Star"
        text={`Don't settle: Don't finish crappy books. If you leave a restaurant you're not enjoying, walk out.\n\nWe believe in high standards and client satisfaction.`}
        image={clientImage2}
        reverse={true}
      />
            {/* Website Score Section */}
      {/* <section className="website-score-section">
        <h2 className="score-title">Your Website Score</h2>
        <p className="score-description">
          You look at marketing: everything that's happening in marketing is digitized.
          Everything that's in finance is digitized. So pretty much every industry,
          every function in every industry.
        </p>
        <form className="score-form">
          <input type="text" placeholder="Your Website URL*" className="score-input" />
          <input type="email" placeholder="Your Email Address" className="score-input" />
          <button type="submit" className="score-button">SUBSCRIBE</button>
        </form>
      </section> */}

      <AboutBlock
        title="Thousands Clients Rated Us 5 Star"
        text={`Don't settle: Don't finish crappy books. If you leave a restaurant you're not enjoying, walk out.\n\nWe believe in high standards and client satisfaction.`}
        image={clientImage3}
        reverse={false}
      />
      <Blogsection/>
      <CounterSection/>
      <PricingSection/>
      
    </div>
  );
};

export default Smm;
