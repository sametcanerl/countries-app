import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";


const CountriesTable = ({ filteredCountries }) => {
    
  const selectRow = {
    mode: 'checkbox',
    style: { background: '#888' }
  };

  const columns = [
    {
      dataField: "name", text : "Country"
     
    },
    {
        dataField : "capital", text:"Capital"
    },
    {
        dataField : "region", text :"Region"
    },
 
 
  ];

  return (
    <div className="container mt-5" >
     <BootstrapTable
     keyField="name"
     data={filteredCountries}
     columns={columns}
     selectRow={ selectRow }
     pagination={paginationFactory()}
     />
    </div>
  );
};

export default CountriesTable;
