import React from 'react';
import { FiCloud, FiCode, FiSettings, FiSmartphone } from 'react-icons/fi';
import HeadingSection from '../../components/HeadingSection';
const tools = [
  {
    icon: FiSettings,
    title: 'Customizable Setting',
    dscription: 'Easily configure tools to fit your project requirments.',
  },
  {
    icon: FiCode,
    title: 'Developer-Friendly',
    dscription: 'Optimized for developers with clean and efficient code.',
  },
  {
    icon: FiSmartphone,
    title: 'Responsive Design',
    dscription: 'Build tools that look great on any device and screen size.',
  },
  {
    icon: FiCloud,
    title: 'Cloud Integration',
    dscription:
      'Seamlessly connect with cloud services for better productivity',
  },
];

const ToolsSection = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto py-20 px-5">
      {/* Heading Section */}
      {/* <div className="text-center mb-10">
        <p className="text-sky-700 font-semibold uppercase ">
          The tools you need
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3">
          All-in-One Solution for Your Projects
        </h2>
      </div> */}
      <HeadingSection
        subheading={'The tools you need'}
        heading={'All-in-One Solution for Your Projects'}
      />

      {/* render tools here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition cursor-pointer"
          >
            <tool.icon className="text-sky-700 text-4xl mb-4" />
            <h3 className="text-lg font-bold text-gray-800">{tool.title}</h3>
            <p className="text-gray-600 mt-2">{tool.dscription}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center ">
        <button className="bg-sky-700 text-white px-6 py-3 rounded-md  space-x-2 hover:bg-sky-900 transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ToolsSection;
