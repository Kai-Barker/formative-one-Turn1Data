import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './ButtonData';
import Searchbar from './Search';

const DataSelectors = () => {
    return (
        <div className="d-flex">
            <div className="col-6 d-flex justify-content-start">
                <Searchbar />
            </div>
            <div className="col-6 d-flex justify-content-end">
                <Buttons/>
            </div>
        </div>
    );
};

export default DataSelectors;