import React from 'react';
import { connect } from 'react-redux';

import ClientForm from './ClientForm';
import Alert from '../../Alert';
import Breadcrumb from '../../Breadcrumb';
import PageHeader from '../../PageHeader';
import history from '../../../routes/history';
import { editClient, deleteClient } from '../../../actions/client';

export const ClientEdit = (props) => {
  const onSubmit = async (client) => {
    const result = await props.editClient(props.client.id, client);
    if (result) {
      history.push('/manage_clients');
    }
  };

  const onClick = async () => {
    const result = await props.deleteClient(props.client.id);
    if (result) {
      history.push('/manage_clients');
    }
  };
  return (
    <>
      <Breadcrumb breadCrumbs={['Clients']} endPage={'Create'} />
      <PageHeader pageName={'Edit a Client'} />
      <ClientForm client={props.client} onSubmit={onSubmit} />

      <button className='button__std button__std--secondary' onClick={onClick}>
        Remove Client
      </button>
      <Alert />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editClient: (id, client) => dispatch(editClient(id, client)),
  deleteClient: (id) => dispatch(deleteClient(id)),
});

const mapStateToProps = (state, props) => ({
  client: state.client.clients.find(
    (client) => client.id.toString() === props.match.params.id
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ClientEdit);
