import React from "react";
import ChartBar from "./ChartBar";

export default function Quality(props: any) {
  const result: any = props.result;
  return (
    <div className="flex flex-col gap-10 m-10">
      <div className="flex justify-between text-3xl">
        <h1 className="">{result.category}</h1>
        <h1 className="">{Math.round(parseInt(result.score_out_of_10))}</h1>
      </div>

      <ChartBar score_out_of_10={result.score_out_of_10} />
    </div>
  );
}
