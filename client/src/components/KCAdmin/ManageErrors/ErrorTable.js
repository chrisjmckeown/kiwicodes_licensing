import React from 'react';
import { connect } from 'react-redux';

import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import history from '../../../routes/history';
import { editError, deleteError } from '../../../actions/error';

const ErrorTable = (props) => {
  const handleEdit = (errorID) => {
    history.push(`/manage_errors/error_edit/${errorID}`);
  };
  const handleDelete = (errorID) => {
    props.deleteError(errorID);
    history.push('/manage_errors/list');
  };
  return (
    <div className='reacttable__wrapper'>
      <ReactTable
        data={props.data}
        pageSizeOptions={[10, 20, 30, 50, 100, 200, 500]}
        columns={[
          {
            Header: 'Error Details',
            fixed: 'left',
            columns: [
              {
                Header: 'Id',
                accessor: 'id',
                width: 25,
              },
              {
                Header: 'Date',
                accessor: 'date',
              },
              {
                Header: 'Message',
                accessor: 'message',
              },
              {
                Header: 'Class Name',
                accessor: 'className',
              },
              {
                Header: 'Method Name',
                accessor: 'methodName',
              },
              {
                Header: 'Build Number',
                accessor: 'buildNumber',
              },
              {
                Header: 'Revit Build',
                accessor: 'revitBuild',
              },
            ],
          },
          {
            Header: 'Manage Error',
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
  editError: (id, error) => dispatch(editError(id, error)),
  deleteError: (id) => dispatch(deleteError(id)),
});

export default connect(null, mapDispatchToProps)(ErrorTable);
