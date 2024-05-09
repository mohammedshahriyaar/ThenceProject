import React, { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "./navbar.css"
import applogo from '../assets/applogo.png'
import '../index.css'
import './Register.css'
import cross from '../assets/cross.png'
import exclaim from '../assets/exclaim.png'

const Register = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = data => {
    navigate('/final');
  };

  const handleInputChange = () => {
    // Check if both fields are filled
    const formData = getValues(); // Retrieve form data
    const usernameFilled = formData?.username ? true : false;
    const emailFilled = formData?.email ? true : false;
    setIsFormValid(usernameFilled && emailFilled);
  };

  const handleHomeNavigation = () => {
    navigate('/');
  };

  useEffect(() => {
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <>
      <div className='nav-container-reg'>
        <div className='nav-left'>
          <img src={applogo} alt='logo'></img>
        </div>
        <div className='nav-right-register'>
          <button style={{ width: '50px' }} className='rounded' onClick={handleHomeNavigation} >
            <img src={cross} alt="logo" />
          </button>
        </div>
      </div>
      <div className="flex mt-14 items-center flex-col min-h-screen">
        <div className='text-center'>
          <div className='green-top-top'>Registration Form</div>
          <div style={{ marginBottom: '-20px' }} className='reg-top-top '>Start your Success</div>
          <div className='reg-top-top'>Journey here!</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} onChange={handleInputChange} className="w-full max-w-md px-4 mt-12">
          <input style={{ backgroundColor: "#EFEFEF", color: "#827A7A" }} {...register("username", { required: true })} className=" block  mb-6 w-full h-16 px-4 py-2 rounded-full border border-gray-500 focus:outline-none focus:border-gray-500 bg-gray-200" placeholder="Enter your name" />
          <input style={{ backgroundColor: "#EFEFEF", color: "#827A7A" }} {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className="mt-4 block w-full h-16 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 bg-gray-200" placeholder="Enter your email" />
          {errors.email && errors.email.type === 'pattern' && <div className=" exclaim-red text-red-500"> <img className='reg-explain' src={exclaim} alt="" ></img> Enter a valid email address </div>}

          <button
            type="submit"
            className={`mt-8 py-2 px-4 w-full h-16 rounded-full  ${isFormValid ? 'reg-button-true' : 'reg-button'} border border-gray-500 focus:outline-none`}
            disabled={!isFormValid || isSubmitted}
          >
            Submit
          </button>

        </form>
      </div>
    </>
  );
};

export default Register;
