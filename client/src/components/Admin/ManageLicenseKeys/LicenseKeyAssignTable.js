import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import {
  addLicenseKeyAssignment,
  deleteLicenseKeyAssignment,
} from '../../../actions/licenseKeyAssignmentActions';

const LicenseKeyAssignTable = ({
  clientId,
  licenseKeyId,
  setAlert,
  addLicenseKeyAssignment,
  deleteLicenseKeyAssignment,
  ...props
}) => {
  const onChangeActive = async (licenseKeyAssignmentsId, memberId, e) => {
    if (!e.target.checked) {
      await deleteLicenseKeyAssignment({ memberId, licenseKeyAssignmentsId });
    } else {
      const licenseKeyAssignmentFeilds = {
        licenseKeyId,
        memberId,
        clientId,
      };
      const result = await addLicenseKeyAssignment(licenseKeyAssignmentFeilds);
      if (!result) {
        e.target.checked = false;
      }
    }
  };

  return (
    <div className='reacttable__wrapper'>
      <ReactTable
        data={props.licenseKeyAssignments}
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
                width: 200,
              },
              {
                Header: 'Last Name',
                accessor: 'lastName',
                width: 200,
              },
            ],
          },
          {
            Header: 'Assign Member',
            fixed: 'left',
            columns: [
              {
                id: 'licenseKeyAssignments',
                Header: 'LicenseKeyAssignments',
                Cell: (row) => {
                  return (
                    <label className='switch'>
                      <input
                        type='checkbox'
                        defaultChecked={
                          row.original.licenseKeyAssignments.length === 0
                            ? false
                            : true
                        }
                        onChange={(e) =>
                          onChangeActive(
                            row.row.licenseKeyAssignmentsId,
                            row.original.id,
                            e
                          )
                        }
                      />
                      <span className='slider'></span>
                    </label>
                  );
                },
                // accessor: (d) =>
                //   d.licenseKeyAssignments.length === 0 ? false : true,
                width: 65,
              },
              {
                id: 'licenseKeyAssignmentsId',
                Header: 'Id',
                accessor: 'licenseKeyAssignments[0].id',
                width: 25,
                show: false,
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
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  addLicenseKeyAssignment: (licenseKeyAssignment) =>
    dispatch(addLicenseKeyAssignment(licenseKeyAssignment)),
  deleteLicenseKeyAssignment: (id) => dispatch(deleteLicenseKeyAssignment(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LicenseKeyAssignTable);
