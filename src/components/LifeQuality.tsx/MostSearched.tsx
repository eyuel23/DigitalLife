import React from "react";
import philly from "../../assets/philly.jpg";
import Cities from "./Cities";
import Newyork from "../../assets/Newyork.jpeg";
import chicago from "../../assets/chicago.jpg";

export default function MostSearched() {
  const most = [
    { id: 1, name: "philadelphia", image: philly },
    { id: 2, name: "New york", image: Newyork },
    { id: 3, name: "chicago", image: chicago },
    { id: 4, name: "Paris", image: philly },
    { id: 5, name: "Rome", image: philly },
    { id: 6, name: "philadelphia", image: philly },
    { id: 7, name: "philadelphia", image: philly },
    { id: 8, name: "philadelphia", image: philly },
    { id: 9, name: "philadelphia", image: philly },
  ];
  return (
    <div className="flex flex-col items-center gap-40">
      <h1 className="text-5xl">Most Searched Cities</h1>
      <div className="flex flex-wrap gap-20 justify-center">
        {most.map((city) => {
          return <Cities key={city.id} image={city.image} name={city.name} />;
        })}
      </div>
    </div>
  );
}
