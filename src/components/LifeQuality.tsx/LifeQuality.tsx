import React from "react";

export default function LifeQuality() {
  return (
    <section className="min-h-screen">
      <h1 className=" m-7 text-6xl">Life Quality</h1>
      <form>
        <input
          className="border-black border-2 w-96 h-16 rounded-xl"
          type="text"
          placeholder="Search"
        ></input>
      </form>
    </section>
  );
}
