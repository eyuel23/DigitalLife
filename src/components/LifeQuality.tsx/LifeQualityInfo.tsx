import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Quality from "./Quality";
import Newyork from "../../assets/Newyork.jpeg";
import { motion } from "framer-motion";
import ErrorModal from "./ErrorModal";
export default function LifeQualityInfo(props: any) {
  const result: string = props.search;
  const work: boolean = props.work;
  const [info, setInfo] = useState([]);
  const [header, setHeader] = useState("");
  const categories: string[] = [];
  const [error, setError] = useState(false);
  const dummy: any = useRef();
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
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let unsub = false;
    if (!unsub) {
      if (result === undefined) {
        setError(true);
        console.log("try again");
      } else {
        // remove br too
        const search: string = result.trim().toLowerCase().replace(/ /g, "-");
        fetchData(
          `https://api.teleport.org/api/urban_areas/slug:${search}/scores/`
        );
        console.log(search);
        setError(false);
      }
    }
    return () => {
      unsub = true;
    };
  }, [result]);
  return (
    <>
      {error ? (
        <ErrorModal />
      ) : (
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="flex"
          ref={dummy}
        >
          <div className="flex flex-col  gap-10 ">
            <img
              src={Newyork}
              alt="city image"
              className="w-full h-[55rem] shadow-lg border-2 border-black "
            />
            <h1 className="text-5xl font-medium ">{result}</h1>
            <h1 className="text-3xl  w-3/4 font-Montserrat">
              {header.replace(/<[^>]*>/g, "")}
            </h1>
          </div>
          <div className=" flex flex-col  justify-center items-center flex-[0_0_50%] xs:flex-col ">
            <h1 className="text-7xl mb-5">Quality</h1>
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
      )}
    </>
  );
}
