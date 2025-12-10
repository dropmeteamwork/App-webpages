import React from "react";
import { Facebook, Instagram, Linkedin, Globe } from "lucide-react";
import googlePlay from "../assets/images/googleplay_button.svg.webp";
import appleStore from "../assets/images/apple-store.webp";

export default function Footer() {
  return (
    <div className="bg-primary-color text-white text-center p-6 pb-4">
      
      {/* Follow Us */}
      <h2 className="font-semibold text-xl md:text-2xl">Follow Us</h2>

      {/* Social Icons */}
      <div className="flex gap-4 mt-3 mb-6 justify-center">
        <a
          href="https://www.facebook.com/dropme.eg/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-100 hover:bg-secondary-color transition-colors"
        >
          <Facebook className="w-5 h-5 text-[#1877f2]" />
        </a>

        <a
          href="https://www.instagram.com/dropme.eg/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-100 hover:bg-secondary-color transition-colors"
        >
          <Instagram className="w-5 h-5 text-[#c13584]" />
        </a>

        <a
          href="https://www.linkedin.com/company/drop-me-eg/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-100 hover:bg-secondary-color transition-colors"
        >
          <Linkedin className="w-5 h-5 text-[#0a66c2]" />
        </a>

        <a
          href="https://dropmeeg.wixsite.com/dropme"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-100 hover:bg-secondary-color transition-colors"
        >
          <Globe className="w-5 h-5 text-[#4e5860]" />
        </a>
      </div>

      {/* Download App */}
      <h2 className="font-semibold text-xl mb-3 md:text-2xl">Download App</h2>

      <div className="flex justify-center gap-3">
        <a
          href="https://play.google.com/store/apps/details?id=com.dropme.recycling&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="w-28 md:w-32"
        >
          <img src={googlePlay} alt="Google Play Store" />
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.dropme.recycling&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="w-28 md:w-32"
        >
          <img src={appleStore} alt="Apple App Store" />
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-4 text-shadow-white">
        © 2025 Drop Me. All rights reserved.
      </p>
    </div>
  );
}
