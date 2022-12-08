import { useEffect } from "react";
import { useState } from "react";
import Quality from "./Quality";
import philly from "../../assets/philly.jpg";

export default function LifeQuality(props: any) {
  const [info, setInfo] = useState([]);
  const [header, setHeader] = useState("");
  const result: string = props.search;
  const work: boolean = props.work;
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
    const search: string = result.toLowerCase().replace(/ /g, "-");
    fetchData(
      `https://api.teleport.org/api/urban_areas/slug:${search}/scores/`
    );
  }, [work]);

  return (
    <section className="min-h-screen h-[80rem] flex flex-col justify-around items-center ">
      <div className="flex flex-col justify-between items-center gap-10">
        <img src={philly} alt="city image" className="w-96 h-96" />
        <h1 className="text-3xl text-center w-3/4 font-Montserrat">
          {header.replace(/<\/?[pb]>/g, "")}
        </h1>
      </div>
      <div className=" flex gap-[40rem] justify-center items-center flex-[0_0_50%]">
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
    </section>
  );
}
