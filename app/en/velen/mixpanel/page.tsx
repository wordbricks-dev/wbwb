import { CheckCircle2, Info } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How to get Mixpanel API Key - Velen',
    description: 'Step-by-step guide to connecting your Mixpanel account to Velen.',
};

export default function MixpanelGuidePage() {
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
                        Mixpanel Service Account Guide
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        To analyze Mixpanel data, you need to issue a Service Account with Read-only permissions.
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
                        <h2 className="text-3xl font-bold">Access Organization Settings</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                Please login to <a href="https://mixpanel.com" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors">Mixpanel</a>.
                            </p>
                            <p>
                                Click the <strong className="text-white">Settings (gear icon)</strong> at the top right, then
                                select the <strong className="text-white"> Organization Settings</strong> menu.
                            </p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/mixpanel/step1_settings.png"
                            alt="Mixpanel Organization Settings Menu"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/mixpanel/step2_service_accounts.png"
                            alt="Service Accounts Page"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-purple-500/20 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]">
                            2
                        </div>
                        <h2 className="text-3xl font-bold">Go to Service Account Menu</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Click <strong className="text-white">Service Accounts</strong> in the left sidebar menu.</p>
                            <p>Then, click the <strong className="text-blue-400">+ Add Service Account</strong> button at the top right.</p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-green-500/20 shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)]">
                            3
                        </div>
                        <h2 className="text-3xl font-bold">Create Account and Set Permissions</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Enter a name for the account (e.g., Velen Reader), and set the <strong className="text-white">Role</strong>.</p>
                            <p>In <strong className="text-white">Organization Role</strong>, please select <strong className="text-white">"Analyst"</strong> or <strong className="text-white">"Consumer"</strong>.</p>
                            <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg text-sm text-green-300 flex items-start gap-3">
                                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                                <span>*These roles are safe as they only have read permissions and no write permissions.</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/mixpanel/step3_create_role.png"
                            alt="Create Service Account Modal"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                </div>

                {/* Step 4 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/mixpanel/step4_credentials.png"
                            alt="Service Account Credentials"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-red-500/20 shadow-[0_0_20px_-5px_rgba(239,68,68,0.3)]">
                            4
                        </div>
                        <h2 className="text-3xl font-bold">Save Credentials</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Once the account is created, the <strong className="text-white">Username</strong> and <strong className="text-white">Secret</strong> will be displayed.</p>
                            <p>Copy this information and enter it into the Velen setup screen.</p>
                            <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg text-sm text-red-300 flex items-start gap-3">
                                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                                <span>*The Secret value cannot be viewed again after closing the window, so be sure to save it separately.</span>
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
                            <h2 className="text-4xl font-bold text-white">Ready to Go!</h2>
                            <p className="text-xl text-slate-400">
                                You can now analyze Mixpanel data in Velen.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
