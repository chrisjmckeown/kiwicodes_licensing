import React from 'react';
import auto_desk_logo from '../../assets/img/auto_desk_logo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col8'>
            <div className='container'>
              <div className='row'>
                <div className='footer_block'>
                  <ul>
                    <li className='first_item'>
                      <a href='index.html' title='Home'>
                        Home
                      </a>
                    </li>{' '}
                    <span className='divider'>|</span>
                    <li className='item'>
                      <a href='products.html' title='Products'>
                        Products
                      </a>
                    </li>{' '}
                    <span className='divider'>|</span>
                    <li className='item'>
                      <a href='about.html' title='About'>
                        About
                      </a>
                    </li>
                    <span className='divider'>|</span>
                    <li className='item'>
                      <a href='contact-us.html' title='Contact'>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='row'>
                <div className='footer_block'>
                  <li className='last_item'>
                    <span className='company'>
                      Kiwi Codes Solutions Ltd © 2021
                    </span>{' '}
                    <span className='divider_2'>|</span>
                    <a href='/' title='Terms &amp; Conditions'>
                      Terms &amp; Conditions
                    </a>{' '}
                    <span className='divider_2'>|</span>
                    <span className='website_design_by'>
                      Website / Web Design by
                    </span>
                    <a href='index.html' title='Kiwi Codes' target='_blank'>
                      <span className='website'>Kiwi Codes</span>
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='footer_autodesk'>
              <a
                href='http://www.autodesk.com'
                target='_blank'
                title='autodesk'
                rel='noreferrer'
              >
                <img
                  src={auto_desk_logo}
                  alt='Autodesk Authorized Developer'
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
