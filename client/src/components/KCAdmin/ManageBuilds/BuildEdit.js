import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { editBuild } from '../../../actions/buildActions';
import BuildForm from './BuildForm';
import history from '../../../routes/history';

export const BuildEdit = (props) => {
  const onSubmit = async (build) => {
    const result = await props.editBuild(props.build.id, build);
    if (result) {
      history.push('/manage_builds/list');
    }
  };
  return (
    <>
      <BuildForm build={props.build} onSubmit={onSubmit} />
    </>
  );
};

BuildEdit.propTypes = {
  editBuild: PropTypes.func.isRequired,
  build: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  editBuild: (id, build) => dispatch(editBuild(id, build)),
});

const mapStateToProps = (state, props) => ({
  build: state.build.builds.find(
    (build) => build.id.toString() === props.match.params.id
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(BuildEdit);
