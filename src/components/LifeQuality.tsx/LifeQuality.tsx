import React, { useEffect } from "react";
import { useState } from "react";
import Quality from "./Quality";

export default function LifeQuality() {
  const [result, setResult] = useState("");
  const [work, setWork] = useState(false);
  const [info, setInfo] = useState([]);
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
    setInfo(scores);
    console.log(info);
  };
  useEffect(() => {
    fetchData(
      "https://api.teleport.org/api/urban_areas/slug:philadelphia/scores/"
    );

    return () => {
      fetchData;
    };
  }, [work]);
  const resultHandler = (event: any) => {
    setResult(event.target.value);
    event.preventDefault();
  };
  const submitHandler = (event: any) => {
    setWork(true);
    event.preventDefault();
  };
  return (
    <section className="min-h-screen flex flex-col justify-between items-center ">
      <h1 className=" m-7 text-6xl self-start">Life Quality</h1>
      <form>
        <input
          className="border-black border-2 w-96 h-16 rounded-xl"
          type="text"
          placeholder="Search"
          onChange={resultHandler}
        ></input>
        <button type="submit" onClick={submitHandler}>
          here
        </button>
      </form>
      <div>
        {info.map((result) => {
          return <Quality result={result} />;
        })}
      </div>
    </section>
  );
}
