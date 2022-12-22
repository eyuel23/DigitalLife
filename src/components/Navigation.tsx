import React from "react";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center navigation absolute top-0 w-full">
      <h1 className="text-4xl m-5">
        Digital<span className="text-green-500">Life</span>
      </h1>
      <nav>
        <ul className="hidden justify-between m-4 text-2xl items-center xs:flex ">
          <li className="m-2 mx-8">Home</li>
          <li className="m-2 mx-8"> About us</li>
          <li className="m-2 mx-8">Services</li>
          <li className="m-2 mx-8 text-white">
            {" "}
            <button className="rounded-2xl bg-green-500 w-44 h-14">
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
