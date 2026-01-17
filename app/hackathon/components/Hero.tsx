import React from 'react';
import { Button } from './Button';
import { Calendar, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#020617]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hackathon-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-hackathon-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-700 text-sm text-cyan-400 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Limited to Rabbit Families
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6 leading-tight">
          CODE IN THE <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-hackathon-primary via-purple-500 to-hackathon-secondary">
            DESERT ROSE
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          1 Day. Unlimited Innovation.
          <br/>
          Join us for a unique hacking experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => document.getElementById('schedule')?.scrollIntoView({behavior: 'smooth'})}>
            View Schedule
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-slate-400" />
            <span>January 13, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-slate-400" />
            <span>Desert Rose</span>
          </div>
        </div>
      </div>
    </section>
  );
};