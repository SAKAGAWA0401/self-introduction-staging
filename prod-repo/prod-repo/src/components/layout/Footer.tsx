import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 SlopeRiver. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-blue-200 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-200 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;