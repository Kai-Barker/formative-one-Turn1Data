import React, { useState, useEffect } from 'react';
import HeroSection from "./Hero_section";
import SmallCard from "./SmallCard";
import LargeCard from "./Large_card";
import LargeCardExp from "./Large_card_exp";
import DataSelectors from "./Data_selectors";
import axios from "axios";
import { getDriverData } from './Api_two';
import PieCard from './Pie_card_home';
import { getAllDrivers } from './Api_two';




const DriverData = {
  name: "Lewis Hamilton",
  isCompeting: true,
  lastRace: "2024 Abu Dhabi Grand Prix",
  nationality: "British",
  wins: 105,
  polePositions: 104,
  bestChampPos: 1,
  championshipWins: 7,
  podiums: 202,
  numRaces: 356,
  numSeasons: 17,
  winrate: 29.5,
  constructors:3
};




function Home() {
  const [DriverData, setDriverData] = useState(null);
  const [newDriverID, setNewDriverID] = useState(Math.floor(Math.random() * 864)); //temp number until changed
  const [allDrivers, setAllDrivers] = useState([]);
  // const [newDriverID, setNewDriverID] = useState('max_verstappen');
  useEffect(() => {
    console.log(newDriverID);
    const fetchDriverData = async () => {
      const data = await getDriverData(newDriverID); // Await the async function call
      setDriverData(data); // Set the fetched data to the state
      
    };
    fetchDriverData();
    
  }, []);
  // const allDriverData = await getAllDrivers()
  // setAllDrivers(allDriverData);
  // console.log(allDrivers);
  useEffect(() => {
    const fetchDriverData = async () => {
    const allDriverData = await getAllDrivers()
    setAllDrivers(allDriverData);
    console.log(allDrivers);
    }
    fetchDriverData();
  }, [DriverData]);
  if (!DriverData || allDrivers.length==0) {
    return <div style={{height:'100vh', marginLeft:'20%', paddingTop:'20%'}}>
      <h1 style={{fontSize:'100px', color:'white'}}>Loading...</h1>
      <p style={{fontSize:'64px', color:'white'}}>Sorry for the delay, this should take around 4 seconds</p>
    </div>;
  }

  return (
    <div style={{ marginLeft: "20%", top: "0px" }}>
      .
      <HeroSection />
      <div style={{ marginRight: "10%", marginTop: "2%" }}>
        {console.log(allDrivers)}
        <DataSelectors allDrivers={allDrivers} setNewDriverID={setNewDriverID}/>
      </div>
      <div className="d-flex flex-row" style={{ gap: "5vh" }}>
        <SmallCard driver={DriverData} />
        <LargeCard driver={DriverData}/>
      </div>
      <div className="d-flex flex-row" style={{ gap: "5vh" }}>
        <LargeCardExp driver={DriverData}/>
        <PieCard driver={DriverData} numData={0} />
      </div>
    </div>
  );
}

export default Home;
