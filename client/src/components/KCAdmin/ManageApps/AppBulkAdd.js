import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import history from '../../../routes/history';
import { setAlert } from '../../../actions/alertActions';
import { addApp } from '../../../actions/appActions';
import CSVReader from 'react-csv-reader';

export const AppBulkAdd = ({ setAlert, addApp }) => {
  const onFileLoaded = (data, fileInfo) => {
    data.slice(1).forEach(async (d) => {
      if (d.length === 5) {
        const app = {
          name: d[0],
          number: d[1],
          description: d[2],
          helpLink: d[3],
          productId: d[4],
        };
        const result = await addApp(app);
        !result && setAlert(`${app.name} failed.`, 'danger');
      }
    });
    history.push('/manage_apps/list');
  };
  return (
    <>
      <div className='row lg'>
        <div className='col12 lg'>
          App columns must include all of the below and be in order:
        </div>
      </div>
      <div className='row lg'>
        <div className='col1 lg'></div>
        <div className='col11 lg'>
          <br />
          <ul>
            <li>Name (required)</li>
            <li>Number (required)</li>
            <li>Description (required)</li>
            <li>Help Link (required)</li>
            <li>Product Id (required)</li>
          </ul>
          <br />
        </div>
      </div>
      <div className='row lg'>
        <div className='col12 lg'>
          <CSVReader
            onFileLoaded={(data, fileInfo) => onFileLoaded(data, fileInfo)}
          />
        </div>
      </div>
    </>
  );
};

AppBulkAdd.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addApp: PropTypes.func.isRequired,
};

export default connect(undefined, { addApp, setAlert })(AppBulkAdd);
