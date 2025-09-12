import React from 'react';
import HeadingSection from '../../components/HeadingSection';
import {
  FaAmazon,
  FaApple,
  FaEdge,
  FaFacebook,
  FaFortAwesomeAlt,
  FaGithub,
  FaGoogle,
  FaMicrosoft,
} from 'react-icons/fa';
const CompanyLogos = () => {
  const logos = [
    {
      icon: FaApple,
      name: 'Apple',
    },
    {
      icon: FaGoogle,
      name: 'Google',
    },
    {
      icon: FaAmazon,
      name: 'Amazon',
    },
    {
      icon: FaMicrosoft,
      name: 'Microsoft',
    },
    {
      icon: FaFacebook,
      name: 'Facebook',
    },
    {
      icon: FaGithub,
      name: 'Github',
    },
    {
      icon: FaFortAwesomeAlt,
      name: 'Fort Awesome',
    },
    {
      icon: FaEdge,
      name: 'Edge',
    },
  ];
  return (
    <div className="bg-stone-100">
      <div className="max-w-screen-2xl container mx-auto py-20 px-5">
        <HeadingSection
          subheading="Our trusted partners"
          heading="Companies We've Worked With"
          description="We've partnered with some of the most innovative and leading companies to bring the best solutions to you."
        />

        {/* logo container */}
        <div className="relative overflow-hidden border-stone-200 border-y-[1px] p-8">
          <div className="flex items-center justify-around md:space-x-14 space-x-8 animate-scroll">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-white rounded-full p-6 w-28 h-28 hover:scale-110 transition transform shadow-sm"
              >
                <logo.icon
                  className="text-sky-700 text-4xl "
                  title={logo.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
