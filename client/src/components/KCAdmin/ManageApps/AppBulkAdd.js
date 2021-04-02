import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import history from '../../../routes/history';
import { setAlert } from '../../../actions/alert';
import { addApp } from '../../../actions/app';
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
      <CSVReader
        onFileLoaded={(data, fileInfo) => onFileLoaded(data, fileInfo)}
      />
    </>
  );
};

AppBulkAdd.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addApp: PropTypes.func.isRequired,
};

export default connect(undefined, { addApp, setAlert })(AppBulkAdd);
