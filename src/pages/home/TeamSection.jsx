import React from 'react';
import HeadingSection from '../../components/HeadingSection';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const members = [
  {
    img: '/images/members/person1.png',
    name: 'Johne Doe',
    designation: 'Ceo',
  },
  {
    img: '/members/person2.png',
    name: 'Jane Smith',
    designation: 'cto',
  },
  {
    img: '/images/members/person3.png',
    name: 'Mark Johnson',
    designation: 'Designer',
  },
  {
    img: '/images/members/person4.png',
    name: 'Emily Carter',
    designation: 'Developer',
  },
];

const TeamSection = () => {
  return (
    <div className="bg-stone-100">
      <div className="section-container">
        <HeadingSection
          heading="Meet the Experts"
          subheading="Our team"
          description=""
        />

        {/* Team container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:scale-105 transform cursor-pointer "
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-50 object-cover rounded-t-lg transition hover:scale-105 transform "
              />
              {/* Content */}
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500 font-semibold">
                  {member.designation}
                </p>
                {/* Icons */}
                <div className="flex space-x-4 mb-5 items-center">
                  <FaLinkedinIn className="text-sky-600 hover:text-sky-800" />
                  <FaTwitter className="text-sky-500 hover:text-sky-800" />
                  <FaInstagram className="text-fuchsia-700 hover:text-fuchsia-900" />
                  <FaFacebookF className="text-blue-500 hover:text-blue-800" />
                </div>
                <button className="bg-sky-800 py-2 px-4 my-2 rounded-full text-white font-semibold hover:bg-sky-900 cursor-pointer">
                  Contact {member.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
