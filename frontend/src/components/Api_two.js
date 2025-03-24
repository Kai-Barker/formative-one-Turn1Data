import { useState, useEffect } from "react";
import axios from "axios";
let driverSeasons;

export const getDriverData = async (driverID = null) => {
  let wins = 0; // race finish position 1 , 1 api check
  let poles = 0; // Quali finish position 1 , 1 api check
  let races = 0; // total races , 1 api check
  let seasons = 0; // total seasons
  let allDrivers = [];
  let driver = {};
  let constructors = 0; // total num constructors raced for
  let driverData = null;
  let lastRace="";
  function waitTimeBetweenRequests(ms) {
    //This api has a limit of 4 requests per second
    return new Promise((resolve) => setTimeout(resolve, ms=250)); //default to 250, but one field needs around a second so i added this parameter ms
  }

  try {
    let totalDrivers = 0;

    async function fetchDrivers() {
      let allDriversArr = [];
      let limit = 100;
      let offset = 0;
      try {
        const response = await axios.get(
          "https://api.jolpi.ca/ergast/f1/drivers/",
          {
            params: { limit, offset }, // Fetch more than the apis default 30. Maxes out at 100 so ive gotta fetch numerous times
          }
        );
        totalDrivers = response.data.MRData.total;
        console.log(totalDrivers);
        allDriversArr = response.data.MRData.DriverTable.Drivers;

        while (allDriversArr.length < totalDrivers) {
          offset += limit;
          await waitTimeBetweenRequests();
          const nextResponse = await axios.get(
            "https://api.jolpi.ca/ergast/f1/drivers/",
            {
              params: { limit, offset },
            }
          );
          allDriversArr = allDriversArr.concat(
            nextResponse.data.MRData.DriverTable.Drivers
          );
        }
        console.log(allDriversArr);
        allDrivers = allDriversArr;
      } catch (error) {
        console.error("Error fetching data:");
      }
    }
    await fetchDrivers();

    //picks a random driver if no driver id is assigned
    if (typeof driverID === "number") {
        let temp=allDrivers[driverID]
        driverID=temp.driverId;
        console.log(driverID+"         random driver id");
        
    }
    async function fetchDriverData(driverID) {
      try {
        const response = await axios.get(
          `https://api.jolpi.ca/ergast/f1/drivers/${driverID}`
        );
        driver = response.data.MRData.DriverTable.Drivers[0];
      } catch (error) {
        console.log("Error fetching individual drivers data");
      }
    }
    const fetchStats = async (driverId) => {
      try {
        await waitTimeBetweenRequests(300); // Ensure delay before first request
        
        // Fetch Wins
        const winsRes = await axios.get(
          `https://api.jolpi.ca/ergast/f1/drivers/${driverId}/results/1`
        );
        await waitTimeBetweenRequests(300); // Delay before next request
          
        // Fetch Pole Positions
        const polesRes = await axios.get(
          `https://api.jolpi.ca/ergast/f1/drivers/${driverId}/qualifying/1`
        );
        await waitTimeBetweenRequests(300);
          
        // Fetch Total Races
        const racesRes = await axios.get(
          `https://api.jolpi.ca/ergast/f1/drivers/${driverId}/races/`
        );
        await waitTimeBetweenRequests(300);
          
        // Fetch Seasons
        const seasonsRes = await axios.get(
          `https://api.jolpi.ca/ergast/f1/drivers/${driverId}/seasons/`
        );
        await waitTimeBetweenRequests(300);
          
        // Fetch Constructors
        const constructorsRes = await axios.get(
          `https://api.jolpi.ca/ergast/f1/drivers/${driverId}/constructors/`
        );
        // Assigning values after all requests are done
        wins = winsRes.data.MRData.total;
        poles = polesRes.data.MRData.total;
        races = racesRes.data.MRData.total;
        
        driverSeasons = seasonsRes.data.MRData.SeasonTable.Seasons;
        console.log(driverSeasons);
        await waitTimeBetweenRequests();
        const lastRaceRes = await axios.get(
          `https://api.jolpi.ca/ergast/f1/${driverSeasons[driverSeasons.length-1].season}/drivers/${driverId}/races/`
        );
        lastRace = lastRaceRes.data.MRData.RaceTable.season +" "+ lastRaceRes.data.MRData.RaceTable.Races[lastRaceRes.data.MRData.RaceTable.Races.length-1].raceName;
        
        seasons = seasonsRes.data.MRData.total;
        constructors = constructorsRes.data.MRData.total;
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    await waitTimeBetweenRequests();
    await fetchDriverData(driverID);
    await waitTimeBetweenRequests();
    await fetchStats(driverID);
    await waitTimeBetweenRequests();
    

    //dummy data for testing

    // const driverDataToReturn = {
    //   name: "Max Verstappen",
    //   nationality: "Dutch",
    //   wins: 44,
    //   polePositions: 20,
    //   bestChampPos: 1,
    //   championshipWins: 2,
    //   podiums: 70,
    //   isCompeting: true,
    //   lastRace: "2024 Abu Dhabi Grand Prix",
    //   numRaces: 141,
    //   numSeasons: 7,
    //   winrate: Math.floor((44 / 141) * 100),
    //   constructors: 1,
    // };
    const driverDataToReturn = {
      id: driverID,
      name: driver.givenName + " " + driver.familyName,
      nationality: driver.nationality,
      wins: wins,
      polePositions: poles,
      bestChampPos: -1, //temp for now
      championshipWins: -1, //temp for now
      podiums: -1,
      isCompeting: false, //temp
      lastRace: lastRace, //temp
      numRaces: races,
      numSeasons: seasons,
      winrate: Math.floor((wins / races) * 100),
      constructors: constructors,
    };
    driverData = driverDataToReturn;
    //   }, [driverID]);
    console.log(driverData);
    
    return driverData;
  } catch (error) {
    console.log("error fetching data from API" + error);
  }
};

export const getDriverSeasons = () => {
  if (!driverSeasons || !Array.isArray(driverSeasons)) {
    console.log("Driver seasons not loaded yet.");
    return [];
  }

  return driverSeasons.map((driverSeasons) => driverSeasons.season);
};

export const getDriverDataInSeason = async (seasonYear = null, driverId) => {
  let SeasonData=await axios.get(`https://api.jolpi.ca/ergast/f1/${seasonYear}/drivers/${driverId}/results`);
  SeasonData=SeasonData.data.MRData.RaceTable;
  console.log(SeasonData);
  
  return SeasonData;
}