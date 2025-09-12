import React from 'react';
import HeadingSection from '../../components/HeadingSection';
import { FiArrowRight } from 'react-icons/fi';

const Newsletter = () => {
  return (
    <div className="section-container">
      <div className="w-full lg:w-1/2 mx-auto">
        <HeadingSection
          heading="Stay Updated with Our Newsletter"
          subheading=""
          description="Subscribe to our newsletter to get the latest news, updates, and offers. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar."
        />
      </div>
      {/* Button*/}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button className="bg-sky-700 text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-sky-900 transition">
          <span>Subscribe Now</span>
        </button>
        <button className="border border-sky-700 px-6 py-3 rounded-md hover:bg-sky-700 hover:text-white text-sky-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
