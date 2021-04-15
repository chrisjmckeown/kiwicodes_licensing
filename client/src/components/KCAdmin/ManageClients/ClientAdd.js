import React from 'react';
import { connect } from 'react-redux';

import ClientForm from './ClientForm';
import history from '../../../routes/history';
import { addClient } from '../../../actions/clientActions';

export const ClientAdd = ({ addClient }) => {
  const onSubmit = async (client) => {
    const result = await addClient(client);
    if (result) {
      history.push('/manage_clients/list');
    }
  };
  return (
    <>
      <ClientForm onSubmit={onSubmit} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addClient: (client) => dispatch(addClient(client)),
});

export default connect(undefined, mapDispatchToProps)(ClientAdd);
