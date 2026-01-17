import React from 'react';
import { Rocket, Bot, Code2, ArrowRight } from 'lucide-react';

export const HackOptions: React.FC = () => {
    return (
        <section className="py-24 bg-slate-900/30 relative border-t border-slate-900">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Hack Options
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Choose your AI companion for the journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Antigravity */}
                    <a href="https://wordbricks.io" target="_blank" rel="noopener noreferrer" className="group relative bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-hackathon-primary transition-all duration-300 hover:shadow-2xl hover:shadow-hackathon-primary/10 flex flex-col cursor-pointer">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hackathon-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="mb-6 bg-hackathon-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-hackathon-primary group-hover:scale-110 transition-transform">
                            <Rocket className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Antigravity</h3>
                        <p className="text-slate-400 mb-8 flex-grow">
                            Build agentic workflows and full-stack apps with Google's most powerful coding agent.
                        </p>
                        <div className="flex items-center text-hackathon-primary font-bold group-hover:gap-2 transition-all">
                            Start Building <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                    </a>

                    {/* Google AI Studio */}
                    <a href="https://aistudio.google.com" target="_blank" rel="noopener noreferrer" className="group relative bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-hackathon-secondary transition-all duration-300 hover:shadow-2xl hover:shadow-hackathon-secondary/10 flex flex-col cursor-pointer">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hackathon-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="mb-6 bg-hackathon-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-hackathon-secondary group-hover:scale-110 transition-transform">
                            <Bot className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Google AI Studio</h3>
                        <p className="text-slate-400 mb-8 flex-grow">
                            Fast prototyping with the latest Gemini models. Accessible, multimodal, and powerful.
                        </p>
                        <div className="flex items-center text-hackathon-secondary font-bold group-hover:gap-2 transition-all">
                            Open Studio <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                    </a>

                    {/* Bring Your Own */}
                    <div className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-8 flex flex-col">
                        <div className="mb-6 bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                            <Code2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Bring Your Own</h3>
                        <p className="text-slate-400 mb-8 flex-grow">
                            Prefer your own setup? You are free to use Copilot, Cursor, or any other assistant you are comfortable with.
                        </p>
                        <div className="flex items-center text-slate-500 font-medium">
                            Flexible Choice
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
