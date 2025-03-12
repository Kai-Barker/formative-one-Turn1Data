import React from 'react';
import SmallCard from './SmallCard';
import LargeCard from './Large_card';
import DataSelectors from './Data_selectors';
import TimelineCard from './Timeline_card';

const driver = {
    name: 'Lewis Hamilton',
    isCompeting: true,
    lastRace: '2024 Abu Dhabi Grand Prix',
    nationality: 'British',
    wins: 105,
    polePositions: 104,
    bestChampPos:1,
    championshipWins:7,
    podiums:202,
    numRaces: 356,
    numSeasons: 17,
    winrate: 29.5,
    currentConstructor: {
        name:'Scuderia Ferrari',
        isCompeting: true,
        lastRace:'2024 Abu Dhabi Grand Prix',
        nationality: 'Italian',
        wins:247,
        polePositions:253,
        bestChampPos:1,
        championshipWins:15,
        podiums:202,
        numRaces: 356,
        numSeasons: 17,
        numDrivers: 114
    }
}


function Timeline(){
    return(
        <div style={{ marginLeft: '20%', top:'0px' }}>.
            <div style={{marginRight:'10%', marginTop:'8%'}}>
                <DataSelectors />
            </div>
            <div className="d-flex flex-row" style={{ gap: '5vh' }}>
                <SmallCard driver={driver}/>
                <LargeCard />
            </div>
            <div>
                <TimelineCard />
            </div>
        </div>
    )
}
export default Timeline;