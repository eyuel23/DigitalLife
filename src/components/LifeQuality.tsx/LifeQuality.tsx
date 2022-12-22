import { useState } from "react";
import LifeQualityInfo from "./LifeQualityInfo";
import MostSearched from "./MostSearched";

export default function LifeQuality(props: any) {
  let result: string = props.search;
  let work: boolean = props.work;

  return (
    <section className="min-h-screen mt-10 flex flex-col justify-around items-center ">
      {work ? (
        <LifeQualityInfo search={result} work={work} />
      ) : (
        <MostSearched onClick={props.onClick} />
      )}
    </section>
  );
}
