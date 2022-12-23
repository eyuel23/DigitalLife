import React from "react";

export default function ErrorModal() {
  return (
    <div className=" absolute top-0  w-4/5 h-1/5 shadow-xl text-center rounded-2xl border-4 border-t-red-500">
      <h1 className="text-4xl pt-20">
        There was an error, please check your spelling or spacing or maybe its
        not a city 🤔
        <br /> maybe some one needs to refresh on their geography knowledge😁
      </h1>
    </div>
  );
}
