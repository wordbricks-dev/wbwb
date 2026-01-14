import { MousePointer2, Info, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How to get Google Ads Developer Token - Velen',
    description: 'Guide to obtaining a Google Ads Developer Token and Customer ID.',
};

export default function GoogleAdsGuidePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-yellow-500/30 pb-32">
            {/* Header */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(234,179,8,0.15),transparent_50%)]" />
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-flex items-center gap-2 text-yellow-500 font-medium bg-yellow-500/10 px-4 py-1.5 rounded-full text-sm mb-4 border border-yellow-500/20">
                        <MousePointer2 className="w-4 h-4" />
                        <span>설정 가이드</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
                        Google Ads 연동 가이드
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        Google Ads API 사용을 위해 Developer Token과 Customer ID를 확인해 주세요.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 space-y-24">

                {/* Step 1 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 relative z-10">
                        <div className="w-12 h-12 bg-yellow-500/20 text-yellow-500 rounded-2xl flex items-center justify-center font-bold text-xl border border-yellow-500/20 shadow-[0_0_20px_-5px_rgba(234,179,8,0.3)]">
                            1
                        </div>
                        <h2 className="text-3xl font-bold">Developer Token 확인</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                <a href="https://ads.google.com" target="_blank" rel="noreferrer" className="text-yellow-500 hover:text-yellow-400 underline underline-offset-4 transition-colors">Google Ads 관리자 계정(MCC)</a>에 로그인하세요.
                            </p>
                            <p>상단 메뉴에서 <strong>도구 및 설정(Tools & Settings)</strong> &gt; <strong>설정(Setup)</strong> &gt; <strong>API 센터(API Center)</strong>로 이동하세요.</p>
                            <p>API 사용 신청을 하지 않았다면 양식을 작성하여 제출하세요.</p>
                            <p>승인 대기 중(Pending) 상태라도 <strong>Developer Token</strong>을 복사하여 사용할 수 있습니다.</p>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/google-ads/step1_developer_token.png"
                            alt="Google Ads API Center"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full h-auto shadow-2xl"
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/google-ads/step2_customer_id.png"
                            alt="Google Ads Customer ID"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full h-auto shadow-2xl"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-orange-500/20 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]">
                            2
                        </div>
                        <h2 className="text-3xl font-bold">Customer ID 확인</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>Google Ads 계정의 우측 상단을 확인하세요.</p>
                            <p>
                                <strong>XXX-XXX-XXXX</strong> 형식의 10자리 숫자가 <strong>Customer ID</strong>입니다.
                            </p>
                            <p>이 ID는 하이픈(-)을 제외하고 입력해야 할 수도 있습니다.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
