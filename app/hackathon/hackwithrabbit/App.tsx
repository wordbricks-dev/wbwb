import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Goal } from './components/Goal';
import { Schedule } from './components/Schedule';
import { Topic } from './components/Topic';
import { FAQ } from './components/FAQ';
import { Sponsors } from './components/Sponsors';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-primary/30 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <Goal />
        <Topic />
        <Schedule />
        <Sponsors />
        <FAQ />
        
        <section className="py-20 border-t border-slate-900 bg-slate-900/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">See you in Desert Rose!</h2>
            <p className="text-slate-500">Prepare for a day of innovation.</p>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>@2026 Wordbricks. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Code of Conduct</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;