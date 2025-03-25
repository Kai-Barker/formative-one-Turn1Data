import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero_section.css';

function HeroSection(){
    return (
        <div className="hero-section d-flex align-items-center justify-content-center" style={{ height: '35vh', marginTop: '2vh', borderBottom: '5px solid #FF1801'}}>
            <div className="text-left" style={{ color: 'white', marginRight: '20%' }}>
                <h1 className="display-5"style={{marginBottom:'4vh',textAlign:'left'}}>Welcome to Turn 1 Data</h1>
                <p className="lead" style={{fontSize:'18px', textAlign:'left'}}>Welcome to Turn 1 Data, the ultimate destination for Formula 1 statistics and insights. Our platform offers a deep dive into the world of F1, providing comprehensive data on drivers, constructors, season standings, and historical performance. Whether you want to compare driver stats, analyze constructor achievements, or explore race timelines from past seasons, Turn 1 Data delivers the information you need to stay ahead of the pack. Unleash the power of data and discover the stories behind every lap, podium, and championship battle. It is important to note that all data is fetched from an API, and qualifying data such as pole positions is only recorded from the 1994 season onwards</p>
            </div>
        </div>
    );
};

export default HeroSection;