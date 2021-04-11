import React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import PropTypes from 'prop-types';

import { editBuild, deleteBuild } from '../../../actions/buildActions';
import history from '../../../routes/history';
import Moment from 'moment';

const BuildTable = (props) => {
  const handleEdit = (buildId) => {
    history.push(`/manage_builds/build_edit/${buildId}`);
  };
  const handleDelete = (buildId) => {
    props.deleteBuild(buildId);
    history.push('/manage_builds/list');
  };
  return (
    <div className='reacttable__wrapper'>
      <ReactTable
        data={props.data}
        pageSizeOptions={[10, 20, 30, 50, 100, 200, 500]}
        columns={[
          {
            Header: 'Build Details',
            fixed: 'left',
            columns: [
              {
                Header: 'Id',
                accessor: 'id',
                width: 25,
              },
              {
                Header: 'Date',
                id: 'date',
                accessor: (d) => Moment(d.date).format('DD/MM/yyyy'),
              },
              {
                Header: 'Build Number',
                accessor: 'buildNumber',
              },
              {
                Header: 'Comments',
                accessor: 'comments',
              },
              {
                Header: 'Updates',
                accessor: 'updates',
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
            Header: 'Manage Build',
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

BuildTable.propTypes = {
  editBuild: PropTypes.func.isRequired,
  deleteBuild: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  editBuild: (id, build) => dispatch(editBuild(id, build)),
  deleteBuild: (id) => dispatch(deleteBuild(id)),
});

export default connect(null, mapDispatchToProps)(BuildTable);
