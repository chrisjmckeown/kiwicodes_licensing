import React from 'react';
import { Link } from 'react-router-dom';

export const CreateButton = ({ linkText, link }) => {
  return (
    <div className='row'>
      <Link className='button__std' to={link}>
        {linkText}
      </Link>
    </div>
  );
};

export default CreateButton;
