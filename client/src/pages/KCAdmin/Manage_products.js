import React from 'react';
import { Switch } from 'react-router-dom';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import PrivateRoute from '../../routes/PrivateRoute';

import ProductList from '../../components/KCAdmin/ManageProducts/ProductList';
import ProductAdd from '../../components/KCAdmin/ManageProducts/ProductAdd';
import ProductEdit from '../../components/KCAdmin/ManageProducts/ProductEdit';
import ProductMenu from '../../components/KCAdmin/ManageProducts/ProductMenu';
import ProductBulkAdd from '../../components/KCAdmin/ManageProducts/ProductBulkAdd';

const Manage_products = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Products'} />
      <PageHeader pageName={'Manage Products'} />
      <div className='row lg'>
        <div className='col2 lg'>
          <ProductMenu />
        </div>
        <div className='col10 lg margin_Top'>
          <Switch>
            <PrivateRoute
              path='/manage_products/list'
              component={ProductList}
              routePremissionLevel={'kiwicodes'}
            />
            <PrivateRoute
              path='/manage_products/create'
              component={ProductAdd}
              routePremissionLevel={'kiwicodes'}
            />
            <PrivateRoute
              path='/manage_products/product_edit/:id'
              component={ProductEdit}
              routePremissionLevel={'kiwicodes'}
            />
            <PrivateRoute
              path='/manage_products/bulkAdd'
              component={ProductBulkAdd}
              routePremissionLevel={'kiwicodes'}
            />
          </Switch>
        </div>
      </div>
      <Alert />
    </>
  );
};
export default Manage_products;
