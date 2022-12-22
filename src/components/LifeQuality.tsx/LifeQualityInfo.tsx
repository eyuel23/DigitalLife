import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Quality from "./Quality";
import philly from "../../assets/philly.jpg";
import { motion } from "framer-motion";

export default function LifeQualityInfo(props: any) {
  const result: string = props.search;
  const work: boolean = props.work;
  const [info, setInfo] = useState([]);
  const [header, setHeader] = useState("");
  const categories: string[] = [];
  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    const categories = data.categories;

    const scores = categories.map((category: any) => {
      return {
        category: category.name,
        score_out_of_10: category.score_out_of_10,
      };
    });
    setHeader(data.summary);
    setInfo(scores);
    console.log(data);
  };

  useEffect(() => {
    let unsub = false;
    if (!unsub) {
      if (result === undefined) {
        console.log("try again");
      } else {
        const search: string = result.trim().toLowerCase().replace(/ /g, "-");
        fetchData(
          `https://api.teleport.org/api/urban_areas/slug:${search}/scores/`
        );
        console.log(search);
      }
    }
    return () => {
      unsub = true;
    };
  }, [result]);
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <div className="flex flex-col justify-between items-center gap-10">
        <img src={philly} alt="city image" className="w-[40rem] h-[30rem]" />
        <h1 className="text-3xl text-center w-3/4 font-Montserrat">
          {header.replace(/<\/?[pb]>/g, "")}
        </h1>
      </div>
      <div className=" flex flex-col  justify-center items-center flex-[0_0_50%] xs:flex-row xs:gap-[40rem]">
        <div>
          {info.map((result, index) => {
            if (index < 5) {
              return <Quality key={index} result={result} />;
            }
          })}
        </div>
        <div>
          {info.map((result, index) => {
            if (5 < index && index < 11) {
              return <Quality key={index} result={result} />;
            }
          })}
        </div>
      </div>
    </motion.div>
  );
}
