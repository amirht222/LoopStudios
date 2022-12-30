import React from 'react';

import deepEarthDesktop from '../assets/images/desktop/image-deep-earth.jpg';
import deepEarthMobile from '../assets/images/mobile/image-deep-earth.jpg';

import nightArcadeDesktop from '../assets/images/desktop/image-night-arcade.jpg';
import nightArcadeMobile from '../assets/images/mobile/image-night-arcade.jpg';

import soccerTeamDesktop from '../assets/images/desktop/image-soccer-team.jpg';
import soccerTeamMobile from '../assets/images/mobile/image-soccer-team.jpg';

import theGridDesktop from '../assets/images/desktop/image-grid.jpg';
import theGridMobile from '../assets/images/mobile/image-grid.jpg';

import fromAboveDesktop from '../assets/images/desktop/image-from-above.jpg';
import fromAboveMobile from '../assets/images/mobile/image-from-above.jpg';

import pocketBoearlisDesktop from '../assets/images/desktop/image-pocket-borealis.jpg';
import pocketBoearlisMobile from '../assets/images/mobile/image-pocket-borealis.jpg';

import curiosityDesktop from '../assets/images/desktop/image-curiosity.jpg';
import curiosityMobile from '../assets/images/mobile/image-curiosity.jpg';

import fisheyeDesktop from '../assets/images/desktop/image-fisheye.jpg';
import fisheyeMobile from '../assets/images/mobile/image-fisheye.jpg';

const Creations = () => {
  return (
    <section id='creations'>
      <div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
        {/* header */}
        <div className='flex justify-center mb-20 md:justify-between '>
          <h2 className='text-4xl text-center uppercase md:text-left md:text-5xl'>
            Our Creations
          </h2>
          <button className='hidden btn md:block'>See All</button>
        </div>
        <div className='item-container'>
          <div className='group item'>
            <img
              alt='' src={deepEarthDesktop}
              className='hidden w-full duration-200 md:block group-hover:scale-110'
            />
            <img alt='' src={deepEarthMobile} className='w-full md:hidden' />
            <div className='item-gradient'></div>
            <h5>Deep Earth</h5>
          </div>
          <div className='group item'>
            <img
              alt='' src={nightArcadeDesktop}
              className='hidden w-full duration-200 md:block group-hover:scale-110'
            />
            <img alt='' src={nightArcadeMobile} className='w-full md:hidden' />
            <div className='item-gradient'></div>
            <h5>Night Arcade</h5>
          </div>
          <div className='group item'>
            <img
              alt='' src={soccerTeamDesktop}
              className='hidden w-full duration-200 md:block group-hover:scale-110'
            />
            <img alt='' src={soccerTeamMobile} className='w-full md:hidden' />
            <div className='item-gradient'></div>
            <h5>Soccer Team</h5>
          </div>
          <div className='group item'>
            <img
              alt='' src={theGridDesktop}
              className='hidden w-full duration-200 md:block group-hover:scale-110'
            />
            <img alt='' src={theGridMobile} className='w-full md:hidden' />
            <div className='item-gradient'></div>
            <h5>The Grid</h5>
          </div>
        </div>
        <div className='item-container mt-10'>
          <div className='group item'>
            <img
              alt='' src={fromAboveDesktop}
              className='hidden w-full duration-200 md:block group-hover:scale-110'
            />
            <img alt='' src={fromAboveMobile} className='w-full md:hidden' />
            <div className='item-gradient'></div>
            <h5>From Up Above VR</h5>
          </div>
          <div className='group item'>
            <img
              alt='' src={pocketBoearlisDesktop}
              className='hidden w-full duration-200 md:block group-hover:scale-110'
            />
            <img alt='' src={pocketBoearlisMobile} className='w-full md:hidden' />
            <div className='item-gradient'></div>
            <h5>Pocket Borealis</h5>
          </div>
          <div className='group item'>
            <img alt=''
              src={curiosityDesktop}
              className='hidden w-full duration-200 md:block group-hover:scale-110'
            />
            <img alt='' src={curiosityMobile} className='w-full md:hidden' />
            <div className='item-gradient'></div>
            <h5>The Curiosity</h5>
          </div>
          <div className='group item'>
            <img alt=''
              src={fisheyeDesktop}
              className='hidden w-full duration-200 md:block group-hover:scale-110'
            />
            <img alt='' src={fisheyeMobile} className='w-full md:hidden' />
            <div className='item-gradient'></div>
            <h5>Make It Fisheye</h5>
          </div>
        </div>
        <div className='flex justify-center mt-10 md:hidden'>
          <button className='btn w-full md:hidden'>See All</button>
        </div>
      </div>
    </section>
  );
};

export default Creations;
