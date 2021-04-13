import React from 'react';
import { connect } from 'react-redux';

import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import history from '../../../routes/history';
import { editApp, deleteApp } from '../../../actions/appActions';

const AppTable = (props) => {
  const handleEdit = (appID) => {
    history.push(`/manage_apps/app_edit/${appID}`);
  };
  const handleDelete = (appID) => {
    props.deleteApp(appID);
    history.push('/manage_apps/list');
  };
  return (
    <div className='reacttable__wrapper'>
      <ReactTable
        data={props.data}
        pageSizeOptions={[10, 20, 30, 50, 100, 200, 500]}
        columns={[
          {
            Header: 'App Details',
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
                Header: 'Number',
                accessor: 'number',
                width: 100,
                wrap: true,
                style: { whiteSpace: 'unset' },
              },
              {
                Header: 'Description',
                accessor: 'description',
                wrap: true,
                style: { whiteSpace: 'unset' },
              },
              {
                Header: 'Help Link',
                accessor: 'helpLink',
                wrap: true,
                style: { whiteSpace: 'unset' },
              },
              {
                Header: 'Product',
                accessor: 'product.name',
                wrap: true,
                style: { whiteSpace: 'unset' },
              },
            ],
          },
          {
            Header: 'Manage App',
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
  editApp: (id, app) => dispatch(editApp(id, app)),
  deleteApp: (id) => dispatch(deleteApp(id)),
});

export default connect(null, mapDispatchToProps)(AppTable);
