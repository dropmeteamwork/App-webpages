// DeleteAccount.jsx
import React, { useState } from "react";
import { THEME } from "../theme";

export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("User requested deletion:", email);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 sm:px-6 py-8 sm:py-12"
      style={{ background: THEME.pageBg }}
    >
      {/* HEADER */}
      <header
        className="w-full flex flex-col items-center text-center pb-6 border-b sm:pb-8"
        style={{ borderBottom: `1px solid ${THEME.border}` }}
      >
        <img
          src="/dropme.png"
          alt="App Logo"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg shadow-md"
          style={{ objectFit: "contain", boxShadow: THEME.boxShadow }}
        />
        <h1 className="text-xl sm:text-2xl font-semibold mt-3 sm:mt-4">
          Account & Data Deletion
        </h1>
        <p className="mt-1 sm:mt-2 text-sm sm:text-base" style={{ color: THEME.muted }}>
          Request removal of your account and all associated stored data.
        </p>
      </header>

      {/* CONTENT */}
      <div className="w-full max-w-xl mt-6 sm:mt-8 px-2 sm:px-0">

        {/* How Deletion Works */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            How Deletion Works
          </h2>
          <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
            If you wish to delete your account and all personal data associated
            with it, you can submit a request using the form below. Once submitted,
            our team will remove:
          </p>
          <ul className="list-disc ml-5 sm:ml-6 text-gray-700 text-sm sm:text-base space-y-1">
            <li>Your account and login credentials</li>
            <li>All personal profile information</li>
            <li>App usage data</li>
            <li>Uploaded files or media (if any)</li>
            <li>Any data stored on our servers linked to your account</li>
          </ul>
        </section>

        {/* Deletion Form */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            Submit Deletion Request
          </h2>

          {submitted ? (
            <div
              className="p-3 sm:p-4 mb-4 rounded-lg text-sm sm:text-base"
              style={{ background: "#F6FFF2", border: `1px solid ${THEME.primary}` }}
            >
              <p style={{ color: THEME.primary }}>
                Your deletion request has been received. We will process it within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block mb-1 font-medium text-sm sm:text-base">
                  Your Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 sm:p-3 border rounded-md text-sm sm:text-base"
                  style={{ borderColor: THEME.border }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 sm:py-3 rounded-md font-semibold text-white text-sm sm:text-base"
                style={{ background: THEME.primary }}
              >
                Request Data Deletion
              </button>
            </form>
          )}
        </section>

        {/* Contact Support */}
        <section className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            Contact Support
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            If you prefer, you can email us directly at:
          </p>
          <p className="mt-1 sm:mt-2 font-medium text-gray-900 text-sm sm:text-base">
            hello@dropmeeg.com
          </p>
          <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm">
            Your request will be processed within 48 hours.
          </p>
        </section>

      </div>
    </div>
  );
}
