"use client";

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Goal } from './components/Goal';
import { Schedule } from './components/Schedule';
import { Topic } from './components/Topic';
import { FAQ } from './components/FAQ';
import { Sponsors } from './components/Sponsors';
import { HackOptions } from './components/HackOptions';
import { MealPreview } from './components/MealPreview';

export default function HackathonPage() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-hackathon-primary/30 selection:text-white">
            <Header />

            <main>
                <Hero />
                <Goal />
                <Topic />
                <HackOptions />
                <MealPreview />
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
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center text-slate-500 text-sm">
                    <p>@2026 Wordbricks. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
