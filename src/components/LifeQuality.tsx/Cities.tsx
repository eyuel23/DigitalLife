import React from "react";

export default function Cities(props: any) {
  return (
    <div className="relative">
      <img src={props.image} alt="city" className="w-[40rem] h-96" />
      <div className="bg-blue-900 h-20 absolute w-full bottom-0 text-2xl flex justify-between items-center px-5 text-white font-semibold">
        <h1 className="">Philadelphia</h1>
        <h1 className="">♡</h1>
      </div>
    </div>
  );
}
