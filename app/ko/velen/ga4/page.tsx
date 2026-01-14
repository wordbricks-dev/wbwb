import { CheckCircle2, Info, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How to get Google Analytics 4 API Key - Velen',
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
                        <span>설정 가이드</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
                        Google Analytics 4 (GA4) 연동 가이드
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        Velen이 데이터를 분석할 수 있도록 Google Cloud Service Account를 생성하고 GA4에서 조회 권한을 부여해 주세요.
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
                        <h2 className="text-3xl font-bold">API 활성화 및 서비스 계정 생성</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                <a href="https://console.cloud.google.com" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors">Google Cloud Console</a>에 접속해 주세요.
                            </p>
                            <p>
                                상단 검색창에 <strong className="text-white">"Google Analytics Data API"</strong>를 검색하여 <strong className="text-blue-400">사용(Enable)</strong> 버튼을 눌러주세요.
                            </p>
                            <p>
                                그 후, <strong className="text-white">"Service Accounts"</strong> 메뉴로 이동하여 <strong className="text-white">+ Create Service Account</strong>를 클릭해 계정을 생성해 주세요.
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

                {/* Step 2 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/ga4/step2_download_key.png"
                            alt="Create and Download JSON Key"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover invert hue-rotate-180 saturate-200"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-purple-500/20 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]">
                            2
                        </div>
                        <h2 className="text-3xl font-bold">키 다운로드 (JSON)</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>생성된 서비스 계정을 클릭하고 <strong className="text-white">키(KEYS)</strong> 탭으로 이동하세요.</p>
                            <p><span className="inline-flex items-center gap-1 font-semibold text-white bg-slate-800 px-2 py-0.5 rounded border border-slate-700">키 추가 <ChevronRight className="w-3 h-3" /> 새 키 만들기</span>를 클릭하세요.</p>
                            <p><strong className="text-white">"JSON"</strong>을 선택하고 만들기를 누르면 키 파일이 다운로드됩니다.</p>
                            <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg text-sm text-purple-300 flex items-start gap-3">
                                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                                <span>*다운로드된 파일은 Velen에 등록해야 합니다.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-green-500/20 shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)]">
                            3
                        </div>
                        <h2 className="text-3xl font-bold">이메일 주소 복사하기</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>서비스 계정 목록에서 방금 만든 계정의 <strong className="text-white">이메일(Email)</strong> 주소를 찾아 복사해 주세요.</p>
                            <p>형식은 다음과 같습니다:</p>
                            <code className="block bg-slate-900 border border-slate-800 p-3 rounded-lg text-slate-300 font-mono text-sm break-all">
                                my-app-analytics@my-project-id.iam.gserviceaccount.com
                            </code>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/ga4/step3_copy_email.png"
                            alt="Copy Service Account Email"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                </div>

                {/* Step 4 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/ga4/step4_add_user.png"
                            alt="GA4 Add User Screen"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-orange-500/20 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]">
                            4
                        </div>
                        <h2 className="text-3xl font-bold">GA4에 사용자 추가하기</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p><a href="https://analytics.google.com" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors">Google Analytics</a> 관리자 페이지로 이동하세요.</p>
                            <p><strong className="text-white">관리(Admin) {'>'} 속성(Property) {'>'} 속성 액세스 관리(Property Access Management)</strong> 메뉴를 클릭하세요.</p>
                            <p>우측 상단 <strong className="text-blue-400">+</strong> 버튼을 눌러 사용자를 추가하고, 복사한 이메일을 붙여넣으세요.</p>
                            <p>권한은 <strong className="text-white">뷰어(Viewer)</strong>로 설정해 주세요.</p>
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
                            <h2 className="text-4xl font-bold text-white">이제 연동할 준비가 되었습니다!</h2>
                            <p className="text-xl text-slate-400">
                                다운로드받은 <code className="bg-slate-800 px-2 py-1 rounded text-orange-300 font-mono text-base">.json</code> 키 파일을 사용하여 Velen에 연결하세요.
                            </p>
                            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl inline-block">
                                <p className="text-red-300 font-medium flex items-center gap-2">
                                    <Info className="w-5 h-5" />
                                    GA4 데이터가 보이기까지 최대 24시간이 걸릴 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
