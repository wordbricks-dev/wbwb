import React from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-slate-900 border border-slate-700 w-full max-w-md rounded-2xl p-8 shadow-2xl animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-2">Secure Your Spot</h2>
        <p className="text-slate-400 mb-6">Join 5,000+ hackers worldwide.</p>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Registration functionality would go here!"); onClose(); }}>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
            <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-hackathon-primary outline-none" placeholder="Jane Doe" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
            <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-hackathon-primary outline-none" placeholder="jane@example.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">GitHub Profile</label>
            <input type="url" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-hackathon-primary outline-none" placeholder="github.com/jane" />
          </div>
          <div className="pt-2">
            <Button type="submit" className="w-full">
              Complete Registration
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};