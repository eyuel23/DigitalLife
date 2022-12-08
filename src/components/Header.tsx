import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="min-h-screen header h-[80rem] flex flex-col justify-end items-center ">
      <Navigation />
      <div className="flex flex-col justify-around items-center h-3/4">
        <div>
          <h1 className="text-8xl text-white text-center">
            DISCOVER <span className="text-green-500">LIFE </span> QUALITY,
            <br /> CHOOSE YOUR NEXT <br />
            <span className="text-green-500">DESTINATION.</span>
          </h1>
        </div>
        <button className="h-32 w-16 rounded-2xl border-green-500 border-2 flex items-center justify-center">
          <svg
            width="24"
            height="59"
            viewBox="0 0 24 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9393 57.5917C11.5251 58.1775 12.4749 58.1775 13.0607 57.5917L22.6066 48.0458C23.1924 47.46 23.1924 46.5103 22.6066 45.9245C22.0208 45.3387 21.0711 45.3387 20.4853 45.9245L12 54.4097L3.51472 45.9245C2.92893 45.3387 1.97918 45.3387 1.3934 45.9245C0.807612 46.5103 0.807612 47.46 1.3934 48.0458L10.9393 57.5917ZM13.5 56.5311L13.5 -5.13478e-06H10.5L10.5 56.5311H13.5Z"
              fill="#F6F6F6"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
