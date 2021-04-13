import React from 'react';
import { NavLink } from 'react-router-dom';

export const ProductAppItem = ({
  app: { id, name, number, description, helpLink },
}) => {
  return (
    <>
      <div className='row'>
        <ul className='product__list'>
          <li>
            <div className='container'>
              <div className='row lg'>
                <div className='col10 lg'>
                  <div className='container align_content_start'>
                    <div className='row'>
                      {helpLink ? (
                        <h3>
                          <a
                            href={helpLink}
                            title='Bonus Tools'
                            target='_blank'
                            rel='noreferrer'
                            className='form__labelHeader'
                          >
                            {number} {name}
                          </a>
                        </h3>
                      ) : (
                        <h3 className='form__labelHeader'>
                          {number} {name}
                        </h3>
                      )}
                    </div>
                    <div className='row'>
                      <p className='product__desc'>{description}</p>
                    </div>
                  </div>
                </div>
                <div className='col align_items_center justify_content_center lg'>
                  <div>
                    {helpLink && (
                      <a
                        href={helpLink}
                        className='button__std'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <div className='button__std'>View Help</div>
                      </a>
                    )}
                    <NavLink
                      to={`/apps/chat/${id}`}
                      title='App Chat'
                      className='button__std'
                    >
                      <div className='button__std'>App Chat</div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductAppItem;
