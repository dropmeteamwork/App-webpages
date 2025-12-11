import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import translations from "../locales/translations.json";
import dropmeLogo from "../assets/images/dropme-logo-title.png";

export default function ContentCard({ lang }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const current = translations[lang].delete_account;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    document.title = "DropMe - Delete Account";

    const link =
      document.querySelector("link[rel~='icon']") ||
      document.createElement("link");

    link.rel = "icon";
    link.href = dropmeLogo;
    document.head.appendChild(link);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={lang}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center px-4 sm:px-0 py-10"
      >
        <div
          dir={lang === "en" ? "ltr" : "rtl"}
          className="w-full max-w-3xl bg-[#F3F8EBA3] p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-300"
        >
          {/* LOGO + Heading */}
          <div className="flex flex-col items-center mb-8">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#7BAB43] mb-2">
              {current.heading}
            </h1>
            <p className="text-gray-500 md:text-lg lg:text-xl">
              {current.subtitle}
            </p>
          </div>

          {/* POLICY */}
          <section className="mb-10">
            <h2 className="font-semibold text-xl md:text-2xl mb-2 text-[#7BAB43]">
              {current.policyTitle}
            </h2>

            <p className="text-[#111827] mb-4">{current.policyText}</p>

            <p className="text-red-600 font-semibold mb-4">{current.warning}</p>

            <h3 className="font-semibold text-lg mb-2 text-[#7BAB43]">
              {current.stepsTitle}
            </h3>

            <ol
              className={`list-decimal list-inside space-y-2 text-[#111827] ${
                lang === "en" ? "pl-4" : "pr-4"
              }`}
            >
              {current.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>

          {/* CONTACT */}
          <section>
            <h2 className="font-semibold text-xl md:text-2xl mb-3 text-[#7BAB43]">
              {current.contactTitle}
            </h2>

            <p className="text-[#111827]">{current.contactText}</p>

            <div className="mt-4 px-4 py-4 rounded-lg bg-white border-l-4 border-orange-500">
              <a
                href={`mailto:${current.contactEmail}`}
                className="font-semibold text-lg text-[#7BAB43] hover:text-[#6d973c] transition"
              >
                {current.contactEmail}
              </a>
            </div>
          </section>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
