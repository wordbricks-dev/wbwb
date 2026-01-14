import { Database, BarChart3, Terminal, Globe, ArrowRight, LayoutGrid, Activity } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Integration Guides - Velen',
    description: 'List of all integration guides to connect your data sources with Velen.',
};

const guides = [
    {
        title: 'Google BigQuery',
        description: 'Connect your BigQuery data warehouse for powerful analytics.',
        href: '/ko/velen/bigquery',
        icon: Database,
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        shadow: 'shadow-blue-500/10'
    },
    {
        title: 'Mixpanel',
        description: 'Integrate Mixpanel to analyze user event data.',
        href: '/ko/velen/mixpanel',
        icon: BarChart3,
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20',
        shadow: 'shadow-purple-500/10'
    },
    {
        title: 'Amplitude',
        description: 'Track product usage and user behavior insights with Amplitude.',
        href: '/ko/velen/amplitude',
        icon: Activity,
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        shadow: 'shadow-emerald-500/10'
    },
    {
        title: 'Google Analytics 4',
        description: 'Connect GA4 to track website traffic and user behavior.',
        href: '/ko/velen/ga4',
        icon: BarChart3,
        color: 'text-orange-400',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/20',
        shadow: 'shadow-orange-500/10'
    },
    {
        title: 'AWS RDS (Terminal)',
        description: 'Create a read-only user for RDS using SQL commands.',
        href: '/ko/velen/rds-terminal',
        icon: Terminal,
        color: 'text-slate-400',
        bg: 'bg-slate-500/10',
        border: 'border-slate-500/20',
        shadow: 'shadow-slate-500/10'
    },
    {
        title: 'AWS RDS (Web)',
        description: 'Find RDS connection details via AWS Management Console.',
        href: '/ko/velen/rds-web',
        icon: Globe,
        color: 'text-teal-400',
        bg: 'bg-teal-500/10',
        border: 'border-teal-500/20',
        shadow: 'shadow-teal-500/10'
    }
];

export default function IntegrationsPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-purple-500/30 pb-32">
            {/* Header */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(124,58,237,0.1),transparent_50%)]" />
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-flex items-center gap-2 text-purple-400 font-medium bg-purple-500/10 px-4 py-1.5 rounded-full text-sm mb-4 border border-purple-500/20">
                        <LayoutGrid className="w-4 h-4" />
                        <span>Integration Hub</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
                        Connect Your Data
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        Select a service below to view step-by-step integration instructions.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guides.map((guide, index) => (
                        <Link
                            key={guide.title}
                            href={guide.href}
                            className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:bg-slate-900 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Hover Gradient Glow */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br ${guide.bg} via-transparent to-transparent pointer-events-none`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-14 h-14 ${guide.bg} ${guide.color} ${guide.border} border rounded-xl flex items-center justify-center mb-6 shadow-lg ${guide.shadow}`}>
                                    <guide.icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">
                                    {guide.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                                    {guide.description}
                                </p>

                                <div className={`flex items-center gap-2 font-medium ${guide.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                                    <span>View Guide</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
