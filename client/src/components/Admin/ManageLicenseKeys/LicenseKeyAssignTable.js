import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../../actions/alert';

import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

const LicenseKeyAssignTable = (props) => {
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
            ],
          },
          {
            Header: 'Assign Member',
            fixed: 'left',
            columns: [
              {
                Header: 'Assign',
                Cell: (row) => (
                  <div>
                    {/* <button
                      className='button__table'
                      onClick={() => handleEdit(row.original.id)}
                    >
                      <i className='far fa-edit fa-lg'></i>
                    </button> */}
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

LicenseKeyAssignTable.propTypes = {
  auth: PropTypes.shape({}).isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { setAlert })(LicenseKeyAssignTable);
