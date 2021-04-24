import React from 'react';
import { connect } from 'react-redux';

import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import history from '../../../routes/history';
import { deleteClient } from '../../../actions/clientActions';

const ClientTable = (props) => {
  const handleEditMembers = (clientID) => {
    history.push({ pathname: '/manage_members/list', state: { clientID } });
  };
  const handleEditLicenseKeys = (clientID) => {
    history.push({ pathname: '/manage_licensekeys/list', state: { clientID } });
  };
  const handleEdit = (clientID) => {
    history.push(`/manage_clients/client_edit/${clientID}`);
  };
  const handleDelete = (clientID) => {
    props.deleteClient(clientID);
    history.push('/manage_clients/list');
  };
  return (
    <div className='reacttable__wrapper'>
      <ReactTable
        data={props.data}
        pageSizeOptions={[10, 20, 30, 50, 100, 200, 500]}
        columns={[
          {
            Header: 'Client Details',
            fixed: 'left',
            columns: [
              {
                Header: 'Id',
                accessor: 'id',
                width: 25,
              },
              {
                Header: 'Name',
                accessor: 'name',
                width: 100,
              },
              {
                Header: 'Phone',
                accessor: 'phone',
                width: 100,
                wrap: true,
                style: { whiteSpace: 'unset' },
              },
              {
                Header: 'Address 1',
                accessor: 'address1',
                wrap: true,
                style: { whiteSpace: 'unset' },
              },
              {
                Header: 'Primary Email',
                accessor: 'primaryEmail',
                wrap: true,
                style: { whiteSpace: 'unset' },
              },
            ],
          },
          {
            Header: 'Manage Members',
            fixed: 'left',
            columns: [
              {
                Header: 'Member Count',
                accessor: 'memberCount',
                width: 45,
                style: { whiteSpace: 'unset' },
              },
              {
                Header: 'Edit Members',
                Cell: (row) => (
                  <div>
                    <button
                      className='button__table'
                      onClick={() => handleEditMembers(row.original.id)}
                    >
                      <i className='far fa-eye fa-lg'></i>
                    </button>
                  </div>
                ),
                width: 45,
                accessor: 'editmembers',
              },
            ],
          },
          {
            Header: 'Manage License Keys',
            fixed: 'left',
            columns: [
              {
                Header: 'License Key Count',
                accessor: 'licenseKeyCount',
                width: 45,
                style: { whiteSpace: 'unset' },
              },
              {
                Header: 'Edit License Keys',
                Cell: (row) => (
                  <div>
                    <button
                      className='button__table'
                      onClick={() => handleEditLicenseKeys(row.original.id)}
                    >
                      <i className='far fa-eye fa-lg'></i>
                    </button>
                  </div>
                ),
                width: 45,
                accessor: 'editlicensekeys',
              },
            ],
          },
          {
            Header: 'Manage Client',
            fixed: 'left',
            columns: [
              {
                Header: 'Edit',
                Cell: (row) => (
                  <div>
                    <button
                      className='button__table'
                      onClick={() => handleEdit(row.original.id)}
                    >
                      <i className='far fa-edit fa-lg'></i>
                    </button>
                  </div>
                ),
                width: 45,
                accessor: 'edit',
              },
              {
                Header: 'Delete',
                Cell: (row) => (
                  <div>
                    <button
                      className='button__table'
                      onClick={() => handleDelete(row.original.id)}
                    >
                      <i className='far fa-trash-alt fa-lg'></i>
                    </button>
                  </div>
                ),
                width: 45,
                accessor: 'delete',
              },
            ],
          },
        ]}
        defaultPageSize={10}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteClient: (id) => dispatch(deleteClient(id)),
});

export default connect(null, mapDispatchToProps)(ClientTable);
