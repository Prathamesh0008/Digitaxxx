import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './TestimonialSlider.css';
import client1 from '../../images/client1.png';
import client2 from '../../images/client2.png';

const testimonials = [
  {
    quote: "Happiness is not something you postpone for the future; it is something you design for the present.",
    name: "Mark Anderson",
    rating: 5,
    image: client1,
  },
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    name: "Lina Youngis",
    rating: 5,
    image: client2,
  },
  {
    quote: "Design your own life plan, or fall into someone else's plan—and guess what they planned for you? Not much.",
    name: "John Maxwell",
    rating: 5,
    image: client1,
  },
  {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    name: "Emily Thompson",
    rating: 4,
    image: client2,
  },
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    name: "Daniel Craig",
    rating: 5,
    image: client1,
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    name: "Sophia Lee",
    rating: 5,
    image: client2,
  },
];

const TestimonialSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigation, setNavigation] = useState({ prevEl: null, nextEl: null });

  useEffect(() => {
    setNavigation({ prevEl: prevRef.current, nextEl: nextRef.current });
  }, []);

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-left">
          <h2>Thousands Clients<br />Rated Us 5 Star</h2>
          <p>Don't settle: Don't finish crappy books. If you leave a restaurant you're not enjoying, walk out.</p>
        </div>

        <div className="testimonial-slider-wrapper">
          <div ref={prevRef} className="swiper-button-prev"></div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            navigation={navigation}
            className="testimonial-slider"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <p>"{item.quote}"</p>
                  <h4>{item.name} <span>{"★".repeat(item.rating)}</span></h4>
                  <img src={item.image} alt={item.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div ref={nextRef} className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
