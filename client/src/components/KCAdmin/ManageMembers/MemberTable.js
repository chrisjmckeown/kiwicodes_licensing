import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../../actions/alert';

import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import history from '../../../routes/history';
import { editMember, deleteMember } from '../../../actions/memberActions';

const MemberTable = ({
  setAlert,
  auth,
  deleteMember,
  editMember,
  ...props
}) => {
  const handleEdit = (memberID) => {
    auth.permissionLevel === 'kiwicodes'
      ? history.push(`/manage_members/member_edit/${memberID}`)
      : history.push(`/admin_manage_members/member_edit/${memberID}`);
  };
  const onChangeActive = async (id, active) => {
    let updates = {
      active,
    };
    await editMember(id, updates);
  };
  const handleDelete = (memberID) => {
    if (memberID === auth.member.id) {
      setAlert('Cannot delete self', 'danger');
    } else {
      deleteMember(memberID);
      auth.permissionLevel === 'kiwicodes'
        ? history.push('/manage_members/list')
        : history.push('/admin_manage_members/list');
    }
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
                Cell: (row) => {
                  return (
                    <label className='switch'>
                      <input
                        type='checkbox'
                        defaultChecked={
                          row.original.active === true ? true : false
                        }
                        onChange={(e) =>
                          onChangeActive(
                            row.original.id,
                            e.target.checked ? true : false
                          )
                        }
                      />
                      <span className='slider'></span>
                    </label>
                  );
                },
                accessor: (d) => d.active.toString(),
                width: 65,
              },
              {
                Header: 'Company',
                accessor: 'client.name',
                wrap: true,
                style: { whiteSpace: 'unset' },
              },
            ],
          },
          auth.permissionLevel === 'kiwicodes'
            ? {
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
              }
            : {
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
                ],
              },
        ]}
        defaultPageSize={10}
      />
    </div>
  );
};

MemberTable.propTypes = {
  auth: PropTypes.shape({}).isRequired,
  setAlert: PropTypes.func.isRequired,
  deleteMember: PropTypes.func.isRequired,
  editMember: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteMember: (id) => dispatch(deleteMember(id)),
  editMember: (id, member) => dispatch(editMember(id, member)),
  setAlert: (msg, alertType, timeout) =>
    dispatch(setAlert(msg, alertType, timeout)),
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberTable);
