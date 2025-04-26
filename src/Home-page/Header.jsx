import React from 'react';

const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full p-4 border-b-2 sticky ">
        <div className="basis-2xs">
          <p className="text-3xl font-bold">QuickHomes</p>
        </div>
        <div className="border-1 border-blue-300 p-2 rounded-full w-xl ">
          <span> </span>
          <input
            className="w-full outline-0 px-4 "
            type="text"
            placeholder="Search for a house"
          />
        </div>
        <ul className="flex gap-8 cursor-pointer">
          <li className="hover:text-blue-300">Home</li>
          <li className="hover:text-blue-300">About</li>
          <li className="hover:text-blue-300">Properties</li>
          <li className="hover:text-blue-300">Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
