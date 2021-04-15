import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getClients } from '../../../actions/clientActions';
import Spinner from '../../Spinner';

import ClientTable from './ClientTable';

export const ClientList = ({ getClients, client: { clients, loading } }) => {
  useEffect(() => {
    getClients();
  }, [getClients]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ClientTable data={clients} />
        </>
      )}
    </>
  );
};

ClientList.propTypes = {
  getClients: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  client: state.client,
});

export default connect(mapStateToProps, { getClients })(ClientList);
