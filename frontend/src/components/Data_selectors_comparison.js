import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from "./ButtonData";
import Searchbar from "./Search";
import { useState, useEffect } from "react";

const DataSelectors = ({ allDrivers, setNewDriverID,setNewDriverID2 }) => {
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
      <div className="col-8 d-flex justify-content-start align-items-center">
        {console.log("AllDrivers in data selectors")}
        {console.log(allDrivers)}
        <div>
            <p style={{color:"white", width:"100px",marginBottom:"0"}}>Driver 1:</p>
        </div>
        <div>
            
            <Searchbar allDrivers={allDrivers} setNewDriverID={setNewDriverID}/>
        </div>
        <div>
            <p style={{color:"white", width:"100px",marginBottom:"0", marginLeft:"40px"}}>Driver 2:</p>
        </div>
        <div>
            <Searchbar allDrivers={allDrivers} setNewDriverID={setNewDriverID2} />
        </div>
      </div>
      <div className="col-4 d-flex justify-content-end">
        <Buttons />
      </div>
    </div>
  );
};

export default DataSelectors;
