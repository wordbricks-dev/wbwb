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

export default function VelenLandingPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-purple-500/30">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="text-xl font-bold tracking-tight text-white">Velen</div>
                    <Link href="/ko/velen/bigquery">
                        <button className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors">
                            시작하기
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
                        데이터 속에 숨겨진 놀라운 성장의 순간을 발견하세요
                    </p>

                    <div className="pt-8">
                        <Link href="/ko/velen/bigquery">
                            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-200 transition-colors flex items-center gap-2 mx-auto">
                                시작하기 <ArrowRight className="w-5 h-5" />
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
                        데이터는 많은데,<br className="md:hidden" /> <span className="text-purple-400">확신은 부족합니다</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Problem 1: Dashboard Flood */}
                        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-purple-500/30 transition-colors group text-center">
                            <div className="w-20 h-20 bg-slate-950 rounded-2xl flex items-center justify-center mb-8 mx-auto border border-slate-800 group-hover:border-purple-500/30 transition-colors shadow-lg">
                                <LayoutDashboard className="w-10 h-10 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                쏟아지는 대시보드
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                매일 수십 개의 차트를 확인하지만,<br />
                                정작 오늘 무엇을 해야 할지는<br />
                                명확하지 않습니다.
                            </p>
                        </div>

                        {/* Problem 2: Fragmented Data */}
                        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-colors group text-center">
                            <div className="w-20 h-20 bg-slate-950 rounded-2xl flex items-center justify-center mb-8 mx-auto border border-slate-800 group-hover:border-blue-500/30 transition-colors shadow-lg">
                                <Layers className="w-10 h-10 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                파편화된 데이터
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                PG사, GA, DB에 흩어진<br />
                                조각들을 맞추느라 정작 중요한<br />
                                '고객의 맥락'은 놓치고 있습니다.
                            </p>
                        </div>

                        {/* Problem 3: Delayed Insights */}
                        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-red-500/30 transition-colors group text-center">
                            <div className="w-20 h-20 bg-slate-950 rounded-2xl flex items-center justify-center mb-8 mx-auto border border-slate-800 group-hover:border-red-500/30 transition-colors shadow-lg">
                                <Clock className="w-10 h-10 text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                뒤늦은 골든타임
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                "저번 달 매출이 떨어졌네요?"<br />
                                이미 상황이 종료된 후에야 발견하면<br />
                                대응할 기회조차 사라집니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Observation */}
            <section className="py-32 px-6 bg-black relative">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        대부분의 성장은<br />
                        <span className="text-purple-400">
                            데이터 속에 숨겨져있습니다
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800/60 flex flex-col items-center text-center gap-6 hover:border-purple-500/30 transition-all hover:bg-slate-900/60">
                            <TrendingUp className="w-12 h-12 text-purple-400" />
                            <div>
                                <h3 className="text-lg font-bold text-slate-200 mb-3">점진적 개선</h3>
                                <div className="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
                                    <p className="text-sm text-purple-200 text-left">
                                        <span className="font-bold block mb-1 text-purple-400">Example</span>
                                        "상세 페이지 조회수가 5% 늘어난 작은 변화가, 분기 매출 <span className="underline decoration-purple-400 decoration-2 underline-offset-2">역대 최고치 갱신</span>의 시작이었습니다."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800/60 flex flex-col items-center text-center gap-6 hover:border-blue-500/30 transition-all hover:bg-slate-900/60">
                            <Search className="w-12 h-12 text-blue-400" />
                            <div>
                                <h3 className="text-lg font-bold text-slate-200 mb-3">숨겨진 인과관계</h3>
                                <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                                    <p className="text-sm text-blue-200 text-left">
                                        <span className="font-bold block mb-1 text-blue-400">Example</span>
                                        "로딩 속도가 1.5초 이하일 때, <span className="underline decoration-blue-400 decoration-2 underline-offset-2">장바구니 담기 비율이 3배</span> 높았습니다."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800/60 flex flex-col items-center text-center gap-6 hover:border-green-500/30 transition-all hover:bg-slate-900/60">
                            <Sparkles className="w-12 h-12 text-green-400" />
                            <div>
                                <h3 className="text-lg font-bold text-slate-200 mb-3">조용한 변화</h3>
                                <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                                    <p className="text-sm text-green-200 text-left">
                                        <span className="font-bold block mb-1 text-green-400">Example</span>
                                        "충성 고객의 방문 주기가 <span className="underline decoration-green-400 decoration-2 underline-offset-2">2.8일에서 3.5일로</span> 늘어나기 시작했습니다."
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
                    <h2 className="text-center text-3xl font-bold mb-12">실제로 이런 인사이트를 제공합니다</h2>
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
                                        <span className="text-purple-400 font-bold">@channel</span> 인도네시아 지역에서 급격한 성장 신호가 감지되었습니다.
                                    </p>
                                    <div className="flex gap-3">
                                        <div className="w-1 bg-purple-500 rounded-full shrink-0" />
                                        <div>
                                            <p>
                                                인도네시아의 결제 성공률이 <span className="bg-green-500/20 text-green-400 px-1 rounded font-bold">66% → 89%</span>로 급격하게 상승했습니다. 전체 매출 영향은 아직 <span className="text-green-400 font-bold">+1.2%</span> 수준이지만, 추세상 추가 상승 가능성이 있습니다. 해당 데이터 검토 및 마케팅 집행 논의가 필요합니다.
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
                                        오가닉 유저의 행동 패턴에도 흥미로운 변화가 있네요.
                                    </p>
                                    <div className="flex gap-3">
                                        <div className="w-1 bg-purple-500 rounded-full shrink-0" />
                                        <div className="space-y-4">
                                            <p>
                                                전체 트래픽은 ±2% 수준으로 비슷한 수준을 유지하고 있지만, 오가닉 유저의 전환율은 <span className="bg-green-500/20 text-green-400 px-1 rounded font-bold">2.8% → 3.6% (+28%)</span>로 증가했습니다. 오가닉 유저들은 특히 “/new_release” 페이지 방문 경향이 두드러졌고, 해당 페이지 방문한 유저의 경우 전환 비중이 더 높아졌습니다.
                                            </p>
                                            <p className="text-slate-500 text-sm">
                                                반대로, "/top_10" 페이지를 방문한 유저의 경우 전환율이 1.8%로 "/new_release" 페이지 방문 유저의 절반 수준에 머물렀습니다.
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
                                Velen은<br />
                                성장과 리스크를<br />
                                함께 읽습니다
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 gap-8 w-full">
                            <div className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800 flex flex-col items-center text-center gap-6 group hover:border-green-500/30 transition-colors">
                                <TrendingUp className="w-16 h-16 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-2xl font-bold text-white">성장 신호 포착</h3>
                            </div>
                            <div className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800 flex flex-col items-center text-center gap-6 group hover:border-red-500/30 transition-colors">
                                <AlertTriangle className="w-16 h-16 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-2xl font-bold text-white">리스크 조기 감지</h3>
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
                            <h3 className="text-xl font-bold mb-2">데이터 연결</h3>
                            <p className="text-slate-400 text-sm">여러 분석 소스를 한 번에</p>
                        </div>
                        <div className="text-center relative bg-slate-950 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none border md:border-none border-slate-800">
                            <div className="w-24 h-24 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-500/30 shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)] relative">
                                <span className="absolute -top-3 -right-3 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                                <Activity className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">AI 분석</h3>
                            <p className="text-slate-400 text-sm">추세, 변화, 잠재 신호 감지</p>
                        </div>
                        <div className="text-center relative bg-slate-950 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none border md:border-none border-slate-800">
                            <div className="w-24 h-24 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-800 shadow-lg relative">
                                <span className="absolute -top-3 -right-3 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold border border-slate-700">3</span>
                                <BarChart3 className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Daily Aha 제공</h3>
                            <p className="text-slate-400 text-sm">사람이 이해하기 쉬운 인사이트</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* 10. Who it's for */}
            <section className="py-24 px-6 bg-slate-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-12 text-slate-200">
                        데이터 기반의 <span className="text-purple-400">명확한 의사결정</span>이 필요한<br className="md:hidden" /> 분들을 위해 만들었습니다
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
                                <h3 className="text-xl font-bold text-white mb-1">데이터 드리븐 리더</h3>
                                <p className="text-slate-300 text-sm"> 직관보다 데이터로 결정하는 창업자 & C-Level</p>
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
                                <h3 className="text-xl font-bold text-white mb-1">그로스 팀 & PO</h3>
                                <p className="text-slate-300 text-sm">실험과 검증을 반복하는 프로덕트 팀</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. Closing */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-12">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Velen은<br />
                        데이터 속에 숨어 있던<br />
                        <span className="text-purple-400">‘확신’</span>과 <span className="text-purple-400">'가능성'</span>을 보여줍니다.
                    </h2>
                    <div className="pt-8">
                        <Link href="/ko/velen/bigquery">
                            <button className="bg-white text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-200 transition-colors inline-flex items-center gap-3 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)]">
                                시작하기 <ArrowRight className="w-6 h-6" />
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
