import React, { useRef, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const SearchFilter = () => {
  const [propertyInput, setPropertyInput] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(0);
  const priceRef = useRef(null);
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
    setMaxAmount(e.target.value);
    updatePriceInput(minAmount, e.target.value);
  };
  const handleMinChange = (e) => {
    setMinAmount(e.target.value);
    updatePriceInput(e.target.value, maxAmount);
  };
  //toggle between displaying dropdown for property input
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
  return (
    <div>
      <div className="h-20 bg-bg-secondary shadow-md rounded-md absolute -bottom-8 right-36 left-36 flex items-center gap-4 p-4">
        <div className="relative w-[20%]">
          <div className="flex items-center h-8 border-bg-secondary-darker border-1 px-2 rounded-md ">
            <input
              onFocus={handleFocus}
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
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SearchFilter;
