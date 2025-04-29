import React from 'react';
import heroImage from '../assets/real-estate1-Photoroom.png';
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
        <p>Uncover rare spaces crafted for those who live without limits</p>
        <div>
          <button>Explore Listings </button>
          <button>Get in touch</button>
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
