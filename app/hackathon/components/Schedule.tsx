import React from 'react';
import { ScheduleItem } from '../types';

const scheduleData: { day: string, events: ScheduleItem[] }[] = [
  {
    day: "January 13, 2026",
    events: [
      { time: "10:00 AM", title: "Opening", description: "Welcome to HackwithRabbit.", type: "keynote" },
      { time: "10:15 AM", title: "Hack with Sophia", description: "Tips & Tool Intros.", type: "workshop" },
      { time: "10:30 AM", title: "Hack example from Chris", description: "Live coding demonstration.", type: "workshop" },
      { time: "01:30 PM", title: "Lunch", description: "Refuel and network.", type: "social" },
      { time: "06:00 PM", title: "Submission Deadline", description: "Upload your projects.", type: "hacking" },
      { time: "06:00 PM", title: "Presentation", description: "Project showcases.", type: "keynote" },
      { time: "07:00 PM", title: "Judge", description: "Deliberation.", type: "keynote" },
      { time: "07:30 PM", title: "Dinner", description: "Closing celebration.", type: "social" },
    ]
  }
];

export const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Event Schedule</h2>
          <p className="text-slate-400">One day of intense innovation.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {scheduleData.map((day, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-xl font-bold text-hackathon-primary border-b border-slate-800 pb-4 text-center">{day.day}</h3>
              <div className="space-y-8">
                {day.events.map((event, eventIdx) => (
                  <div key={eventIdx} className="relative pl-8 border-l-2 border-slate-800 hover:border-hackathon-primary transition-colors group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-hackathon-primary transition-colors" />
                    <span className="text-sm font-mono text-cyan-400 mb-1 block">{event.time}</span>
                    <h4 className="text-xl text-white font-semibold">{event.title}</h4>
                    <p className="text-slate-500">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};