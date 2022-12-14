import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-12 space-x-5">
      <div className="flex flex-row w-full items-center justify-evenly">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for City"
          className="text-sm font-light items-center justify-center p-2 w-32 shadow-sm capitalize"
        />
      </div>
      <div className="flex flex-row w-full items-center justify-evenly space-x-2">
        <UilSearch
              size={20}
              className="text-white cursor-pointer transition ease-out hover:scale-125"
              onClick={handleSearchClick}
            />
            <p className="text-xl text-white px-1 space-x-2">|</p>
            <UilLocationPoint
              size={20}
              className="text-white cursor-pointer transition ease-out hover:scale-125"
              onClick={handleLocationClick}
            />

      </div>
      <div className="flex flex-row w-fit items-center justify-center space-x-2">
        
            <button
              name="metric"
              className="text-lg text-white font-light transition ease-out hover:scale-125"
              onClick={handleUnitsChange}
            >
              °C
            </button>
            <p className="text-lg text-white">|</p>
            <button
              name="imperial"
              className="text-lg text-white font-light transition ease-out hover:scale-125"
              onClick={handleUnitsChange}
            >
              °F
            </button>
      </div>
    </div>
  );
}

export default Inputs;
