import React from 'react';
import { connect } from 'react-redux';

import BuildForm from './BuildForm';
import history from '../../../routes/history';
import { addBuild } from '../../../actions/buildActions';

export const BuildAdd = ({ addBuild }) => {
  const onSubmit = async (build) => {
    const result = await addBuild(build);
    if (result) {
      history.push('/manage_builds/list');
    }
  };
  return (
    <>
      <BuildForm onSubmit={onSubmit} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addBuild: (build) => dispatch(addBuild(build)),
});

export default connect(undefined, mapDispatchToProps)(BuildAdd);
