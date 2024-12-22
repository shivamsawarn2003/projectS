import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import locations from "../../../src/location-data.json"; // your location.json file
import "./paymentgateway.css";

function Filter(){
  const [Search, setSearch] = useState(""); // Input box value
  const [searchData, setSearchData] = useState([]); // Filtered suggestions
  const [selectedItem, setSelectedItem] = useState(-1); // Index of the selected suggestion

  const handleChange = (event) => {
    setSearch(event.target.value);
    setSelectedItem(-1); // Reset selection when input changes
  };

  const handleClose = () => {
    setSearch("");
    setSearchData([]);
    setSelectedItem(-1);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      // Move selection down
      setSelectedItem((prev) => (prev < searchData.length - 1 ? prev + 1 : prev));
    } else if (event.key === "ArrowUp") {
      // Move selection up
      setSelectedItem((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (event.key === "Enter") {
      // Select the currently highlighted item
      if (selectedItem >= 0 && searchData[selectedItem]) {
        setSearch(searchData[selectedItem].name); // Update input with selected suggestion
        setSearchData([]); // Clear suggestions
        setSelectedItem(-1); // Reset selection
      }
    }
  };

  useEffect(() => {
    if (Search !== "") {
      const locationArray =
        locations[0] &&
        Object.entries(locations[0]).map(([id, name]) => ({
          id, // key as location ID
          name, // value as location name
        }));

      const newFilterLocation = locationArray.filter((location) =>
        location.name.toLowerCase().startsWith(Search.toLowerCase())
      );

      setSearchData(newFilterLocation);
    } else {
      setSearchData([]);
    }
  }, [Search]);

  return (
    <section className="search_section">
      <div className="search_input_div">
        <input
          type="text"
          className="search_input"
          placeholder="Search..."
          autoComplete="off"
          onChange={handleChange}
          value={Search}
          onKeyDown={handleKeyDown} // Handle key events here
        />
        <div className="search_icon">
          {Search === "" ? (
            <SearchIcon />
          ) : (
            <CloseIcon onClick={handleClose} />
          )}
        </div>
      </div>
      <div className="search_result">
        {searchData.slice(0, 10).map((locationItem, id) => (
          <div
            key={id}
            className={
              selectedItem === id
                ? "search_suggestion_line active" // Highlight the selected item
                : "search_suggestion_line"
            }
            onClick={() => {
              setSearch(locationItem.name); // Select on click
              setSearchData([]); // Clear suggestions
              setSelectedItem(-1); // Reset selection
            }}
          >
            {locationItem.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Filter;