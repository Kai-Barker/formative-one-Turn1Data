import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'; // Import the CSS file
import bgTexture from '../images/MetalTexture.jpeg';

function SmallCard(){
    return (
        <Card style={{ borderRadius: '15px 0px 15px 0px', border: '1px solid #ccc', width: '25%', marginTop:'8vh',borderLeft: '5px solid #FF1801',
            borderTop: '5px solid #FF1801', boxShadow: '2px 2px 5px 0px rgb(255, 255, 255)', backgroundImage: `url(${bgTexture})`,backgroundColor: 'rgba(255, 255, 255, 0.7)', backgroundBlendMode: 'overlay', backgroundSize: 'cover' }}>
            <Card.Body>
                <Card.Title className="custom-card-title" id='driverName' >Lewis Hamilton</Card.Title>
                <div style={{textAlign: 'left'}}>
                <Card.Text id='competeStatus' style={{fontSize:'small', marginBottom:'0'}}>
                    Is Currently Competing
                </Card.Text>
                <Card.Text id='lastRace' style={{fontSize:'small', marginBottom:'0'}}>
                    Last Race: 2024 Abu Dhabi Grand Prix
                </Card.Text>
                <hr style={{margin: '5px', marginLeft: '-6%', padding:'4px', color:'#fff', backgroundColor:'#FF1801', width:'112.5%', opacity:'100'}}/>
                <Card.Text className='statText'>
                    Nationality: British
                </Card.Text>
                <Card.Text className='statText'>
                    Wins: 105
                </Card.Text>
                <Card.Text className='statText'>
                    Pole Positions: 104
                </Card.Text>
                <Card.Text className='statText'>
                    Best Championship Position: 1
                </Card.Text>
                <Card.Text className='statText'>
                    WDC Wins: 7
                </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default SmallCard;