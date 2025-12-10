import React from "react";
import dropmeLogo from "../assets/images/dropme-logo.png";

export default function NavBar({ lang, TranslateFunc }) {
  return (
    <div className="navbar bg-base-100 shadow-sm px-0">
      <div className="w-full grid grid-cols-12 px-4 md:px-0">
        <div className="col-span-12 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 flex justify-between items-center">

          {/* Logo */}
          <div className="flex-1 flex items-center">
            <img
              alt="Drop Me logo"
              src={dropmeLogo}
              className="w-20 md:w-24 lg:w-28 object-contain"
            />
          </div>

          {/* Language Button */}
          <div className="flex-none">
            <button
              onClick={TranslateFunc}
              className="
                bg-primary-color 
                text-white 
                rounded-full 
                px-4 py-2 
                text-sm 
                font-semibold 
                hover:bg-hover-color 
                transition
              "
            >
              {lang === "en" ? "Arabic" : "English"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
