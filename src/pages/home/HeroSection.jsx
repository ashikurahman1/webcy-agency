import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router';
import bannerImg from '../../assets/banner.png';
import { FaRegPlayCircle } from 'react-icons/fa';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="bg-stone-100 p-5">
      <div className="max-w-screen-2xl container mx-auto py-20 px-5 flex flex-col lg:flex-row items-center justify-between">
        {/* Left */}
        <div className="space-y-6 w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 ">
            Creative Web Design For Businesses
          </h1>
          <p className="text-lg text-gray-600 ">
            Join thousands of businesses already growing with our solutions.
            Let's help you take your business to the next level!
          </p>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <Link
              to="/pricing"
              className="btn btn-primary bg-sky-700 px-8 border-0 hover:bg-sky-800 shadow-sky-700"
            >
              Get Started{' '}
              <span>
                <FiArrowRight />
              </span>
            </Link>
            <Link
              to="/login"
              className="btn btn-outline text-sky-700 border-sky-700 btn-primary hover:bg-sky-700 hover:outline-0 hover:text-white px-8 shadow-sky-700"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-end relative">
          <div className="relative group">
            <img
              src={bannerImg}
              alt="Banner Image"
              className="shadow-lg rounded-lg"
            />
            <button
              onClick={openModal}
              className="absolute inset-0 flex justify-center items-center cursor-pointer rounded-lg group-hover:opacity-75 transition z-0"
            >
              <FaRegPlayCircle className="text-white text-5xl hover:text-sky-700" />
            </button>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50  z-50">
            {' '}
            <div className="bg-white p-5 rounded-lg shadow-lg relative max-w-xl w-full">
              <button
                className="absolute top-3 right-3 text-white text-lg hover:text-white bg-black px-2 rounded-full"
                onClick={closeModal}
              >
                &times;
              </button>
              <iframe
                className="w-full aspect-video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TT-ayTOGdqM?si=rv-3use--vrkLE9B"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
