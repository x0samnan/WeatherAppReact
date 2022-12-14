import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-center text-white py-3 space-x-10">
        <img src={iconUrlFromCode(icon)} alt="" className="w-30" />
        <p className="text-4xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
        <div className="flex flex-col items-center justify-between text-white py-3 space-y-3">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Feels Like:
            <span className="font-medium sm-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium sm-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium sm-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-10 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Sunrise:{" "}
          <span className="font-medium sm-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Sunset:{" "}
          <span className="font-medium sm-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
