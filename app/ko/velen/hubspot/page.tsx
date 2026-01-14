
import { Box, Info, Key } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'HubSpot Integration - Velen',
    description: 'Guide to obtaining HubSpot Access Token via Private Apps.',
};

export default function HubSpotGuidePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-orange-500/30 pb-32">
            {/* Header */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(249,115,22,0.15),transparent_50%)]" />
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-flex items-center gap-2 text-orange-400 font-medium bg-orange-500/10 px-4 py-1.5 rounded-full text-sm mb-4 border border-orange-500/20">
                        <Box className="w-4 h-4" />
                        <span>설정 가이드</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
                        HubSpot 연동 가이드
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        HubSpot Private App을 생성하고 Access Token을 발급받으세요.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 space-y-24">

                {/* Step 1 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 relative z-10">
                        <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-orange-500/20 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]">
                            1
                        </div>
                        <h2 className="text-3xl font-bold">Private App 생성</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                HubSpot 설정(Settings) 메뉴로 이동하여 좌측의 <strong>Integrations</strong> &gt; <strong>Private Apps</strong>를 선택하세요.
                            </p>
                            <p>
                                <strong>Create a private app</strong> 버튼을 클릭하고 앱 이름(예: Velen Integration)을 입력하세요.
                            </p>
                            <p>
                                <strong>Scopes</strong> 탭에서 필요한 권한(예: <code className="bg-slate-800 px-1 text-orange-300">crm.objects.contacts.read</code> 등)을 체크하세요.
                            </p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/hubspot/step1_private_apps.png"
                            alt="HubSpot Private Apps"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full h-auto shadow-2xl"
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/hubspot/step2_access_token.png"
                            alt="HubSpot Access Token"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full h-auto shadow-2xl"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-red-500/20 shadow-[0_0_20px_-5px_rgba(239,68,68,0.3)]">
                            2
                        </div>
                        <h2 className="text-3xl font-bold">Access Token 복사</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>앱 생성이 완료되면 <strong>Access token</strong>이 발급됩니다.</p>
                            <p><code className="text-orange-300">Show token</code>을 클릭하여 토큰 전체를 확인하고 복사하세요.</p>
                            <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-xl inline-block">
                                <p className="text-orange-300 font-medium flex items-center gap-2">
                                    <Key className="w-5 h-5" />
                                    이 토큰은 API 요청 시 Bearer Token으로 사용됩니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
