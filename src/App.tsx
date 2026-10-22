
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Cpu,
  ChevronDown,
  Layers,
  Zap,
  FileText,
  Award,
  BookOpen,
  Calendar,
  Terminal,
  Database,
  GraduationCap,
  BrainCircuit,
  Search,
  Workflow,
} from 'lucide-react';
import {
  PROJECTS,
  SKILLS,
  EXPERIENCES,
  CERTIFICATIONS,
  SOCIAL_LINKS,
} from './constants';
import { ParticlesBackground } from './components/ParticlesBackground';

const resumeUrl =
  'https://drive.google.com/file/d/1HHhkYyc3p9qGfXxyeX2i08CrR4i5MP1R/view?usp=drivesdk';

export default function App() {
  const skillGroups = [
    {
      icon: Terminal,
      label: 'Programming',
      category: 'Frontend' as const,
    },
    {
      icon: Cpu,
      label: 'Data Science & ML',
      category: 'Backend' as const,
    },
    {
      icon: BrainCircuit,
      label: 'Generative AI & RAG',
      category: 'Design' as const,
    },
    {
      icon: Database,
      label: 'Tools & Frameworks',
      category: 'Tools' as const,
    },
  ];

  const highlights = [
    {
      icon: BrainCircuit,
      title: 'Generative AI & RAG',
      description:
        'Retrieval pipelines, embeddings, semantic search and LLM-based applications.',
    },
    {
      icon: Search,
      title: 'Hybrid Retrieval',
      description:
        'Combining BM25 keyword search and vector similarity to find relevant information.',
    },
    {
      icon: Workflow,
      title: 'AI Workflows',
      description:
        'Exploring workflow orchestration, retrieval and evaluation with LangChain and LangGraph.',
    },
    {
      icon: Code2,
      title: 'Problem Solving',
      description:
        'Programming fundamentals, data structures, algorithms and structured problem solving.',
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-white">
      <ParticlesBackground />

      {/* Floating liquid-glass navigation */}
      <nav className="fixed left-1/2 top-4 z-50 w-[94%] max-w-4xl -translate-x-1/2 sm:top-6">
        <div className="glass flex items-center justify-center rounded-full px-3 py-4 sm:px-8">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:gap-x-12">
            {['Work', 'About', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-bold uppercase tracking-[0.16em] transition-colors hover:text-accent sm:text-xs sm:tracking-[0.2em]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-32 text-center sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 w-full"
        >
          <div className="glass mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent sm:text-xs sm:tracking-[0.3em]">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(192,132,252,0.8)]" />
            Artificial Intelligence • SRM IST
          </div>

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-muted sm:text-sm">
            AI / ML · Generative AI · RAG Systems
          </p>

          <h1 className="mb-8 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[7rem]">
            KANDUKURI
            <br />
            <span className="text-gradient">MANJUSHA</span>
          </h1>

          <p className="mx-auto mb-5 max-w-2xl text-base font-medium leading-relaxed text-muted sm:text-xl">
            Artificial Intelligence student interested in building practical
            AI systems through machine learning, intelligent retrieval, and
            Generative AI.
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-muted sm:gap-5 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-accent" />
              B.Tech Artificial Intelligence
            </span>
            <span className="hidden text-accent sm:inline">•</span>
            <span>SRM Institute of Science and Technology</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FileText className="h-4 w-4" />
              View Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a href="#work" className="btn-secondary">
              Explore Projects
              <ArrowUpRight className="h-4 w-4 text-accent" />
            </a>

            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <div className="mx-auto mt-16 flex max-w-xl flex-wrap justify-center gap-3">
            {['Machine Learning', 'RAG', 'Embeddings', 'Semantic Search'].map(
              (item) => (
                <span
                  key={item}
                  className="glass rounded-full px-4 py-2 text-[10px] font-semibold tracking-wide text-muted sm:text-xs"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </motion.div>

        <a
          href="#work"
          aria-label="Scroll to featured projects"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent transition-transform hover:translate-y-1"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </section>

      {/* Featured projects */}
      <section id="work" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 sm:py-32">
        <div className="mb-16 text-center sm:mb-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-accent">
            Selected Work
          </p>
          <h2 className="text-3xl font-bold sm:text-5xl">
            Projects & Applications
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            AI-focused projects exploring document retrieval, semantic search,
            and human-guided knowledge workflows.
          </p>
          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-accent" />
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glass-hover group flex h-full flex-col rounded-[2rem] p-6 sm:p-9"
            >
              <div className="mb-7 flex items-start justify-between gap-4">
                <div className="glass flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-accent/20">
                  {index === 0 ? (
                    <Search className="h-7 w-7 text-accent" />
                  ) : (
                    <Layers className="h-7 w-7 text-accent" />
                  )}
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">
                  Project 0{index + 1}
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">
                {project.title}
              </h3>

              <p className="mb-8 flex-grow text-sm leading-7 text-muted sm:text-base">
                {project.description}
              </p>

              <div className="mb-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/15 bg-accent/[0.06] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-accent sm:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-accent"
                >
                  GitHub Profile
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      {/* About and education */}
      <section
        id="about"
        className="relative scroll-mt-28 overflow-hidden px-6 py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-accent">
              About Me
            </p>

            <h2 className="mb-7 text-3xl font-bold leading-tight sm:text-5xl">
              Turning AI concepts into{' '}
              <span className="text-gradient">practical systems.</span>
            </h2>

            <p className="mb-6 text-sm leading-7 text-muted sm:text-base">
              I am a B.Tech Artificial Intelligence student at SRM Institute of
              Science and Technology, interested in Machine Learning,
              Generative AI, and Retrieval-Augmented Generation. My project
              work explores hybrid retrieval with BM25 and semantic embeddings,
              ChromaDB-based document retrieval, and AI workflow orchestration.
            </p>

            <p className="mb-10 text-sm leading-7 text-muted sm:text-base">
              I enjoy breaking complex problems into manageable steps,
              understanding how systems work, and building solutions that
              connect data processing, retrieval, and language models.
            </p>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FileText className="h-4 w-4 text-accent" />
              Review My Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="glass glass-hover rounded-2xl p-5"
                >
                  <item.icon className="mb-4 h-6 w-6 text-accent" />
                  <h3 className="mb-2 text-sm font-bold">{item.title}</h3>
                  <p className="text-xs leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-10">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                Education
              </p>

              <div className="glass glass-hover rounded-3xl p-6 sm:p-8">
                <div className="mb-5 flex items-start gap-4">
                  <div className="glass flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      B.Tech Artificial Intelligence
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      SRM Institute of Science and Technology, Kattankulathur
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                  <span className="text-xs font-semibold text-muted">
                    Expected graduation: 2027
                  </span>
                  <span className="rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-bold text-accent">
                    CGPA 9.04 / 10
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                Experience & Activities
              </p>

              <div className="space-y-4">
                {EXPERIENCES.map((experience) => (
                  <div
                    key={experience.company}
                    className="glass glass-hover rounded-3xl p-6 sm:p-8"
                  >
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold">
                          {experience.role}
                        </h3>
                        <p className="mt-1 text-xs font-semibold text-accent">
                          {experience.company}
                        </p>
                      </div>
                      <span className="text-xs text-muted">
                        {experience.period}
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-muted">
                      {experience.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                Certifications
              </p>

              <div className="space-y-3">
                {CERTIFICATIONS.map((certification) => (
                  <div
                    key={certification.title}
                    className="glass glass-hover flex items-start gap-4 rounded-2xl p-5"
                  >
                    <div className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold leading-6">
                        {certification.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted">
                        {certification.issuer} · {certification.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 sm:py-32"
      >
        <div className="mb-14 text-center sm:mb-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-accent">
            Technical Toolkit
          </p>
          <h2 className="text-3xl font-bold sm:text-5xl">
            Skills & Expertise
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Technologies and concepts relevant to AI engineering, machine
            learning, retrieval systems, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => {
            const skills = SKILLS.filter(
              (skill) => skill.category === group.category,
            );

            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass glass-hover rounded-3xl p-6 sm:p-7"
              >
                <div className="glass mb-6 flex h-12 w-12 items-center justify-center rounded-xl border-accent/20">
                  <group.icon className="h-6 w-6 text-accent" />
                </div>

                <h3 className="mb-6 text-sm font-bold uppercase leading-6 tracking-wider">
                  {group.label}
                </h3>

                <ul className="space-y-3">
                  {skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-start gap-3 text-sm leading-5 text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-28 px-5 py-24 sm:px-6 sm:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-6 sm:rounded-[3rem] sm:p-12 lg:p-16"
        >
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent" />

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-accent">
                Contact
              </p>
              <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-5xl">
                Let's connect and build something{' '}
                <span className="text-gradient">meaningful.</span>
              </h2>
              <p className="mb-8 max-w-lg text-sm leading-7 text-muted sm:text-base">
                Open to conversations about AI, machine learning, Generative AI
                projects, internships, and entry-level opportunities.
              </p>

              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="btn-primary"
              >
                <Mail className="h-4 w-4" />
                Contact Me
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="glass glass-hover flex h-12 w-12 items-center justify-center rounded-full"
                >
                  <Github className="h-5 w-5 text-accent" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="glass glass-hover flex h-12 w-12 items-center justify-center rounded-full"
                >
                  <Linkedin className="h-5 w-5 text-accent" />
                </a>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  aria-label="Email"
                  className="glass glass-hover flex h-12 w-12 items-center justify-center rounded-full"
                >
                  <Mail className="h-5 w-5 text-accent" />
                </a>
              </div>

              <p className="mt-5 break-all text-sm text-muted">
                {SOCIAL_LINKS.email}
              </p>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const email = String(formData.get('email') || '');
                const message = String(formData.get('message') || '');
                const subject = encodeURIComponent(
                  `Portfolio enquiry from ${email}`,
                );
                const body = encodeURIComponent(
                  `Reply to: ${email}\n\n${message}`,
                );
                window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
              }}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 ml-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-accent"
                >
                  Your email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="glass w-full rounded-2xl px-5 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-accent/50"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 ml-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-accent"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="glass w-full resize-y rounded-2xl px-5 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-accent/50"
                />
              </div>

              <button type="submit" className="btn-secondary w-full">
                <Mail className="h-4 w-4 text-accent" />
                Prepare Email
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <p className="text-xs leading-5 text-muted">
                This opens your default email application with your message
                prepared. It does not send the email automatically.
              </p>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] px-6 py-8 sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Kandukuri Manjusha
            </p>
            <p className="mt-2 text-xs text-muted">
              B.Tech Artificial Intelligence · SRM IST · Class of 2027
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-xs font-semibold text-muted">
            <a href="#home" className="transition-colors hover:text-accent">
              Back to top
            </a>
            <a href="#work" className="transition-colors hover:text-accent">
              Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-accent">
              Contact
            </a>
          </div>

          <p className="text-xs text-muted">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
