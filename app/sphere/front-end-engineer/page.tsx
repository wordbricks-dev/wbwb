import Image from 'next/image'
import type { NextPage } from 'next'

const FrontEndEngineerPage: NextPage = () => {
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
                  <h1 className="text-[#DAD6C8] text-3xl mb-4">Frontend Engineer</h1>
                  <p className="text-[#DAD6C8] italic mb-8">
                    San Francisco Bay Area · Global Offices or Remote Available
                  </p>
                  
                  <h2 className="text-[#DAD6C8] text-2xl mt-8 mb-6">Role</h2>
                  <div className="ml-0">
                    <h3 className="text-[#DAD6C8] text-xl mt-8 mb-4">Overview</h3>
                    <p className="text-[#DAD6C8] mb-4">
                      As a Front-End Engineer at Wordbricks, you will be responsible for designing, developing, and maintaining the front-end components of our web applications. You will collaborate closely with our design and back-end development teams to deliver visually appealing and highly functional user interfaces.
                    </p>

                    <h3 className="text-[#DAD6C8] text-xl mt-8 mb-4">Responsibilities</h3>
                    <ul className="text-[#DAD6C8] list-disc pl-5 mb-8">
                      <li>Building responsive and intuitive user interfaces for AI interactions</li>
                      <li>Optimize web applications for speed and performance.</li>
                      <li>Creating seamless integrations with various data sources and APIs</li>
                      <li>Developing real-time collaboration features and interactive visualizations</li>
                    </ul>

                    <h3 className="text-[#DAD6C8] text-xl mt-8 mb-4">Requirements</h3>
                    <ul className="text-[#DAD6C8] list-disc pl-5 mb-8">
                      <li>Over 2 years of web front-end experience: Next.js, Typescript, React Query</li>
                      <li>Rapid learning ability in the relevant technology stack</li>
                      <li>Ability to define tasks and collaborate effectively in uncertain situations</li>
                    </ul>

                    <h3 className="text-[#DAD6C8] text-xl mt-8 mb-4">Nice to Have</h3>
                    <ul className="text-[#DAD6C8] list-disc pl-5 mb-8">
                      <li>Back-End programming skills: Next.js API, NestJS, Typescript</li>
                      <li>Interest in LLM and Generative AI models</li>
                    </ul>
                  </div>

                  <div className="bg-newdim" style={{ height: '1px', margin: '60px 0' }} />

                  <h2 className="text-[#DAD6C8] text-2xl mt-8 mb-6">About</h2>
                  <div className="ml-0">
                    <h3 className="text-[#DAD6C8] text-xl mt-8 mb-4">Our Mission</h3>
                    <p className="text-[#DAD6C8] mb-4">
                      At Wordbricks, we believe AI shouldn't be locked away for tech experts— it should be for anyone who's ever sighed at cluttered files, copy-pasted the same thing 47 times, or spent hours wrangling messy data.
                    </p>
                    <p className="text-[#DAD6C8] mb-8">
                      We're a group of curious minds pushing limits and making work smarter. Our organization is flat, and our team is small and talent-dense. We particularly value creativity, passion, and a drive to make complex technology accessible to everyone.
                    </p>

                    <h3 className="text-[#DAD6C8] text-xl mt-8 mb-4">Why Join Us</h3>
                    <ul className="text-[#DAD6C8] list-disc pl-5 mb-8">
                      <li>Be part of a dynamic and forward-thinking team dedicated to technological innovation.</li>
                      <li>Access to cutting-edge technology and resources to support your professional growth.</li>
                      <li>Competitive compensation package and benefits.</li>
                      <li>A collaborative and inclusive work culture that values diversity and creativity.</li>
                    </ul>

                    <h3 className="text-[#DAD6C8] text-xl mt-8 mb-4">Benefits</h3>
                    <ul className="text-[#DAD6C8] list-disc pl-5 mb-8">
                      <li>100% Remote Work</li>
                      <li>Flexible Work Schedule</li>
                      <li>Annual International Workshop</li>
                      <li>Comprehensive Insurance Coverage and Retirement Benefits</li>
                    </ul>
                  </div>

                  <div className="bg-newdim" style={{ height: '1px', margin: '60px 0' }} />

                  <h2 className="text-[#DAD6C8] text-2xl mt-8 mb-6">Applying</h2>
                  <div className="ml-0">
                    <p className="text-[#DAD6C8] mb-4">
                      Does this role sound like a good fit? Email us at{' '}
                      <a href="mailto:hr@wordbricks.ai" className="text-[#DAD6C8] hover:text-white underline">
                        hr@wordbricks.ai
                      </a>
                    </p>
                    <p className="text-[#DAD6C8] mb-4">Please include:</p>
                    <ul className="text-[#DAD6C8] list-disc pl-5 mb-8">
                      <li>The role's title in your subject line</li>
                      <li>Your LinkedIn profile link or resume</li>
                      <li>Links that showcase the relevant things you've built and done</li>
                    </ul>
                  </div>
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

export default FrontEndEngineerPage 