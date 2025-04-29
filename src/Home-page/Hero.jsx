import React from 'react';
import heroImage from '../assets/real-estate1-Photoroom.png';
import { IoIosArrowForward } from 'react-icons/io';
import { heroImages } from '../utils/hero-images';
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
        <p className="text-text-secondary text-xl mt-4">
          Uncover rare spaces crafted for those who live without limits
        </p>
        <div className="mt-10 text-xl flex items-center gap-4">
          <button className="group hover:rounded-full ease-in-out rounded-md flex gap-2 items-center p-3 px-8 bg-bg-primary hover:bg-bg-primary-lighter transition duration-300 text-white whitespace-nowrap text-nowrap">
            Explore Listings
            <span className=" group-hover:translate-x-4 delay-90 transition duration-200 ease-in-out m-auto">
              <IoIosArrowForward />
            </span>
          </button>
          <button className="hover:rounded-full text-text-primary rounded-md p-3 px-8 border-bg-primary hover:bg-bg-primary hover:border-bg-primary-lighter hover:text-white transition duration-300 border-2 box-border">
            Book a call
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
        <p className="text-center font-bold p-4">Houses</p>
      </div>
    </main>
  );
};

export default Hero;
