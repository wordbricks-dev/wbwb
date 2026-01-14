import { ArrowRight, CheckCircle2, ChevronRight, Info } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'How to get BigQuery API Key - Velen',
    description: 'Step-by-step guide to connecting your Google Cloud BigQuery account to Velen.',
};

export default function BigQueryGuidePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-purple-500/30 pb-32">
            {/* Header */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(76,29,149,0.15),transparent_50%)]" />
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-flex items-center gap-2 text-purple-400 font-medium bg-purple-500/10 px-4 py-1.5 rounded-full text-sm mb-4 border border-purple-500/20">
                        <Info className="w-4 h-4" />
                        <span>Setup Guide</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
                        How to get BigQuery API Key
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        To start Velen, you need a BigQuery API key. Please follow the guidelines to obtain your API key.

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
                        <h2 className="text-3xl font-bold">Access Google Cloud Console</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                First, please visit the <a href="https://console.cloud.google.com" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors">Google Cloud Console</a>.
                            </p>
                            <p>
                                If you are not logged in yet, please log in with your Google account. Click the dropdown menu at the top to
                                <strong className="text-white font-semibold"> Select a project</strong> or create a new one.
                            </p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/bigquery/step1.png"
                            alt="Google Cloud Project Dashboard"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/bigquery/step2.png"
                            alt="Enable BigQuery API"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-purple-500/20 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]">
                            2
                        </div>
                        <h2 className="text-3xl font-bold">Enable BigQuery API</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Enter <strong className="text-white">"BigQuery API"</strong> in the search bar and search.</p>
                            <p>Click the result card, then click the blue <strong className="text-blue-400">Enable</strong> button or <strong className="text-blue-400">Manage</strong> button.</p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-green-500/20 shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)]">
                            3
                        </div>
                        <h2 className="text-3xl font-bold">Create Service Account</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Enter <strong className="text-white">"Service Accounts"</strong> in the search bar and go to the Service Accounts (IAM & Admin) menu.</p>
                            <p>Click <strong className="text-white">+ Create Service Accounts</strong> and enter the settings.</p>
                            <p>Refer to the screen on the right and give it a name like <strong className="text-white">"BigQuery Reader"</strong>.</p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/bigquery/step3.png"
                            alt="Create Service Account Form"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover object-top"
                        />
                    </div>
                </div>

                {/* Step 4 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">

                        <img
                            src="/images/bigquery/step4.png"
                            alt="Grant Permissions"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover invert hue-rotate-180 saturate-200"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-red-500/20 shadow-[0_0_20px_-5px_rgba(239,68,68,0.3)]">
                            4
                        </div>
                        <h2 className="text-3xl font-bold">Important: Grant Permissions</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>After creating the account, you must grant permissions.</p>
                            <p>Search for and add the following two roles:</p>
                            <ul className="space-y-2 font-medium text-white">
                                <li className="flex items-center gap-2">
                                    <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-400">1</span>
                                    BigQuery Data Viewer
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-400">2</span>
                                    BigQuery Job User
                                </li>
                            </ul>
                            <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg text-sm text-red-300 flex items-start gap-3">
                                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                                <span>*Without these permissions, you cannot read data even with the key.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-orange-500/20 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]">
                            5
                        </div>
                        <h2 className="text-3xl font-bold">Download Key (JSON)</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Click on the <strong className="text-white">Service Account</strong> you just created.</p>
                            <p>Go to the <strong className="text-white">KEYS</strong> tab at the top.</p>
                            <p>Click <span className="inline-flex items-center gap-1 font-semibold text-white bg-slate-800 px-2 py-0.5 rounded border border-slate-700">Add key <ChevronRight className="w-3 h-3" /> Create new key</span>.</p>
                            <p>With <strong className="text-white">"JSON"</strong> selected, click the <strong className="text-blue-400">CREATE</strong> button.</p>
                            <p>The file will now be downloaded to your computer.</p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">

                        <img
                            src="/images/bigquery/step5_v2.png"
                            alt="Download JSON Key Modal"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover invert hue-rotate-180 saturate-200"
                        />
                    </div>
                </div>

                {/* Closing */}
                <section className="pt-24 text-center">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-12 rounded-3xl border border-slate-800 max-w-3xl mx-auto relative overflow-hidden group">
                        <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors duration-500" />
                        <div className="relative z-10 space-y-6">
                            <div className="mx-auto w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h2 className="text-4xl font-bold text-white">All Done!</h2>
                            <p className="text-xl text-slate-400">
                                You now have the <code className="bg-slate-800 px-2 py-1 rounded text-orange-300 font-mono text-base">.json</code> key file.
                            </p>
                            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl inline-block">
                                <p className="text-red-300 font-medium flex items-center gap-2">
                                    <Info className="w-5 h-5" />
                                    Security for this file is critical. Please register it on Velen and delete it safely to prevent leakage.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
