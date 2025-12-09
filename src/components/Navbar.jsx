import React from "react";
import dropmeLogo from "../assets/images/dropme-logo.png";

export default function Navbar({ lang, TranslateFunc }) {
  return (
    <div className="navbar bg-base-100 shadow-sm px-0">
      <div className="w-full grid grid-cols-12 px-4 md:px-0">
        <div className="col-span-12 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 flex justify-between items-center">
          <div className="flex-1">
            <img alt="Drop Me logo" src={dropmeLogo} className="w-20 md:w-20" />
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <button
                  onClick={TranslateFunc}
                  className="px-4 py-2 rounded-full font-semibold text-white"
                  style={{
                    backgroundColor: "#7bab43", // primary color
                    border: "none",
                    outline: "none",
                    padding: "0.25rem 0.75rem", // smaller padding
                    fontSize: "0.875rem", // smaller text
                  }}
                >
                  {lang === "en" ? "Arabic" : "English"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
