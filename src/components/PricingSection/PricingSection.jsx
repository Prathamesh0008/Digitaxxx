import React, { useState } from 'react';
import './PricingSection.css';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  const plans = {
    monthly: {
      price: '$29',
      period: 'STARTUP PLAN',
      features: [
        '10 Key Words Optimized',
        '3 Top 10 Ranking Guarantee',
        'Web Site Analysis',
        'Keyword Research and Analysis',
        'Fixed Prawn Ref*',
        'Content Optimization'
      ]
    },
    yearly: {
      price: '$49',
      period: 'YEARLY PLAN',
      features: [
        '10 Key Words Option',
        '3 Top 10 Ranking Out',
        'Web Site Analysis',
        'Keyword Research and',
        'Fixed-Prawn Ref',
        'Content Optimized'
      ]
    }
  };

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        {/* Left Side - Pricing Cards */}
        <div className="pricing-cards">
          {/* Yearly Plan Card */}
          <div className={`pricing-card ${selectedPlan === 'yearly' ? 'active' : 'inactive'}`}>
            <div className="price-tag">
              <span className="price">{plans.yearly.price}</span>
              <span className="period">{plans.yearly.period}</span>
            </div>
            <ul className="features-list">
              {plans.yearly.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="get-it-button">GET IT NOW</button>
          </div>

          {/* Monthly Plan Card */}
          <div className={`pricing-card ${selectedPlan === 'monthly' ? 'active' : 'inactive'}`}>
            <div className="price-tag">
              <span className="price">{plans.monthly.price}</span>
              <span className="period">{plans.monthly.period}</span>
            </div>
            <ul className="features-list">
              {plans.monthly.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="get-it-button">GET IT NOW</button>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="pricing-content">
          <h2 className="section-title">Our Pricings</h2>
          <p className="section-description">
            Don't settle: Don't finish copy books. If you don't like the menu, leave the restaurant. 
            If you're not on the right path, get off it. Search engine marketing and search engine 
            optimization are critically important to online businesses.
          </p>
          <div className="plan-toggle">
            <button 
              className={`toggle-button ${selectedPlan === 'monthly' ? 'active' : ''}`}
              onClick={() => setSelectedPlan('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`toggle-button ${selectedPlan === 'yearly' ? 'active' : ''}`}
              onClick={() => setSelectedPlan('yearly')}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;