import React, { useState, useEffect } from 'react';
import HeroSection from "./Hero_section";
import SmallCard from "./SmallCard";
import LargeCard from "./Large_card";
import DataSelectors from "./Data_selectors";
import axios from "axios";

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



function Home() {
  const [drivers,setDrivers] = useState([]);
  const fetchDrivers = async () => {
    const allDrivers = [];
    let totalDrivers = 0;
    let limit = 100;
    let offset = 0;
    try {
      const response = await axios.get("https://api.jolpi.ca/ergast/f1/drivers/",{
        params: { limit, offset }, // Fetch more than the apis default 30. Maxes out at 100 so ive gotta fetch numerous times
      });
      totalDrivers = response.data.MRData.total;
      console.log(totalDrivers);
      allDrivers=response.data.MRData.DriverTable.Drivers;
      
      // while (allDrivers.length<totalDrivers) {
      //   offset+=limit;
      //   const nextResponse = await axios.get("https://api.jolpi.ca/ergast/f1/drivers/", {
      //     params: { limit, offset },
      //   });
      //   allDrivers = allDrivers.concat(nextResponse.data.MRData.DriverTable.Drivers);
      // }
      setDrivers(allDrivers);
      
    } catch (error) {
      console.error("Error fetching data:");
    }
  };
  useEffect(() => {
    fetchDrivers();
    
  }, []);
  useEffect(() => {
    console.log("Updated drivers:", drivers);
  }, [drivers]);

  return (
    <div style={{ marginLeft: "20%", top: "0px" }}>
      .
      <HeroSection />
      <div style={{ marginRight: "10%", marginTop: "2%" }}>
        <DataSelectors />
      </div>
      <div className="d-flex flex-row" style={{ gap: "5vh" }}>
        <SmallCard driver={driver} />
        <LargeCard />
      </div>
      <div className="d-flex flex-row" style={{ gap: "5vh" }}>
        <LargeCard />
        <SmallCard driver={driver.currentConstructor} />
      </div>
    </div>
  );
}

export default Home;
