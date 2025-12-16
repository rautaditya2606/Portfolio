'use client'

import { Section } from '@/components/ui/Section'
import { m } from 'framer-motion'
import { Bot, Code, Globe, Wrench } from 'lucide-react'

const skillCategories = [
	{
		title: 'Machine Learning & Deep Learning',
		icon: <Bot className="w-6 h-6" />,
		skills: [
			{
				name: 'PyTorch',
				level: 'Intermediate',
				details: 'Model training, fine-tuning, computer vision',
			},
			{
				name: 'Scikit-Learn',
				level: 'Advanced',
				details: 'Classical ML, pipelines, evaluation',
			},
			{
				name: 'Pandas',
				level: 'Intermediate',
				details: 'Data cleaning and feature prep',
			},
			{
				name: 'NumPy',
				level: 'Intermediate',
				details: 'Numerical computing foundations',
			},
			{
				name: 'Matplotlib',
				level: 'Intermediate',
				details: 'Exploratory visuals and diagnostics',
			},
		],
	},
	{
		title: 'Web Development',
		icon: <Globe className="w-6 h-6" />,
		skills: [
			{
				name: 'React.js',
				level: 'Intermediate',
				details: 'Modern UI Development',
			},
			{
				name: 'Next.js',
				level: 'Intermediate',
				details: 'Full-Stack React Framework',
			},
			{
				name: 'Tailwind CSS',
				level: 'Advanced',
				details: 'Responsive UI Design',
			},
			{
				name: 'Node.js',
				level: 'Intermediate',
				details: 'Server-Side Development',
			},
			{
				name: 'Express.js',
				level: 'Intermediate',
				details: 'REST API Development',
			},
			{
				name: 'MongoDB',
				level: 'Intermediate',
				details: 'NoSQL Database',
			},
		],
	},
	{
		title: 'Tools & DevOps',
		icon: <Wrench className="w-6 h-6" />,
		skills: [
			{
				name: 'Git & GitHub',
				level: 'Advanced',
				details: 'Version Control & CI/CD',
			},
			{
				name: 'VS Code',
				level: 'Advanced',
				details: 'Primary Development Environment',
			},
			{
				name: 'Docker',
				level: 'Basic',
				details: 'Containerization',
			},
			{
				name: 'Vercel/Netlify',
				level: 'Intermediate',
				details: 'Cloud Deployment',
			},
			{
				name: 'Postman',
				level: 'Intermediate',
				details: 'API Testing & Development',
			},
		],
	},
	{
		title: 'Programming Languages',
		icon: <Code className="w-6 h-6" />,
		skills: [
			{
				name: 'Python',
				level: 'Intermediate',
				details: 'Data Science, ML, Backend Development',
			},
			{
				name: 'Java',
				level: 'Intermediate',
				details: 'DSA & Backend Development',
			},
			{
				name: 'TypeScript',
				level: 'Intermediate',
				details: 'Type-safe Web Development',
			},
			{
				name: 'JavaScript',
				level: 'Intermediate',
				details: 'Full-Stack Web Development',
			},
			{
				name: 'HTML5 & CSS3',
				level: 'Advanced',
				details: 'Modern Web Development',
			},
		],
	},
]

export const Skills = () => {
	return (
		<Section id="skills" className="py-24">
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
						<span className="text-xs tracking-[0.18em] uppercase">Skills</span>
					</div>
					<h2 className="text-4xl font-semibold mt-5">Technical Stack</h2>
					<p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Tools, languages, and frameworks I use to build data-driven applications and ML systems.
					</p>
				</div>

				{/* Skill Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{skillCategories.map((category, categoryIndex) => (
						<m.div
							key={category.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: categoryIndex * 0.07 }}
							viewport={{ once: true }}
							className="relative rounded-2xl p-6 bg-light-card/70 dark:bg-dark-card/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow"
						>
							{/* Subtle ring */}
							<div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/5 pointer-events-none" />

							{/* Icon + Title */}
							<div className="flex items-center gap-3 mb-6">
								<div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center">
									<span className="text-primary-500">{category.icon}</span>
								</div>
								<h3 className="text-xl font-semibold">{category.title}</h3>
							</div>

							{/* Skills list */}
							<div className="space-y-4">
								{category.skills.map((skill, skillIndex) => (
									<m.div
										key={skill.name}
										initial={{ opacity: 0, x: -10 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
										viewport={{ once: true }}
									>
										<div className="flex justify-between mb-1">
											<span className="font-medium text-gray-800 dark:text-gray-200">
												{skill.name}
											</span>
											<span className="text-xs px-2 py-0.5 rounded-full bg-gray-500/10 text-gray-600 dark:text-gray-400">
												{skill.level}
											</span>
										</div>
										<div className="text-sm text-gray-600 dark:text-gray-400">
											{skill.details}
										</div>
									</m.div>
								))}
							</div>
						</m.div>
					))}
				</div>
			</m.div>
		</Section>
	)
}
