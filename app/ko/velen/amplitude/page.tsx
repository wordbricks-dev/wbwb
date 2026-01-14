import { BarChart3, Info, Settings, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How to get Amplitude API Key - Velen',
    description: 'Step-by-step guide to finding your Amplitude Project API Key and Secret Key.',
};

export default function AmplitudeGuidePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-purple-500/30 pb-32">
            {/* Header */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(76,29,149,0.15),transparent_50%)]" />
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-flex items-center gap-2 text-purple-400 font-medium bg-purple-500/10 px-4 py-1.5 rounded-full text-sm mb-4 border border-purple-500/20">
                        <Info className="w-4 h-4" />
                        <span>설정 가이드</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
                        Amplitude API Key 발급 가이드
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        Velen이 Amplitude 데이터를 분석할 수 있도록 API Key와 Secret Key를 발급해 주세요.
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
                        <h2 className="text-3xl font-bold">Organization Settings 접속</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                <a href="https://analytics.amplitude.com/" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors">Amplitude</a>에 로그인해 주세요.
                            </p>
                            <p>
                                좌측 하단의 <strong className="text-white">Settings</strong> (톱니바퀴 아이콘)을 클릭하거나, 우측 상단의 <strong className="text-white">Organization Settings</strong> 메뉴로 이동해 주세요.
                            </p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/amplitude/step1_settings.png"
                            alt="Amplitude Settings Menu"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/amplitude/step2_projects.png"
                            alt="Amplitude Projects List"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-purple-500/20 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]">
                            2
                        </div>
                        <h2 className="text-3xl font-bold">Project 선택</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                왼쪽 사이드바 메뉴에서 <strong className="text-white">Projects</strong>를 클릭하세요.
                            </p>
                            <p>
                                데이터를 연동하려는 프로젝트의 이름을 클릭하여 상세 페이지로 이동합니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-green-500/20 shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)]">
                            3
                        </div>
                        <h2 className="text-3xl font-bold">API Key 및 Secret Key 확인</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                <strong className="text-white">General</strong> 탭 상단에 있는 정보를 확인합니다.
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong className="text-white">API Key</strong>: 바로 복사할 수 있습니다.</li>
                                <li><strong className="text-white">Secret Key</strong>: <span className="bg-slate-800 text-white px-2 py-0.5 rounded text-sm">Show</span> 버튼을 눌러 키를 확인하고 복사하세요.</li>
                            </ul>
                            <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-lg text-sm text-orange-300 flex items-start gap-3">
                                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                                <span>Secret Key는 보안상 한 번만 보여질 수 있으니 즉시 안전한 곳에 저장하세요.</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/amplitude/step3_keys.png"
                            alt="Amplitude API Keys"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                </div>

                {/* Step 4 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/amplitude/step4_input.png"
                            alt="Velen Input Form"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-indigo-500/20 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
                            4
                        </div>
                        <h2 className="text-3xl font-bold">Velen에 입력하기</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>복사한 키 값을 Velen 설정 화면에 입력해 주세요.</p>
                            <ul className="space-y-2 font-medium text-white bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                                <li className="flex justify-between border-b border-slate-800 pb-2">
                                    <span className="text-slate-400">Project API Key</span>
                                    <span className="font-mono text-xs md:text-sm">ex) a2b3c4...</span>
                                </li>
                                <li className="flex justify-between pt-2">
                                    <span className="text-slate-400">Secret Key</span>
                                    <span className="font-mono text-xs md:text-sm">ex) 8d9e0f...</span>
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
                            <h2 className="text-4xl font-bold text-white">연동 준비 완료!</h2>
                            <p className="text-xl text-slate-400">
                                이제 Amplitude의 강력한 사용자 행동 데이터를 분석할 수 있습니다.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
