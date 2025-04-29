import React from 'react';
import heroImage from '../assets/real-estate1-Photoroom.png';
import { IoIosArrowForward } from 'react-icons/io';
const Hero = () => {
  return (
    <main className="grid grid-cols-[2fr_1fr] grid-rows-[25em] p-16 mt-8">
      <div className=" min-h-16 self-center">
        <p className="text-6xl font-inter ">
          Homes as&nbsp;
          <span className="text-transparent bg-gradient-to-tr from-accent-primary to-accent-primary-darker bg-clip-text font-extrabold">
            GRAND
          </span>{' '}
          as your <br className="max-sm:hidden" />
          Dreams
        </p>
        <p className="text-text-secondary text-2xl mt-4">
          Uncover rare spaces crafted for those who live without limits
        </p>
        <div className="mt-10 text-xl flex items-center gap-4">
          <button className="flex gap-2 items-center p-3 px-8 bg-accent-primary-darker text-bg-secondary whitespace-nowrap text-nowrap">
            Explore Listings
            <span className="text-center">
              <IoIosArrowForward />
            </span>
          </button>
          <button className="p-3 px-8 border-accent-primary border-2 ">
            Get in touch
          </button>
        </div>
      </div>
      <div className="border-1 p-4">
        <div className=" h-[20em] relative rounded-md bg-linear-to-r from-accent-primary to-accent-primary-darker">
          <img
            src={heroImage}
            alt="hero Image"
            className="h-[150%] object-cover absolute bottom-0 w-full right-0 left-0 rounded-md"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
