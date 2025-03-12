import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'; // Import the CSS file
import bgTexture from '../images/MetalTexture.jpeg';

function RadarCard({driver, numData}){
    //if the numData is 1, the colour of the graph will be black
    graphCol="#FF1801"
    if (numData==1) {
        graphCol="#0D0D0D"
    }
    return (
        <Card style={{ borderRadius: '15px 0px 15px 0px', border: '1px solid #ccc', width: '42.5%', marginTop:'8vh',borderLeft: '5px solid #FF1801',
            borderTop: '5px solid #FF1801', boxShadow: '2px 2px 5px 0px rgb(255, 255, 255)', backgroundImage: `url(${bgTexture})`,backgroundColor: 'rgba(255, 255, 255, 0.7)', backgroundBlendMode: 'overlay', backgroundSize: 'cover' }}>
            <Card.Body>
                <div style={{fontFamily:'Racing Sans One'}}>
                <Card.Title id='competeStatus' style={{fontSize:'24px', marginTop:'-2vh',textAlign: 'center'}}>
                    Drivers Performance
                </Card.Title>
                <Card.Title id='lastRace' style={{fontSize:'18px', marginTop:'-1vh',textAlign: 'center'}}>
                    (Races won/races entered)*100
                </Card.Title>
                <hr style={{margin: '5px', marginLeft: '-2.5%', padding:'4px', color:'#fff', backgroundColor:'#FF1801', width:'105%', opacity:'100'}}/>
                </div>
            </Card.Body>
        </Card>
    );
};

export default RadarCard;