import { CheckCircle2, Info, Globe, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How to get AWS RDS Credentials (Web) - Velen',
    description: 'Guide to retrieving AWS RDS connection details using the AWS Management Console.',
};

export default function RDSWebGuidePage() {
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
                        AWS RDS 연결 정보 확인 (Web)
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        AWS Management Console에서 데이터베이스 연결 정보를 확인하고 Velen에 입력해 주세요.
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
                        <h2 className="text-3xl font-bold">RDS 콘솔 접속</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                <a href="https://console.aws.amazon.com/rds" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors">AWS RDS Console</a>에 로그인해 주세요.
                            </p>
                            <p>
                                왼쪽 메뉴에서 <strong className="text-white">데이터베이스 (Databases)</strong>를 선택하고, 연결하려는 데이터베이스의 <strong>DB 식별자 (DB identifier)</strong>를 클릭하세요.
                            </p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/rds-web/step1_dashboard.png"
                            alt="AWS RDS Dashboard"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/rds-web/step2_endpoint.png"
                            alt="RDS Connectivity Endpoint"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-purple-500/20 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]">
                            2
                        </div>
                        <h2 className="text-3xl font-bold">엔드포인트 및 포트 확인</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p><strong className="text-white">연결 및 보안 (Connectivity & security)</strong> 탭을 확인하세요.</p>
                            <p>다음 정보를 복사해 주세요:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong className="text-white">엔드포인트 (Endpoint)</strong>: 예) <code className="bg-slate-900 px-1 rounded text-sm text-slate-300">mydb.xxx.ap-northeast-2.rds.amazonaws.com</code></li>
                                <li><strong className="text-white">포트 (Port)</strong>: 예) <code className="bg-slate-900 px-1 rounded text-sm text-slate-300">5432</code>, <code className="bg-slate-900 px-1 rounded text-sm text-slate-300">3306</code></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-green-500/20 shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)]">
                            3
                        </div>
                        <h2 className="text-3xl font-bold">마스터 사용자 이름 확인</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p><strong className="text-white">구성 (Configuration)</strong> 탭으로 이동하세요.</p>
                            <p><strong className="text-white">마스터 사용자 이름 (Master username)</strong>을 확인하고 복사해 주세요.</p>
                            <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-lg text-sm text-orange-300 flex items-start gap-3">
                                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                                <div className="space-y-1">
                                    <p className="font-semibold">비밀번호를 분실하셨나요?</p>
                                    <p>우측 상단 <span className="text-white px-1 border border-slate-600 rounded bg-slate-800">수정 (Modify)</span> 버튼을 눌러 새 비밀번호를 설정할 수 있습니다. (서버 재부팅 필요 없음)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/rds-web/step3_username.png"
                            alt="RDS Configuration Tab"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                </div>

                {/* Step 4 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/rds-web/step4_input.png"
                            alt="Velen Input Form"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full aspect-video object-cover"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-indigo-500/20 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
                            4
                        </div>
                        <h2 className="text-3xl font-bold">정보 입력하기</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>확인한 정보를 Velen에 입력하고 연결을 테스트해 주세요.</p>
                            <ul className="space-y-2 font-medium text-white bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                                <li className="flex justify-between border-b border-slate-800 pb-2">
                                    <span className="text-slate-400">Host (Endpoint)</span>
                                    <span>(복사한 엔드포인트)</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-800 py-2">
                                    <span className="text-slate-400">Database Name</span>
                                    <span>(데이터베이스 이름)</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-800 py-2">
                                    <span className="text-slate-400">Username</span>
                                    <span>(마스터 사용자 이름)</span>
                                </li>
                                <li className="flex justify-between pt-2">
                                    <span className="text-slate-400">Password</span>
                                    <span>(설정한 비밀번호)</span>
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
                            <h2 className="text-4xl font-bold text-white">준비 완료!</h2>
                            <p className="text-xl text-slate-400">
                                올바른 정보를 입력하셨다면 즉시 데이터 분석을 시작할 수 있습니다.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
