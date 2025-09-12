import React from 'react';
import HeroSection from './HeroSection';
import ToolsSection from './ToolsSection';
import CompanyLogos from './CompanyLogos';
import Services from './Services';
import Testimonials from './Testimonials';
import Blogs from '../blogs/Blogs';
import TeamSection from './TeamSection';
import Pricing from './Pricing';
import Faqs from './Faqs';
import Newsletter from './Newsletter';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ToolsSection />
      <CompanyLogos />
      <Services />
      <Testimonials />
      <Blogs />
      <TeamSection />
      <Pricing />
      <Faqs />
      <Newsletter />
    </div>
  );
};

export default Home;
