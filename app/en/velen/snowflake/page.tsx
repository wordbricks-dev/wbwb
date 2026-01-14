import { Snowflake, Info, Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Snowflake Integration - Velen',
    description: 'Guide to connecting your Snowflake data warehouse to Velen.',
};

export default function SnowflakeGuidePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-sky-500/30 pb-32">
            {/* Header */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(14,165,233,0.15),transparent_50%)]" />
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-flex items-center gap-2 text-sky-400 font-medium bg-sky-500/10 px-4 py-1.5 rounded-full text-sm mb-4 border border-sky-500/20">
                        <Snowflake className="w-4 h-4" />
                        <span>Setup Guide</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
                        Snowflake Integration Guide
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        Please check your Snowflake Account Identifier and user information.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 space-y-24">

                {/* Step 1 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 relative z-10">
                        <div className="w-12 h-12 bg-sky-500/20 text-sky-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-sky-500/20 shadow-[0_0_20px_-5px_rgba(14,165,233,0.3)]">
                            1
                        </div>
                        <h2 className="text-3xl font-bold">Check Account Identifier</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                You can find your <strong>Account ID</strong> in the profile menu at the bottom left of the Snowflake web console.
                            </p>
                            <p>
                                It is a combination of <strong>Organization Name</strong> and <strong>Account Name</strong>.
                            </p>
                            <p className="bg-slate-900 border border-slate-800 p-3 rounded-lg font-mono text-sky-300 inline-block">
                                Example: ORGNAME-ACCOUNTNAME
                            </p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/snowflake/step1_account_id.png"
                            alt="Snowflake Account Identifier"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full h-auto shadow-2xl"
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/snowflake/step2_user.png"
                            alt="Snowflake User Details"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full h-auto shadow-2xl"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-indigo-500/20 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
                            2
                        </div>
                        <h2 className="text-3xl font-bold">User & Warehouse Details</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Please prepare the following information for Velen:</p>
                            <ul className="list-disc list-inside space-y-2 marker:text-sky-500">
                                <li><strong>Username</strong>: Your login ID</li>
                                <li><strong>Password</strong>: User password</li>
                                <li><strong>Warehouse</strong>: Warehouse name to execute queries (e.g., <code className="text-sky-300">COMPUTE_WH</code>)</li>
                                <li><strong>Database & Schema</strong>: Database and schema to access</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
