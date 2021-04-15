import React from 'react';
import { connect } from 'react-redux';
import CSVReader from 'react-csv-reader';
import PropTypes from 'prop-types';

import { setAlert } from '../../../actions/alertActions';
import history from '../../../routes/history';
import { addBuild } from '../../../actions/buildActions';

export const BuildBulkAdd = ({ setAlert, addBuild, admin }) => {
  const onFileLoaded = (data, fileInfo) => {
    data.slice(1).forEach(async (d) => {
      if (d.length === 6) {
        let build = {
          buildNumber: d[0],
          comments: d[1],
          date: d[2],
          updates: d[3],
          productId: d[4],
        };
        const result = await addBuild(build);
        !result && setAlert(`${build.buildNumber} failed.`, 'danger');
      }
    });
    history.push('/manage_builds/list');
  };
  return (
    <>
      <CSVReader
        onFileLoaded={(data, fileInfo) => onFileLoaded(data, fileInfo)}
      />
    </>
  );
};

BuildBulkAdd.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addBuild: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addBuild, setAlert })(BuildBulkAdd);
