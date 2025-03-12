import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'; // Import the CSS file
import bgTexture from '../images/MetalTexture.jpeg';

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Radar } from 'react-chartjs-2';

  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export const options = {
    scales: {
        r: {
            ticks: {
                color: "#000", // Tick labels color
                font: {
                    family: "Racing Sans One, sans-serif", // Change to your desired font
                    size: 12, // Adjust font size
                    weight: "bold" // Make it bold if needed
                }
            },
            grid: {
                color: "rgba(51, 51, 51, 0.3)",
            },
            pointLabels: {
                font: {
                    family: "Racing Sans One, sans-serif", // Change font of labels around the chart
                    size: 12,
                    color: '#000'
                },
            }
        }
    }
};

export const data = {
    labels: ['Wins', 'Poles', 'Podiums', 'Championships'],
    datasets: [
      {
        label: 'Lewis Hamilton',
        data: [105, 104, 202, 7],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 71, 111)',
        borderWidth: 1,
      },
      {
        label: 'Max Verstappen',
        data: [63, 40, 100, 4],
        backgroundColor: 'rgba(122, 255, 104, 0.2)',
        borderColor: 'rgb(117, 255, 53)',
        borderWidth: 1,
      },
    ],
  };


function RadarCard({driver1, driver2}){
    return (
        <Card style={{ borderRadius: '15px 0px 15px 0px', border: '1px solid #ccc', width: '60%', marginTop:'8vh',borderLeft: '5px solid #FF1801',
            borderTop: '5px solid #FF1801', boxShadow: '2px 2px 5px 0px rgb(255, 255, 255)', backgroundImage: `url(${bgTexture})`,backgroundColor: 'rgba(255, 255, 255, 0.7)', backgroundBlendMode: 'overlay', backgroundSize: 'cover', maxHeight:'85vh' }}>
            <Card.Body>
                <div style={{fontFamily:'Racing Sans One'}}>
                <Card.Title id='competeStatus' style={{fontSize:'24px', marginTop:'-2vh',textAlign: 'center'}}>
                    Drivers Performance
                </Card.Title>
                <div className="d-flex justify-content-between align-items-center w-50" style={{ marginTop: "-1vh", marginLeft:'25%'}}>
                <div className="d-flex align-items-center">
                    {/* Dot to show colour */}
                    <span
                        style={{
                            width: "12px",
                            height: "12px",
                            backgroundColor: "#FF1801",
                            borderRadius: "50%",
                            marginRight: "1vh",
                        }}
                    ></span>
                    <p style={{ margin: 0 ,fontSize:'12px'}}>{driver1.name}</p>
                </div>
                <div className="d-flex align-items-center">
                    <p style={{ margin: 0, fontSize:'12px'}}>{driver2.name}</p>
                    {/* Dot to show colour */}
                    <span
                        style={{
                            width: "12px",
                            height: "12px",
                            backgroundColor: "#0D0D0D",
                            borderRadius: "50%",
                            marginLeft: "8px",
                        }}
                    ></span>
                </div>
            </div>
                <hr style={{margin: '5px', marginLeft: '-2.5%', padding:'4px', color:'#fff', backgroundColor:'#FF1801', width:'105%', opacity:'100'}}/>
                <div className='d-flex justify-content-center'>
                <Radar data={data} options={options} style={{width:'80vh' ,maxWidth:'80vh', height:'70vh',maxHeight:'70vh'}}/>
                </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default RadarCard;