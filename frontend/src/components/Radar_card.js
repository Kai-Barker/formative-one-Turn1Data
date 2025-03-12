import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'; // Import the CSS file
import bgTexture from '../images/MetalTexture.jpeg';

function RadarCard({driver1, driver2}){
    return (
        <Card style={{ borderRadius: '15px 0px 15px 0px', border: '1px solid #ccc', width: '60%', marginTop:'8vh',borderLeft: '5px solid #FF1801',
            borderTop: '5px solid #FF1801', boxShadow: '2px 2px 5px 0px rgb(255, 255, 255)', backgroundImage: `url(${bgTexture})`,backgroundColor: 'rgba(255, 255, 255, 0.7)', backgroundBlendMode: 'overlay', backgroundSize: 'cover' }}>
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
                </div>
            </Card.Body>
        </Card>
    );
};

export default RadarCard;