import React from 'react';
import { Rocket, Hammer, Database, Zap } from 'lucide-react';

export const Goal: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative border-b border-slate-900">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-hackathon-primary/10 text-hackathon-primary mb-6">
            <Zap className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our Vision
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            We believe in empowering creative minds with the power of engineering. 
            This hackathon is your playground to experience building your very own first project from scratch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-hackathon-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-hackathon-primary/5 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-hackathon-primary mb-6 group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Bring Your Idea to Life</h3>
            <p className="text-slate-400 leading-relaxed">
              Don't just dream it—build it. Take your concept from a rough sketch to a working prototype in a single day of focused innovation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-hackathon-secondary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-hackathon-secondary/5 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-2xl flex items-center justify-center text-hackathon-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
              <Hammer className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">The Power of Engineering</h3>
            <p className="text-slate-400 leading-relaxed">
              Experience the full lifecycle of software development. Gain the confidence that comes with engineering your own solution.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-hackathon-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-hackathon-accent/5 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center text-hackathon-accent mb-6 group-hover:scale-110 transition-transform duration-300">
              <Database className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Explore Nextrows API</h3>
            <p className="text-slate-400 leading-relaxed">
              Want to supercharge your backend? Optionally leverage the Nextrows API to handle your data needs with speed and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};