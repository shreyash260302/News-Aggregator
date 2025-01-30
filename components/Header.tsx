// components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">News Aggregator</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
