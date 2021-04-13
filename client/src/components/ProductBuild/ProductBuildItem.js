import React from 'react';

export const ProductBuildItem = ({ build }) => {
  return (
    <>
      <div className='list-item' key={build.id}>
        <p className='list-item__title'>{build.buildNumber}</p>
        <p className='list-item__sub-title'>{build.comments}</p>
        <p className='list-item__data'>{build.updates}</p>
      </div>
    </>
  );
};

export default ProductBuildItem;
