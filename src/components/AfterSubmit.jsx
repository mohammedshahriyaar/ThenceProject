import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AfterSubmit.css';
import '../index.css';
import applogo from '../assets/applogo.png'
import tick from '../assets/tick.png'

function AfterSubmit() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

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
      <div className='ml-1'>
        <img src={applogo} alt='logo'></img>
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <div className="p-6">
          <div className="text-center mb-4">
            <img src={tick} alt="" ></img>
          </div>
          <div className="text-center mb-2 mt-2 text-lg font-top-top">SUCCESS SUBMITTED</div>
          <div className="text-center reg-top-top">Congratulations</div>
          <div style={{ color: "#727272", fontWeight: '500' }} className="text-center mt-3 mb-4 after-bottom w-14">
            Your request has been submitted successfully to us. We will validate your information
            and reach out to you shortly with updates.
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 text-center p-4 after-bottom-bottom">
          Redirecting you to Homepage in  <span className="font-semibold">5 Seconds</span>
        </div>
      </div>
    </>
  );
}

export default AfterSubmit;
