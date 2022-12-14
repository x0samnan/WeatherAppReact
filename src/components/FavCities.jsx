import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Bangalore",
    },
    {
      id: 2,
      title: "Kathmandu",
    },
    {
      id: 3,
      title: "Hokkaido",
    },
    {
      id: 4,
      title: "Seoul",
    },
    {
      id: 5,
      title: "Kolkata",
    },
  ];

  return (
    <div className="flex items-center justify-around space-x-4 ">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-sm font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
