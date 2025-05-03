import React, { useRef, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { regions } from '../utils/hero';
const SearchFilter = () => {
  const [propertyInput, setPropertyInput] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [regionInput, setRegionInput] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const priceRef = useRef(null);
  const propertyRef = useRef(null);
  //region focus
  const [isRegionFocused, setRegionFocused] = useState(false);
  const handleRegionFocus = () => {
    setRegionFocused(true);
  };
  const handleRegionBlur = () => {
    setTimeout(() => {
      setRegionFocused(false);
    }, 200);
  };
  //price focus
  const [isPriceFocused, setPriceFocused] = useState(false);

  //price dropdown input fields and price value
  //function to update value for Price input field
  const updatePriceInput = (minAmount, maxAmount) => {
    //append zeros (.00) to amount
    const min = parseFloat(minAmount).toFixed(2);
    const max = parseFloat(maxAmount).toFixed(2);
    if (min && max) {
      setPriceInput(`GHS${min} - GHS${max}`);
    } else if (min) {
      setPriceInput(`From GHS${min}`);
    } else if (max) {
      setPriceInput(`Up to GHS${max}`);
    } else {
      setPriceInput('');
    }
  };
  // max and min input change
  const handleMaxChange = (e) => {
    let newMax = parseFloat(e.target.value) || 0;
    let newMin = minAmount;

    if (newMax <= newMin) {
      if (newMax === 0 && newMin === 0) {
        newMin = 0;
        newMax = 1;
      } else {
        newMin = Math.max(0, newMax - 1);
      }
    }

    setMinAmount(newMin);
    setMaxAmount(newMax);
    updatePriceInput(newMin, newMax);
  };
  const handleMinChange = (e) => {
    let newMin = parseFloat(e.target.value) || 0;
    let newMax = maxAmount;

    if (newMin >= newMax) {
      newMax = newMin + 1;
    }

    setMinAmount(newMin);
    setMaxAmount(newMax);
    updatePriceInput(newMin, newMax);
  };
  //toggle between displaying dropdown for property input
  const [isPropertyFocused, setPropertyFocused] = useState(false);
  //dropdown on focus
  const handlePropertyFocus = () => {
    setPropertyFocused(true);
  };
  //dropdown delays a bit to alow clicking before it onBlur fires and dropdown hides
  const handleBlur = () => {
    setTimeout(() => {
      setPropertyFocused(false);
    }, 200);
  };
  const handlePropertyInput = (e) => {
    setPropertyInput(e.target.value);
  };
  return (
    <div>
      <div className="h-20 bg-bg-secondary shadow-md rounded-md absolute -bottom-12 right-36 left-36 flex items-baseline-last gap-6 p-4 ">
        {/* Property type */}
        <div className="relative w-[20%]">
          <p>Searching for...</p>
          <div className="flex items-center h-8 border-bg-secondary-darker border-1 px-2 rounded-md ">
            <input
              ref={propertyRef}
              onFocus={handlePropertyFocus}
              onBlur={handleBlur}
              onChange={handlePropertyInput}
              value={propertyInput}
              placeholder="Property Type"
              id="inputField"
              type="text"
              className="w-full h-full p-2 outline-none  rounded-md"
            />
            <span>
              <IoMdArrowDropdown />
            </span>
          </div>

          {isPropertyFocused && (
            <ul className="absolute z-10 bg-bg-secondary border-1 border-bg-secondary-darker w-full rounded-md cursor-pointer">
              <li
                onMouseDown={() => setPropertyInput('House')}
                className="block p-2 hover:bg-accent-primary transition duration-150"
              >
                House
              </li>
              <li
                onMouseDown={() => setPropertyInput('Apartment')}
                className="block p-2 hover:bg-accent-primary transition duration-150"
              >
                Apartment
              </li>
              <li
                onMouseDown={() => setPropertyInput('Land')}
                className="block p-2 hover:bg-accent-primary transition duration-150"
              >
                Land
              </li>
              <li
                onMouseDown={() => setPropertyInput('Hostel')}
                className="block p-2 hover:bg-accent-primary transition duration-150"
              >
                Hostel
              </li>
              <li
                onMouseDown={() => setPropertyInput('Office Space')}
                className="block p-2 hover:bg-accent-primary transition duration-150"
              >
                Office Space
              </li>
            </ul>
          )}
        </div>
        {/* Price */}
        <div
          ref={priceRef}
          onFocus={() => setPriceFocused(true)}
          onBlur={(e) => {
            if (
              priceRef.current &&
              !priceRef.current.contains(e.relatedTarget)
            ) {
              setPriceFocused(false);
            }
          }}
          tabIndex={-1}
          className="relative w-[24%] cursor-pointer"
        >
          <p>What's your budget?</p>
          <div className="flex items-center h-8 border-bg-secondary-darker border-1 px-2 rounded-md ">
            <input
              value={priceInput}
              readOnly
              type="text"
              placeholder="Price range"
              className="w-full h-full p-2 outline-none  rounded-md cursor-pointer"
            />
          </div>
          {isPriceFocused && (
            <div className="absolute border-1 border-bg-secondary-darker rounded-md  w-full bg-bg-secondary">
              <ul className="flex items-center justify-between w-full p-2 ">
                <li className="w-[40%]">
                  <input
                    onChange={handleMinChange}
                    value={minAmount}
                    min={0}
                    type="number"
                    placeholder="min"
                    className="w-full border-1 border-bg-secondary-darker outline-none px-2 rounded-md p-1"
                  />
                </li>
                <li>
                  <span className="text-center w-full">to</span>
                </li>
                <li className="w-[40%]">
                  <input
                    onChange={handleMaxChange}
                    value={maxAmount}
                    min={0}
                    type="number"
                    placeholder="max"
                    className="w-full border-1 border-bg-secondary-darker outline-none px-2 rounded-md p-1"
                  />
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative w-[20%] cursor-pointer rounded-md">
          <div className="flex items-center h-8 border-bg-secondary-darker border-1 px-2 rounded-md ">
            <input
              onFocus={handleRegionFocus}
              onBlur={handleRegionBlur}
              type="text"
              onChange={(e) => setRegionInput(e.target.value)}
              value={regionInput}
              placeholder="Region"
              className="w-full h-full p-2 outline-none  rounded-md"
            />
            <span>
              <IoMdArrowDropdown />
            </span>
          </div>
          {isRegionFocused && (
            <ul className="absolute z-10 bg-bg-secondary border-1 border-bg-secondary-darker w-full rounded-md cursor-pointer max-h-50 overflow-y-scroll">
              {regions.map((region) => (
                <li
                  onMouseDown={() => setRegionInput(region)}
                  className="block p-2 hover:bg-accent-primary transition duration-150"
                >
                  {region}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Location */}
        <div className="relative w-[20%] cursor-pointer">
          <div className="flex items-center h-8 border-bg-secondary-darker border-1 px-2 rounded-md ">
            <input
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              type="text"
              placeholder="Location"
              className="w-full h-full p-2 outline-none  rounded-md "
            />
          </div>
        </div>
        {/* Search button */}
        <div className="flex mt-auto">
          <button className="text-4xl bg-bg-primary text-white h-full p-2 rounded-md">
            <CiSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
