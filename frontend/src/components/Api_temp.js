// import { useState, useEffect } from "react";
// import axios from "axios";

// export const getDriverData = async (driverID = null) => {
//   const [wins, setWins] = useState(0); // race finish position 1 , 1 api check
//   const [poles, setPoles] = useState(0); // Quali finish position 1 , 1 api check
//   //let podiums = 0; // race finish position above 3, check for position 3 and 2 and add to wins. total of 3 api checks
//   //let wdc = 0; // not possible it seems ,needs numerous api checks (1 for each season)
//   const [races, setRaces] = useState(0); // total races , 1 api check
//   const [seasons, setSeasons] = useState(0); // total seasons
//   const [allDrivers, setAllDrivers] = useState([]);
//   const [driver, setDriver] = useState({});
//   const [constructors, setConstructors] = useState(0); //total num constructors raced for
//   const [driverData, setDriverData] = useState(null);
//   useEffect(() => {
//     let totalDrivers = 0;

//     const fetchDrivers = async () => {
//       let allDriversArr = [];
//       let limit = 100;
//       let offset = 0;
//       try {
//         const response = await axios.get(
//           "https://api.jolpi.ca/ergast/f1/drivers/",
//           {
//             params: { limit, offset }, // Fetch more than the apis default 30. Maxes out at 100 so ive gotta fetch numerous times
//           }
//         );
//         totalDrivers = response.data.MRData.total;
//         console.log(totalDrivers);
//         allDriversArr = response.data.MRData.DriverTable.Drivers;

//         while (allDriversArr.length < totalDrivers) {
//           offset += limit;
//           const nextResponse = await axios.get(
//             "https://api.jolpi.ca/ergast/f1/drivers/",
//             {
//               params: { limit, offset },
//             }
//           );
//           allDriversArr = allDriversArr.concat(
//             nextResponse.data.MRData.DriverTable.Drivers
//           );
//         }
//         setAllDrivers(allDriversArr);
//       } catch (error) {
//         console.error("Error fetching data:");
//       }
//     };

//     //picks a random driver if no driver id is assigned
//     // if (!driverID) {
//     //   let driverIndex = Math.floor(Math.random() * allDrivers.length);
//     //   driverID = allDrivers[driverIndex].driverId;
//     // }
//     const fetchDriverData = async (driverID) => {
//       try {
//         const response = await axios.get(
//           `https://api.jolpi.ca/ergast/f1/drivers/${driverID}`
//         );
//         setDriver(response.data.MRData.DriverTable.Drivers[0]);
//       } catch (error) {
//         console.log("Error fetching individual drivers data");
//       }
//     };
//     const fetchStats = async (driverId) => {
//       try {
//         const [winsRes, polesRes, racesRes, seasonsRes, constructorsRes] =
//           await Promise.all([
//             axios.get(
//               `https://api.jolpi.ca/ergast/f1/drivers/${driverId}/results/1`
//             ),
//             axios.get(
//               `https://api.jolpi.ca/ergast/f1/drivers/${driverId}/qualifying/1`
//             ),
//             axios.get(
//               `https://api.jolpi.ca/ergast/f1/drivers/${driverId}/races/`
//             ),
//             axios.get(
//               `https://api.jolpi.ca/ergast/f1/drivers/${driverId}/seasons/`
//             ),
//             axios.get(
//               `https://api.jolpi.ca/ergast/f1/drivers/${driverId}/constructors/`
//             ),
//           ]);

//         setWins(winsRes.data.MRData.total);
//         setPoles(polesRes.data.MRData.total);
//         setRaces(racesRes.data.MRData.total);
//         setSeasons(seasonsRes.data.MRData.total);
//         setConstructors(constructorsRes.data.MRData.total);
//       } catch (error) {
//         console.error("Error fetching stats:", error);
//       }
//     };

//     // const fetchWins = async (driverID) => {
//     //   try {
//     //     const response = await axios.get(
//     //       `https://api.jolpi.ca/ergast/f1/drivers/${driverID}/results/1`
//     //     );
//     //     setWins(response.data.MRData.total);
//     //   } catch (error) {
//     //     console.log("Error Fetching wins");
//     //   }
//     // };
//     // const fetchPoles = async (driverID) => {
//     //   try {
//     //     const response = await axios.get(
//     //       `https://api.jolpi.ca/ergast/f1/drivers/${driverID}/qualifying/1`
//     //     );
//     //     setPoles(response.data.MRData.total);
//     //   } catch (error) {
//     //     console.log("Error Fetching poles");
//     //   }
//     // };
//     // const fetchRaces = async (driverID) => {
//     //   try {
//     //     const response = await axios.get(
//     //       `https://api.jolpi.ca/ergast/f1/drivers/${driverID}/races/`
//     //     );
//     //     setRaces(response.data.MRData.total);
//     //   } catch (error) {
//     //     console.log("Error Fetching races");
//     //   }
//     // };
//     // const fetchSeasons = async (driverID) => {
//     //   try {
//     //     const response = await axios.get(
//     //       `https://api.jolpi.ca/ergast/f1/drivers/${driverID}/seasons/`
//     //     );
//     //     setSeasons(response.data.MRData.total);
//     //   } catch (error) {
//     //     console.log("Error Fetching races");
//     //   }
//     // };
//     // const fetchConstructors = async (driverID) => {
//     //   try {
//     //     const response = await axios.get(
//     //       `https://api.jolpi.ca/ergast/f1/drivers/${driverID}/constructors/`
//     //     );
//     //     setConstructors(response.data.MRData.total);
//     //   } catch (error) {
//     //     console.log("Error Fetching races");
//     //   }
//     // };
//     const driverDataToReturn = {
//       name: driver.givenName + " " + driver.familyName,
//       nationality: driver.nationality,
//       wins: wins,
//       polePositions: poles,
//       bestChampPos: -1, //temp for now
//       championshipWins: -1, //temp for now
//       podiums: -1,
//       isCompeting: false, //temp
//       lastRace: "2024 Abu Dhabi Grand Prix", //temp
//       numRaces: races,
//       numSeasons: seasons,
//       winrate: Math.floor((wins / races) * 100),
//       constructors: constructors,
//     };
//     setDriverData(driverDataToReturn);
//   }, [driverID]);
//   return driverData;
// };
