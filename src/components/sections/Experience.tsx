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
    <Section id="experience" className="py-20">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-14"
      >
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-light-border dark:border-dark-border bg-light-card/60 dark:bg-dark-card/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary-500" aria-hidden="true" />
            <span className="text-xs tracking-[0.18em] uppercase text-gray-700 dark:text-gray-300">Experience</span>
          </div>
          <h2 className="text-4xl font-bold mt-4 mb-4">Internships / Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Work that’s closer to production than a portfolio: architecture decisions, real integrations, and agent-based systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <m.article
              key={`${exp.title}-${exp.role}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              viewport={{ once: true }}
              className="bg-light-card dark:bg-dark-card rounded-2xl p-6 border border-light-border dark:border-dark-border relative overflow-hidden"
            >
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-primary-500/40 via-primary-500/10 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/70 via-white/20 to-transparent dark:from-white/10 dark:via-white/5" aria-hidden="true" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${exp.status === 'Current' ? 'border-primary-500/40 text-primary-700 dark:text-primary-300 bg-primary-500/10' : 'border-light-border dark:border-dark-border text-gray-600 dark:text-gray-400 bg-transparent'}`}>
                      {exp.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{exp.role}</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center flex-shrink-0 border border-primary-500/15">
                  <Briefcase className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
              </div>

              <div className="mt-5 h-px bg-light-border dark:bg-dark-border" />

              <div className="mt-5">
                <div className="text-xs tracking-[0.16em] uppercase text-gray-500 dark:text-gray-400">
                  Impact
                </div>
                <ul className="mt-3 space-y-2.5">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-xl border border-light-border dark:border-dark-border bg-light-background/60 dark:bg-dark-background/40 p-4">
                <div className="flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-gray-500 dark:text-gray-400">
                  <Code2 className="w-4 h-4" /> Tech Stack
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/70 dark:bg-black/20 text-gray-700 dark:text-gray-200 border border-light-border dark:border-dark-border text-xs"
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
