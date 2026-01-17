import React, { useState } from 'react';
import { 
  HelpCircle, MapPin, Ticket, Gift, Calendar, ChevronDown,
  Users, Code, Coffee, Laptop, Trophy, Monitor, Shield, Lightbulb 
} from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      icon: <Ticket className="w-5 h-5 text-cyan-400" />,
      question: "Do I need to register?",
      answer: "No registration is required. This event page is for information purposes only."
    },
    {
      icon: <MapPin className="w-5 h-5 text-purple-400" />,
      question: "Where is it happening?",
      answer: "The event is hosted physically in Desert Rose."
    },
    {
      icon: <Gift className="w-5 h-5 text-pink-400" />,
      question: "What is the prize?",
      answer: "Winners will receive a special Mystery Gift."
    },
    {
      icon: <Calendar className="w-5 h-5 text-indigo-400" />,
      question: "When is the event?",
      answer: "January 13, 2026, from 10:00 AM to 8:30 PM."
    },
    // Participation & Teams
    {
      icon: <Code className="w-5 h-5 text-green-400" />,
      question: "Can I participate if I can't code?",
      answer: "Yes, absolutely! Even if you have never developed before, we will help you set up so you can start building."
    },
    {
      icon: <Users className="w-5 h-5 text-orange-400" />,
      question: "Can I participate alone?",
      answer: "Yes, individual participation is welcome. We also host a 'Team Building Session' after the opening to help you find teammates on-site."
    },
    {
      icon: <Users className="w-5 h-5 text-yellow-400" />,
      question: "Is there a limit on team size?",
      answer: "We generally recommend a maximum of 3 people per team."
    },
    // Topic & Development
    {
      icon: <Lightbulb className="w-5 h-5 text-yellow-300" />,
      question: "When is the topic revealed?",
      answer: "The topic will be revealed at the opening session on the day of the event."
    },
    {
      icon: <Code className="w-5 h-5 text-blue-400" />,
      question: "Can I bring pre-written code?",
      answer: "No, all projects must be created during the hackathon. Open source libraries and APIs are allowed. If continuing an existing project, you must focus on new features developed during the event."
    },
    {
      icon: <Shield className="w-5 h-5 text-red-400" />,
      question: "Who owns the Intellectual Property (IP)?",
      answer: "Ownership belongs entirely to the participants. The organizers may use images or videos of the results for promotional purposes."
    },
    // Logistics
    {
      icon: <Coffee className="w-5 h-5 text-amber-600" />,
      question: "Are meals provided?",
      answer: "Yes. Coffee & brunch will be provided by Aviram. Lunch & Dinner will be provided by Chris, Ian, Jay & Sophia."
    },
    {
      icon: <Laptop className="w-5 h-5 text-slate-400" />,
      question: "What should I bring?",
      answer: "Please bring your laptop and charger."
    },
    // Judging & Awards
    {
      icon: <Trophy className="w-5 h-5 text-yellow-500" />,
      question: "What are the judging criteria?",
      answer: "We evaluate based on Impact (potential for change), Creativity (originality), Technicality (difficulty), and Completeness (usability)."
    },
    {
      icon: <Monitor className="w-5 h-5 text-teal-400" />,
      question: "Is a live demo mandatory?",
      answer: "A working demo is preferred for the final presentation, but screenshots or recorded videos are accepted if necessary."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <HelpCircle className="w-8 h-8 text-slate-600" />
          <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-slate-900/50 border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-primary/50 shadow-lg shadow-primary/5 bg-slate-900' : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg bg-slate-950 border border-slate-800 transition-colors ${isOpen ? 'border-primary/30' : 'group-hover:border-slate-700'}`}>
                      {item.icon}
                    </div>
                    <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-white' : 'text-slate-200'}`}>
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0 pl-[4.5rem]">
                    <p className="text-slate-400 leading-relaxed border-l-2 border-slate-800 pl-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};