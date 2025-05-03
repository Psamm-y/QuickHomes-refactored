import React from 'react';
import rentalHouse from '../assets/rental-houses.jpg';
import { FaBath, FaBed, FaStar } from 'react-icons/fa';
import { TfiRulerAlt2 } from 'react-icons/tfi';
import { FaLocationDot, FaRegCircleUser } from 'react-icons/fa6';
import { IoMdStar } from 'react-icons/io';
const Properties = () => {
  return (
    <section className="bg-bg-secondary min-h-1200 p-4 mt-10">
      <div className="w-80 h-100 overflow-hidden rounded-md ">
        <div className="relative h-[60%] flex rounded-3xl">
          <img
            src={rentalHouse}
            alt="House image"
            className="object-cover h-full w-full rounded-3xl"
          />
          <span className=" absolute top-4 right-0 text-white text-[0.8rem] p-1 bg-bg-primary rounded-s-lg">
            Apartment
          </span>
        </div>
        <div className="p-1">
          <div>
            <h3 className="text-xl">Light And Modern Apartment</h3>
            <div className="flex justify-between  mt-4">
              <p className="text-sm text-text-secondary flex items-center">
                <span>
                  <FaLocationDot />
                </span>
                Madina
              </p>
              <p className="flex items-center text-sm font-bold text-accent-primary">
                <span>
                  <IoMdStar />
                </span>
                4.76
              </p>
            </div>
            <div className=" text-sm flex gap-4 text-text-secondary">
              <span title="Bed(s)" className="flex items-center gap-2">
                <FaBed />2
              </span>
              <span title="Bath" className="flex items-center gap-2">
                <FaBath />1
              </span>
              <span title="Area" className="flex items-center gap-2">
                <TfiRulerAlt2 />
                2500 sq. ft
              </span>
            </div>
            <div className="font-poppins text-xl mt-4 font-medium ">
              GHS 21,000.00
            </div>
            <hr />
            <div className="mt-2 flex items-center gap-2 text-text-primary">
              <span className="flex">
                <FaRegCircleUser />
              </span>
              <p>Samuel Ampadu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
