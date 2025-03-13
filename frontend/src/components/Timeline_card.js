import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import bgTexture from "../images/MetalTexture.jpeg";
import { faker } from "@faker-js/faker";
import Form from "react-bootstrap/Form";

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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Drivers positions over season 2024",
    },
  },
};

const labels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];

export const data = {
  labels,
  datasets: [
    {
      label: "Lewis Hamilton",
      data: labels.map(() => faker.number.int({ min: -20, max: -1 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function TimelineCard({ driver }) {
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
        <div className="d-flex align-items-center justify-content-center gap-3">
          <div style={{ marginTop: "1%" }}>
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={"Career"}
                  />
                </div>
              ))}
            </Form>
          </div>
          <div>
            <Form.Select aria-label="Default select example">
              <option>Season</option>
              <option value="1">2024</option>
              <option value="2">2023</option>
              <option value="3">2022</option>
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
