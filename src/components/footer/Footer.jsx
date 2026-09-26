import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./../../assests/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center gap-3 border-t border-gray-700 px-4 sm:px-6 py-5 mt-10 text-white container mx-auto">

      <div className="flex-1 w-full md:w-auto">
        <Link
          href="/"
          className="flex items-center justify-center md:justify-start gap-2"
        >
          <Image
            src={logo}
            alt="FITLOG"
            width={30}
            height={30}
          />

          <span className="text-lg font-bold text-white font-oswald">
            FITLOG
          </span>
        </Link>
      </div>

      <div className="text-[10px] sm:text-xs text-gray-700 text-center md:text-right">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </div>

    </div>
  );
};

export default Footer;
