import React from 'react';

export const ProductBuildItem = ({ build }) => {
  return (
    <>
      <div key={build.id}>
        <p>{build.buildNumber}</p>
        <p>{build.comments}</p>
        <p>{build.updates}</p>
      </div>
    </>
  );
};

export default ProductBuildItem;
