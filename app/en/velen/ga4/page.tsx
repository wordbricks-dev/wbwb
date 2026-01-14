import { CheckCircle2, Info, ChevronRight, UserPlus } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How to Integrate Google Analytics 4 (GA4) - Velen',
    description: 'Step-by-step guide to connecting your Google Analytics 4 account to Velen.',
};

export default function GA4GuidePage() {
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
                        Google Analytics 4 (GA4) Integration Guide
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        To allow Velen to analyze data, create a Google Cloud Service Account and grant view permissions in GA4.
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
                        <h2 className="text-3xl font-bold">Enable API and Start Creating Service Account</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                Please access <a href="https://console.cloud.google.com" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors">Google Cloud Console</a>.
                            </p>
                            <p>
                                Search for <strong className="text-white">"Google Analytics Data API"</strong> in the top search bar and click the <strong className="text-blue-400">Enable</strong> button.
                            </p>
                            <p>
                                After that, go to the <strong className="text-white">"Service Accounts"</strong> menu and click <strong className="text-white">+ Create Service Account</strong>.
                            </p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/ga4/step1_enable_api.png"
                            alt="Enable Google Analytics Data API"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                </div>

                {/* Step 2 (NEW) */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/ga4/step_create_details.png"
                            alt="Service Account Details Form"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-indigo-500/20 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
                            2
                        </div>
                        <h2 className="text-3xl font-bold">Enter Service Account Details</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Please enter the details as follows:</p>
                            <ul className="space-y-3 bg-slate-900/50 p-6 rounded-xl border border-slate-800 text-base">
                                <li>
                                    <span className="text-white font-semibold block mb-1">Service account name</span>
                                    <span className="text-slate-400">Example: </span>
                                    <code className="text-purple-300 bg-purple-500/10 px-1.5 py-0.5 rounded">view-analytics</code>
                                    <span className="text-slate-500 ml-1">(Easy to identify name)</span>
                                </li>
                                <li>
                                    <span className="text-white font-semibold block mb-1">Service account ID</span>
                                    <span className="text-slate-400">It is automatically entered, so you don't need to modify it.</span>
                                </li>
                                <li>
                                    <span className="text-white font-semibold block mb-1">Service account description</span>
                                    <span className="text-slate-400">Example: </span>
                                    <code className="text-purple-300 bg-purple-500/10 px-1.5 py-0.5 rounded">View Analytics</code>
                                </li>
                            </ul>
                            <p>
                                After entering, click <strong className="text-blue-400">Create and Continue</strong>, then skip the subsequent steps and click <strong className="text-white">Done</strong>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 3 (Previously Step 2) */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-purple-500/20 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]">
                            3
                        </div>
                        <h2 className="text-3xl font-bold">Download Key (JSON)</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Click the created service account from the list and go to the <strong className="text-white">KEYS</strong> tab.</p>
                            <p>Click <span className="inline-flex items-center gap-1 font-semibold text-white bg-slate-800 px-2 py-0.5 rounded border border-slate-700">Add key <ChevronRight className="w-3 h-3" /> Create new key</span>.</p>
                            <p>Select <strong className="text-white">"JSON"</strong> and click Create to download the key file to your computer.</p>
                            <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg text-sm text-purple-300 flex items-start gap-3">
                                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                                <span>*The downloaded file must be registered in Velen.</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/ga4/step2_download_key.png"
                            alt="Create and Download JSON Key"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover invert hue-rotate-180 saturate-200"
                        />
                    </div>
                </div>

                {/* Step 4 (Previously Step 3) */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/ga4/step3_copy_email.png"
                            alt="Copy Service Account Email"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-green-500/20 shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)]">
                            4
                        </div>
                        <h2 className="text-3xl font-bold">Copy Email Address</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Find and copy the <strong className="text-white">Email</strong> address of the account you just created from the service account list.</p>
                            <p>The format is as follows:</p>
                            <code className="block bg-slate-900 border border-slate-800 p-3 rounded-lg text-slate-300 font-mono text-sm break-all">
                                my-app-analytics@my-project-id.iam.gserviceaccount.com
                            </code>
                        </div>
                    </div>
                </div>

                {/* Step 5 (Previously Step 4) */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-orange-500/20 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]">
                            5
                        </div>
                        <h2 className="text-3xl font-bold">Add User to GA4</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Go to the <a href="https://analytics.google.com" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors">Google Analytics</a> Admin page.</p>
                            <p>Click the <strong className="text-white">Admin {'>'} Property {'>'} Property Access Management</strong> menu.</p>
                            <p>Click the <strong className="text-blue-400">+</strong> button at the top right to add a user, and paste the copied email.</p>
                            <p>Please set the role to <strong className="text-white">Viewer</strong>.</p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/ga4/step4_add_user.png"
                            alt="GA4 Add User Screen"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                </div>

                {/* Step 6 (NEW) */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/ga4/step_property_id.png"
                            alt="GA4 Property Details"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full h-auto shadow-2xl"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-pink-500/20 text-pink-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-pink-500/20 shadow-[0_0_20px_-5px_rgba(236,72,153,0.3)]">
                            6
                        </div>
                        <h2 className="text-3xl font-bold">Copy Property ID</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                Go to <strong className="text-white">Property {'>'} Property Details</strong> in the left menu.
                            </p>
                            <p>
                                Copy the <strong className="text-white">Property ID</strong> listed at the top right.
                            </p>
                            <div className="bg-pink-500/10 border border-pink-500/20 p-4 rounded-xl inline-block mt-2">
                                <p className="text-pink-300 font-medium flex items-center gap-2">
                                    <Info className="w-5 h-5" />
                                    This ID is required when connecting to Velen.
                                </p>
                            </div>
                        </div>
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
                            <h2 className="text-4xl font-bold text-white">Integration Ready!</h2>
                            <p className="text-xl text-slate-400">
                                Connect to Velen using the downloaded <code className="bg-slate-800 px-2 py-1 rounded text-orange-300 font-mono text-base">.json</code> key file.
                            </p>
                            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl inline-block">
                                <p className="text-red-300 font-medium flex items-center gap-2">
                                    <Info className="w-5 h-5" />
                                    It may take up to 24 hours for GA4 data to appear.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
