import React from 'react';
import HeadingSection from '../../components/HeadingSection';
import { FaDharmachakra, FaEnvira, FaHeading } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: FaDharmachakra,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      icon: FaEnvira,
      description:
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.',
    },
    {
      icon: FaHeading,
      description:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33.',
    },
    {
      icon: FiSettings,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
  ];

  return (
    <div className="max-w-screen-2xl container bg-white mx-auto py-20 px-5">
      <div className="w-full lg:w-1/2 mx-auto">
        <HeadingSection
          subheading="Services"
          heading="Explore Our Range Of Professional Services Tailored To Meet Your Business Needs"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
      </div>
      {/* Render Service Here */}
      <div className="grid grid-cols-1  md:grid-cols-2 gap-12 py-10 md:w-4/5 mx-auto ">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center shadow-xl hover:rounded-md p-6 hover:translate-y-1 transition cursor-pointer"
            >
              <service.icon className="text-sky-700 text-4xl mb-4" />
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="text-center ">
        <button className="bg-sky-700 text-white px-6 py-3 rounded-md  space-x-2 hover:bg-sky-900 transition mt-6">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Services;
