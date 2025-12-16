'use client'

import { Section } from '@/components/ui/Section'
import { m } from 'framer-motion'
import { Briefcase, CheckCircle2, Code2 } from 'lucide-react'

const experiences = [
  {
    title: 'CSSEdTech',
    role: 'Web Development Intern',
    status: 'Completed',
    bullets: [
      'Worked on system design and architecture planning for a JIRA-like issue tracking platform inspired by Atlassian JIRA.',
      'Defined core modules such as authentication, project management, issue workflows, and role-based access control.',
      'Finalized the full-stack architecture and technology stack before implementation.',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Digital Guruji',
    role: 'Full Stack Web Development Intern',
    status: 'Completed',
    bullets: [
      'Built a multimodal AI-powered web platform enabling users to chat with AI, generate images and videos, scrape websites, and create or analyze documents (PDF, DOCX, CSV).',
      'Implemented AI-driven data analysis workflows and document generation pipelines using LLM orchestration.',
    ],
    tech: ['Node.js', 'Express', 'EJS', 'MongoDB', 'SQL', 'LangChain'],
  },
  {
    title: 'OmniNeura',
    role: 'GenAI Engineer Intern',
    status: 'Current',
    bullets: [
      'Developing AI agents for the insurance domain focused on automation and decision support.',
      'Built agents for insurance premium prediction, risk analysis, and policy renewal reminders using agent-based architectures and API-driven backends.',
    ],
    tech: ['FastAPI', 'Next.js', 'CrewAI', 'PostgreSQL'],
  },
]

export const Experience = () => {
  return (
    <Section id="experience" className="py-24">
      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="space-y-16"
      >
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/5 text-primary-600 dark:text-primary-400">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            <span className="text-xs tracking-[0.18em] uppercase">Experience</span>
          </div>
          <h2 className="text-4xl font-semibold mt-5">Internships & Applied Work</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world engineering work with production constraints, architectural decisions, and AI-driven systems.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <m.article
              key={`${exp.title}-${exp.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-6 bg-light-card/70 dark:bg-dark-card/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Subtle accent */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/5 pointer-events-none" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                        exp.status === 'Current'
                          ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400'
                          : 'bg-gray-500/10 text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{exp.role}</p>
                </div>
                <div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary-500" />
                </div>
              </div>

              <div className="mt-5">
                <div className="text-[11px] tracking-[0.16em] uppercase text-gray-500">Impact</div>
                <ul className="mt-3 space-y-2">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-gray-500">
                  <Code2 className="w-4 h-4" /> Tech Stack
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </m.article>
          ))}
        </div>
      </m.div>
    </Section>
  )
}
