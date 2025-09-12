import React from 'react';

const HeadingSection = ({ subheading, heading, description }) => {
  return (
    <div className="text-center mb-10">
      <p className="text-sky-700 font-semibold uppercase ">{subheading}</p>
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3">
        {heading}
      </h2>
      {description && <p className="text-gray-600 mt-4">{description}</p>}
    </div>
  );
};

export default HeadingSection;
