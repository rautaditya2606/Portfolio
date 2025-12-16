'use client'

import { Section } from '@/components/ui/Section'
import { m } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Internship / Experience 01',
    subtitle: 'Role + company details available on request',
    meta: ['On-site / Remote', '2025', 'India'],
    bullets: [
      'Worked on production-facing features with real constraints',
      'Collaborated closely with a small team and shipped iteratively',
      'Documented work and communicated progress clearly',
    ],
  },
  {
    title: 'Internship / Experience 02',
    subtitle: 'Role + company details available on request',
    meta: ['On-site / Remote', '2025', 'India'],
    bullets: [
      'Owned a scoped deliverable end-to-end (build → review → release)',
      'Focused on reliability, clarity, and measurable outcomes',
      'Improved workflow via tooling, automation, or refactors',
    ],
  },
  {
    title: 'Internship / Experience 03',
    subtitle: 'Role + company details available on request',
    meta: ['On-site / Remote', '2025', 'India'],
    bullets: [
      'Applied ML/analytics thinking to real data and real users',
      'Maintained clean interfaces and readable implementations',
      'Delivered results with tight iteration cycles',
    ],
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
          <h2 className="text-3xl font-bold mb-4">Internships / Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Three hands-on experiences focused on shipping work, learning fast, and building systems that hold up outside a demo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <m.article
              key={exp.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              viewport={{ once: true }}
              className="bg-light-card dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold">{exp.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{exp.subtitle}</p>
                </div>
                <div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <MapPin className="w-3.5 h-3.5" /> {exp.meta[2]}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <Calendar className="w-3.5 h-3.5" /> {exp.meta[1]}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  {exp.meta[0]}
                </span>
              </div>

              <div className="mt-5 h-px bg-light-border dark:bg-dark-border" />

              <ul className="mt-5 space-y-2">
                {exp.bullets.map((b) => (
                  <li key={b} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
            </m.article>
          ))}
        </div>
      </m.div>
    </Section>
  )
}
