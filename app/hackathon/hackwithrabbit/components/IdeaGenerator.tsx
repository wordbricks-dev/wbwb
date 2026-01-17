import React, { useState } from 'react';
import { TrackType, GeneratedIdea } from '../types';
import { generateHackathonIdeas } from '../services/geminiService';
import { Button } from './Button';
import { Sparkles, Code, Cpu } from 'lucide-react';

export const IdeaGenerator: React.FC = () => {
  const [interests, setInterests] = useState('');
  const [ideas, setIdeas] = useState<GeneratedIdea[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    setIdeas([]);
    try {
      // Use the single track defined in types
      const generated = await generateHackathonIdeas(TrackType.MAIN, interests || "general technology");
      setIdeas(generated);
      setHasGenerated(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-1">
      <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Input Section */}
            <div className="w-full md:w-1/3 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-semibold tracking-wide uppercase text-xs">AI Assistant</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Stuck on ideas?</h3>
                <p className="text-slate-400 text-sm">
                  Let Gemini generate a winning project concept tailored to your interests.
                </p>
              </div>

              <div className="space-y-4">
                {/* Track selection removed as there is only one track */}
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Your Interests / Tech Stack</label>
                  <input
                    type="text"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    placeholder="e.g. React, Space, Blockchain..."
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>

                <Button 
                  onClick={handleGenerate} 
                  isLoading={isLoading} 
                  className="w-full"
                  variant="primary"
                >
                  Generate Ideas
                </Button>
              </div>
            </div>

            {/* Output Section */}
            <div className="w-full md:w-2/3 min-h-[400px] bg-slate-950/50 rounded-xl border border-slate-800/50 p-6 relative">
              
              {!hasGenerated && !isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 text-center p-8">
                  <Cpu className="w-16 h-16 mb-4 opacity-20" />
                  <p className="text-lg">Enter your interests and hit generate to see the magic.</p>
                </div>
              )}

              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary">
                  <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
                  <p className="animate-pulse">Consulting the AI Oracle...</p>
                </div>
              )}

              {hasGenerated && !isLoading && (
                <div className="grid gap-4">
                  {ideas.map((idea, idx) => (
                    <div key={idx} className="group bg-slate-900 border border-slate-800 hover:border-primary/50 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{idea.title}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          idea.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          idea.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {idea.difficulty}
                        </span>
                      </div>
                      <p className="text-slate-300 mb-4 text-sm leading-relaxed">{idea.description}</p>
                      
                      <div className="mb-4">
                        <p className="text-xs text-slate-500 font-semibold uppercase mb-1">Potential Impact</p>
                        <p className="text-slate-400 text-sm italic">"{idea.impact}"</p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {idea.technologies.map((tech, i) => (
                          <span key={i} className="flex items-center gap-1 text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">
                            <Code className="w-3 h-3" /> {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};