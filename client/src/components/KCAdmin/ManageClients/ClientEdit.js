import React from 'react';
import { connect } from 'react-redux';

import ClientForm from './ClientForm';
import history from '../../../routes/history';
import { editClient } from '../../../actions/client';

export const ClientEdit = (props) => {
  const onSubmit = async (client) => {
    const result = await props.editClient(props.client.id, client);
    if (result) {
      history.push('/manage_clients/list');
    }
  };
  return (
    <>
      <ClientForm client={props.client} onSubmit={onSubmit} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editClient: (id, client) => dispatch(editClient(id, client)),
});

const mapStateToProps = (state, props) => ({
  client: state.client.clients.find(
    (client) => client.id.toString() === props.match.params.id
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ClientEdit);
