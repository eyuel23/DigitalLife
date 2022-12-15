import React from "react";

export default function SearchInput(props: any) {
  return (
    <div className="w-1/2 h-full">
      <input
        className=" w-4/5  h-full text-4xl"
        type="text"
        placeholder="    🔍  Search around here"
        onChange={props.onSearch}
        onSubmit={props.goHandler}
      />
      <button
        className=" w-1/5 bg-green-500 h-full text-4xl text-white"
        type="submit"
        onClick={props.goHandler}
      >
        Go
      </button>
    </div>
  );
}
