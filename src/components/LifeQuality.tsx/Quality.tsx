import React from "react";

export default function Quality(props: any) {
  const result: any = props.result;
  return (
    <div className="flex gap-60">
      <h1>{result.category}</h1>
      <h1>{result.score_out_of_10}</h1>
    </div>
  );
}
