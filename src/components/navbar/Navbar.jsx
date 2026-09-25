"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Dumbbell } from "lucide-react";
import Image from "next/image";
import logo from '../../assests/logo.png'
import { useContext } from "react";
import { WorkOutContext } from "@/context/WorkOutContext";

const navLinks = [
  { label: "Workouts", href: "/" },
  { label: "My Plan", href: "/my-plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const {plan, saved} = useContext(WorkOutContext)

  return (
    <section className="border-b-2 container mx-auto">
      <div className="navbar px-6 text-white  py-2">
      <div className="flex-1">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="FITLOG" width={30} height={30} />
          <span className="text-lg font-bold ml-1 text-white font-oswald">FITLOG</span>
        </Link>
      </div>

      <div className="flex-none">
        <ul className="flex items-center gap-1">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <li key={idx}>
                <Link
                  href={link.href}
                  className={
                    ` text-xs px-3 py-1 font-inter ${isActive
                      ? " rounded-full bg-[#27341b] text-[#C2F800] border border-gray-600 "
                      : " rounded-full  text-gray-400"}`
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex-1 flex justify-end items-center gap-6">
        <div className="flex items-center gap-2 font-inter">
          <span className="text-xs font-medium text-gray-400">Plan</span>
          <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#C2F800] font-semibold text-black text-xs">
            {plan ? plan.length : 0}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-gray-400">Saved</span>
          <span className="w-5 h-5 flex items-center justify-center rounded-full text-xs font-semibold border border-gray-500">
            {
                saved? saved.length : 0
            }
          </span>
        </div>
      </div>
    </div>
    </section>
  );
}