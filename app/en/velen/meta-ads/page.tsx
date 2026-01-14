import { Facebook, Info, ChevronRight, Key, Globe } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How to Integrate Meta Ads - Velen',
    description: 'Guide to obtaining a Meta Ads (Facebook Ads) Access Token for Velen integration.',
};

export default function MetaAdsGuidePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 pb-32">
            {/* Header */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(24,119,242,0.15),transparent_50%)]" />
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-flex items-center gap-2 text-blue-400 font-medium bg-blue-500/10 px-4 py-1.5 rounded-full text-sm mb-4 border border-blue-500/20">
                        <Facebook className="w-4 h-4" />
                        <span>Setup Guide</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
                        Meta Ads Integration Guide
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        Please issue an Access Token from Meta for Developers to allow Velen to analyze ad data.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 space-y-24">

                {/* Step 1 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 relative z-10">
                        <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-blue-500/20 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]">
                            1
                        </div>
                        <h2 className="text-3xl font-bold">Create Meta App</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                Go to <a href="https://developers.facebook.com/apps" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">Meta for Developers</a> and navigate to <strong>My Apps</strong>.
                            </p>
                            <p>
                                Click <strong>Create App</strong> and select <strong>Business</strong> as the app type.
                            </p>
                            <p>Enter the app name and complete the creation.</p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/meta-ads/step1_create_app.png"
                            alt="Create Meta App"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full h-auto shadow-2xl"
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/meta-ads/step2_explorer.png"
                            alt="Graph API Explorer"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full h-auto shadow-2xl"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-indigo-500/20 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
                            2
                        </div>
                        <h2 className="text-3xl font-bold">Issue Token (Graph API Explorer)</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                Go to the <a href="https://developers.facebook.com/tools/explorer" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">Graph API Explorer</a> tool.
                            </p>
                            <p>Select the app you just created in the <strong>Meta App</strong> section.</p>
                            <p>Add <strong>Permissions</strong>: <code className="bg-slate-800 px-1.5 py-0.5 rounded text-indigo-300">ads_read</code>, <code className="bg-slate-800 px-1.5 py-0.5 rounded text-indigo-300">read_insights</code></p>
                            <p>Click the <strong>Generate Access Token</strong> button.</p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-emerald-500/20 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
                            3
                        </div>
                        <h2 className="text-3xl font-bold">Copy Access Token</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Copy the long string generated in the Access Token field at the top.</p>
                            <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl inline-block">
                                <p className="text-blue-300 font-medium flex items-center gap-2">
                                    <Info className="w-5 h-5" />
                                    This token may be a short-term token. You may need to extend it via the Token Debugger for long-term use.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/meta-ads/step3_token.png"
                            alt="Access Token Result"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full h-auto shadow-2xl"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
