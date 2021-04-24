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
      if (d.length === 9) {
        const client = {
          name: d[0],
          phone: d[1],
          address1: d[2],
          address2: d[3],
          city: d[4],
          country: d[5],
          region: d[6],
          postal: d[7],
          primaryEmail: d[8],
        };
        if (client.name) {
          const result = await addClient(client);
          !result && setAlert(`${client.name} failed.`, 'danger');
        }
      }
    });
    history.push('/manage_clients/list');
  };
  return (
    <>
      <div className='row lg'>
        <div className='col12 lg'>
          Client columns must include all of the below and be in order:
        </div>
      </div>
      <div className='row lg'>
        <div className='col1 lg'></div>
        <div className='col11 lg'>
          <br />
          <ul>
            <li>Name (required)</li>
            <li>Phone (required)</li>
            <li>Address 1 (required)</li>
            <li>Address 2 (optional)</li>
            <li>City (optional)</li>
            <li>Country (optional)</li>
            <li>Region (optional)</li>
            <li>Postal (optional)</li>
            <li>Primary Email (required)</li>
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

ClientBulkAdd.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addClient: PropTypes.func.isRequired,
};

export default connect(undefined, { addClient, setAlert })(ClientBulkAdd);
