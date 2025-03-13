import React from "react";
import DataSelectors from "./Data_selectors";
import SmallCard from "./SmallCard";
import RadarCard from "./Radar_card";
import BarCard from "./Bar_card";
import PieCard from "./Pie_card";

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
  return (
    <div style={{ marginLeft: "20%", top: "0px" }}>
      .
      <div style={{ marginRight: "10%", marginTop: "8%" }}>
        <DataSelectors />
      </div>
      <div
        className="d-flex flex-row justify-content-center"
        style={{ gap: "5vh", marginRight: "2%" }}
      >
        <SmallCard driver={driver1} />
        <SmallCard driver={driver2} />
      </div>
      <div className="d-flex" style={{ minHeight: "70vh", gap: "5vh" }}>
        <RadarCard driver1={driver1} driver2={driver2} />
        <BarCard driver1={driver1} driver2={driver2} />
      </div>
      <div className="d-flex" style={{ minHeight: "60vh", gap: "5vh" }}>
        <PieCard driver={driver1} numData={0} />
        <PieCard driver={driver2} numData={1} />
      </div>
    </div>
  );
}

export default Comparison;
