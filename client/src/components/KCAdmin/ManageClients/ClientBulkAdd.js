import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import history from '../../../routes/history';
import { setAlert } from '../../../actions/alertActions';
import { addClient } from '../../../actions/clientActions';
import CSVReader from 'react-csv-reader';

export const ClientBulkAdd = ({ setAlert, addClient }) => {
  const onFileLoaded = (data, fileInfo) => {
    data.slice(1).forEach(async (d) => {
      if (d.length === 4) {
        const client = {
          name: d[0],
          phone: d[1],
          address: d[2],
          primaryEmail: d[3],
        };
        const result = await addClient(client);
        !result && setAlert(`${client.name} failed.`, 'danger');
      }
    });
    history.push('/manage_clients/list');
  };
  return (
    <>
      <CSVReader
        onFileLoaded={(data, fileInfo) => onFileLoaded(data, fileInfo)}
      />
    </>
  );
};

ClientBulkAdd.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addClient: PropTypes.func.isRequired,
};

export default connect(undefined, { addClient, setAlert })(ClientBulkAdd);
