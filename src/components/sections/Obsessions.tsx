'use client'

import { Section } from '@/components/ui/Section'
import { m } from 'framer-motion'
import Image from 'next/image'

const obsessions = [
  {
    title: 'Automobiles',
    description: 'Passionate about Italian supercars and over-engineered bikes, especially MV Agusta and Ducati. The perfect blend of engineering and art.',
    icon: '🏎️',
  },
  {
    title: 'Military Aviation',
    description: 'Deeply interested in jets, airpower, and combat systems. Fascinated by the technological advancement in military aviation.',
    icon: '✈️',
  },
  {
    title: 'Astronomy',
    description: 'Former stargazer with telescope experience. Can identify planets and stars without aids. The mysteries of space continue to captivate me.',
    icon: '🔭',
  },
]

export const Obsessions = () => {
  return (
    <Section id="obsession" className="py-20">
      <div className="text-center mb-16">
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Beyond Tech
        </m.h2>
        <m.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400"
        >
          My obsessions that fuel creativity and inspiration
        </m.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {obsessions.map((obsession, index) => (
          <m.div
            key={obsession.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-light-card dark:bg-dark-card rounded-2xl p-6 border border-light-border dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"
          >
            <div className="text-4xl mb-4">{obsession.icon}</div>
            <h3 className="text-xl font-bold mb-3">{obsession.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{obsession.description}</p>
          </m.div>
        ))}
      </div>
    </Section>
  )
}
