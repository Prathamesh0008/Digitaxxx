import React from "react";
import CountUp from "react-countup";
import "../CounterSection/CounterSection.css";
import fun1 from '../../../images/fun1.png';
import fun2 from '../../../images/fun2.png';
import fun3 from '../../../images/fun3.png';
import fun4 from '../../../images/fun4.png';

const stats = [
  { icon: fun1, number: 1200, label: "Satisfied Clients" },
  { icon: fun2, number: 3000, label: "Completed Projects" },
  { icon: fun3, number: 88, label: "Awards" },
  { icon: fun4, number: 255, label: "Meetings" },
];

const CounterSection = () => {
  return (
    <div className="counter-section">
      {stats.map((item, index) => (
        <div className="counter-box" key={index}>
          <div className="counter-icon">
            <img src={item.icon} alt={item.label} />
          </div>
          <h2 className="counter-number">
            <CountUp end={item.number} duration={3} />
          </h2>
          <p className="counter-label">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CounterSection;
