import React from 'react';
import { Link } from 'react-router-dom';
import auto_desk_logo from '../../assets/img/auto_desk_logo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col8'>
            <div className='container'>
              <div className='row'>
                <div className='footer__block'>
                  <ul>
                    <li className='footer__first-item'>
                      <Link to='/' title='Home'>
                        Home
                      </Link>
                    </li>{' '}
                    <span className='footer__divider'>|</span>
                    <li className='footer__item'>
                      <Link to='/products' title='Products'>
                        Products
                      </Link>
                    </li>{' '}
                    <span className='footer__divider'>|</span>
                    <li className='footer__item'>
                      <Link to='/contact' title='Contact'>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='row'>
                <div className='footer__block'>
                  <li className='footer__last-item'>
                    <span className='footer__company'>
                      Kiwi Codes Solutions Ltd © 2021
                    </span>{' '}
                    <span className='footer__divider-2'>|</span>
                    <Link to='/' title='Terms &amp; Conditions'>
                      Terms &amp; Conditions
                    </Link>{' '}
                    <span className='footer__divider-2'>|</span>
                    <span className='footer__website-design-by'>
                      Website / Web Design by
                    </span>{' '}
                    <Link to='/' title='Kiwi Codes' target='_blank'>
                      <span className='footer__website'>Kiwi Codes</span>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='footer__autodesk'>
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
