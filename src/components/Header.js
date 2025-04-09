// src/components/Header.js
import React from 'react';

const Header = () => (
  <header className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Company ABC</h1>
    <nav>
      <ul className="flex gap-4 text-sm">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
);

export default Header;
