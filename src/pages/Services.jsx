import React from "react";
import Blogsection from "../components/Blogsection/Blogsection";
import ExclusiveServices from "../components/ExclusiveServices/ExclusiveServices";
import HeroSection from "../components/HeroSection/HeroSection";
import SrvHEro from "../components/SrvHero/SrvHEro";
import ExclusiveService from "../components/Services/ExclusiveService/ExclusiveService";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import CounterSection from "../components/Services/CounterSection/CounterSection";
import TestimonialSlider from "../components/TestimonialSlider/TestimonialSlider";


const Services = () => {
  return (
    <div>
      <Breadcrumb title="Service 1" path="Service 1"/>
      {/* <h1 style={{ padding: "40px", fontSize: "2rem", color: "#333" }}>
        Our Services
      </h1> */}
      {/* <Blogsection/> */}
      {/* <HeroSection/> */}
      <SrvHEro/>
      <ExclusiveService/>
      <CounterSection/>
      <TestimonialSlider/>
      {/* <ExclusiveServices/> */}
      
    </div>
  );
};

export default Services;
