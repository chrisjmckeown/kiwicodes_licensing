import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import history from '../../../routes/history';
import { setAlert } from '../../../actions/alert';
import { addMember } from '../../../actions/member';
import CSVReader from 'react-csv-reader';

export const MemberBulkAdd = ({ setAlert, addMember }) => {
  const onFileLoaded = (data, fileInfo) => {
    data.slice(1).forEach(async (d) => {
      if (d.length === 6) {
        const member = {
          firstName: d[0],
          lastName: d[1],
          email: d[2],
          role: d[3],
          password: d[4],
          clientId: d[5],
        };
        const result = await addMember(member);
        !result && setAlert(`${member.firstName} failed.`, 'danger');
      }
    });
    history.push('/manage_members/list');
  };
  return (
    <>
      <CSVReader
        onFileLoaded={(data, fileInfo) => onFileLoaded(data, fileInfo)}
      />
    </>
  );
};

MemberBulkAdd.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addMember: PropTypes.func.isRequired,
};

export default connect(undefined, { addMember, setAlert })(MemberBulkAdd);
