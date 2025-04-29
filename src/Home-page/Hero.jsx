import React, { useEffect, useState } from 'react';

import { IoIosArrowForward } from 'react-icons/io';
import { heroImages } from '../utils/hero-images';
const Hero = () => {
  const [count, setCount] = useState(0);

  //set count to change after to minutes to update hero image
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => (count + 1) % heroImages.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentHero = heroImages[count];
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
          <button className="group hover:rounded-full ease-in-out rounded-md flex gap-2 items-center p-3 px-8 bg-bg-primary hover:bg-bg-primary-lighter transition duration-300 text-white whitespace-nowrap text-nowrap border-2 border-bg-primary">
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
      <div className="border-1 p-4 ">
        {currentHero && (
          <>
            <div
              className={` h-[20em] relative rounded-md bg-linear-to-r from-accent-primary to-accent-primary-darker ${
                currentHero.Count === 0 ? 'overflow-visible' : 'overflow-hidden'
              }`}
            >
              <img
                src={currentHero.image}
                alt="hero Image"
                className="h-[150%] object-cover absolute bottom-0 w-full right-0 left-0 rounded-md"
              />
            </div>
            <p className="text-center font-bold py-2 ">{currentHero.text}</p>
            <ul className="flex justify-center w-full gap-2">
              <li
                onClick={() => setCount(0)}
                className={`h-2 w-2  rounded-full cursor-pointer ${
                  currentHero.Count === 0
                    ? 'bg-accent-primary'
                    : 'bg-text-secondary-light'
                }`}
              ></li>
              <li
                onClick={() => setCount(1)}
                className={`h-2 w-2  rounded-full cursor-pointer ${
                  currentHero.Count === 1
                    ? 'bg-accent-primary'
                    : 'bg-text-secondary-light'
                }`}
              ></li>
              <li
                onClick={() => setCount(2)}
                className={`h-2 w-2  rounded-full cursor-pointer ${
                  currentHero.Count === 2
                    ? 'bg-accent-primary'
                    : 'bg-text-secondary-light'
                }`}
              ></li>
            </ul>
          </>
        )}
        {/* <div className=" h-[20em] relative rounded-md bg-linear-to-r from-accent-primary to-accent-primary-darker">
          <img
            src={heroImage}
            alt="hero Image"
            className="h-[150%] object-cover absolute bottom-0 w-full right-0 left-0 rounded-md"
          />
        </div>
        <p className="text-center font-bold p-4">Houses</p> */}
      </div>
    </main>
  );
};

export default Hero;
