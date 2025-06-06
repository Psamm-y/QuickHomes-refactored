import React, { useEffect, useRef, useState } from 'react';
import rentalHouse from '../assets/rental-houses.jpg';
import { FaBath, FaBed, FaStar } from 'react-icons/fa';
import { TfiRulerAlt2 } from 'react-icons/tfi';
import { FaLocationDot, FaRegCircleUser } from 'react-icons/fa6';
import { IoMdStar } from 'react-icons/io';
import { properties } from '../utils/properties';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
const Properties = () => {
  const [imageIndexes, setImageIndexes] = useState(
    Object.fromEntries(properties.map((_, index) => [index, 0]))
  );
  const [favorites, setFavorites] = useState(
    Object.fromEntries(properties.map((_, index) => [index, false]))
  );

  //function to toggle favorite

  const handleClickFav = (index) => {
    setFavorites((prevfavorites) => ({
      ...prevfavorites,
      [index]: !prevfavorites[index],
    }));
  };

  //next and previous buttons function
  const handleNext = (index) => {
    setImageIndexes((prev) => ({
      ...prev,
      [index]: (prev[index] + 1) % properties[index].images.length,
    }));
  };

  const handlePrevious = (index) => {
    setImageIndexes((prev) => ({
      ...prev,
      [index]: (prev[index] + 1) % properties[index].images.length,
    }));
  };
  return (
    <section className="grid grid-cols-3  bg-bg-secondary min-h-1200 p-4 pt-12">
      {properties.map(
        (
          {
            images,
            type,
            description,
            location,
            price,
            rating,
            beds,
            bath,
            area,
            author,
          },
          index
        ) => (
          <div key={index}>
            <div className=" w-80 h-110 overflow-hidden rounded-md ">
              <div className="group transition duration-3000  ease-in-out overflow-hidden relative h-[60%] flex rounded-3xl">
                <img
                  src={images[imageIndexes[index]]}
                  alt="image"
                  className=" object-cover h-full w-full rounded-3xl transition duration-1000"
                />
                <div className="flex gap-2 items-center absolute bottom-2 text-black/60 right-5 ">
                  <span className=" bg-white/80 p-1 cursor-pointer rounded-md">
                    <MdFavorite
                      className={`${
                        favorites[index] ? 'text-red-500 animate-bubble' : ''
                      }
                       `}
                      onClick={() => handleClickFav(index)}
                    />
                  </span>
                  <span className=" bg-white/80 p-1 cursor-pointer rounded-md">
                    <AiOutlineExpandAlt />
                  </span>
                </div>

                <span className=" p-2 pr-4 font-medium bg-bg-primary/15 border-bg-primary backdrop-blur-xl absolute top-6 -right-2 text-white text-[0.8rem] ">
                  {type}
                </span>
                <span
                  onClick={() => handleNext(index)}
                  className="transition duration-200 cursor-pointer group-hover:block hidden text-black absolute top-[50%] hover:bg-white/80 right-2 bg-white/60 rounded-full shadow-text-secondary-light p-2  "
                >
                  <GrNext />
                </span>
                <span
                  onClick={() => handlePrevious(index)}
                  className="transition duration-200 cursor-pointer group-hover:block hidden  text-black absolute top-[50%] left-2 bg-white/60 hover:bg-white/80 rounded-full shadow-text-secondary-light p-2  "
                >
                  <GrPrevious />
                </span>
              </div>
              <div className="p-1">
                <div>
                  <h3 className="text-xl">{description}</h3>
                  <div className="flex justify-between  mt-4">
                    <p className="text-sm text-text-secondary flex items-center">
                      <span>
                        <FaLocationDot />
                      </span>
                      {location}
                    </p>
                    <p className="flex items-center text-sm font-bold text-text-secondary">
                      <span className="text-accent-primary">
                        {rating && <IoMdStar />}
                      </span>
                      {rating}
                    </p>
                  </div>
                  <div className=" text-sm flex gap-4 text-text-secondary">
                    <span
                      title="Bed(s)"
                      className="font-bold flex items-center gap-2"
                    >
                      {beds && <FaBed />}
                      {beds}
                    </span>
                    <span
                      title="Bath"
                      className="font-bold flex items-center gap-2"
                    >
                      {bath && <FaBath />}
                      {bath}
                    </span>
                    <span
                      title="Area"
                      className="font-bold flex items-center gap-2"
                    >
                      {area && <TfiRulerAlt2 />}
                      {area} sq. ft
                    </span>
                  </div>
                  <div className="font-poppins text-xl mt-4 font-medium text-bg-primary-light">
                    GHS {price}
                  </div>
                  <hr className="mt-2" />
                  <div className="mt-2 flex items-center gap-2 text-text-primary">
                    <span className="flex">
                      <FaRegCircleUser />
                    </span>
                    <p>{author}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
      {/* <div className="w-80 h-100 overflow-hidden rounded-md ">
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
      </div> */}
    </section>
  );
};

export default Properties;
