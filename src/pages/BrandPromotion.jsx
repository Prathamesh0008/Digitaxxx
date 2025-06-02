import React from 'react';
import AboutBlock from '../components/AboutUs/AboutBlock';
import clientImage from '../images/img1.png';
import clientImage2 from '../images/img2.png';
import clientImage3 from '../images/img3.png';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import "./BrandPromotion.css"
import CounterSection from '../components/Services/CounterSection/CounterSection';
import PricingSection from '../components/PricingSection/PricingSection';
import Blogsection from '../components/Blogsection/Blogsection';

const BrandPromotion = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb title="Brand Promotion" path="BrandPromotion" />

      {/* Hero Section with Title and Subtitle */}
      <section className="brand-hero">
        <h1 className="brand-title">Brand Promotion</h1>
        <p className="brand-subtitle">
          Don’t settle: Don’t finish crappy books. If you don’t like the menu, leave the restaurant.
          If you’re not on the right path, get off it.
        </p>
      </section>

      {/* About Sections */}
      <AboutBlock
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
      <AboutBlock
        title="Thousands Clients Rated Us 5 Star"
        text={`Don't settle: Don't finish crappy books. If you leave a restaurant you're not enjoying, walk out.\n\nWe believe in high standards and client satisfaction.`}
        image={clientImage3}
        reverse={false}
      />
      <CounterSection/>
      <PricingSection/>
      <Blogsection/>
    </div>
  );
};

export default BrandPromotion;
