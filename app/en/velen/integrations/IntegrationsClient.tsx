"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Database, BarChart3, Terminal, Globe, ArrowRight, LayoutGrid, Activity, Facebook, MousePointer2, Snowflake, Search, CreditCard, Box } from 'lucide-react';

const guides = [
    {
        title: 'Google BigQuery',
        description: 'BigQuery Data Warehouse Integration',
        href: '/en/velen/bigquery',
        icon: Database,
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        shadow: 'shadow-blue-500/10'
    },
    {
        title: 'Mixpanel',
        description: 'Mixpanel User Behavior Data Integration',
        href: '/en/velen/mixpanel',
        icon: BarChart3,
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20',
        shadow: 'shadow-purple-500/10'
    },
    {
        title: 'AWS RDS (Terminal)',
        description: 'Create Read-Only User via SQL',
        href: '/en/velen/rds-terminal',
        icon: Terminal,
        color: 'text-slate-400',
        bg: 'bg-slate-500/10',
        border: 'border-slate-500/20',
        shadow: 'shadow-slate-500/10'
    },
    {
        title: 'AWS RDS (Web Console)',
        description: 'Check Connection Info on AWS Console',
        href: '/en/velen/rds-web',
        icon: Globe,
        color: 'text-teal-400',
        bg: 'bg-teal-500/10',
        border: 'border-teal-500/20',
        shadow: 'shadow-teal-500/10'
    },
    {
        title: 'Amplitude',
        description: 'Amplitude User Behavior Data Integration',
        href: '/en/velen/amplitude',
        icon: Activity,
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        shadow: 'shadow-emerald-500/10'
    },
    {
        title: 'Google Analytics 4',
        description: 'GA4 Website Traffic Data Integration',
        href: '/en/velen/ga4',
        icon: BarChart3,
        color: 'text-orange-400',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/20',
        shadow: 'shadow-orange-500/10'
    },
    {
        title: 'Meta Ads',
        description: 'Facebook, Instagram Ads Data Integration',
        href: '/en/velen/meta-ads',
        icon: Facebook,
        color: 'text-blue-500',
        bg: 'bg-blue-600/10',
        border: 'border-blue-600/20',
        shadow: 'shadow-blue-600/10'
    },
    {
        title: 'Google Ads',
        description: 'Google Ads Performance Data Integration',
        href: '/en/velen/google-ads',
        icon: MousePointer2,
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/20',
        shadow: 'shadow-yellow-500/10'
    },
    {
        title: 'PostgreSQL',
        description: 'PostgreSQL Database Integration',
        href: '/en/velen/postgresql',
        icon: Database,
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/20',
        shadow: 'shadow-cyan-500/10'
    },
    {
        title: 'Snowflake',
        description: 'Snowflake Data Warehouse Integration',
        href: '/en/velen/snowflake',
        icon: Snowflake,
        color: 'text-sky-400',
        bg: 'bg-sky-500/10',
        border: 'border-sky-500/20',
        shadow: 'shadow-sky-500/10'
    },
    {
        title: 'Stripe',
        description: 'Stripe Payment Data Integration',
        href: '/en/velen/stripe',
        icon: CreditCard,
        color: 'text-indigo-400',
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-500/20',
        shadow: 'shadow-indigo-500/10'
    },
    {
        title: 'HubSpot',
        description: 'HubSpot CRM Data Integration',
        href: '/en/velen/hubspot',
        icon: Box,
        color: 'text-orange-400',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/20',
        shadow: 'shadow-orange-500/10'
    }
];

export default function IntegrationsClient() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredGuides = guides.filter(guide =>
        guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                        Check the integration guides for the services you want.
                    </p>

                    {/* Search Box */}
                    <div className="max-w-xl mx-auto mt-8 relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-500" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search integrations..."
                            className="w-full pl-11 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all backdrop-blur-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Grid */}
            <div className="max-w-6xl mx-auto px-6">
                {filteredGuides.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredGuides.map((guide) => (
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
                                    <p className="text-slate-400 leading-relaxed mb-8 flex-grow break-keep">
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
                ) : (
                    <div className="text-center py-12">
                        <p className="text-slate-500 text-lg">No results found for "{searchQuery}".</p>
                    </div>
                )}
            </div>
        </div>
    );
}
