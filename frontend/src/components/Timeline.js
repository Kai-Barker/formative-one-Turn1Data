import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";
import LargeCard from "./Large_card";
import DataSelectors from "./Data_selectors";
import TimelineCard from "./Timeline_card";
import { getDriverData } from './Api_two';
import { getDriverSeasons } from "./Api_two";
import { getAllDrivers } from './Api_two';

function Timeline() {
  const [seasonSelected,setSeasonSelected] = useState(null);
  const [DriverData, setDriverData] = useState(null);
  const [newDriverID, setNewDriverID] = useState(Math.floor(Math.random() * 864)); //temp number until changed
  const [allDrivers, setAllDrivers] = useState([]);

    useEffect(() => {
      setDriverData(null);
      const fetchDriverData = async () => {
        const data = await getDriverData(newDriverID); // Await the async function call
        setDriverData(data); // Set the fetched data to the state
      };
      fetchDriverData();
    }, [newDriverID]);
    useEffect(() => {
        const fetchDriverData = async () => {
        const allDriverData = await getAllDrivers()
        setAllDrivers(allDriverData);
        console.log(allDrivers);
        }
        fetchDriverData();
      }, [DriverData]);
    if (!DriverData || !allDrivers ||allDrivers.length===0) {
    return <div style={{height:'100vh', marginLeft:'20%', paddingTop:'20%'}}>
      <h1 style={{fontSize:'100px', color:'white'}}>"Box Box"</h1>
      <p style={{fontSize:'64px', color:'white'}}>Sorry for the delay, this should take around 8 seconds</p>
    </div>;
  }
  return (
    <div style={{ marginLeft: "20%", top: "0px" }}>
      .
      <div style={{ marginRight: "10%", marginTop: "8%" }}>
      <DataSelectors allDrivers={allDrivers} setNewDriverID={setNewDriverID}/>
      </div>
      <div className="d-flex flex-row" style={{ gap: "5vh" }}>
        <SmallCard driver={DriverData} />
        <LargeCard driver={DriverData}/>
      </div>
      <div>
        <TimelineCard driver={DriverData} seasons={getDriverSeasons()}/>
      </div>
    </div>
  );
}
export default Timeline;
