import React from 'react';
import { connect } from 'react-redux';

import ClientForm from './ClientForm';
import Alert from '../../Alert';
import Breadcrumb from '../../Breadcrumb';
import PageHeader from '../../PageHeader';
import history from '../../../routes/history';
import { addClient } from '../../../actions/client';

export const ClientAdd = ({ addClient }) => {
  const onSubmit = async (client) => {
    const result = await addClient(client);
    if (result) {
      history.push('/manage_clients');
    }
  };
  return (
    <>
      <Breadcrumb
        breadCrumbs={['KC_ADMIN', 'manage_clients']}
        endPage={'Create'}
      />
      <PageHeader pageName={'Create a Client'} />
      <ClientForm onSubmit={onSubmit} />
      <Alert />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addClient: (client) => dispatch(addClient(client)),
});

export default connect(undefined, mapDispatchToProps)(ClientAdd);
