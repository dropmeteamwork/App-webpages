import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { THEME } from "../theme";
import translations from "../locales/translations.json"; // import translations
import dropmeLogo from "../assets/images/dropme-logo-title.png"; // import your logo

export default function ContentCard({ lang }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("User requested deletion:", email);
  };

  const current = translations[lang].delete_account;

  // Set browser tab title and favicon
  useEffect(() => {
    document.title = "DropMe - Delete Account"; // always English

    // Update favicon
    const link =
      document.querySelector("link[rel~='icon']") || document.createElement("link");
    link.rel = "icon";
    link.href = dropmeLogo; // path to your logo
    document.getElementsByTagName("head")[0].appendChild(link);
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
          className="w-full max-w-3xl bg-secondary-color p-6 sm:p-10 rounded-2xl shadow-sm border"
          style={{ borderColor: THEME.border }}
        >
          {/* Logo + Title */}
          <div className="flex flex-col items-center mb-8">
           
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-primary-color mb-2">
              {current.heading}
            </h1>
            <p className="text-gray-500 md:text-lg lg:text-xl">{current.subtitle}</p>
          </div>

          {/* Deletion Policy */}
          <section className="mb-10">
            <h2 className="font-semibold text-xl md:text-2xl mb-2 text-primary-color">
              {current.policyTitle}
            </h2>
            <p className="text-text-color mb-4">{current.policyText}</p>
            <p className="text-red-600 font-semibold mb-4">{current.warning}</p>

            <h3 className="font-semibold text-lg mb-2 text-primary-color">
              {current.stepsTitle}
            </h3>
            <ol
              className={`list-decimal list-inside space-y-2 text-text-color ${
                lang === "en" ? "pl-4" : "pr-4"
              }`}
            >
              {current.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </section>

          {/* Request Form */}
          <section className="mb-10">
            <h2 className="font-semibold text-xl md:text-2xl mb-3 text-primary-color">
              {current.formTitle}
            </h2>

            {submitted ? (
              <div className="p-4 rounded-lg mb-4 bg-white border-l-4 border-primary-color">
                <p className="text-green-700 font-medium">{current.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">{current.emailLabel}</label>
                  <input
                    required
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border rounded-md"
                    style={{ borderColor: THEME.border }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-md font-semibold text-white"
                  style={{ background: THEME.primary }}
                >
                  {current.submitButton}
                </button>
              </form>
            )}
          </section>

          {/* Contact Support */}
          <section>
            <h2 className="font-semibold text-xl md:text-2xl mb-3 text-primary-color">
              {current.contactTitle}
            </h2>
            <p className="text-text-color">{current.contactText}</p>
            <div className="mt-4 px-4 py-4 rounded-lg bg-white border-l-4 border-orange-500">
              <a
                href={`mailto:${current.contactEmail}`}
                className="font-semibold text-lg text-primary-color hover:text-hover-color transition"
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
