// components/Header.tsx
import React from 'react';
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">News Aggregator</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-blue-600 text-white font-bold">Home</Link></li>
            <li><Link href="/about" className="text-blue-600 text-white font-bold">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
