import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import history from '../../../routes/history';
import { setAlert } from '../../../actions/alert';
import { addProduct } from '../../../actions/product';
import CSVReader from 'react-csv-reader';

export const ProductBulkAdd = ({ setAlert, addProduct }) => {
  const onFileLoaded = (data, fileInfo) => {
    data.slice(1).forEach(async (d) => {
      if (d.length === 5) {
        const app = {
          name: d[0],
          description: d[1],
          purchaseLink: d[2],
          helpLink: d[3],
          imageLink: d[4],
        };
        const result = await addProduct(app);
        !result && setAlert(`${app.name} failed.`, 'danger');
      }
    });
    history.push('/manage_products/list');
  };
  return (
    <>
      <CSVReader
        onFileLoaded={(data, fileInfo) => onFileLoaded(data, fileInfo)}
      />
    </>
  );
};

ProductBulkAdd.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default connect(undefined, { addProduct, setAlert })(ProductBulkAdd);
