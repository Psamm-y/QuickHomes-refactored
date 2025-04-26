import React from 'react';
import {
  FaFacebookF,
  FaHouseUser,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import { PiHouseLineThin } from 'react-icons/pi';
import { FaCircleUser, FaXTwitter } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';
const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between px-16 bg-blue-950 text-white h-6 sticky">
        <div className="flex gap-8 text-xs">
          <p>info@quickhomes.com</p>
          <p>Accra, Ghana</p>
        </div>
        <div className="flex gap-4 text-xs h-full items-center">
          <ul className="flex gap-2">
            <li>
              <a href="">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <FaXTwitter />
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
          <button className="bg-green-700 h-full px-2 cursor-pointer">
            Add New Property
          </button>
        </div>
      </div>
      <nav className="flex items-center justify-between w-full p-4 border-b-2 sticky px-16">
        <div className="basis-xl">
          <p className="text-3xl font-bold">QuickHomes</p>
        </div>

        <ul className="flex gap-8 cursor-pointer">
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
