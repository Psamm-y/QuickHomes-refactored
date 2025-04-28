import React from 'react';
import heroImage from '../assets/real-estate1-Photoroom.png';
const Hero = () => {
  return (
    <main className="grid grid-cols-[3fr_20em] p-16">
      <div className="border-1 min-h-16">
        <p className="text-6xl font-inter ">
          Homes as <span className="text-accent-primary-darker">GRAND</span> as
          your <br className="max-sm:hidden" />
          Dreams
        </p>
        <p>Uncover rare spaces crafted for those who live without limits</p>
        <div>
          <button>Explore Listings </button>
          <button>Get in touch</button>
        </div>
      </div>
      <div className="border-1">
        <img src={heroImage} alt="hero Image" />
      </div>
    </main>
  );
};

export default Hero;
