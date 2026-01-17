import React from 'react';
import { Rabbit } from 'lucide-react';

export const Sponsors: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-hackathon-primary/5 via-slate-950 to-slate-950 pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-16">
          Official Partners
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 grayscale hover:grayscale-0 transition-all duration-500">

          {/* Rabbit Logo (Main Sponsor) */}
          <div className="group flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="relative p-4">

              <img
                src="/rabbit-vc.png"
                alt="Rabbit VC Logo"
                className="w-24 h-24 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <span className="text-lg font-semibold text-slate-300 tracking-[0.3em] group-hover:text-white transition-colors">
              RABBIT VC
            </span>
          </div>

          {/* Nextrows Logo */}
          <div className="group flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="relative p-4">

              <img
                src="/nextrows-logo-v2.png"
                alt="NextRows Logo"
                className="h-16 w-auto object-contain relative z-10 opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <span className="text-sm font-medium text-slate-500 tracking-wider group-hover:text-cyan-400 transition-colors">
              API PARTNER
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};