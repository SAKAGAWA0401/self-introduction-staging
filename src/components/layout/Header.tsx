import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-opacity-80 bg-blue-900 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">SlopeRiver</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-blue-200 transition-colors">Home</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors">About</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors">Contact</a>
        </nav>
        <button className="md:hidden text-white" title="Menu">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;