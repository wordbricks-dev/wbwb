import Image from 'next/image'

export default function SpherePage() {
  return (
    <main className="bg-[#0A0A0A]">
      <div style={{ position: 'relative', minHeight: '100vh', width: '100%', overflow: 'visible' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <div style={{ maxWidth: 'min(100%, 1200px)', position: 'relative' }}>
            <Image
              src="/wordbricks-sphere.jpg"
              alt="Wordbricks Sphere"
              width={1800}
              height={900}
              priority
              style={{
                maxWidth: 'min(100%, 1200px)'
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
        <div style={{ height: '50px' }} />
        <div className="px-6 flex-grow w-full grid place-content-center gap-12" style={{ paddingBottom: '140px' }}>
          <div style={{ maxWidth: '700px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <h1 className="lg:text-3xl text-2xl leading-normal fade0 text-[#DAD6C8]" style={{ lineHeight: '1.8' }}>
              AI That Works Like You Think
            </h1>
            <div className="paragraph" style={{ textAlign: 'left' }}>
              <span className="fade1">
                Engineers have AI copilots to write code. Where's the AI sidekick for the rest of us?
              </span>
              <br /><br />
              <span className="fade2">
                At Wordbricks, we believe AI shouldn't be locked away for tech experts— it should be for anyone who's ever sighed at cluttered files, copy-pasted the same thing 47 times, or spent hours wrangling messy data.
              </span>
              <br /><br />
              <span className="fade3">
                We started with a simple idea: what if anyone could build their own tools and workflows without writing a single line of code? That led to our AI-powered workspace that gets things done for you. It's like having an extra set of hands, but way faster.
              </span>
              <br /><br />
              <span className="fade4">
                Less typing, more doing. Less frustration, more flow. Let's build a future where we could work at the speed of thought. If this excites you, we'd love to have you on our team.
              </span>
              <br /><br /><br />
              <div className="bg-newdim fade6" style={{ height: '1px' }} />
              <div style={{ height: '15px' }} />
              <br />
              <div className="flex flex-col gap-1">
                <h3 className="lg:text-xl text-lg leading-normal fade6" style={{ lineHeight: '1.8' }}>
                  <span>
                    Careers
                  </span>
                </h3>
                <table className="min-w-full fade7">
                  <tbody>
                    <tr className="flex justify-between items-center gap-3">
                      <td className="py-2 whitespace-nowrap text-sm cursor-pointer">
                        <a 
                          href="/sphere/front-end-engineer"
                          className="hover:text-white hover:underline transition-colors"
                        >
                          Frontend Engineer
                        </a>
                      </td>
                      <td className="py-2 whitespace-nowrap text-sm font-medium text-newtexthover">San Francisco</td>
                    </tr>
                    <tr className="flex justify-between items-center gap-3">
                      <td className="py-2 whitespace-nowrap text-sm cursor-pointer">
                        <a 
                          href="/sphere/back-end-engineer"
                          className="hover:text-white hover:underline transition-colors"
                        >
                          Backend Engineer
                        </a>
                      </td>
                      <td className="py-2 whitespace-nowrap text-sm font-medium text-newtexthover">San Francisco</td>
                    </tr>
                    <tr className="flex justify-between items-center gap-3">
                      <td className="py-2 whitespace-nowrap text-sm cursor-pointer">
                        <a 
                          href="/sphere/machine-learning-engineer"
                          className="hover:text-white hover:underline transition-colors"
                        >
                          Machine Learning Engineer
                        </a>
                      </td>
                      <td className="py-2 whitespace-nowrap text-sm font-medium text-newtexthover">San Francisco</td>
                    </tr>
                  </tbody>
                </table>
                <div className="min-w-full fade8" style={{ marginTop: '48px' }}>
                  Please email your resume and a note on a project you're proud of to{' '}
                  <a href="mailto:hr@wordbricks.ai">hr@wordbricks.ai</a>.
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