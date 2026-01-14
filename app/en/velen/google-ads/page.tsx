import { MousePointer2, Info, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How to Integrate Google Ads - Velen',
    description: 'Guide to obtaining a Google Ads Developer Token and Customer ID.',
};

export default function GoogleAdsGuidePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-yellow-500/30 pb-32">
            {/* Header */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(234,179,8,0.15),transparent_50%)]" />
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-flex items-center gap-2 text-yellow-500 font-medium bg-yellow-500/10 px-4 py-1.5 rounded-full text-sm mb-4 border border-yellow-500/20">
                        <MousePointer2 className="w-4 h-4" />
                        <span>Setup Guide</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
                        Google Ads Integration Guide
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        Please check your Developer Token and Customer ID to use the Google Ads API.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 space-y-24">

                {/* Step 1 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 relative z-10">
                        <div className="w-12 h-12 bg-yellow-500/20 text-yellow-500 rounded-2xl flex items-center justify-center font-bold text-xl border border-yellow-500/20 shadow-[0_0_20px_-5px_rgba(234,179,8,0.3)]">
                            1
                        </div>
                        <h2 className="text-3xl font-bold">Check Developer Token</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                Log in to your <a href="https://ads.google.com" target="_blank" rel="noreferrer" className="text-yellow-500 hover:text-yellow-400 underline underline-offset-4 transition-colors">Google Ads Manager Account (MCC)</a>.
                            </p>
                            <p>Go to <strong>Tools & Settings</strong> &gt; <strong>Setup</strong> &gt; <strong>API Center</strong> in the top menu.</p>
                            <p>If you haven't applied for API access, fill out the form and submit it.</p>
                            <p>You can copy and use the <strong>Developer Token</strong> even if it is in Pending status.</p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/google-ads/step1_developer_token.png"
                            alt="Google Ads API Center"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full h-auto shadow-2xl"
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/google-ads/step2_customer_id.png"
                            alt="Google Ads Customer ID"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full h-auto shadow-2xl"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-orange-500/20 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]">
                            2
                        </div>
                        <h2 className="text-3xl font-bold">Check Customer ID</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Check the top right of your Google Ads account.</p>
                            <p>
                                The 10-digit number in the format <strong>XXX-XXX-XXXX</strong> is your <strong>Customer ID</strong>.
                            </p>
                            <p>You may need to enter this ID without hyphens (-).</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
