import React from 'react';
import { TrackType } from '../types';
import { Cpu } from 'lucide-react';

export const Tracks: React.FC = () => {
  return (
    <section id="tracks" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              The Track
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            One singular focus for all participants.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div 
            className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-hackathon-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center text-hackathon-primary mb-6 group-hover:bg-hackathon-primary group-hover:text-white transition-colors">
                <Cpu className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{TrackType.MAIN}</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Innovate without boundaries. Build whatever your heart desires, as long as it solves a real problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};