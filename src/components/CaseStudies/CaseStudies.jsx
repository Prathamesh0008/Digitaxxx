import React, { useState } from 'react';
import './CaseStudies.css';
import case1 from '../../images/img1-670x534.jpg';
import case2 from '../../images/img3-670x534.jpg';
import case3 from '../../images/img4-670x534.jpg';

const CaseStudies = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const caseStudies = [
    {
      title: "Content is anything that adds",
      image: case1,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
    },
    {
      title: "The best marketing feel like",
      image: case2,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      title: "Don’t settle: Don’t finish crap",
      image: case3,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
    },
  ];

  const toggleReadMore = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className='case'>
    <section className="case-studies">
      <div className="case-studies-header">
        <h2>Our Case Studies</h2>
        <p>
          Don’t settle: Don’t finish crappy books. If you don’t like the menu,
          leave the restaurant. If you’re not on the right path, get off it.
        </p>
      </div>

      <div className="case-studies-grid">
        {caseStudies.map((item, index) => {
          const isExpanded = expandedCards[index];
          return (
            <div key={index} className="case-card">
              <img src={item.image} alt={item.title} className="case-img" />
              <h3>{item.title}</h3>
              <p>
                {isExpanded
                  ? item.description
                  : `${item.description.slice(0, 80)}...`}
              </p>
              <button
                className="read-more-btn"
                onClick={() => toggleReadMore(index)}
              >
                {isExpanded ? 'Show Less' : 'Read More '}
                <span
                  className={`arrow-icon ${isExpanded ? 'rotate-down' : ''}`}
                >
                   →
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
    </div>
  );
};

export default CaseStudies;
