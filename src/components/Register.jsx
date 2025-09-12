import React from 'react';
import { FaArrowLeft, FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signupWithEmail, googleLogin } = useAuth();

  const navigate = useNavigate();

  const onSubmit = async data => {
    try {
      await signupWithEmail(data.email, data.password);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Register me!',
      }).then(result => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Registration successful!',
            text: 'Provide your email and password to login.',
            icon: 'success',
          });
        }
      });
      navigate('/login');
    } catch (error) {
      console.log('Registration failed', error.message);
    }
  };

  // google login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      Swal.fire({
        icon: 'success',
        title: 'Login successful',
        draggable: true,
      });
      navigate('/dashboard');
    } catch (error) {
      console.log('Failed to login', error);
    }
  };

  return (
    <div className="flex flex-col  items-center justify-center min-h-screen bg-gray-100 p-5">
      <Link to="/" className="flex gap-4 items-center py-4">
        <FaArrowLeft />
        <span>Back Home</span>
      </Link>
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register your account
        </h2>
        {/* Registration form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email:{' '}
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              className={`w-full px-4 py-2 border border-sky-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-700`}
              type="email"
              placeholder="Your email address"
            />
            {/* errors will return when field validation fails  */}
            {errors.email && (
              <p className="text-sm italic text-red-500 mt-2">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password:{' '}
            </label>
            <input
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: 6,
                  message:
                    'Password must be at least 8 characters with letters & numbers',
                },
              })}
              className={`w-full px-4 py-2 border border-sky-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-700`}
              type="password"
              placeholder="Password"
            />
            {/* errors will return when field validation fails  */}
            {errors.password && (
              <p className="text-sm italic text-red-500 mt-2">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            className="w-full py-2 bg-sky-700 text-white rounded-md hover:bg-sky-900 my-4 cursor-pointer"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        {/* Social login */}
        <div className="text-center  space-y-4">
          <p className="text-gray-600 ">or sign-up with</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleGoogleLogin}
              className="flex justify-center items-center px-4 py-2 space-x-2 text-white bg-red-500 rounded hover:bg-red-600 cursor-pointer"
            >
              <FaGoogle />
              <span>Google</span>
            </button>
            <button className="flex justify-center items-center px-4 py-2 space-x-2 text-white bg-gray-800 rounded hover:bg-gray-900 cursor-pointer">
              <FaGithub />
              <span>Github</span>
            </button>
            <button className="flex justify-center items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded hover:bg-blue-600 cursor-pointer">
              <FaFacebook />
              <span>Facebook</span>
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600">
          Have an account? Please{' '}
          <Link to="/login" className="text-sky-700 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
