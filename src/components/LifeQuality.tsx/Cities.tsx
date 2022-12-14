import React from "react";

export default function Cities(props: any) {
  return (
    <div className="relative shadow-lg " onClick={props.onClick}>
      <img src={props.image} alt={props.alt} className="w-[40rem] h-96" />
      <div className="bg-[#051A34] h-20 absolute w-full bottom-0 text-2xl flex justify-between items-center px-5 text-white font-semibold">
        <h1 className="">{props.name}</h1>
        <h1 className="">♡</h1>
      </div>
    </div>
  );
}
