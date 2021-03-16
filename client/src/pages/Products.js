import React from 'react';
import Alert from '../components/Alert';
import Breadcrumb from '../components/Breadcrumb';
import PageHeader from '../components/PageHeader';

const Products = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Products'} />
      <PageHeader pageName={'Products'} />
      <div className='row'>
        <ul className='product__list'>
          <li>
            <div className='container'>
              <div className='row'>
                <div className='col2'>
                  <a
                    href='http://www.kiwicodes.com/30-bonus-tools.html'
                    className='product__img-link'
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
                      <p className='product__desc'>
                        <a
                          href='http://www.kiwicodes.com/30-bonus-tools.html'
                          title='Bonus Tools contains multiple apps and can help any practice save time. New tools include; SheetEMup, Renumber Parameter, Highlight 3D Elements, Areas or Rooms to Mass.'
                        >
                          Bonus Tools contains multiple apps and can help any
                          practice save time. New tools include; SheetEMup,
                          Renumber Parameter, Highlight 3D Elements, Areas or
                          Rooms to Mass.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col align_items_center justify_content_center'>
                  <div>
                    <div className='product__button'>
                      <a
                        href='http://www.kiwicodes.com/30-bonus-tools.html'
                        className='product__view-button'
                        title='View'
                      >
                        View Help
                      </a>
                    </div>
                    <div className='product__button'>
                      <a
                        href='http://www.kiwicodes.com/30-bonus-tools.html'
                        className='product__view-button'
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
      <Alert />
    </>
  );
};
export default Products;
