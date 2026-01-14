import { ArrowRight, CheckCircle2, ChevronRight, Info } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'How to get BigQuery API Key - Velen',
    description: 'Step-by-step guide to connecting your Google Cloud BigQuery account to Velen.',
};

export default function BigQueryGuidePage() {
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
                        BigQuery API 키 발급받는 방법
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        Velen을 시작하기 위해서는 BigQuery API 키가 필요해요. 가이드라인을 따라 API 키를 발급받아주세요.

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
                        <h2 className="text-3xl font-bold">Google Cloud Console 접속하기</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                먼저, <a href="https://console.cloud.google.com" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors">Google Cloud Console</a> 사이트로 이동해 주세요.
                            </p>
                            <p>
                                아직 로그인을 안 하셨다면 구글 계정으로 로그인해 주세요. 상단의 드롭다운 메뉴를 눌러
                                <strong className="text-white font-semibold"> 프로젝트 선택</strong>을 하거나, 새로운 프로젝트를 만들어 주세요.
                            </p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/bigquery/step1.png"
                            alt="Google Cloud Project Dashboard"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/bigquery/step2.png"
                            alt="Enable BigQuery API"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-purple-500/20 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]">
                            2
                        </div>
                        <h2 className="text-3xl font-bold">BigQuery API 활성화하기</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>검색창에 <strong className="text-white">"BigQuery API"</strong>를 입력하고 검색해 주세요.</p>
                            <p>결과 카드를 클릭한 뒤, 파란색 <strong className="text-blue-400">사용(Enable)</strong> 버튼 혹은 <strong className="text-blue-400">관리(Manage)</strong> 을 눌러주세요.</p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-green-500/20 shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)]">
                            3
                        </div>
                        <h2 className="text-3xl font-bold">서비스 계정 만들기</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>검색창에 <strong className="text-white">"Service Accounts"</strong>를 입력하고 Service Accounts (IAM & Admin) 메뉴로 이동해 주세요.</p>
                            <p><strong className="text-white">+ Create Service Accounts(사용자 인증 정보 만들기)</strong>를 클릭하고 설정 값을 입력해주세요.</p>
                            <p>오른쪽 화면을 참고하여 <strong className="text-white">"BigQuery Reader"</strong> 같은 이름을 붙여주세요.</p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/bigquery/step3.png"
                            alt="Create Service Account Form"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover object-top"
                        />
                    </div>
                </div>

                {/* Step 4 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">

                        <img
                            src="/images/bigquery/step4.png"
                            alt="Grant Permissions"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover invert hue-rotate-180 saturate-200"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-red-500/20 shadow-[0_0_20px_-5px_rgba(239,68,68,0.3)]">
                            4
                        </div>
                        <h2 className="text-3xl font-bold">중요: 권한 부여하기</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>계정을 만든 후에는 권한을 부여해야 합니다. </p>
                            <p>다음 두 가지 역할을 검색해서 추가해 주세요:</p>
                            <ul className="space-y-2 font-medium text-white">
                                <li className="flex items-center gap-2">
                                    <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-400">1</span>
                                    BigQuery Data Viewer (데이터 뷰어)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-400">2</span>
                                    BigQuery Job User (작업 사용자)
                                </li>
                            </ul>
                            <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg text-sm text-red-300 flex items-start gap-3">
                                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                                <span>*이 권한들이 없으면 키가 있어도 데이터를 읽을 수 없어요.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-orange-500/20 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]">
                            5
                        </div>
                        <h2 className="text-3xl font-bold">키 다운로드 (JSON)</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>방금 만든 <strong className="text-white">서비스 계정</strong>을 클릭해 주세요.</p>
                            <p>상단의 <strong className="text-white">키(KEYS)</strong> 탭으로 이동하세요.</p>
                            <p><span className="inline-flex items-center gap-1 font-semibold text-white bg-slate-800 px-2 py-0.5 rounded border border-slate-700">키 추가(Add key) <ChevronRight className="w-3 h-3" /> 새 키 만들기</span>를 클릭하세요.</p>
                            <p><strong className="text-white">"JSON"</strong>이 선택된 상태에서 <strong className="text-blue-400">만들기(CREATE)</strong> 버튼을 눌러주세요.</p>
                            <p>이제 컴퓨터에 파일이 다운로드됩니다.</p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">

                        <img
                            src="/images/bigquery/step5_v2.png"
                            alt="Download JSON Key Modal"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover invert hue-rotate-180 saturate-200"
                        />
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
                            <h2 className="text-4xl font-bold text-white">완료되었습니다!</h2>
                            <p className="text-xl text-slate-400">
                                이제 <code className="bg-slate-800 px-2 py-1 rounded text-orange-300 font-mono text-base">.json</code> 키 파일을 가지게 되었습니다.
                            </p>
                            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl inline-block">
                                <p className="text-red-300 font-medium flex items-center gap-2">
                                    <Info className="w-5 h-5" />
                                    이 파일의 보안관리는 매우 중요합니다. 유출되지 않도록 Velen 서비스에 등록 후 안전하게 삭제해주세요.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
