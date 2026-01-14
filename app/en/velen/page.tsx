import type { Metadata } from "next";
import Link from 'next/link';
import {
    Building2,
    User,
    BarChart3,
    Search,
    Link as LinkIcon,
    AlertTriangle,
    ArrowRight,
    Activity,
    TrendingUp,
    LayoutDashboard,
    Layers,
    Clock,
    ZapOff,
    Sparkles,
    EyeOff,
    Users,
    Rocket,
    Zap,
    Loader2,
    FileText,
    Database
} from 'lucide-react';

export const metadata: Metadata = {
    title: "Velen - Discover Hidden Growth Moments in Your Data",
    description: "Velen is an AI business analysis solution that uncovers growth opportunities and risks in your data flood. Experience Daily Aha for clear decision making.",
    keywords: ["Data Analysis", "Business Intelligence", "Growth Hacking", "Velen", "Data Visualization", "AI Analysis"],
    openGraph: {
        title: "Velen - Discover the Hidden Growth Moments in Your Data",
        description: "Velen is an AI business analysis solution that finds growth opportunities and risks amidst the flood of data. Meet your Daily Aha for clear decision-making.",
        type: "website",
        locale: "en_US",
        // images: [{ url: '/images/velen_og.png', width: 1200, height: 630, alt: 'Velen Landing Page' }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Velen - 데이터 기반의 확실한 의사결정",
        description: "쏟아지는 대시보드 대신, 명확한 Actionable Insight를 제공합니다.",
    },
};

export default function VelenLandingPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-purple-500/30">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="text-xl font-bold tracking-tight text-white">Velen</div>
                    <Link href="/en/velen/bigquery">
                        <button className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors">
                            Get Started
                        </button>
                    </Link>
                </div>
            </nav>
            {/* 1. Cover */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
                <div className="absolute inset-0 bg-transparent" />
                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-in fade-in zoom-in duration-1000">
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-slate-100">
                        Velen
                    </h1>
                    <p className="text-2xl md:text-3xl font-light text-slate-300">
                        Discover the amazing growth moments hidden in your data
                    </p>

                    <div className="pt-8">
                        <Link href="/en/velen/bigquery">
                            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-200 transition-colors flex items-center gap-2 mx-auto">
                                Get Started <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>

                    {/* Hero Visual */}


                </div>
            </section>

            {/* 2. Problem */}
            <section className="py-24 px-6 bg-slate-900/50 space-y-32">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-24 text-center leading-tight">
                        Plenty of data,<br className="md:hidden" /> <span className="text-purple-400">but lacking certainty</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Problem 1: Dashboard Flood */}
                        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-purple-500/30 transition-colors group text-center">
                            <div className="w-20 h-20 bg-slate-950 rounded-2xl flex items-center justify-center mb-8 mx-auto border border-slate-800 group-hover:border-purple-500/30 transition-colors shadow-lg">
                                <LayoutDashboard className="w-10 h-10 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                Flooding Dashboards
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                You check dozens of charts daily,<br />
                                but it's unclear regarding<br />
                                what to do today.
                            </p>
                        </div>

                        {/* Problem 2: Fragmented Data */}
                        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-colors group text-center">
                            <div className="w-20 h-20 bg-slate-950 rounded-2xl flex items-center justify-center mb-8 mx-auto border border-slate-800 group-hover:border-blue-500/30 transition-colors shadow-lg">
                                <Layers className="w-10 h-10 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                Fragmented Data
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                While piecing together fragments<br />
                                from PG, GA, and DB, you miss<br />
                                the crucial 'customer context'.
                            </p>
                        </div>

                        {/* Problem 3: Delayed Insights */}
                        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-red-500/30 transition-colors group text-center">
                            <div className="w-20 h-20 bg-slate-950 rounded-2xl flex items-center justify-center mb-8 mx-auto border border-slate-800 group-hover:border-red-500/30 transition-colors shadow-lg">
                                <Clock className="w-10 h-10 text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                Missed Golden Time
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                "Sales dropped last month?"<br />
                                If you find out only after it's over,<br />
                                the chance to respond is already gone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Observation */}
            <section className="py-32 px-6 bg-black relative">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Most growth is<br />
                        <span className="text-purple-400">
                            hidden inside your data
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800/60 flex flex-col items-center text-center gap-6 hover:border-purple-500/30 transition-all hover:bg-slate-900/60">
                            <TrendingUp className="w-12 h-12 text-purple-400" />
                            <div>
                                <h3 className="text-lg font-bold text-slate-200 mb-3">Gradual Improvement</h3>
                                <div className="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
                                    <p className="text-sm text-purple-200 text-left">
                                        <span className="font-bold block mb-1 text-purple-400">Example</span>
                                        "A small 5% increase in detail page views was the start of <span className="underline decoration-purple-400 decoration-2 underline-offset-2">record-breaking quarterly revenue</span>."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800/60 flex flex-col items-center text-center gap-6 hover:border-blue-500/30 transition-all hover:bg-slate-900/60">
                            <Search className="w-12 h-12 text-blue-400" />
                            <div>
                                <h3 className="text-lg font-bold text-slate-200 mb-3">Hidden Causality</h3>
                                <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                                    <p className="text-sm text-blue-200 text-left">
                                        <span className="font-bold block mb-1 text-blue-400">Example</span>
                                        "When loading speed was under 1.5s, the <span className="underline decoration-blue-400 decoration-2 underline-offset-2">add-to-cart rate was 3x higher</span>."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800/60 flex flex-col items-center text-center gap-6 hover:border-green-500/30 transition-all hover:bg-slate-900/60">
                            <Sparkles className="w-12 h-12 text-green-400" />
                            <div>
                                <h3 className="text-lg font-bold text-slate-200 mb-3">Silent Changes</h3>
                                <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                                    <p className="text-sm text-green-200 text-left">
                                        <span className="font-bold block mb-1 text-green-400">Example</span>
                                        "Loyal customers' visit frequency started increasing <span className="underline decoration-green-400 decoration-2 underline-offset-2">from 2.8 days to 3.5 days</span>."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Example */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12">We actually provide insights like these</h2>
                    <div className="bg-[#1A1D21] rounded-lg border border-slate-800 p-6 shadow-2xl max-w-3xl mx-auto font-sans space-y-8">
                        {/* Message 1 */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-md bg-purple-600 flex items-center justify-center shrink-0">
                                <span className="text-white font-bold text-lg">V</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-bold text-slate-200">Velen</span>
                                    <span className="bg-slate-700 text-slate-300 text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wide">APP</span>
                                    <span className="text-slate-500 text-xs">10:42 AM</span>
                                </div>
                                <div className="text-slate-300 leading-relaxed space-y-2">
                                    <p>
                                        <span className="text-purple-400 font-bold">@channel</span> A rapid growth signal has been detected in the Indonesia region.
                                    </p>
                                    <div className="flex gap-3">
                                        <div className="w-1 bg-purple-500 rounded-full shrink-0" />
                                        <div>
                                            <p>
                                                Payment success rates in Indonesia have surged from <span className="bg-green-500/20 text-green-400 px-1 rounded font-bold">66% → 89%</span>. While total revenue impact is currently around <span className="text-green-400 font-bold">+1.2%</span>, the trend suggests potential for further upside. Data review and marketing budget discussion recommended.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Message 2 */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-md bg-purple-600 flex items-center justify-center shrink-0">
                                <span className="text-white font-bold text-lg">V</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-bold text-slate-200">Velen</span>
                                    <span className="bg-slate-700 text-slate-300 text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wide">APP</span>
                                    <span className="text-slate-500 text-xs">10:45 AM</span>
                                </div>
                                <div className="text-slate-300 leading-relaxed space-y-2">
                                    <p>
                                        There's also an interesting change in organic user behavior patterns.
                                    </p>
                                    <div className="flex gap-3">
                                        <div className="w-1 bg-purple-500 rounded-full shrink-0" />
                                        <div className="space-y-4">
                                            <p>
                                                While total traffic remains steady at ±2%, organic user conversion rate has increased from <span className="bg-green-500/20 text-green-400 px-1 rounded font-bold">2.8% → 3.6% (+28%)</span>. Organic users showed a strong tendency to visit the “/new_release” page, and conversion share was higher for those users.
                                            </p>
                                            <p className="text-slate-500 text-sm">
                                                Conversely, for users visiting the "/top_10" page, conversion rate was 1.8%, remaining at half the level of "/new_release" visitors.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Solution */}
            <section className="py-32 px-6 bg-slate-950 border-y border-slate-900">
                <section className="py-32 px-6 bg-slate-950 border-y border-slate-900">
                    <div className="max-w-4xl mx-auto flex flex-col items-center gap-16">
                        <div className="text-center">
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                                Velen reads both<br />
                                growth and risk<br />
                                together
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 gap-8 w-full">
                            <div className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800 flex flex-col items-center text-center gap-6 group hover:border-green-500/30 transition-colors">
                                <TrendingUp className="w-16 h-16 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-2xl font-bold text-white">Capture Growth Signals</h3>
                            </div>
                            <div className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800 flex flex-col items-center text-center gap-6 group hover:border-red-500/30 transition-colors">
                                <AlertTriangle className="w-16 h-16 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-2xl font-bold text-white">Early Risk Detection</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </section>



            {/* 8. How it works */}
            <section className="py-24 px-6 bg-slate-900/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">How it works</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 relative isolate">
                        {/* Connector Line */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-800 via-purple-500/50 to-slate-800 -z-10" />

                        <div className="text-center relative bg-slate-950 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none border md:border-none border-slate-800">
                            <div className="w-24 h-24 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-800 shadow-lg relative">
                                <span className="absolute -top-3 -right-3 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold border border-slate-700">1</span>
                                <LinkIcon className="w-8 h-8 text-slate-200" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Connect Data</h3>
                            <p className="text-slate-400 text-sm">Multiple analysis sources at once</p>
                        </div>
                        <div className="text-center relative bg-slate-950 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none border md:border-none border-slate-800">
                            <div className="w-24 h-24 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-500/30 shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)] relative">
                                <span className="absolute -top-3 -right-3 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                                <Activity className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
                            <p className="text-slate-400 text-sm">Detect trends, changes, and signals</p>
                        </div>
                        <div className="text-center relative bg-slate-950 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none border md:border-none border-slate-800">
                            <div className="w-24 h-24 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-800 shadow-lg relative">
                                <span className="absolute -top-3 -right-3 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold border border-slate-700">3</span>
                                <BarChart3 className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Deliver Daily Aha</h3>
                            <p className="text-slate-400 text-sm">Insights easy to understand</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* 10. Who it's for */}
            <section className="py-24 px-6 bg-slate-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-12 text-slate-200">
                        Built for those who need <span className="text-purple-400">clear decision making</span><br className="md:hidden" /> based on data
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative group overflow-hidden rounded-2xl border border-slate-800">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                            <img
                                src="/images/target_leader_clean.png"
                                alt="Founder"
                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-6 left-6 z-20 text-left">
                                <h3 className="text-xl font-bold text-white mb-1">Data-Driven Leaders</h3>
                                <p className="text-slate-300 text-sm"> Founders & C-Levels who decide with data over intuition</p>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-2xl border border-slate-800">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                            <img
                                src="/images/target_team_clean.png"
                                alt="Growth Team"
                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-6 left-6 z-20 text-left">
                                <h3 className="text-xl font-bold text-white mb-1">Growth Teams & POs</h3>
                                <p className="text-slate-300 text-sm">Product teams iterating on experiments and validation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. Closing */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-12">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Velen reveals the<br />
                        <span className="text-purple-400">‘Certainty’</span> and <span className="text-purple-400">'Possibility'</span><br />
                        hidden in your data.
                    </h2>
                    <div className="pt-8">
                        <Link href="/en/velen/bigquery">
                            <button className="bg-white text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-200 transition-colors inline-flex items-center gap-3 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)]">
                                Get Started <ArrowRight className="w-6 h-6" />
                            </button>
                        </Link>
                    </div>

                </div>
            </section>
            {/* Footer */}
            <footer className="border-t border-slate-900 py-12 px-6 bg-slate-950 text-slate-400 text-sm">
                <div className="max-w-6xl mx-auto flex justify-start items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-lg">Velen</span>
                        <span className="text-slate-600">© 2026 Velen Inc.</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
