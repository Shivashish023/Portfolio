import { useEffect, useState } from 'react'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const SKILL_PILLS = ['MERN', 'Java', 'Kafka', 'WebSockets', 'React', 'Docker']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-300 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="animate-glow absolute -left-1/4 top-0 h-[520px] w-[520px] rounded-full bg-teal-500/20 blur-[120px]" />
        <div className="absolute right-[-20%] top-[30%] h-[380px] w-[380px] rounded-full bg-violet-600/15 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[280px] w-[480px] rounded-full bg-cyan-500/10 blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 75%)',
          }}
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4">
          <a
            href="#top"
            className="group flex items-center gap-2 text-sm font-medium tracking-tight text-zinc-100 transition hover:text-teal-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-teal-500/35 bg-teal-500/10 text-xs font-semibold text-teal-300 transition group-hover:border-teal-400/60">
              SS
            </span>
            <span className="hidden sm:inline">Shivashish</span>
          </a>

          <nav
            className={`absolute right-5 top-full mt-2 flex w-52 flex-col gap-0.5 rounded-xl border border-zinc-800 bg-zinc-900/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-md md:static md:mt-0 md:flex md:w-auto md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${menuOpen ? 'flex' : 'hidden md:flex'}`}
            aria-label="Main"
          >
            {NAV.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-100 md:px-3 md:py-2 md:hover:bg-zinc-800/80 md:hover:text-teal-300"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700/80 bg-zinc-900/50 text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-800 md:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 pb-24 pt-12 md:pt-16">
        <section id="top" className="mb-20 scroll-mt-24 md:mb-28">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-zinc-950 p-6 shadow-2xl shadow-black/40 md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/4 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
              <div className="max-w-xl">
                <p className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-400/95">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                  Available for work
                </p>
                <h1 className="animate-fade-up-delay-1 mb-4 text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl lg:text-[3.25rem] md:leading-[1.08]">
                  <span className="bg-gradient-to-br from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent">
                    Shivashish Saklani
                  </span>
                </h1>
                <p className="animate-fade-up-delay-2 text-lg leading-relaxed text-zinc-400 md:text-xl">
                  Full-stack developer building scalable web apps, real-time features, and event-driven systems.
                </p>
                <p className="animate-fade-up-delay-2 mt-3 text-sm text-zinc-500">Dehradun, Uttarakhand</p>
                <div className="animate-fade-up-delay-2 mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://drive.google.com/drive/folders/1n79tSTUxopbhXERgnM72j1dS_ZTplWpb"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-teal-500/25 bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-200 shadow-sm shadow-black/20 transition hover:border-teal-400/40 hover:bg-teal-500/15"
                  >
                    Resume
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
                <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-2">
                  {SKILL_PILLS.map((label) => (
                    <span
                      key={label}
                      className="rounded-lg border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-400"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto flex shrink-0 md:mx-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/20 to-violet-600/20 blur-xl" />
                <div className="relative flex aspect-square w-[200px] flex-col items-center justify-center rounded-2xl border border-zinc-700/50 bg-zinc-900/80 p-6 shadow-inner shadow-black/20 backdrop-blur sm:w-[220px]">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-zinc-600/50 bg-gradient-to-br from-zinc-800 to-zinc-950 text-2xl font-semibold tracking-tight text-teal-300 shadow-lg">
                    SS
                  </div>
                  <p className="text-center text-xs font-medium text-zinc-500">Full-stack &amp; product-minded</p>
                  <div className="mt-4 flex gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" index="01" title="About">
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 shadow-lg shadow-black/20 backdrop-blur-sm md:p-8">
            <p className="text-[15px] leading-relaxed text-zinc-300 md:text-base">
              I work across the stack with the MERN ecosystem, WebSockets for realtime, and Kafka for
              event-driven services. I care about solid data structures, clear architecture, and performance
              where it matters.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-300 md:text-base">
              I enjoy shipping thoughtful interfaces and reliable backends, and I’m always looking for ways to
              make systems easier to run and evolve.
            </p>
            <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Extracurricular
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-300 md:text-base">
              I served as <span className="text-zinc-200">Joint Secretary</span> of the Sports Society—coordinating
              events, working with teams, and helping organize intra- and inter-college competitions. That role
              sharpened how I communicate, plan under pressure, and bring people together around shared goals.
            </p>
          </div>
        </Section>

        <Section id="work" index="02" title="Work">
          <ul className="relative space-y-5 before:absolute before:left-[11px] before:top-3 before:h-[calc(100%-20px)] before:w-px before:bg-gradient-to-b before:from-teal-500/50 before:via-zinc-700 before:to-zinc-800 md:before:left-[13px]">
            <WorkItem
              role="Frontend Developer Intern"
              company="Precyz AI · Bangalore"
              period="Jun 2025 — Jul 2025"
              detail="Worked on an ML observability product: React dashboards for metrics, drift, and predictions, plus responsive project-management UI. Collaborated via Git and helped containerize services with Docker."
            />
          </ul>
        </Section>

        <Section id="projects" index="03" title="Projects">
          <ul className="grid gap-4 sm:grid-cols-2">
            <ProjectCard
              title="EDOS"
              tag="Backend"
              desc="Event-driven order processing with microservices, Kafka, and MongoDB—inventory and payment flows stay in sync."
              githubHref="https://github.com/Shivashish023/EDOS"
            />
            <ProjectCard
              title="CHAP"
              tag="Realtime"
              desc="Chat app with Socket.io: direct and group rooms, presence, and live timestamps."
              githubHref="https://github.com/Shivashish023/CHAP"
            />
            <ProjectCard
              title="NextBlog"
              tag="Full-stack"
              desc="Blog CRUD on Next.js with Clerk auth, ShadCN UI, Tailwind, and MongoDB."
              githubHref="https://github.com/Shivashish023/NextBlog"
            />
          </ul>
        </Section>

        <Section id="education" index="04" title="Education">
          <div className="grid gap-5 md:grid-cols-2">
            <EducationCard
              accent="teal"
              degree="B.Tech, Computer Science & Engineering"
              place="IIIT Bhubaneswar · 2023 — 2027 (expected)"
            >
              CGPA 7.57.
            </EducationCard>
            <EducationCard
              accent="zinc"
              degree="Higher secondary — PCM with Computer Science"
              place="Summer Valley School, Dehradun"
            />
          </div>
        </Section>

        <Section id="skills" index="05" title="Skills">
          <div className="grid gap-3 sm:grid-cols-2">
            <SkillRow label="Languages" value="C++, Java, JavaScript, SQL" />
            <SkillRow label="Frontend" value="React, Next.js, HTML, CSS, Tailwind, Bootstrap" />
            <SkillRow label="Backend" value="Node.js, Express.js" />
            <SkillRow label="Data" value="MongoDB, PostgreSQL" />
            <SkillRow label="Tools" value="Git, Docker, Kafka, REST APIs" />
          </div>
        </Section>

        <Section id="contact" index="06" title="Contact">
          <div className="rounded-2xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900/50 to-zinc-950 p-6 md:p-8">
            <p className="max-w-lg text-[15px] leading-relaxed text-zinc-300 md:text-base">
              Best reached by email or LinkedIn.
            </p>
            <p className="mt-4 text-sm text-zinc-500">
              Email{' '}
              <a
                href="mailto:shivashish.saklani@gmail.com"
                className="font-medium text-teal-400/95 underline decoration-teal-500/30 underline-offset-4 transition hover:text-teal-300 hover:decoration-teal-400/50"
              >
                shivashish.saklani@gmail.com
              </a>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ContactChip href="https://github.com/Shivashish023" label="GitHub" external icon="github" />
              <ContactChip
                href="https://linkedin.com/in/shivashish-saklani"
                label="LinkedIn"
                external
                icon="linkedin"
              />
            </div>
          </div>
        </Section>

        <footer className="mt-16 flex flex-col items-center gap-3 border-t border-zinc-800/80 pt-10 text-center">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
          <p className="text-xs text-zinc-600">© {new Date().getFullYear()} Shivashish Saklani</p>
        </footer>
      </main>
    </div>
  )
}

function Section({ id, index, title, children }) {
  return (
    <section id={id} className="mb-16 scroll-mt-24 md:mb-24">
      <div className="mb-6 flex flex-wrap items-end gap-4 border-b border-zinc-800/60 pb-4">
        <span className="font-mono text-xs text-teal-500/80">{index}</span>
        <h2 className="text-lg font-semibold tracking-tight text-zinc-100">{title}</h2>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-zinc-700 to-transparent sm:block" aria-hidden />
      </div>
      <div className="text-[15px] md:text-base">{children}</div>
    </section>
  )
}

function SkillRow({ label, value }) {
  return (
    <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/35 px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{label}</p>
      <p className="mt-1 text-sm text-zinc-300">{value}</p>
    </div>
  )
}

function WorkItem({ role, company, period, detail }) {
  return (
    <li className="relative pl-10 md:pl-12">
      <span className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 shadow-md shadow-black/30 md:left-0.5 md:top-1.5 md:h-7 md:w-7">
        <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.45)]" />
      </span>
      <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5 shadow-md shadow-black/25 transition hover:border-zinc-700/90 hover:bg-zinc-900/55">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="font-medium text-zinc-100">{role}</span>
          <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">{period}</span>
        </div>
        <p className="mt-2 text-sm font-medium text-teal-400/90">{company}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">{detail}</p>
      </div>
    </li>
  )
}

function ProjectCard({ title, tag, desc, githubHref }) {
  return (
    <li className="group relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/35 shadow-md shadow-black/20 transition hover:border-teal-500/25 hover:shadow-lg hover:shadow-teal-950/20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-2">
          <h3 className="font-medium text-zinc-100">{title}</h3>
          <span className="shrink-0 rounded-md border border-zinc-700/70 bg-zinc-950/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            {tag}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-zinc-500">{desc}</p>
        {githubHref ? (
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-teal-500/90 transition hover:text-teal-400"
          >
            GitHub
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : null}
      </div>
    </li>
  )
}

function EducationCard({ accent, degree, place, children }) {
  const border =
    accent === 'teal'
      ? 'border-teal-500/25 hover:border-teal-500/35'
      : 'border-zinc-800 hover:border-zinc-700'
  const bar = accent === 'teal' ? 'from-teal-400 to-emerald-600' : 'from-zinc-500 to-zinc-700'
  return (
    <article
      className={`relative overflow-hidden rounded-2xl border bg-zinc-900/40 p-6 shadow-lg shadow-black/20 transition ${border}`}
    >
      <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${bar}`} />
      <div className="pl-4">
        <div className="mb-3 inline-flex rounded-lg border border-zinc-800 bg-zinc-950/60 p-2 text-zinc-500">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <h3 className="font-medium leading-snug text-zinc-100">{degree}</h3>
        <p className="mt-2 text-sm text-zinc-500">{place}</p>
        {children ? <p className="mt-4 text-sm leading-relaxed text-zinc-400">{children}</p> : null}
      </div>
    </article>
  )
}

function ContactChip({ href, label, external, icon }) {
  const className = 'h-4 w-4 shrink-0 text-teal-500/90'
  let glyph = (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
  if (icon === 'github') {
    glyph = (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.968-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z"
        />
      </svg>
    )
  }
  if (icon === 'linkedin') {
    glyph = (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zM4 3a2 2 0 100 4 2 2 0 000-4z"
        />
      </svg>
    )
  }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/60 px-4 py-2.5 text-sm font-medium text-zinc-200 shadow-sm shadow-black/20 transition hover:border-teal-500/45 hover:bg-teal-500/10 hover:text-teal-200"
    >
      {glyph}
      {label}
    </a>
  )
}

export default App
