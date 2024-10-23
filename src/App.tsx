import React, { useState, useEffect, useCallback } from 'react';
import { SocialLinks } from 'c:/Projects/self-introduction/src/components/social/SocialLinks';
import { motion } from 'framer-motion';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [points, setPoints] = useState<{ x: number; y: number; size: number; vx: number; vy: number }[]>([]);

  const generatePoints = useCallback(() => {
    const newPoints = [];
    for (let i = 0; i < 150; i++) {
      newPoints.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }
    setPoints(newPoints);
  }, []);

  useEffect(() => {
    generatePoints();
    window.addEventListener('resize', generatePoints);
    return () => window.removeEventListener('resize', generatePoints);
  }, [generatePoints]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updatePoints = () => {
      setPoints((prevPoints) =>
        prevPoints.map((point) => {
          let { x, y, vx, vy } = point;
          const dx = mousePosition.x - x;
          const dy = mousePosition.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          // Automatic movement
          x += vx;
          y += vy;

          // Bounce off edges
          if (x < 0 || x > window.innerWidth) vx = -vx;
          if (y < 0 || y > window.innerHeight) vy = -vy;

          // Mouse interaction
          if (distance < maxDistance) {
            const angle = Math.atan2(dy, dx);
            const force = (maxDistance - distance) / maxDistance;
            x += Math.cos(angle) * force * 2;
            y += Math.sin(angle) * force * 2;
          }

          return { ...point, x, y, vx, vy };
        })
      );
    };

    const intervalId = setInterval(updatePoints, 16);
    return () => clearInterval(intervalId);
  }, [mousePosition]);

  return (
    <div className="min-h-screen flex flex-col justify-between items-center p-8 text-white relative overflow-hidden">
      {points.map((point, index) => (
        <div
          key={index}
          className="point"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: `${point.size}px`,
            height: `${point.size}px`,
          }}
        />
      ))}

      <main className="text-center z-10 pt-10">
        <motion.h1
          className="text-6xl font-bold mb-4 text-shadow"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          G'day mate!!
        </motion.h1>
        <motion.h2
          className="text-4xl font-semibold mb-8 text-shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm Ryota Sakagawa
        </motion.h2>
        <motion.ul
          className="space-y-4 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <li className="floating">IT Consultant / esp CRM(Salesforce), CDP(TreasureData)</li>
          <li className="floating" style={{ animationDelay: '0.1s' }}>Data Analyst & Engineer / esp Viz(Tableau, PowerBI), BigQuery</li>
          <li className="floating" style={{ animationDelay: '0.2s' }}>Fullstack Engineer (Individual Development)</li>
        </motion.ul>
      </main>

      <footer className="mt-16 space-x-8 z-10">
        <SocialLinks
            githubUrl="https://github.com/yourusername"
            linkedinUrl="https://linkedin.com/in/yourusername"
            salesforceUrl="https://trailblazer.me/id/yourusername"
        />
        <motion.a
          href="https://blog.sloperiver.com"
          className="inline-block px-6 py-3 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-100 transition-colors cursor-glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Visit my Blog
        </motion.a>
        <motion.a
          href="https://portfolio.sloperiver.com"
          className="inline-block px-6 py-3 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-100 transition-colors cursor-glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Check out my Portfolio
        </motion.a>
      </footer>
    </div>
  );
}

export default App;