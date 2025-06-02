import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import SubscribeSection from "../components/SubscribeSection/SubscribeSection";
import ScrollSection from "../components/ScrollSection/ScrollSection";
import SeoAnalysisSection from "../components/SeoAnalysisSection/SeoAnalysisSection";
import ExclusiveServices from "../components/ExclusiveServices/ExclusiveServices";
import HowWeWork from "../components/HowWeWork/HowWeWork";
import TeamSection from "../components/TeamSection/TeamSection";
import TestimonialSlider from "../components/TestimonialSlider/TestimonialSlider";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import PricingSection from "../components/PricingSection/PricingSection";
import Blogsection from "../components/Blogsection/Blogsection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SubscribeSection />
      <ScrollSection />
      <SeoAnalysisSection />
      <ExclusiveServices />
      <HowWeWork />
      <TeamSection />
      <TestimonialSlider />
      <CaseStudies />
      <PricingSection />
      <Blogsection />
    </>
  );
};

export default Home;
