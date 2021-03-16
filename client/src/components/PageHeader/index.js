import React from 'react';

const PageHeader = ({ pageName }) => {
  return (
    <div className='row'>
      <div className='products'>
        <h1>{pageName}</h1>
      </div>
    </div>
  );
};
export default PageHeader;
