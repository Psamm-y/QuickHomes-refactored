import React, { useEffect, useState } from 'react';

import { IoIosArrowForward } from 'react-icons/io';
import { heroImages } from '../utils/hero-images';
const Hero = () => {
  const [count, setCount] = useState(0);
  const [propertyInput, setPropertyInput] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [regionInput, setRegionInput] = useState('');
  //toggel between displaying dropdown for property input
  const [isPropertyFocused, setPropertyFocused] = useState(false);
  //dropdown on focus
  const handleFocus = () => {
    setPropertyFocused(true);
  };
  //dropdown delays a bit to dissapear on Blur (unfocus)
  const handleBlur = () => {
    setTimeout(() => {
      setPropertyFocused(false);
    }, 200);
  };
  const handlePropertyInput = (e) => {
    setPropertyInput(e.target.value);
  };
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
    <main className="grid grid-cols-[2fr_1fr] grid-rows-[25em] p-16 mt-8 relative">
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
      </div>
      <div className="h-20 bg-bg-secondary shadow-md rounded-md absolute -bottom-8 right-36 left-36 flex p-4">
        <div className="relative">
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handlePropertyInput}
            value={propertyInput}
            placeholder="Property Type"
            id="inputField"
            type="text"
            className="h-8 border-bg-secondary-darker border-1 p-2 rounded-md outline-none"
          />
          {isPropertyFocused && (
            <ul className="absolute top-8 bg-bg-secondary border-1 border-bg-secondary-darker w-full rounded-md">
              <li
                onClick={() => setPropertyInput('House')}
                className="block p-2 hover:bg-accent-primary transition duration-150"
              >
                House
              </li>
              <li
                onClick={() => setPropertyInput('Apartment')}
                className="block p-2 hover:bg-accent-primary transition duration-150"
              >
                Apartment
              </li>
              <li
                onClick={() => setPropertyInput('Land')}
                className="block p-2 hover:bg-accent-primary transition duration-150"
              >
                Land
              </li>
              <li
                onClick={() => setPropertyInput('Hostel')}
                className="block p-2 hover:bg-accent-primary transition duration-150"
              >
                Hostel
              </li>
              <li
                onClick={() => setPropertyInput('Office Space')}
                className="block p-2 hover:bg-accent-primary transition duration-150"
              >
                Office Space
              </li>
            </ul>
          )}
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
};

export default Hero;
