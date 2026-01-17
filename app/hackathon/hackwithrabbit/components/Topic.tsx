import React from 'react';
import { BrainCircuit } from 'lucide-react';

export const Topic: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-slate-800 border border-slate-700 text-primary mb-8 shadow-2xl shadow-primary/20 transform hover:scale-110 transition-transform duration-300">
          <BrainCircuit className="w-10 h-10" />
        </div>
        
        <h2 className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">
          This Year's Theme
        </h2>
        
        <p className="text-4xl md:text-6xl font-black text-white leading-tight max-w-5xl mx-auto">
          "How AI would change our <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-primary to-purple-500">
            work & life?
          </span>"
        </p>
        
        <p className="mt-8 text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          We invite you to explore the transformative power of Artificial Intelligence. 
          Build solutions that redefine productivity, creativity, and human connection.
        </p>
      </div>
    </section>
  );
};