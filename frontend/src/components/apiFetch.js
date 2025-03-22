import { useState, useEffect } from 'react';
import axios from 'axios';

let totalDrivers = 0;


const [wins, setWins] = useState([]); // race finish position 1 , 1 api check
const [poles,setPoles] = useState([]); // Quali finish position 1 , 1 api check
//let podiums = 0; // race finish position above 3, check for position 3 and 2 and add to wins. total of 3 api checks
//let wdc = 0; // not possible it seems ,needs numerous api checks (1 for each season)
const [races, setRaces] = useState([]) // total races , 1 api check
const [seasons, setSeasons] = useState([]) // total seasons
const [drivers,setDrivers] = useState([]);


const fetchDrivers = async () => {
    const allDrivers = [];
    let limit = 100;
    let offset = 0;
    try {
      const response = await axios.get("https://api.jolpi.ca/ergast/f1/drivers/",{
        params: { limit, offset }, // Fetch more than the apis default 30. Maxes out at 100 so ive gotta fetch numerous times
      });
      totalDrivers = response.data.MRData.total;
      console.log(totalDrivers);
      allDrivers=response.data.MRData.DriverTable.Drivers;
      
      while (allDrivers.length<totalDrivers) {
        offset+=limit;
        const nextResponse = await axios.get("https://api.jolpi.ca/ergast/f1/drivers/", {
          params: { limit, offset },
        });
        allDrivers = allDrivers.concat(nextResponse.data.MRData.DriverTable.Drivers);
      }
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


const fetchDriverData = async (driverID) => {
    try {
        const response = await axios.get(`https://api.jolpi.ca/ergast/f1/drivers/${driverID}`);

    } catch (error) {
        
    }
}

const fetchWins = async (driverID) => {
    try {
        const response = await axios.get(`https://api.jolpi.ca/ergast/f1/drivers/${driverID}/results/1`);
        setWins(response.data.MRData.total);
    } catch (error) {
        console.log("Error Fetching wins");
        
    }
};
const fetchPoles = async (driverID) => {
    try {
        const response = await axios.get(`https://api.jolpi.ca/ergast/f1/drivers/${driverID}/qualifying/1`);
        setPoles(response.data.MRData.total);
    } catch (error) {
        console.log("Error Fetching poles");
        
    }
};
const fetchRaces = async (driverID) => {
    try {
        const response = await axios.get(`https://api.jolpi.ca/ergast/f1/drivers/${driverID}/races/`);
        setRaces(response.data.MRData.total);
    } catch (error) {
        console.log("Error Fetching races");
        
    }
};
const fetchSeasons = async (driverID) => {
    try {
        const response = await axios.get(`https://api.jolpi.ca/ergast/f1/drivers/${driverID}/seasons/`);
        setSeasons(response.data.MRData.total);
    } catch (error) {
        console.log("Error Fetching races");
        
    }
};