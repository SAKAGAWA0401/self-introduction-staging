import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

const MainContent: React.FC = () => {
  return (
    <main className="relative z-10">
      <section className="content-section">
        <h2 className="text-5xl font-bold mb-6">Welcome to SlopeRiver</h2>
        <p className="text-xl mb-8">Discover the beauty of simplicity and motion</p>
        <ArrowDown size={48} className="animate-bounce" />
      </section>

      <section className="content-section">
        <h3 className="text-4xl font-bold mb-6">Our Vision</h3>
        <p className="text-lg mb-8 max-w-2xl text-center">
          We believe in creating digital experiences that inspire and engage. 
          Through elegant design and smooth animations, we bring your ideas to life.
        </p>
        <img 
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Mountain landscape" 
          className="rounded-lg shadow-xl max-w-full h-auto floating-element"
        />
      </section>

      <section className="content-section">
        <h3 className="text-4xl font-bold mb-6">Let's Connect</h3>
        <p className="text-lg mb-8">Ready to start your journey with us?</p>
        <button className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition-colors flex items-center">
          Get Started
          <ArrowRight className="ml-2" />
        </button>
      </section>
    </main>
  );
};

export default MainContent;