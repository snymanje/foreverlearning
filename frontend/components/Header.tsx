import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between py-4 px-8 bg-yellow-600 text-white">
      <div className="font-bold text-xl">Forever Learning</div>
      <ul className="flex">
        <Link href="/">
          <li className="mr-4 cursor-pointer font-bold">Tutorials</li>
        </Link>
        <Link href="/projects">
          <li className="mr-4 cursor-pointer font-bold">Projects</li>
        </Link>
        <Link href="/login">
          <li className="mr-4 cursor-pointer font-bold">Login</li>
        </Link>
        <Link href="/register">
          <li className="mr-4 cursor-pointer font-bold">Register</li>
        </Link>
        <Link href="#">
          <li className="mr-4 cursor-pointer font-bold">Log out</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
