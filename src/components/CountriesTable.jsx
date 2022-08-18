import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";


const CountriesTable = ({ filteredCountries }) => {
    
const im = ()=>{
    return <img src={filteredCountries.flag} alt="" />
}

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
     pagination={paginationFactory()}
     />
    </div>
  );
};

export default CountriesTable;
