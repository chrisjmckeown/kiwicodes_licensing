import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

const ProductTable = (props) => {
  const handleViewApps = (id) => {
    console.log('handleViewApps', id);
  };
  const handleEdit = (id) => {
    console.log('handleEdit', id);
  };
  const handleDelete = (id) => {
    console.log('handleDelete', id);
  };
  return (
    <div className='reacttable__wrapper'>
      <ReactTable
        data={props.data}
        pageSizeOptions={[10, 20, 30, 50, 100, 200, 500]}
        columns={[
          {
            Header: 'Product Details',
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
                Header: 'Description',
                accessor: 'description',
                width: 100,
                wrap: true,
                style: { whiteSpace: 'unset' },
              },
              {
                Header: 'Purchase Link',
                accessor: 'purchaseLink',
                style: { whiteSpace: 'unset' },
              },
              {
                Header: 'Help Link',
                accessor: 'helpLink',
                style: { whiteSpace: 'unset' },
              },
              {
                Header: 'Image Link',
                accessor: 'imageLink',
                style: { whiteSpace: 'unset' },
              },
              {
                Header: 'Image',
                Cell: (row) => {
                  return (
                    <div>
                      <img height={34} src={row.original.imageLink} alt={''} />
                    </div>
                  );
                },
                id: 'image',
                width: 50,
              },
            ],
          },
          {
            Header: 'Manage Apps',
            fixed: 'left',
            columns: [
              {
                Header: 'App Count',
                accessor: 'appCount',
                width: 45,
                style: { whiteSpace: 'unset' },
              },
              {
                Header: ' View Apps',
                Cell: (row) => (
                  <div>
                    <button
                      className='button__table'
                      onClick={() => handleViewApps(row.original.id)}
                    >
                      <i className='far fa-eye fa-lg'></i>
                    </button>
                  </div>
                ),
                width: 45,
                accessor: 'viewapps',
              },
            ],
          },
          {
            Header: 'Manage Product',
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

export default ProductTable;
