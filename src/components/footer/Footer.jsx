import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from './../../assests/logo.png'

const Footer = () => {
    return (
     <div className="flex border-t px-6 py-5 my-10 text-white container mx-auto ">
      {/* Logo */}
      <div className="flex-1">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="FITLOG" width={30} height={30} />
          <span className="text-lg font-bold tracking-wide text-white font-oswald">FITLOG</span>
        </Link>

      </div>
      <div className='text-xs text-gray-700'>
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </div>
    </div>
    );
};

export default Footer;