import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import bgTexture from "../images/MetalTexture.jpeg";
import { faker } from "@faker-js/faker";
import Form from "react-bootstrap/Form";
import { getDriverDataInSeason } from "./Api_two";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function TimelineCard({ driver, seasons }) {
  console.log(seasons);
  const [seasonSelected, setSeasonSelected] = useState(seasons[seasons.length - 1]);
  const [dataInSeason, setDataInSeason] = useState([]); //here is the issue
  useEffect(() => {
    const fetchDriverData = async () => {
      const data = await getDriverDataInSeason(seasonSelected, driver.id); // Await the async function call
      setDataInSeason(data); // Set the fetched data to the state
      console.log(dataInSeason);
      
    };
    fetchDriverData();
  }, [seasonSelected]);
  useEffect(() => {
    console.log("Updated Data in Season:", dataInSeason);
  }, [dataInSeason]);  // This runs when dataInSeason changes
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Drivers positions over season ${seasonSelected}`,
      },
    },
    scales: {
      y: {
        beginAtZero:false,
        suggestedMin: 1,
        suggestedMax: 20,
        reverse: true,
        ticks: {
          stepSize:1
        }
      }
    }
  };
  
  const labels = dataInSeason?.Races?.map((_, index) => index + 1) || [];
  
  const data = {
    labels,
    datasets: [
      {
        label: dataInSeason.driverId?.toUpperCase(),
        data: dataInSeason?.Races?.map((race) => 
          parseInt(race.Results[0].position) || 0 // Get the position from the first result of each race
        ) || [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <Card
      style={{
        borderRadius: "15px 0px 15px 0px",
        border: "1px solid #ccc",
        width: "88%",
        marginTop: "8vh",
        borderLeft: "5px solid #FF1801",
        borderTop: "5px solid #FF1801",
        boxShadow: "2px 2px 5px 0px rgb(255, 255, 255)",
        backgroundImage: `url(${bgTexture})`,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        minHeight: "60vh",
      }}
    >
      <Card.Body>
        <div style={{ fontFamily: "Racing Sans One" }}>
          <Card.Title
            id="competeStatus"
            style={{ fontSize: "24px", marginTop: "-1vh", textAlign: "center" }}
          >
            Drivers Performance Over Time
          </Card.Title>
          <hr
            style={{
              margin: "5px",
              marginLeft: "-1.6%",
              padding: "4px",
              color: "#fff",
              backgroundColor: "#FF1801",
              width: "103%",
              opacity: "100",
            }}
          />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <Form.Select aria-label="Default select example" onChange={(season)=> setSeasonSelected(season.target.value)}>
              <option>Season</option>
              {/* Create dropdowns based on the driver selected's seasons raced */}
              {seasons.map((season, index) => (
                <option key={index} value={season}>
                  {season}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>
        <div>
          <Line options={options} data={data} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default TimelineCard;
