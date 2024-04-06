
import React from 'react';
import DataTable from 'react-data-table-component';

const customStyles = {

  rows: {
    style: {
      minHeight: '64px', 
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px', 
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  },
};

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
    <DataTable
      columns={columns}
      data={data}
      customStyles={customStyles}
      pagination
    />
    </div>
  );
};

export default Table;
