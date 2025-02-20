"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"

interface Character {
  char: string
  x: number
  y: number
  speed: number
  isWord?: boolean
}

class TextScramble {
  el: HTMLElement
  chars: string
  queue: Array<{
    from: string
    to: string
    start: number
    end: number
    char?: string
  }>
  frame: number
  frameRequest: number
  resolve: (value: void | PromiseLike<void>) => void

  constructor(el: HTMLElement) {
    this.el = el
    this.chars = "!<>-_\\/[]{}—=+*^?#"
    this.queue = []
    this.frame = 0
    this.frameRequest = 0
    this.resolve = () => {}
    this.update = this.update.bind(this)
  }

  setText(newText: string) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise<void>((resolve) => (this.resolve = resolve))
    this.queue = []

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ""
      const to = newText[i] || ""
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }

    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  update() {
    let output = ""
    let complete = 0

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)]
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }

    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
}

const ScrambledTitle: React.FC = () => {
  const elementRef = useRef<HTMLHeadingElement>(null)
  const scramblerRef = useRef<TextScramble | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (elementRef.current && !scramblerRef.current) {
      scramblerRef.current = new TextScramble(elementRef.current)
      setMounted(true)
    }
  }, [])

  useEffect(() => {
    if (mounted && scramblerRef.current) {
      const phrases = [
        "Wordbricks",
        "AI for everyone",
        "Type Less, Do More",
        "The future of work",
        "The future is now",
        "Join us",
      ]

      let counter = 0
      const next = () => {
        if (scramblerRef.current) {
          scramblerRef.current.setText(phrases[counter]).then(() => {
            setTimeout(next, 2000)
          })
          counter = (counter + 1) % phrases.length
        }
      }

      next()
    }
  }, [mounted])

  return (
    <h1
      ref={elementRef}
      className="text-white text-2xl md:text-5xl lg:text-6xl font-bold tracking-wider justify-center text-center whitespace-nowrap px-2"
      style={{ fontFamily: "monospace", minWidth: "80vw" }}
    >
      AI Starts Here
    </h1>
  )
}

const RainingLetters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set())
  const secondPageRef = useRef<HTMLDivElement>(null)

  const createCharacters = useCallback(() => {
    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@$+=WORDBRICKS?"
    const words = [
      "Chris", "Evan", "Hailey", "Jay",
      "Kevin", "Ian", "Aerin",
      "AI", "ML", "LLM", "DNN", "CNN", "NLP", "RL",
      "Chat", "API", "SDK", "Cyber", "VC", "PE",
      "Startup", "GenAI", "VR", "AR", "Smart",
      "AGI", "ASI"
    ]
    const charCount = 300
    const wordCount = 15
    const newCharacters: Character[] = []

    for (let i = 0; i < charCount; i++) {
      newCharacters.push({
        char: allChars[Math.floor(Math.random() * allChars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.1 + Math.random() * 0.3,
        isWord: false
      })
    }

    for (let i = 0; i < wordCount; i++) {
      newCharacters.push({
        char: words[Math.floor(Math.random() * words.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.05 + Math.random() * 0.15,
        isWord: true
      })
    }

    return newCharacters
  }, [])

  useEffect(() => {
    setCharacters(createCharacters())
  }, [createCharacters])

  useEffect(() => {
    const updateActiveIndices = () => {
      const newActiveIndices = new Set<number>()
      const numActive = Math.floor(Math.random() * 3) + 3
      for (let i = 0; i < numActive; i++) {
        newActiveIndices.add(Math.floor(Math.random() * characters.length))
      }
      setActiveIndices(newActiveIndices)
    }

    const flickerInterval = setInterval(updateActiveIndices, 50)
    return () => clearInterval(flickerInterval)
  }, [characters.length])

  useEffect(() => {
    let animationFrameId: number

    const updatePositions = () => {
      setCharacters((prevChars) =>
        prevChars.map((char) => ({
          ...char,
          y: char.y + char.speed,
          ...(char.y >= 100 && {
            y: -5,
            x: Math.random() * 100,
            char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"[
              Math.floor(Math.random() * "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?".length)
            ],
          }),
        })),
      )
      animationFrameId = requestAnimationFrame(updatePositions)
    }

    animationFrameId = requestAnimationFrame(updatePositions)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const halfHeight = windowHeight / 2

      if (scrollPosition > 0 && scrollPosition < windowHeight) {
        if (scrollPosition < halfHeight) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        } else {
          window.scrollTo({
            top: windowHeight,
            behavior: 'smooth'
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative snap-y snap-mandatory h-screen overflow-y-auto">
      {/* First Page */}
      <div className="relative w-full h-screen bg-black overflow-hidden snap-start">
        {/* Title */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full px-4">
          <ScrambledTitle />
        </div>

        {/* Learn More Link */}
        <div className="absolute bottom-16 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <a
            onClick={() => {
              secondPageRef.current?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-gray-400 text-base md:text-lg hover:underline cursor-pointer animate-shine select-none"
          >
            Learn More
          </a>
        </div>

        {/* Raining Characters */}
        {characters.map((char, index) => (
          <span
            key={index}
            className={`absolute text-xs transition-colors duration-100 ${
              activeIndices.has(index)
                ? "text-[#00ff00] text-base scale-125 z-10 font-bold animate-pulse"
                : "text-slate-600 font-light"
            }`}
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              transform: `translate(-50%, -50%) ${activeIndices.has(index) ? "scale(1.25)" : "scale(1)"}`,
              textShadow: activeIndices.has(index)
                ? "0 0 8px rgba(255,255,255,0.8), 0 0 12px rgba(255,255,255,0.4)"
                : "none",
              opacity: activeIndices.has(index) ? 1 : 0.4,
              transition: "color 0.1s, transform 0.1s, text-shadow 0.1s",
              willChange: "transform, top",
              fontSize: char.isWord ? "2rem" : "1.8rem",
              fontWeight: char.isWord ? "500" : "normal",
            }}
          >
            {char.char}
          </span>
        ))}
      </div>

      {/* Second Page */}
      <div ref={secondPageRef} className="relative w-full h-screen bg-black flex flex-col items-center justify-center px-4 md:px-8 pb-16 md:pb-8 snap-start"
        style={{
          background: 'linear-gradient(to bottom, #000000, #111111)'
        }}
      >
        <div className="max-w-[720px] w-full mx-auto opacity-0 animate-fadeIn">
          <h2 className="text-white text-lg md:text-2xl mb-6 text-left font-bold animate-slideUp">
            AI That Works Like You Think
          </h2>
          <p className="text-gray-400 text-sm md:text-lg text-left leading-relaxed space-y-4 md:space-y-6 font-normal">
            <span className="block mb-4 md:mb-6 opacity-0 animate-slideUpDelayed1">
              Engineers have AI copilots to write code. Where's the AI sidekick for the rest of us?
            </span>
            <span className="block mb-4 md:mb-6 opacity-0 animate-slideUpDelayed2">
              At Wordbricks, we believe AI shouldn't be locked away for tech experts— it should be for anyone who's ever sighed at cluttered files, copy-pasted the same thing 47 times, or spent hours wrangling messy data.
            </span>
            <span className="block mb-4 md:mb-6 opacity-0 animate-slideUpDelayed3">
              We started with a simple idea: what if anyone could build their own tools and workflows without writing a single line of code? That led to our AI-powered workspace that gets things done for you. It's like having an extra set of hands, but way faster.
            </span>
            <span className="block opacity-0 animate-slideUpDelayed4">
              Less typing, more doing. Less frustration, more flow. Let's build a future where we could work at the speed of thought. If this excites you, we'd love to have you on our team.
            </span>
          </p>
        </div>
      </div>

      {/* Third Page - Job Board */}
      <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center px-4 md:px-8 pb-20 md:pb-8 snap-start overflow-y-auto md:overflow-y-visible"
        style={{
          background: 'linear-gradient(to bottom, #000000, #111111)'
        }}
      >
        {/* Main content container */}
        <div className="max-w-[720px] w-full mx-auto flex flex-col justify-center flex-1">
          {/* Job board content */}
          <div className="opacity-0 animate-fadeIn">
            <h2 className="text-white text-lg md:text-2xl mb-4 text-left font-bold animate-slideUp">
              Careers
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 text-left opacity-0 animate-slideUpDelayed1">
              Wordbricks is a team of curious minds pushing limits and making work smarter. Bring your awesomeness—let's shape the future together!
            </p>
            <div className="space-y-4 md:space-y-6">
              <div className="group cursor-pointer opacity-0 animate-slideUpDelayed2">
                <a 
                  href="https://www.wordbricks.ai/sphere/front-end-enginee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-white text-base md:text-lg font-medium group-hover:text-green-400 transition-colors">
                    Frontend Engineer
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm mt-1 md:mt-2">
                    San Francisco Bay Area
                  </p>
                </a>
              </div>

              <div className="group cursor-pointer opacity-0 animate-slideUpDelayed3">
                <a 
                  href="https://www.wordbricks.ai/sphere/back-end-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-white text-base md:text-lg font-medium group-hover:text-green-400 transition-colors">
                    Backend Engineer
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm mt-1 md:mt-2">
                    San Francisco Bay Area
                  </p>
                </a>
              </div>

              <div className="group cursor-pointer opacity-0 animate-slideUpDelayed4">
                <a 
                  href="https://www.wordbricks.ai/sphere/machine-learning-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-white text-base md:text-lg font-medium group-hover:text-green-400 transition-colors">
                    Machine Learning Engineer
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm mt-1 md:mt-2">
                    San Francisco Bay Area
                  </p>
                </a>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm md:text-base mt-8 md:mt-12 text-left opacity-0 animate-slideUpDelayed6">
              Please email your resume and a note on a project you're proud of to{' '}
              <a 
                href="mailto:hr@wordbricks.ai" 
                className="text-gray-300 hover:text-gray-100 transition-colors underline"
              >
                hr@wordbricks.ai
              </a>
            </p>
          </div>
        </div>

        {/* Copyright text - moved to bottom with more padding on mobile */}
        <div className="py-4 pb-12 md:pb-8 max-w-[720px] w-full opacity-0 animate-slideUpDelayed7">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-xs">
              © 2025 Wordbricks. All rights reserved.
            </p>
            <a 
              href="https://www.linkedin.com/company/wordbricks/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-xs hover:text-gray-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .dud {
          color: #0f0;
          opacity: 0.7;
        }

        @keyframes shine {
          0% {
            text-shadow: none;
            color: #9ca3af;
          }
          50% {
            text-shadow: 0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3);
            color: #e5e7eb;
          }
          100% {
            text-shadow: none;
            color: #9ca3af;
          }
        }

        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          overflow-y: auto;
          overscroll-behavior-y: contain;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slideUpDelayed1 {
          animation: slideUp 0.8s ease-out 0.2s forwards;
        }

        .animate-slideUpDelayed2 {
          animation: slideUp 0.8s ease-out 0.4s forwards;
        }

        .animate-slideUpDelayed3 {
          animation: slideUp 0.8s ease-out 0.6s forwards;
        }

        .animate-slideUpDelayed4 {
          animation: slideUp 0.8s ease-out 0.8s forwards;
        }

        .animate-slideUpDelayed5 {
          animation: slideUp 0.8s ease-out 1s forwards;
        }

        .animate-slideUpDelayed6 {
          animation: slideUp 0.8s ease-out 1.2s forwards;
        }

        .animate-slideUpDelayed7 {
          animation: slideUp 0.8s ease-out 1.4s forwards;
        }
      `}</style>
    </div>
  )
}

export default RainingLetters
