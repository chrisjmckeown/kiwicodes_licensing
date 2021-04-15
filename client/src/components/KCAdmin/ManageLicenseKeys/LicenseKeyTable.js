import React from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';

import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import history from '../../../routes/history';
import { deleteLicenseKey } from '../../../actions/licenseKeyActions';

const LicenseKeyTable = (props) => {
  const handleEdit = (licenseKeyID) => {
    history.push(`/manage_licensekeys/licensekey_edit/${licenseKeyID}`);
  };
  const handleAssign = (licenseKeyID) => {
    history.push(`/admin_manage_licensekeys/licensekey_assign/${licenseKeyID}`);
  };
  const handleDelete = (licenseKeyID) => {
    props.deleteLicenseKey(licenseKeyID);
    history.push('/manage_licensekeys/list');
  };
  return (
    <div className='reacttable__wrapper'>
      <ReactTable
        data={props.data}
        pageSizeOptions={[10, 20, 30, 50, 100, 200, 500]}
        columns={[
          {
            Header: 'License Key Details',
            fixed: 'left',
            columns: [
              {
                Header: 'Id',
                accessor: 'id',
                width: 25,
              },
              {
                Header: 'GUID',
                accessor: 'guid',
              },
              {
                Header: 'Order Id',
                accessor: 'orderID',
              },
              {
                Header: 'License Count',
                accessor: 'licenseCount',
              },
              {
                Header: 'Expiry Date',
                id: 'expiryDate',
                accessor: (d) => Moment(d.expiryDate).format('DD/MM/yyyy'),
              },
              {
                Header: 'Client',
                accessor: 'client.name',
              },
              {
                Header: 'Product',
                accessor: 'product.name',
              },
            ],
          },
          props.auth.permissionLevel === 'kiwicodes'
            ? {
                Header: 'Manage License Key',
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
                Header: 'Assign License Key',
                fixed: 'left',
                columns: [
                  {
                    Header: 'Assign',
                    Cell: (row) => (
                      <div>
                        <button
                          className='button__table'
                          onClick={() =>
                            handleAssign(
                              row.original.id,
                              row.original.clientId,
                              row.original.productId
                            )
                          }
                        >
                          <i className='far fa-edit fa-lg'></i>
                        </button>
                      </div>
                    ),
                    width: 45,
                    accessor: 'assign',
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
  deleteLicenseKey: (id) => dispatch(deleteLicenseKey(id)),
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(LicenseKeyTable);
