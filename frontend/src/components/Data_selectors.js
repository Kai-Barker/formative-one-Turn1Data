import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from "./ButtonData";
import Searchbar from "./Search";
import { useState, useEffect } from "react";

const DataSelectors = ({ allDrivers, setNewDriverID }) => {
  //Declaring useState variables for search
  // const [searchTerm, setSearchTerm] = useState("");

  
  // const handleSearch = (event) => {
  //   const searchedDriver = event.target.value;
  //   setSearchTerm(query)
  //   if (query.length>0) {
      
  //   }
  // }
  return (
    <div className="d-flex">
      <div className="col-6 d-flex justify-content-start">
        {console.log("AllDrivers in data selectors")}
        {console.log(allDrivers)}
        <Searchbar allDrivers={allDrivers} setNewDriverID={setNewDriverID}/>
      </div>
      <div className="col-6 d-flex justify-content-end">
        <Buttons />
      </div>
    </div>
  );
};

export default DataSelectors;
