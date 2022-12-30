import React from 'react';

import logo from '../assets/images/logo.svg';

import facebookLogo from '../assets/images/icon-facebook.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';
import pinterestLogo from '../assets/images/icon-pinterest.svg';
import instagramLogo from '../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='container max-w-6xl py-10 mx-auto'>
        <div className='flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start'>
          <div className='flex flex-col items-center space-y-8 md:items-start md:space-y-4'>
            <div className='h-8'>
              <img alt='logo of page' src={logo} className='w-44 md:ml-3' />
            </div>
            <div className='flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3'>
              <div className='h-10 group'>
                <a href='/'>About</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-500'></div>
              </div>
              <div className='h-10 group'>
                <a href='/'>Careers</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-500'></div>
              </div>
              <div className='h-10 group'>
                <a href='/'>Events</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-500'></div>
              </div>
              <div className='h-10 group'>
                <a href='/'>Products</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-500'></div>
              </div>
              <div className='h-10 group'>
                <a href='/'>Support</a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-500'></div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start justify-between space-y-4 text-gray-500'>
            <div className='flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0'>
              <div className='h-8 group'>
                <a href='/'>
                  <img alt='social logo' src={facebookLogo} />
                </a>
              </div>
              <div className='h-8 group'>
                <a href='/'>
                  <img alt='social logo' src={twitterLogo} />
                </a>
              </div>
              <div className='h-8 group'>
                <a href='/'>
                  <img alt='social logo' src={pinterestLogo} />
                </a>
              </div>
              <div className='h-8 group'>
                <a href='/'>
                  <img alt='social logo' src={instagramLogo} />
                </a>
              </div>
            </div>

            <div className='font-bold'>
              &copy; 2022 LoopStudios . All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
