import { Database, Info, Terminal } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PostgreSQL Integration - Velen',
    description: 'Guide to connecting your PostgreSQL database to Velen.',
};

export default function PostgresGuidePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30 pb-32">
            {/* Header */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(6,182,212,0.15),transparent_50%)]" />
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 animate-in fade-in zoom-in duration-700">
                    <div className="inline-flex items-center gap-2 text-cyan-400 font-medium bg-cyan-500/10 px-4 py-1.5 rounded-full text-sm mb-4 border border-cyan-500/20">
                        <Database className="w-4 h-4" />
                        <span>설정 가이드</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
                        PostgreSQL 연동 가이드
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                        PostgreSQL 데이터베이스의 연결 정보(Host, DB Name 등)를 확인하고 읽기 전용 사용자를 생성해 주세요.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 space-y-24">

                {/* Step 1 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 relative z-10">
                        <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-cyan-500/20 shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)]">
                            1
                        </div>
                        <h2 className="text-3xl font-bold">읽기 전용 사용자 생성</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>데이터베이스의 안전을 위해 Velen 전용 읽기 권한 사용자를 생성하는 것을 권장합니다.</p>
                            <p>다음 SQL 명령어를 실행하여 사용자를 생성하고 권한을 부여하세요.</p>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
                                <Terminal className="w-4 h-4 text-slate-500" />
                                <span className="text-xs font-mono text-slate-500">SQL Editor</span>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="text-sm font-mono text-cyan-300">
                                    {`-- 사용자 생성
CREATE USER velen_readonly WITH PASSWORD 'secure_password';

-- 읽기 권한 부여
GRANT CONNECT ON DATABASE your_database TO velen_readonly;
GRANT USAGE ON SCHEMA public TO velen_readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO velen_readonly;

-- 향후 생성될 테이블에도 권한 자동 부여 (선택)
ALTER DEFAULT PRIVILEGES IN SCHEMA public 
GRANT SELECT ON TABLES TO velen_readonly;`}
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/postgresql/step1_create_user.png"
                            alt="PostgreSQL Create User SQL"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full h-auto shadow-2xl"
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="group relative grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative group-hover:-translate-y-2 transition-transform duration-500">
                        <img
                            src="/images/postgresql/step2_connection.png"
                            alt="PostgreSQL Connection Form"
                            className="rounded-xl border border-slate-700 bg-slate-900 w-full h-auto shadow-2xl"
                        />
                    </div>
                    <div className="space-y-6 md:order-2">
                        <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center font-bold text-xl border border-blue-500/20 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]">
                            2
                        </div>
                        <h2 className="text-3xl font-bold">연결 정보 확인</h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>다음 정보를 준비해 주세요:</p>
                            <ul className="list-disc list-inside space-y-2 marker:text-cyan-500">
                                <li><strong>Host</strong>: 데이터베이스 주소 (예: db.example.com)</li>
                                <li><strong>Port</strong>: 기본값은 <code className="text-cyan-300">5432</code> 입니다.</li>
                                <li><strong>Database Name</strong>: 연결할 데이터베이스 이름</li>
                                <li><strong>Username</strong>: <code className="text-cyan-300">velen_readonly</code></li>
                                <li><strong>Password</strong>: 설정한 비밀번호</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
