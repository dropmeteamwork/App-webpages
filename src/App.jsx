import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ContentCard from "./components/ContentCard";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState("en");

  // Toggle language between English and Arabic
  const TranslateFunc = () =>
    setLang((prev) => (prev === "en" ? "ar" : "en"));

  return (
    <>
      {/* Header */}
      <Navbar lang={lang} TranslateFunc={TranslateFunc} />

      {/* Main Content (same layout as old project) */}
      <div className="grid grid-cols-12 px-4 md:px-0">
        <div className="col-span-12 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
          <ContentCard lang={lang} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
