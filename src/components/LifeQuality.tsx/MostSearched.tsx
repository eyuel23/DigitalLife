import React from "react";
import philly from "../../assets/philly.jpg";
import Cities from "./Cities";
import Newyork from "../../assets/Newyork.jpeg";
import chicago from "../../assets/chicago.jpg";
import la from "../../assets/la.webp";
import lasvegas from "../../assets/lasvegas.jpeg";
import london from "../../assets/london.jpeg";
import tokyo from "../../assets/tokyo.jpeg";
import rome from "../../assets/rome.webp";
import paris from "../../assets/paris.jpeg";
export default function MostSearched(props: any) {
  const most = [
    { id: 1, name: "philadelphia", image: philly },
    { id: 2, name: "New york", image: Newyork },
    { id: 3, name: "chicago", image: chicago },
    { id: 4, name: "Paris", image: paris },
    { id: 5, name: "Rome", image: rome },
    { id: 6, name: "tokyo", image: tokyo },
    { id: 7, name: "las vegas", image: lasvegas },
    { id: 8, name: "los angeles", image: la },
    { id: 9, name: "london", image: london },
  ];
  return (
    <div className="flex flex-col items-center gap-40">
      <h1 className="text-5xl">Most Searched Cities</h1>
      <div className="flex flex-wrap gap-20 justify-center">
        {most.map((city) => {
          return (
            <Cities
              onClick={props.onClick}
              key={city.id}
              image={city.image}
              name={city.name}
              alt={city.name}
            />
          );
        })}
      </div>
    </div>
  );
}
