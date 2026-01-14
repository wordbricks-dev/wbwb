import { CheckCircle2, Info, Terminal } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How to get AWS RDS Read-Only Key - Velen',
    description: 'Step-by-step guide to creating a read-only user for your AWS RDS database.',
};

export default function RDSGuidePage() {
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
                        AWS RDS Read-Only Account Guide
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        Create a Read-only account so Velen can safely analyze your database.
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
                        <h2 className="text-3xl font-bold">Connect to Database</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                Use your database client (DBeaver, pgAdmin, etc.) or terminal to connect to the <strong className="text-white">Admin account</strong> of your AWS RDS.
                            </p>
                            <p>
                                After connecting, open an editor window where you can execute SQL queries.
                            </p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/rds/step1_connect.png"
                            alt="Database Client Connection"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/rds/step2_create_user.png"
                            alt="SQL Create User Query"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-purple-500/20 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]">
                            2
                        </div>
                        <h2 className="text-3xl font-bold">Create Read-Only User (SQL)</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Copy and execute the SQL command below.</p>
                            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-purple-300">
                                <div className="flex items-center gap-2 text-slate-500 mb-2 border-b border-slate-800 pb-2">
                                    <Terminal className="w-4 h-4" /> PostgreSQL / MySQL
                                </div>
                                <p className="mb-2"><span className="text-blue-400">CREATE USER</span> velen_reader <span className="text-blue-400">WITH PASSWORD</span> 'your_secure_password';</p>
                                <p className="text-slate-500">-- Grant DB connection privileges</p>
                                <p><span className="text-blue-400">GRANT CONNECT ON DATABASE</span> your_db_name <span className="text-blue-400">TO</span> velen_reader;</p>
                            </div>
                            <p className="text-sm text-slate-500">* Please change 'your_secure_password' and 'your_db_name' to actual values.</p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-green-500/20 shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)]">
                            3
                        </div>
                        <h2 className="text-3xl font-bold">Grant Select Privileges (SQL)</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Grant table select privileges to the created user.</p>
                            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto text-green-300">
                                <p className="mb-2 text-slate-500">-- For PostgreSQL:</p>
                                <p className="mb-1"><span className="text-blue-400">GRANT USAGE ON SCHEMA</span> public <span className="text-blue-400">TO</span> velen_reader;</p>
                                <p className="mb-4"><span className="text-blue-400">GRANT SELECT ON ALL TABLES IN SCHEMA</span> public <span className="text-blue-400">TO</span> velen_reader;</p>

                                <p className="mb-2 text-slate-500">-- For MySQL:</p>
                                <p><span className="text-blue-400">GRANT SELECT ON</span> your_db_name.* <span className="text-blue-400">TO</span> 'velen_reader';</p>
                            </div>
                            <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg text-sm text-green-300 flex items-start gap-3">
                                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                                <span>*This command grants privileges only for currently existing tables.</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/rds/step3_grant.png"
                            alt="SQL Grant Privileges Query"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                </div>

                {/* Step 4 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/rds/step4_info.png"
                            alt="Connection Details Form"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-orange-500/20 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]">
                            4
                        </div>
                        <h2 className="text-3xl font-bold">Enter Connection Details</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Please enter the following information into Velen:</p>
                            <ul className="space-y-2 font-medium text-white bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                                <li className="flex justify-between border-b border-slate-800 pb-2">
                                    <span className="text-slate-400">Host (Endpoint)</span>
                                    <span>adb-xxx...aws.com</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-800 py-2">
                                    <span className="text-slate-400">Database Name</span>
                                    <span>your_db_name</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-800 py-2">
                                    <span className="text-slate-400">Username</span>
                                    <span className="text-purple-400">velen_reader</span>
                                </li>
                                <li className="flex justify-between pt-2">
                                    <span className="text-slate-400">Password</span>
                                    <span>(Set password)</span>
                                </li>
                            </ul>
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
                            <h2 className="text-4xl font-bold text-white">Setup Complete!</h2>
                            <p className="text-xl text-slate-400">
                                You can now securely analyze RDS data via Velen.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
