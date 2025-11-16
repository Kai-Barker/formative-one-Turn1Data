import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const Searchbar = ({ allDrivers, setNewDriverID }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDrivers, setFilteredDrivers] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    if (!allDrivers || allDrivers.length === 0) return;

    if (query.length > 0) {
      const results = allDrivers.filter((driver) =>
        driver.driverId.toLowerCase().includes(query) ||
        driver.givenName.toLowerCase().includes(query) ||
        driver.familyName.toLowerCase().includes(query)
      );
      setFilteredDrivers(results);
    } else {
      setFilteredDrivers([]);
    }
  };

  const handleSelectDriver = (driverId) => {
    setNewDriverID(driverId);
    setSearchTerm(""); // Clear search bar after selection
    setFilteredDrivers([]); // Hide search results
  };

  return (
    <div className="d-flex align-items-center position-relative" style={{ width: "100%" }}>
      <Form.Control
        type="text"
        placeholder="Search For Driver"
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredDrivers.length > 0 && (
        <ul className="position-absolute list-group list-group-dark mt-1" style={{width: "100%", zIndex: 10, maxHeight: "300px", overflowY: "auto", top: "100%"}}>
          {filteredDrivers.map((driver) => (
            <li
              key={driver.driverId}
              className="list-group-item list-group-item-action"
              onClick={() => handleSelectDriver(driver.driverId)}
              style={{
                cursor: "pointer",
                borderColor: "#FF1801",
                fontFamily: "'Racing Sans One', sans-serif"
              }}
            >
              {driver.givenName} {driver.familyName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
