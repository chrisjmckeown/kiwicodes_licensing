import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <main className='main'>
      <div className='main_content'>
        <div className='container'>
          <div className='row body_margin'>
            <div className='col'>
              <div className='container'>
                <div className='row'>
                  <div className='breadcrumb'>
                    <Link to='/' title='return to Home'>
                      Home
                    </Link>
                    <span className='navigation-pipe'>&gt;</span>
                    <span className='navigation_page'>Products</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='products'>
                    <h1>
                      Products<span>There are 11 products.</span>
                    </h1>
                  </div>
                </div>
                <div className='row'>
                  <ul className='product_list'>
                    <li>
                      <div className='container'>
                        <div className='row'>
                          <div className='col2'>
                            <a
                              href='http://www.kiwicodes.com/30-bonus-tools.html'
                              className='product_img_link'
                              title='Bonus Tools | Products | Home'
                            >
                              <img
                                id='image_comb'
                                src='http://www.kiwicodes.com/49-232-home/family-browser.jpg'
                                alt='Bonus Tools | Products | Home'
                              ></img>
                            </a>
                          </div>
                          <div className='col8'>
                            <div className='container align_content_start'>
                              <div className='row'>
                                <h3>
                                  <a
                                    href='http://www.kiwicodes.com/30-bonus-tools.html'
                                    title='Bonus Tools'
                                  >
                                    Bonus Tools
                                  </a>
                                </h3>
                              </div>
                              <div className='row'>
                                <p className='product_desc'>
                                  <a
                                    href='http://www.kiwicodes.com/30-bonus-tools.html'
                                    title='Bonus Tools contains multiple apps and can help any practice save time. New tools include; SheetEMup, Renumber Parameter, Highlight 3D Elements, Areas or Rooms to Mass.'
                                  >
                                    Bonus Tools contains multiple apps and can
                                    help any practice save time. New tools
                                    include; SheetEMup, Renumber Parameter,
                                    Highlight 3D Elements, Areas or Rooms to
                                    Mass.
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className='col align_items_center justify_content_center'>
                            <div>
                              <div className='product_buttons'>
                                <a
                                  href='http://www.kiwicodes.com/30-bonus-tools.html'
                                  className='view_button'
                                  title='View'
                                >
                                  View Help
                                </a>
                              </div>
                              <div className='product_buttons'>
                                <a
                                  href='http://www.kiwicodes.com/30-bonus-tools.html'
                                  className='view_button'
                                  title='View'
                                >
                                  View Comments
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Products;
