import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import history from '../../../routes/history';
import { setAlert } from '../../../actions/alertActions';
import { addMember } from '../../../actions/memberActions';
import CSVReader from 'react-csv-reader';

export const MemberBulkAdd = ({ setAlert, addMember, admin }) => {
  const onFileLoaded = (data, fileInfo) => {
    console.log(data.slice(1).length);
    data.slice(1).forEach(async (d) => {
      if (d.length === 6) {
        let member = {
          firstName: d[0],
          lastName: d[1],
          email: d[2],
          role: d[3],
          password: d[4],
          clientId: d[5],
        };
        // admin.role === 'admin' && (member.clientId = admin.clientId);
        if (member.email) {
          const result = await addMember(member);
          !result && setAlert(`${member.firstName} failed.`, 'danger');
        }
      }
    });
    history.push('/manage_members/list');
  };
  return (
    <>
      <div className='row lg'>
        <div className='col12 lg'>
          Member columns must include all of the below and be in order:
        </div>
      </div>
      <div className='row lg'>
        <div className='col1 lg'></div>
        <div className='col11 lg'>
          <br />
          <ul>
            <li>FirstName (required)</li>
            <li>Last Name (required)</li>
            <li>Email (required)</li>
            <li>Role (required)</li>
            <li>Password (required)</li>
            <li>Client Id (required)</li>
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

MemberBulkAdd.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addMember: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addMember, setAlert })(MemberBulkAdd);
