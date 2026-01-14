import { Facebook, Info, ChevronRight, Key, Globe } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How to get Meta Ads Access Token - Velen',
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
                        <span>설정 가이드</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
                        Meta Ads (Facebook) 연동 가이드
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        Velen이 광고 데이터를 분석할 수 있도록 Meta for Developers에서 Access Token을 발급해 주세요.
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
                        <h2 className="text-3xl font-bold">Meta App 생성</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                <a href="https://developers.facebook.com/apps" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">Meta for Developers</a>에 접속하여 <strong>내 앱(My Apps)</strong>으로 이동하세요.
                            </p>
                            <p>
                                <strong>앱 만들기(Create App)</strong>를 클릭하고, 앱 유형으로 <strong>비즈니스(Business)</strong>를 선택하세요.
                            </p>
                            <p>앱 이름을 입력하고 생성을 완료하세요.</p>
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
                        <h2 className="text-3xl font-bold">토큰 발급 (Graph API Explorer)</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                <a href="https://developers.facebook.com/tools/explorer" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">Graph API Explorer</a> 도구로 이동하세요.
                            </p>
                            <p><strong>Meta App</strong> 항목에서 방금 생성한 앱을 선택하세요.</p>
                            <p><strong>권한(Permissions)</strong>을 추가하세요: <code className="bg-slate-800 px-1.5 py-0.5 rounded text-indigo-300">ads_read</code>, <code className="bg-slate-800 px-1.5 py-0.5 rounded text-indigo-300">read_insights</code></p>
                            <p><strong>Generate Access Token</strong> 버튼을 클릭하세요.</p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-emerald-500/20 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
                            3
                        </div>
                        <h2 className="text-3xl font-bold">인증 토큰 복사</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>상단 Access Token 필드에 생성된 긴 문자열을 복사하세요.</p>
                            <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl inline-block">
                                <p className="text-blue-300 font-medium flex items-center gap-2">
                                    <Info className="w-5 h-5" />
                                    이 토큰은 단기 토큰일 수 있습니다. 장기 사용을 위해서는 토큰 디버거를 통해 연장해야 할 수 있습니다.
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
