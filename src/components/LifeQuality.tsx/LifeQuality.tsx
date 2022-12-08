import { useEffect } from "react";
import { useState } from "react";
import Quality from "./Quality";

export default function LifeQuality() {
  const [result, setResult] = useState("");
  const [work, setWork] = useState(false);
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
    const search: string = result.toLowerCase().replace(/ /g, "-");
    fetchData(
      `https://api.teleport.org/api/urban_areas/slug:${search}/scores/`
    );
  }, [work]);
  const resultHandler = (event: any) => {
    setResult(event.target.value);
    event.preventDefault();
  };
  const submitHandler = (event: any) => {
    setWork(!work);
    event.preventDefault();
  };
  return (
    <section className="min-h-screen h-[80rem] flex flex-col justify-between items-center ">
      <div className="flex flex-col w-full items-center">
        <h1 className=" m-7 text-7xl self-start font-Montserrat">
          Life <span className="text-green-500">Quality</span>
        </h1>
        <form className="flex gap-4">
          <input
            className="border-black border-2 w-[40rem] h-20 rounded-3xl text-4xl"
            type="text"
            placeholder="    🔍 Search"
            onChange={resultHandler}
          ></input>
          <button
            className="w-40 bg-green-500 h-20 rounded-3xl text-4xl text-white"
            type="submit"
            onClick={submitHandler}
          >
            Go
          </button>
        </form>
      </div>

      <h1 className="text-3xl text-center w-3/4">
        {header.replace(/<\/?[pb]>/g, "")}
      </h1>
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
