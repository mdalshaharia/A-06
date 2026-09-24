"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Dumbbell } from "lucide-react";
import Image from "next/image";
import logo from '../../assests/logo.png'

const navLinks = [
  { label: "Workouts", href: "/" },
  { label: "My Plan", href: "/plan" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="navbar border-b px-6 text-white container mx-auto">
      {/* Logo */}
      <div className="flex-1">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="FITLOG" width={30} height={30} />
          <span className="text-lg font-bold tracking-wide text-white">FITLOG</span>
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
                    isActive
                      ? "btn btn-outline rounded-full bg-[#27341b] text-[#C2F800] border border-gray-600 "
                      : "btn btn-outline rounded-full  text-gray-400 hover:bg-[#333a2d]"
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
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Plan</span>
          <span className="badge bg-[#C2F800] badge-sm font-semibold text-black">
            0
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Saved</span>
          <span className="badge badge-sm font-semibold border border-gray-300">0</span>
        </div>
      </div>
    </div>
  );
}