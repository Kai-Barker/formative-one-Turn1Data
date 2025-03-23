import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";
import LargeCard from "./Large_card";
import DataSelectors from "./Data_selectors";
import TimelineCard from "./Timeline_card";
import { getDriverData } from './Api_two';


const driver = {
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

function Timeline() {
  const [DriverData, setDriverData] = useState(null);
    const [newDriverID, setNewDriverID] = useState(Math.floor(Math.random() * 864)); //temp number until changed
    useEffect(() => {
      const fetchDriverData = async () => {
        const data = await getDriverData(newDriverID); // Await the async function call
        setDriverData(data); // Set the fetched data to the state
      };
      fetchDriverData();
    }, []);
  return (
    <div style={{ marginLeft: "20%", top: "0px" }}>
      .
      <div style={{ marginRight: "10%", marginTop: "8%" }}>
        <DataSelectors />
      </div>
      <div className="d-flex flex-row" style={{ gap: "5vh" }}>
        <SmallCard driver={DriverData} />
        <LargeCard driver={DriverData}/>
      </div>
      <div>
        <TimelineCard />
      </div>
    </div>
  );
}
export default Timeline;
