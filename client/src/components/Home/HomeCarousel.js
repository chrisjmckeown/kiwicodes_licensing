import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import gallery_projectbrowser from '../../assets/img/gallery_projectbrowser.png';
import gallery_products from '../../assets/img/gallery_products.png';
import gallery_revitworks from '../../assets/img/gallery_revitworks.png';

export const HomeCarousel = () => {
  return (
    <Carousel autoPlay={true} showThumbs={false} showStatus={false}>
      <div>
        <img src={gallery_projectbrowser} alt='Project Browser' />
        <p className='legend'>
          The Kiwi Codes Project Browser is how the Revit project browser should
          work. I am able to find specific views much quicker which saves me
          time. Mathew Miller - SMPC Architects.
        </p>
      </div>
      <div>
        <img src={gallery_products} alt='Products' />
        <p className='legend'>
          Productivity enhancing tools for Autodesk Revit.
        </p>
      </div>
      <div>
        <img src={gallery_revitworks} alt='Revitworks' />
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
