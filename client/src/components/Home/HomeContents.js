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

      <div className='body__text'>
        <p>
          Kiwi Codes Solutions is a progressive and innovative company based in
          New Zealand, specializing in the development of Autodesk Revit add-ons
          that enhance and increase productivity on a day to day basis. In a
          very short period of time, Kiwi Codes has become globally recognized,
          with thousands of customers using their products for Autodesk Revit.
        </p>
      </div>
      <PageHeader pageName={'Featured Products'} />
      <div className='body__feature'>
        <div className='container'>
          <div className='row lg'>
            <div className='col3 lg'>
              <HomeFeaturedProducts
                productName={'Family Browser R3'}
                productLink={
                  'http://www.kiwicodes.com/product.php?id_product=49'
                }
                productImage={
                  'http://www.kiwicodes.com/49-232-home/family-browser.jpg'
                }
              />
            </div>
            <div className='col3 lg'>
              <HomeFeaturedProducts
                productName={'Bonus Tools'}
                productLink={
                  'http://www.kiwicodes.com/product.php?id_product=30'
                }
                productImage={
                  'http://www.kiwicodes.com/30-132-home/bonus-tools.jpg'
                }
              />
            </div>
            <div className='col3 lg'>
              <HomeFeaturedProducts
                productName={'Easy Keynoter'}
                productLink={
                  'http://www.kiwicodes.com/product.php?id_product=42'
                }
                productImage={
                  'http://www.kiwicodes.com/42-214-home/easy-keynoter.jpg'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContents;
