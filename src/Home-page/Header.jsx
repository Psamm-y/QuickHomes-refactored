import React, { useEffect, useRef } from 'react';
import {
  FaFacebookF,
  FaHouseUser,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import { PiHouseLineThin } from 'react-icons/pi';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';
import { MdEmail } from 'react-icons/md';
const Header = () => {
  const refs = {
    headerRef: useRef(null),
  };
  const handleScroll = () => {
    if (scrollY > 60) {
      refs.headerRef.current.classList.add('bg-bg-secondary');
      refs.headerRef.current.classList.add('border-border-primary');
    } else {
      refs.headerRef.current.classList.remove('bg-bg-secondary');
      refs.headerRef.current.classList.remove('border-border-primary');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className="flex items-center justify-between px-16 bg-bg-secondary-darker text-text-primary h-6 ">
        <div className="flex gap-8 text-xs">
          <p className="flex items-center gap-1">
            <span className="text-green-700">
              <MdEmail />
            </span>
            info@quickhomes.com
          </p>
          <p className="flex items-center gap-1">
            <span className="text-green-700">
              <FaLocationDot />
            </span>
            Accra, Ghana
          </p>
        </div>
        <div className="flex gap-4 text-xs h-full items-center">
          <ul className="flex gap-2">
            <li>
              <a href="">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
          <button className="bg-bg-primary text-white h-full px-2 cursor-pointer">
            Add New Property
          </button>
        </div>
      </div>
      <nav
        ref={refs.headerRef}
        className="flex items-center justify-between w-full p-4 border-b-2 sticky top-0 z-100 px-16 transition duration-200 "
      >
        <div className="basis-xl">
          <p className="text-4xl font-bold font-garamond">QuickHomes</p>
        </div>

        <ul className="flex gap-8 cursor-pointer font-inter">
          <li className="hover:text-blue-300">Home</li>
          <li className="hover:text-blue-300">About</li>
          <li className="hover:text-blue-300">Properties</li>
          <li className="hover:text-blue-300">Contact</li>
        </ul>
        <div className="flex gap-2">
          <ul className="flex gap-3">
            <li className="flex items-center">
              <a href="" className="text-xl">
                <CiSearch />
              </a>
            </li>
            <li className="flex items-center">
              <a href="" className="text-xl relative">
                <PiHouseLineThin />
                <span className="absolute text-xs bg-red-500 rounded-full w-4 h-4 text-center -top-2 -right-1 text-white">
                  0
                </span>
              </a>
            </li>
            <li className="flex items-center">
              <a href="" className="text-2xl ml-4">
                <FaHouseUser />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
