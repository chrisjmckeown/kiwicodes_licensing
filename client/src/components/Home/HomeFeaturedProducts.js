import React from 'react';

export const HomeFeaturedProducts = () => (
  <div>
    <div id='homefeatured' class='float'>
      <div id='homefeatured_content'>
        <table width='100%' cellpadding='0' cellspacing='0' border='0'>
          <tbody>
            <tr>
              <td style={{ height: '38px' }}>
                <h4>
                  <a
                    href='http://www.kiwicodes.com/product.php?id_product=49'
                    title='Family Browser R3'
                  >
                    Family Browser R3
                  </a>
                </h4>
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ textAlign: 'center', marginTop: '3px' }}>
          <a
            href='http://www.kiwicodes.com/product.php?id_product=49'
            title='Family Browser R3'
            class='product_image'
          >
            <img
              style={{ border: '0px solid #000000' }}
              src='http://www.kiwicodes.com/49-232-home/family-browser.jpg'
              alt='Family Browser R3'
            ></img>
          </a>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <div class='price_container'>
            <span class='price' style={{ textDecoration: 'none' }}>
              &nbsp;
            </span>
          </div>
        </div>

        <div class='buttons_container' style={{ width: '100%' }}>
          <a
            style={{ float: 'none', textAlign: 'center' }}
            class='view_button'
            href='http://www.kiwicodes.com/product.php?id_product=49'
            title='View'
          >
            <img
              src='http://www.kiwicodes.com/themes/default/img/view_button.png'
              alt=''
            ></img>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default HomeFeaturedProducts;
