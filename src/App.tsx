import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'

type Option = { label: string; detail: string; value: string }
type LabStep = { eyebrow: string; title: string; description: string; options: Option[] }

const labSteps: LabStep[] = [
  {
    eyebrow: '01 / FIND THE FRICTION',
    title: 'A lot of good food is going to waste.',
    description:
      'Local food providers have surplus food, while nearby people and community groups may need it. Before writing code, decide what problem you would investigate first.',
    options: [
      { value: 'discovery', label: 'People cannot find available food', detail: 'The supply exists, but it is hard to discover.' },
      { value: 'confidence', label: 'People need confidence in the exchange', detail: 'Clear identity, information and expectations matter.' },
      { value: 'coordination', label: 'The hand-off is difficult to coordinate', detail: 'A successful match still needs a clear next step.' },
    ],
  },
  {
    eyebrow: '02 / CHOOSE A FIRST MOVE',
    title: 'You have one focused sprint. What do you build first?',
    description:
      'A product cannot solve everything at once. Choose the capability that would make the first version useful and testable.',
    options: [
      { value: 'listing', label: 'A structured food listing flow', detail: 'Make available food easy to describe and browse.' },
      { value: 'verification', label: 'A verification and roles layer', detail: 'Make responsibilities and participation clearer.' },
      { value: 'claiming', label: 'A claim and tracking workflow', detail: 'Connect interest to an understandable hand-off.' },
    ],
  },
  {
    eyebrow: '03 / DEFINE THE SIGNAL',
    title: 'How would you know the experience is working?',
    description:
      'Choose the signal you would watch first. A useful product decision connects the feature to an outcome that can be observed.',
    options: [
      { value: 'claims', label: 'Food listings that get claimed', detail: 'Is the platform helping people act on available food?' },
      { value: 'handoffs', label: 'Claims that reach a completed hand-off', detail: 'Does the workflow carry through beyond the click?' },
      { value: 'trust', label: 'Participants who return and leave feedback', detail: 'Are people comfortable using the experience again?' },
    ],
  },
]

const decisionNotes: Record<string, string> = {
  discovery: 'Start with clarity: make the available supply understandable before adding complexity.',
  confidence: 'Start with confidence: people need clear roles and reliable information to participate.',
  coordination: 'Start with the hand-off: a match has little value if the next step is unclear.',
  listing: 'A structured listing creates the basic information that the rest of the workflow depends on.',
  verification: 'A clear participation model helps people understand who is involved and what they can do.',
  claiming: 'A claim flow turns browsing into an action and creates a path toward coordination.',
  claims: 'Claim activity is an early signal that listings are discoverable and relevant.',
  handoffs: 'Completed hand-offs connect product activity to the intended real-world outcome.',
  trust: 'Repeat participation and feedback can reveal whether the experience earns confidence.',
}

const skills = [
  {
    title: 'Frontend',
    description: 'Building usable interfaces and responsive experiences.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend & data',
    description: 'Connecting application logic, APIs and persistent data.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Firebase', 'Firestore', 'REST APIs'],
  },
  {
    title: 'AI & intelligent applications',
    description: 'Exploring AI capabilities and integrating them into useful products.',
    tags: ['Python', 'LLM integrations', 'AI APIs', 'Prompt design'],
  },
  {
    title: 'Mobile & developer tools',
    description: 'Prototyping mobile experiences and managing development workflows.',
    tags: ['Flutter', 'Dart', 'Git', 'GitHub', 'VS Code'],
  },
]

function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    ['About', '#about'],
    ['Capabilities', '#capabilities'],
    ['Selected work', '#work'],
    ['Product lab', '#lab'],
  ]

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Akshar Kakadiya, home">
        <span className="brand-mark">A<span>.</span></span>
        <span className="brand-name">AKSHAR KAKADIYA<small>FULL-STACK + AI DEVELOPER</small></span>
      </a>
      <nav className={`desktop-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={14} /></a>
      </nav>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  )
}

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return <div className="section-label"><span>{number}</span><i />{children}</div>
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <motion.div className="availability" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="availability-dot" /> FINAL-YEAR MCA · PES UNIVERSITY
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05 }}>
          I turn ideas<br />into <em>working</em> things<span className="period">.</span>
        </motion.h1>
        <motion.p className="hero-lede" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.15 }}>
          I'm Akshar — a full-stack developer exploring AI and building practical digital products. I enjoy moving from a messy problem to a solution people can actually use.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.25 }}>
          <a href="#work" className="button button-dark">Explore selected work <ArrowUpRight size={16} /></a>
          <a href="#lab" className="text-link">Try the Product Lab <ArrowDownRight size={16} /></a>
        </motion.div>
        <motion.div className="hero-footnote" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
          <span>BASED IN BENGALURU, INDIA</span><span className="footnote-line" /><span>OPEN TO TECHNICAL OPPORTUNITIES</span>
        </motion.div>
      </div>
      <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.96, rotate: 1.5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
        <div className="art-topline"><span>FIELD NOTES / 001</span><span>THINK · BUILD · REFINE</span></div>
        <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
        <div className="art-sun"><span>AK</span></div>
        <div className="art-cross cross-one" /><div className="art-cross cross-two" />
        <div className="art-sticker"><Sparkles size={15} /> PRODUCT<br />MINDED</div>
        <div className="art-bottomline"><span>IDEAS IN MOTION</span><span className="art-index">01 — 06</span></div>
      </motion.div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ChevronDown size={15} /></a>
      <div className="hero-side-note">BUILT WITH CURIOSITY, NOT JUST CODE</div>
    </section>
  )
}

const tickerItems = [
  'FULL-STACK ENGINEERING',
  'AI-POWERED IDEAS',
  'PRODUCT THINKING',
  'CONTINUOUS LEARNING',
]

function IntroStrip() {
  const stripRef = useRef<HTMLDivElement>(null)
  const groupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const strip = stripRef.current
    const group = groupRef.current
    if (!strip || !group) return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    let isUserInteracting = false
    let isPointerDown = false
    let startX = 0
    let startScrollLeft = 0
    let currentScroll = 0
    let resumeTimer: ReturnType<typeof setTimeout> | null = null
    let rafId: number | null = null
    let lastTime = performance.now()

    const onPointerDown = (e: PointerEvent) => {
      if (window.innerWidth > 768) return
      isPointerDown = true
      isUserInteracting = true
      startX = e.clientX
      startScrollLeft = strip.scrollLeft
      currentScroll = strip.scrollLeft
      if (resumeTimer) clearTimeout(resumeTimer)
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDown || window.innerWidth > 768) return
      const dx = e.clientX - startX
      strip.scrollLeft = startScrollLeft - dx
      currentScroll = strip.scrollLeft
    }

    const onPointerUp = () => {
      if (!isPointerDown) return
      isPointerDown = false
      currentScroll = strip.scrollLeft
      if (resumeTimer) clearTimeout(resumeTimer)
      resumeTimer = setTimeout(() => {
        isUserInteracting = false
        lastTime = performance.now()
      }, 1800)
    }

    const onTouchStart = () => {
      isUserInteracting = true
      currentScroll = strip.scrollLeft
      if (resumeTimer) clearTimeout(resumeTimer)
    }

    const onTouchEnd = () => {
      currentScroll = strip.scrollLeft
      if (resumeTimer) clearTimeout(resumeTimer)
      resumeTimer = setTimeout(() => {
        isUserInteracting = false
        lastTime = performance.now()
      }, 1800)
    }

    strip.addEventListener('pointerdown', onPointerDown, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerup', onPointerUp, { passive: true })
    strip.addEventListener('touchstart', onTouchStart, { passive: true })
    strip.addEventListener('touchend', onTouchEnd, { passive: true })
    strip.addEventListener('touchcancel', onTouchEnd, { passive: true })

    const speed = 28 // pixels per second

    const animate = (now: number) => {
      const delta = (now - lastTime) / 1000
      lastTime = now

      const isMobile = window.innerWidth <= 768
      const isReduced = mediaQuery.matches

      if (!isUserInteracting && isMobile && !isReduced) {
        const singleSetWidth = group.offsetWidth
        if (singleSetWidth > 0) {
          currentScroll += speed * delta
          if (currentScroll >= singleSetWidth * 2) {
            currentScroll -= singleSetWidth
          }
          strip.scrollLeft = currentScroll
        }
      } else {
        currentScroll = strip.scrollLeft
      }

      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      if (resumeTimer) clearTimeout(resumeTimer)
      strip.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      strip.removeEventListener('touchstart', onTouchStart)
      strip.removeEventListener('touchend', onTouchEnd)
      strip.removeEventListener('touchcancel', onTouchEnd)
    }
  }, [])

  return (
    <div className="intro-strip" aria-label="Core competencies ticker">
      <div className="strip-inner" ref={stripRef} tabIndex={0} role="region" aria-label="Scrollable skills ticker">
        <div className="strip-group" ref={groupRef}>
          {tickerItems.map((item, idx) => (
            <Fragment key={item}>
              <span>{item}</span>
              {idx < tickerItems.length - 1 ? <i>✳</i> : <i className="strip-star-end">✳</i>}
            </Fragment>
          ))}
        </div>
        <div className="strip-group strip-dup" aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <Fragment key={`dup1-${item}`}>
              <span>{item}</span>
              {idx < tickerItems.length - 1 ? <i>✳</i> : <i className="strip-star-end">✳</i>}
            </Fragment>
          ))}
        </div>
        <div className="strip-group strip-dup" aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <Fragment key={`dup2-${item}`}>
              <span>{item}</span>
              {idx < tickerItems.length - 1 ? <i>✳</i> : <i className="strip-star-end">✳</i>}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <section className="section-wrap section-block about-section" id="about">
      <div className="section-main">
        <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
        <h2>Curiosity starts it.<br /><span>Execution makes it real.</span></h2>
        <div className="about-text">
          <p>I'm Akshar Kakadiya, a final-year Master of Computer Applications student at PES University, Bengaluru. My work sits around full-stack development and exploring how AI can make applications more useful.</p>
          <p>I like understanding the problem behind a feature, making sensible technical choices, and building the complete experience — from the interface to the data and the details in between.</p>
          <p>I'm open to opportunities across software development and AI-focused application development where I can keep learning while contributing to products that solve real problems.</p>
        </div>
      </div>
      <aside className="about-aside">
        <div className="aside-index">A NOTE TO SELF / 2026</div>
        <div className="quote-mark">“</div>
        <p>Good software is not just what it can do. It's how clearly it solves the thing that matters.</p>
        <div className="aside-signature">— AKSHAR</div>
        <div className="aside-bottom"><span>MCA · PES UNIVERSITY</span><span>2025 — 2027</span></div>
      </aside>
    </section>
  )
}

function Capabilities() {
  return (
    <section className="capabilities-section" id="capabilities">
      <div className="section-wrap section-block">
        <div className="cap-heading">
          <div><SectionLabel number="02">WHAT I WORK WITH</SectionLabel><h2>Tools are useful.<br /><span>Knowing when to use them is better.</span></h2></div>
          <p>A working toolkit shaped by projects, coursework and experiments. These are areas I've used or explored — not a claim of mastery in every tool.</p>
        </div>
        <div className="skill-grid">
          {skills.map((skill, index) => (
            <motion.article className="skill-card" key={skill.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}>
              <div className="skill-number">0{index + 1}</div>
              <h3>{skill.title}</h3><p>{skill.description}</p>
              <div className="tag-list">{skill.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function MealShareVisual() {
  return (
    <div className="mealshare-showcase" aria-label="MealShare platform showcase">
      <div className="mealshare-frame">
        <img
          src="/mealshare/mealshare.png"
          alt="MealShare food-sharing platform showcase"
          className="mealshare-img"
          loading="lazy"
        />
      </div>
    </div>
  )
}

function ProjectCard({ number, type, title, description, stack, note, className = '' }: { number: string; type: string; title: string; description: string; stack: string[]; note: string; className?: string }) {
  return (
    <article className={`project-card ${className}`}>
      <div className="project-card-top"><span>{number} / {type}</span><span className="project-arrow"><ArrowUpRight size={17} /></span></div>
      <h3>{title}</h3><p>{description}</p>
      <div className="project-tags">{stack.map((item) => <span key={item}>{item}</span>)}</div>
      <div className="project-note"><span>BUILD NOTE</span>{note}</div>
    </article>
  )
}

function Work() {
  return (
    <section className="section-wrap section-block work-section" id="work">
      <div className="work-heading">
        <div><SectionLabel number="03">SELECTED WORK</SectionLabel><h2>Built to be <span>useful.</span></h2></div>
        <p>A few projects that show how I approach real needs, application workflows and technical trade-offs.</p>
      </div>
      <article className="featured-project">
        <div className="featured-copy">
          <div className="featured-top"><span>01 / FLAGSHIP PROJECT</span><span className="featured-status"><i /> DEPLOYED APPLICATION</span></div>
          <div className="project-kicker">FOOD-SHARING PLATFORM</div>
          <h3>Meal<span>Share</span></h3>
          <p className="featured-description">A platform designed to make surplus food easier to share by connecting food listings with people who can claim them.</p>
          <div className="feature-list">
            <div><Check size={15} /> Food listing and claiming</div>
            <div><Check size={15} /> Role-based user experience</div>
            <div><Check size={15} /> Live tracking and reviews</div>
            <div><Check size={15} /> User verification</div>
          </div>
          <div className="featured-footer">
            <div className="featured-links">
              <a href="https://mealshare-100.web.app/" className="button button-dark" target="_blank" rel="noreferrer">Live application <ArrowUpRight size={15} /></a>
              <a href="https://github.com/akshar-kakadiya/MealShare" className="text-link" target="_blank" rel="noreferrer"><Github size={15} /> Source code</a>
            </div>
            <span>END-TO-END PRODUCT BUILD</span>
          </div>
          <div className="meal-architecture"><b>IMPLEMENTATION NOTES</b><span>Spring Boot · PostgreSQL · PostGIS · Firebase authentication</span><small>Admin screens identify a Spring Boot/PostgreSQL backend, PostGIS-backed pickup functionality and Firebase ID-token authentication.</small></div>
        </div>
        <MealShareVisual />
      </article>
      <div className="secondary-projects">
        <ProjectCard
          number="02"
          type="HOSTEL / COMMUNITY MANAGEMENT"
          title="Chhatralay"
          description="A Flutter and Firebase-based system for managing Yuvak records and supporting morning and evening sabha attendance workflows in a hostel and mandir setting."
          stack={['Flutter', 'Firebase', 'Firestore', 'Dart']}
          note="Built around practical administration needs, role-aware access and attendance workflows."
        />
        <ProjectCard
          number="03"
          type="HACKATHON EXPERIMENT"
          title="Civic AI Assistant"
          description="An AI-powered civic assistant concept built during HackNight Bengaluru, exploring how conversational AI can help people navigate civic information."
          stack={['AI', 'Conversational interface', 'Hackathon']}
          note="A fast-paced build experience focused on applying AI to a public-facing problem."
        />
      </div>
      <p className="project-disclaimer">Project descriptions reflect the scope currently documented here. Ask for a demo or repository details for implementation specifics.</p>
    </section>
  )
}

function ProductLab() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [complete, setComplete] = useState(false)
  const active = labSteps[step]
  const selected = answers[step]

  const choose = (value: string) => {
    setAnswers((current) => {
      const next = current.slice(0, step)
      next[step] = value
      return next
    })
  }

  const next = () => {
    if (!selected) return
    if (step === labSteps.length - 1) setComplete(true)
    else setStep((current) => current + 1)
  }

  const restart = () => { setStep(0); setAnswers([]); setComplete(false) }

  return (
    <section className="lab-section" id="lab">
      <div className="section-wrap section-block">
        <div className="lab-heading">
          <div><SectionLabel number="04">THE INTERACTIVE FEATURE</SectionLabel><h2>The Product<br /><span>Thinking Lab.</span></h2></div>
          <div className="lab-heading-aside"><span className="lab-live-dot" /> A 60-SECOND PRODUCT EXERCISE<p>Try a small product challenge. There isn't one perfect answer — the point is to make a decision and understand its trade-off.</p></div>
        </div>
        <div className="lab-panel">
          <div className="lab-panel-head"><div><span className="lab-mono">FIELD EXERCISE / MEALSHARE</span><strong>FROM PROBLEM TO PRODUCT</strong></div><div className="lab-progress-label">{complete ? 'COMPLETE' : `STEP 0${step + 1} / 03`}</div></div>
          <div className="lab-progress"><span style={{ width: complete ? '100%' : `${((step + 1) / 3) * 100}%` }} /></div>
          <AnimatePresence mode="wait">
            {!complete ? (
              <motion.div className="lab-content" key={step} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.22 }}>
                <div className="lab-question"><span>{active.eyebrow}</span><h3>{active.title}</h3><p>{active.description}</p></div>
                <div className="lab-options">
                  {active.options.map((option, index) => (
                    <button key={option.value} className={`lab-option ${selected === option.value ? 'selected' : ''}`} onClick={() => choose(option.value)}>
                      <span className="option-index">0{index + 1}</span><span className="option-copy"><b>{option.label}</b><small>{option.detail}</small></span><span className="option-radio">{selected === option.value && <Check size={13} />}</span>
                    </button>
                  ))}
                </div>
                <div className="lab-controls"><span>{selected ? 'Decision selected — continue when ready.' : 'Choose one option to continue.'}</span><button className="button button-dark" disabled={!selected} onClick={next}>{step === 2 ? 'Reveal my approach' : 'Next decision'} <ArrowRight size={15} /></button></div>
              </motion.div>
            ) : (
              <motion.div className="lab-result" key="result" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <div className="result-icon"><Sparkles size={22} /></div><span className="lab-mono">YOUR PRODUCT DECISION TRAIL</span><h3>Every choice creates a direction.</h3>
                <p>You chose to focus on <b>{labSteps[0].options.find((o) => o.value === answers[0])?.label.toLowerCase()}</b>, begin with <b>{labSteps[1].options.find((o) => o.value === answers[1])?.label.toLowerCase()}</b>, and measure <b>{labSteps[2].options.find((o) => o.value === answers[2])?.label.toLowerCase()}</b>.</p>
                <div className="result-insights">
                  {answers.map((answer, index) => <div key={`${answer}-${index}`}><span>0{index + 1} / {labSteps[index].eyebrow.split('/ ')[1]}</span><b>{decisionNotes[answer]}</b></div>)}
                </div>
                <div className="mealshare-reveal"><span>WHAT THIS SAYS ABOUT HOW I BUILD</span><b>Start with the real friction. Build toward an outcome.</b><p>That is the product mindset behind MealShare: bring together food listings, claiming, user roles, verification, live tracking and reviews to support the journey from discovering surplus food to coordinating an exchange.</p><a href="#work">See the MealShare case study <ArrowUpRight size={14} /></a></div>
                <div className="lab-controls result-controls"><span>Want to explore a different decision path?</span><button className="button button-dark" onClick={restart}>Try again <ArrowRight size={15} /></button></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <p className="lab-footnote"><Zap size={14} /> BUILT AS A FRONTEND INTERACTION — NO SIGN-IN OR BACKEND REQUIRED.</p>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section className="section-wrap section-block journey-section" id="journey">
      <div><SectionLabel number="05">THE JOURNEY SO FAR</SectionLabel><h2>Learning by <span>building.</span></h2></div>
      <div className="journey-list">
        <div className="journey-item"><span>2025 — 2027</span><div><b>Master of Computer Applications</b><p>PES University · Bengaluru</p></div><small>IN PROGRESS</small></div>
        <div className="journey-item"><span>2022 — 2025</span><div><b>Bachelor of Computer Applications</b><p>CVM University · Gujarat</p></div><small>COMPLETED</small></div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <footer className="contact-section" id="contact">
      <div className="section-wrap contact-inner">
        <SectionLabel number="06">HAVE A GOOD PROBLEM?</SectionLabel>
        <div className="contact-main"><h2>Let's build<br /><em>something useful.</em></h2><div className="contact-actions"><p>I'm open to connecting about software development, AI applications, internships and interesting product ideas.</p><a className="button button-paper" href="mailto:aksharkakadiya437@gmail.com">Start a conversation <ArrowUpRight size={16} /></a></div></div>
        <div className="contact-bottom"><a className="footer-brand" href="#home">AKSHAR<span>.</span></a><div className="footer-links"><a href="mailto:aksharkakadiya437@gmail.com"><Mail size={15} /> Email</a><a href="https://github.com/akshar-kakadiya" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="https://www.linkedin.com/in/akshar-kakadiya-16a5b4273/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a></div><span className="copyright">© 2026 AKSHAR KAKADIYA · MADE WITH INTENTION</span></div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntroStrip />
        <About />
        <Capabilities />
        <Work />
        <ProductLab />
        <Journey />
      </main>
      <Contact />
      <a className="back-to-top" href="#home" aria-label="Back to top"><MoveUpRight size={17} /></a>
    </>
  )
}
