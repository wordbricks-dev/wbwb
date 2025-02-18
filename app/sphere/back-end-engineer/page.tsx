import Image from 'next/image'
import type { NextPage } from 'next'

const BackEndEngineerPage: NextPage = () => {
  return (
    <main className="bg-[#0A0A0A]">
      <div style={{ position: 'relative', minHeight: '100vh', width: '100%', overflow: 'visible' }}>
        <div>
          <div style={{ position: 'absolute', left: 0, top: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <div style={{ maxWidth: 'min(100%, 1200px)', position: 'relative' }}>
              <Image
                src="/wordbricks-sphere.jpg"
                alt="Wordbricks background"
                width={1800}
                height={900}
                priority
                style={{
                  maxWidth: 'min(100%, 1200px)',
                  opacity: 0.07,
                  transition: 'opacity 0.1s ease-in-out'
                }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                  linear-gradient(to bottom, transparent 70%, rgba(10, 10, 10, 1) 100%),
                  linear-gradient(to right, rgba(10, 10, 10, 1) 0%, transparent 15%, transparent 85%, rgba(10, 10, 10, 1) 100%)
                `,
                pointerEvents: 'none'
              }} />
            </div>
          </div>
          <div style={{ height: '150px' }} />
          <div className="px-6 flex-grow w-full grid place-content-center gap-12" style={{ paddingBottom: '140px' }}>
            <div style={{ maxWidth: '700px', display: 'flex', flexDirection: 'column', gap: '60px' }} className="select-all fadeFast">
              <div className="prose-invert prose-sm prose-ul:list-disc select-text z-10 paragraph" style={{ fontStyle: 'normal', fontSize: '16px' }}>
                <div>
                  <h1 className="text-[#DAD6C8] text-3xl mb-4">Backend Engineer</h1>
                  <p className="text-[#DAD6C8] italic mb-8">
                    San Francisco Bay Area · Global Offices or Remote Available
                  </p>
                  
                  <h2 className="text-[#DAD6C8] text-xl mt-8 mb-4">What we're looking for</h2>
                  <p className="text-[#DAD6C8] mb-4">
                    As a Backend Engineer at Wordbricks, you will be responsible for building and maintaining the core infrastructure that powers our AI-driven applications. You'll work on developing scalable services, implementing efficient APIs, and integrating AI models into our platform.
                  </p>

                  <h2 className="text-[#DAD6C8] text-xl mt-8 mb-4">Why Join Wordbricks?</h2>
                  <ul className="text-[#DAD6C8] list-disc pl-5 mb-8">
                    <li>Work with cutting-edge AI technologies and shape the future of work</li>
                    <li>Join a team of experienced engineers building innovative solutions</li>
                    <li>Competitive compensation package and benefits</li>
                    <li>Collaborative environment with direct impact on product direction</li>
                  </ul>

                  <h2 className="text-[#DAD6C8] text-xl mt-8 mb-4">Responsibilities</h2>
                  <ul className="text-[#DAD6C8] list-disc pl-5 mb-8">
                    <li>Design and implement scalable backend services and APIs</li>
                    <li>Optimize system performance and ensure high availability</li>
                    <li>Integrate and deploy AI models in production environments</li>
                    <li>Collaborate with frontend team to deliver seamless user experiences</li>
                    <li>Implement robust security measures and data protection</li>
                  </ul>

                  <h2 className="text-[#DAD6C8] text-xl mt-8 mb-4">Qualifications</h2>
                  <ul className="text-[#DAD6C8] list-disc pl-5 mb-8">
                    <li>3+ years of backend development experience with Node.js/TypeScript</li>
                    <li>Strong experience with REST APIs and microservices architecture</li>
                    <li>Proficiency in database design and optimization (SQL and NoSQL)</li>
                  </ul>

                  <h2 className="text-[#DAD6C8] text-xl mt-8 mb-4">Preferred Qualifications</h2>
                  <ul className="text-[#DAD6C8] list-disc pl-5 mb-8">
                    <li>Experience with AI/ML model deployment and integration</li>
                    <li>Knowledge of cloud platforms (AWS, GCP, or Azure)</li>
                    <li>Understanding of DevOps practices and CI/CD pipelines</li>
                  </ul>

                  <h2 className="text-[#DAD6C8] text-xl mt-8 mb-4">Benefits</h2>
                  <ul className="text-[#DAD6C8] list-disc pl-5 mb-8">
                    <li>100% Remote Work</li>
                    <li>Flexible Work Schedule</li>
                    <li>Annual International Workshop</li>
                    <li>Comprehensive Insurance Coverage and Retirement Benefits</li>
                  </ul>

                  <h2 className="text-[#DAD6C8] text-xl mt-8 mb-4">How to Apply</h2>
                  <p className="text-[#DAD6C8] mb-4">
                    Does this role sound like a good fit? Email us at{' '}
                    <a href="mailto:hr@wordbricks.ai" className="text-[#DAD6C8] hover:text-white underline">
                      hr@wordbricks.ai
                    </a>
                  </p>
                  <ul className="text-[#DAD6C8] list-disc pl-5 mb-8">
                    <li>Include the role's title in your subject line.</li>
                    <li>Include a LinkedIn profile link or resume.</li>
                    <li>Send along links that best showcase the relevant things you've built and done.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <footer>
              <div className="grid place-content-center">
                <div className="text-center text-xs text-[#DAD6C8]">
                  © 2025 Wordbricks. All rights reserved.
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BackEndEngineerPage 