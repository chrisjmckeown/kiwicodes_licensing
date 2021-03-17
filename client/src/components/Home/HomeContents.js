import React from 'react';
import HomeCarousel from './HomeCarousel';
import HomeFeaturedProducts from './HomeFeaturedProducts';
import PageHeader from '../PageHeader';

export const HomeContents = () => {
  return (
    <div>
      <div className='body__carousel'>
        <HomeCarousel />
      </div>
      <PageHeader pageName={'Featured Products'} />
      <div className='body__feature'>
        <HomeFeaturedProducts />
        <HomeFeaturedProducts />
        <HomeFeaturedProducts />
      </div>
      <div className='body__text'>
        <p>
          Kiwi Codes Solutions is a progressive and innovative company based in
          New Zealand, specializing in the development of Autodesk Revit add-ons
          that enhance and increase productivity on a day to day basis. In a
          very short period of time, Kiwi Codes has become globally recognized,
          with thousands of customers using their products for Autodesk Revit.
        </p>
      </div>
    </div>
  );
};

export default HomeContents;
