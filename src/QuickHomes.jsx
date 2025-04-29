import React, { useEffect } from 'react';
import Header from './Home-page/Header';
import Hero from './Home-page/Hero';
import Properties from './Properties-page/Properties';

const QuickHomes = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <Hero />
      <Properties />
    </div>
  );
};

export default QuickHomes;
