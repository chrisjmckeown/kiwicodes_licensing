import React from 'react';
import { connect } from 'react-redux';

import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import history from '../../../routes/history';
import { editMember, deleteMember } from '../../../actions/member';

const MemberTable = (props) => {
  const handleEdit = (memberID) => {
    history.push(`/manage_members/member_edit/${memberID}`);
  };
  const handleDelete = (memberID) => {
    props.deleteMember(memberID);
    history.push('/manage_members/list');
  };
  return (
    <div className='reacttable__wrapper'>
      <ReactTable
        data={props.data}
        pageSizeOptions={[10, 20, 30, 50, 100, 200, 500]}
        columns={[
          {
            Header: 'Member Details',
            fixed: 'left',
            columns: [
              {
                Header: 'Id',
                accessor: 'id',
                width: 25,
              },
              {
                Header: 'First Name',
                accessor: 'firstName',
              },
              {
                Header: 'Last Name',
                accessor: 'lastName',
              },
              {
                Header: 'Role',
                accessor: 'role',
                width: 80,
              },
              {
                Header: 'Email',
                accessor: 'email',
                wrap: true,
                style: { whiteSpace: 'unset' },
              },
              {
                Header: 'Avatar',
                accessor: 'avatar',
                wrap: true,
                style: { whiteSpace: 'unset' },
              },
              {
                id: 'active',
                Header: 'Active',
                accessor: (d) => d.active && d.active.toString(),
                width: 45,
              },
              {
                Header: 'Company',
                accessor: 'client.name',
                wrap: true,
                style: { whiteSpace: 'unset' },
              },
            ],
          },
          {
            Header: 'Manage Member',
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
  editMember: (id, member) => dispatch(editMember(id, member)),
  deleteMember: (id) => dispatch(deleteMember(id)),
});

export default connect(null, mapDispatchToProps)(MemberTable);
