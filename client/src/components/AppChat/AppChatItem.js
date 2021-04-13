import React from 'react';
import Moment from 'moment';

export const ProductChatItem = ({
  chat: { id, date, comment, firstName, lastName, avatar, like },
}) => {
  const onClick = () => {
    console.log(`edit chat ${id}`);
  };
  return (
    <>
      <div className='list-item' key={id} onClick={onClick}>
        <p className='list-item__title'>
          {firstName} {lastName} {Moment(date).format('DD/MM/yyyy')}
        </p>
        <p className='list-item__sub-title'>{comment}</p>
        {/* <img src={avatar} alt='Avatar' /> */}
        {/* <p className='list-item__sub-title'>{like}</p> */}
      </div>
    </>
  );
};

export default ProductChatItem;
