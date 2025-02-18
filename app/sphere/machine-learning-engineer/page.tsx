import Image from 'next/image'
import type { NextPage } from 'next'

const MachineLearningEngineerPage: NextPage = () => {
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
                  <h1 className="text-[#DAD6C8] text-3xl mb-4">Machine Learning Engineer</h1>
                  <p className="text-[#DAD6C8] italic mb-8">
                    San Francisco Bay Area · Global Offices or Remote Available
                  </p>
                  
                  <h2 className="text-[#DAD6C8] text-xl mt-8 mb-4">What we're looking for</h2>
                  <p className="text-[#DAD6C8] mb-4">
                    As a Machine Learning Engineer at Wordbricks, you will be at the forefront of developing and implementing AI solutions that make complex tasks simple and intuitive for users. You'll work on creating and optimizing ML models that power our next-generation productivity tools.
                  </p>

                  <h2 className="text-[#DAD6C8] text-xl mt-8 mb-4">Responsibilities</h2>
                  <ul className="text-[#DAD6C8] list-disc pl-5 mb-8">
                    <li>Design and implement ML models for various natural language processing tasks</li>
                    <li>Optimize model performance and inference speed for production environments</li>
                    <li>Develop and maintain ML pipelines for training and deployment</li>
                    <li>Collaborate with frontend and backend teams to integrate AI features</li>
                  </ul>

                  <h2 className="text-[#DAD6C8] text-xl mt-8 mb-4">Qualifications</h2>
                  <ul className="text-[#DAD6C8] list-disc pl-5 mb-8">
                    <li>3+ years of experience in machine learning engineering</li>
                    <li>Strong background in deep learning and natural language processing</li>
                    <li>Proficiency in Python and ML frameworks (PyTorch, TensorFlow)</li>
                    <li>Experience with large language models and their applications</li>
                  </ul>

                  <h2 className="text-[#DAD6C8] text-xl mt-8 mb-4">Preferred Qualifications</h2>
                  <ul className="text-[#DAD6C8] list-disc pl-5 mb-8">
                    <li>Experience with LLM fine-tuning and prompt engineering</li>
                    <li>Knowledge of ML systems design and scalable inference</li>
                    <li>Background in software engineering and production systems</li>
                  </ul>

                  <div className="bg-newdim" style={{ height: '1px', margin: '60px 0' }} />

                  <h2 className="text-[#DAD6C8] text-xl mt-8 mb-4">About Wordbricks</h2>
                  <p className="text-[#DAD6C8] mb-4">
                    At Wordbricks, we believe AI shouldn't be locked away for tech experts— it should be for anyone who's ever sighed at cluttered files, copy-pasted the same thing 47 times, or spent hours wrangling messy data.
                  </p>
                  <p className="text-[#DAD6C8] mb-8">
                    We're a group of curious minds pushing limits and making work smarter. Our organization is flat, and our team is small and talent-dense. We particularly value creativity, passion, and a drive to make complex technology accessible to everyone.
                  </p>

                  <h2 className="text-[#DAD6C8] text-xl mt-8 mb-4">Why Join Wordbricks?</h2>
                  <ul className="text-[#DAD6C8] list-disc pl-5 mb-8">
                    <li>Be part of a dynamic and forward-thinking team dedicated to technological innovation.</li>
                    <li>Access to cutting-edge technology and resources to support your professional growth.</li>
                    <li>Competitive compensation package and benefits.</li>
                    <li>A collaborative and inclusive work culture that values diversity and creativity.</li>
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

export default MachineLearningEngineerPage 