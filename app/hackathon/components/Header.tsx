import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
      }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-hackathon-primary/20 p-2 rounded-lg">
            <img
              src="/wordbricks_logo.svg"
              alt="Wordbricks Logo"
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-xl font-bold text-white tracking-wide">
            HACK<span className="text-hackathon-primary">ATHON</span>
          </span>
        </div>
      </div>
    </header>
  );
};