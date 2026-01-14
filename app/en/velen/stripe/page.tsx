
import { CreditCard, Info } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Stripe Integration - Velen',
    description: 'Guide to obtaining Stripe API Keys for Velen integration.',
};

export default function StripeGuidePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30 pb-32">
            {/* Header */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(99,102,241,0.15),transparent_50%)]" />
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-flex items-center gap-2 text-indigo-400 font-medium bg-indigo-500/10 px-4 py-1.5 rounded-full text-sm mb-4 border border-indigo-500/20">
                        <CreditCard className="w-4 h-4" />
                        <span>Setup Guide</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
                        Stripe Integration Guide
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        Obtain your Stripe Publishable Key and Secret Key to integrate payment data.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 space-y-24">

                {/* Step 1 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 relative z-10">
                        <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-indigo-500/20 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
                            1
                        </div>
                        <h2 className="text-3xl font-bold">Go to API Keys Menu</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                Log in to the <a href="https://dashboard.stripe.com/apikeys" target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors">Stripe Dashboard</a>.
                            </p>
                            <p>
                                Go to <strong>Developers</strong> &gt; <strong>API keys</strong> in the left menu.
                            </p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/stripe/step1_api_keys.png"
                            alt="Stripe API Keys"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full h-auto shadow-2xl"
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/stripe/step2_reveal.png"
                            alt="Stripe Secret Key Reveal"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full h-auto shadow-2xl"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-violet-500/20 text-violet-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-violet-500/20 shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)]">
                            2
                        </div>
                        <h2 className="text-3xl font-bold">Reveal Secret Key</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>In the <strong>Standard keys</strong> section, click the <code className="bg-slate-800 px-1.5 py-0.5 rounded text-indigo-300">Reveal key...</code> button for the <strong>Secret key</strong>.</p>
                            <p>Copy the displayed <code className="text-indigo-300">sk_live_...</code> (or sk_test_...) key and keep it safe.</p>
                            <div className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-xl inline-block mt-2">
                                <p className="text-indigo-300 font-medium flex items-center gap-2">
                                    <Info className="w-5 h-5" />
                                    Please be careful as the Secret Key may only be shown once.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
