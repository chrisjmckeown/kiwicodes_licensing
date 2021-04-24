import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import history from '../../../routes/history';
import { setAlert } from '../../../actions/alertActions';
import { addLicenseKey } from '../../../actions/licenseKeyActions';
import CSVReader from 'react-csv-reader';
import Moment from 'moment';

export const LicenseKeyBulkAdd = ({ setAlert, addLicenseKey }) => {
  const onFileLoaded = (data, fileInfo) => {
    data.slice(1).forEach(async (d) => {
      if (d.length === 6) {
        const licensekey = {
          guid: d[0],
          orderID: d[1],
          licenseCount: d[2],
          expiryDate: Moment(d[3]).format('yyyy-MM-DDT00:00:00.000'),
          clientId: d[4],
          productId: d[5],
        };
        if (licensekey.guid) {
          const result = await addLicenseKey(licensekey);
          !result && setAlert(`${licensekey.guid} failed.`, 'danger');
        }
      }
    });
    history.push('/manage_licensekeys/list');
  };
  return (
    <>
      <div className='row lg'>
        <div className='col12 lg'>
          License Key columns must include all of the below and be in order:
        </div>
      </div>
      <div className='row lg'>
        <div className='col1 lg'></div>
        <div className='col11 lg'>
          <br />
          <ul>
            <li>GUID (required)</li>
            <li>Order ID (required)</li>
            <li>License Count (required)</li>
            <li>Expiry Date (required)</li>
            <li>Client Id (required)</li>
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

LicenseKeyBulkAdd.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addLicenseKey: PropTypes.func.isRequired,
};

export default connect(undefined, { addLicenseKey, setAlert })(
  LicenseKeyBulkAdd
);
