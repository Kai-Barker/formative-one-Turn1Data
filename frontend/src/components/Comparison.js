import React from "react";
import DataSelectors from "./Data_selectors_comparison";
import SmallCard from "./SmallCard";
import RadarCard from "./Radar_card";
import BarCard from "./Bar_card";
import PieCard from "./Pie_card";
import { getDriverData as getDriverData1 } from './Api_two';
import { getDriverData as getDriverData2 } from './Api';
import { useState, useEffect } from 'react';
import { getAllDrivers } from './Api_two';


const driver1 = {
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
  currentConstructor: {
    name: "Scuderia Ferrari",
    isCompeting: true,
    lastRace: "2024 Abu Dhabi Grand Prix",
    nationality: "Italian",
    wins: 247,
    polePositions: 253,
    bestChampPos: 1,
    championshipWins: 15,
    podiums: 202,
    numRaces: 356,
    numSeasons: 17,
    numDrivers: 114,
  },
};
const driver2 = {
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
  currentConstructor: {
    name: "Scuderia Ferrari",
    isCompeting: true,
    lastRace: "2024 Abu Dhabi Grand Prix",
    nationality: "Italian",
    wins: 247,
    polePositions: 253,
    bestChampPos: 1,
    championshipWins: 15,
    podiums: 202,
    numRaces: 356,
    numSeasons: 17,
    numDrivers: 114,
  },
};

function Comparison() {
  const [DriverData1, setDriverData1] = useState(null);
  const [DriverData2, setDriverData2] = useState(null);
  const [newDriverID1, setNewDriverID1] = useState(Math.floor(Math.random() * 864)); //temp number until changed
  const [newDriverID2, setNewDriverID2] = useState(Math.floor(Math.random() * 864)); //temp number until changed
  const [allDrivers, setAllDrivers] = useState([]);

  useEffect(() => {
    console.log(newDriverID1);
    setDriverData1(null);
    const fetchDriverData1 = async () => {
      const data = await getDriverData1(newDriverID1); // Await the async function call
      setDriverData1(data); // Set the fetched data to the state
    };
    fetchDriverData1();
  }, [newDriverID1]);

  useEffect(() => {
    console.log(newDriverID2);
    setDriverData2(null);
    const fetchDriverData2 = async () => {
      const data = await getDriverData2(newDriverID2); // Await the async function call
      setDriverData2(data); // Set the fetched data to the state
    };
    fetchDriverData2();
  }, [newDriverID2]);

    useEffect(() => {
      const fetchDriverData = async () => {
      const allDriverData = await getAllDrivers();
      setAllDrivers(allDriverData);
      console.log(allDrivers);
      };
      fetchDriverData();
    }, [DriverData1, DriverData2]);
    if (!DriverData1 ||!DriverData2 || !allDrivers ||allDrivers.length===0) {
      return <div style={{height:'100vh', marginLeft:'20%', paddingTop:'20%'}}>
        <h1 style={{fontSize:'100px', color:'white'}}>"Box Box"</h1>
        <p style={{fontSize:'64px', color:'white'}}>Sorry for the delay, this should take around 8 seconds</p>
      </div>;
    }
  return (
    <div style={{ marginLeft: "20%", top: "0px" }}>
      .
      <div style={{ marginRight: "10%", marginTop: "8%" }}>
      <DataSelectors allDrivers={allDrivers} setNewDriverID={setNewDriverID1} setNewDriverID2={setNewDriverID2}/>
      </div>
      <div
        className="d-flex flex-row justify-content-center"
        style={{ gap: "5vh", marginRight: "2%" }}
      >
        <SmallCard driver={DriverData1} />
        <SmallCard driver={DriverData2} />
      </div>
      <div className="d-flex" style={{ minHeight: "70vh", gap: "5vh" }}>
        <RadarCard driver1={DriverData1} driver2={DriverData2} />
        <BarCard driver1={DriverData1} driver2={DriverData2} />
      </div>
      <div className="d-flex" style={{ minHeight: "60vh", gap: "5vh" }}>
        <PieCard driver={DriverData1} numData={0} />
        <PieCard driver={DriverData2} numData={1} />
      </div>
    </div>
  );
}

export default Comparison;
