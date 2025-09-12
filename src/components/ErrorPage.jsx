import React from 'react';
import errorIcon from '../assets/rocket-icon.png';
import { Link } from 'react-router';
const ErrorPage = ({ message = 'Page not found', code = 404 }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen space-y-5">
      <img src={errorIcon} alt="rocket icon" />
      <h1 className="text-4xl font-bold text-gray-700">{message}</h1>
      <p className="text-[#21272A] md:w-2/5 w-full mx-auto">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable. Please check the URL or return
        to the homepage.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-green-700 text-white rounded-md shadow-md hover:bg-green-800 transition"
      >
        Go to home page
      </Link>
    </div>
  );
};

export default ErrorPage;
