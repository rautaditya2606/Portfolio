'use client'

import { Section } from '@/components/ui/Section'
import { m } from 'framer-motion'

const skillCategories = [
	{
		title: 'Programming Languages',
		icon: '🖥️',
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
	{
		title: 'Web Development',
		icon: '🌐',
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
		title: 'ML & Data Science',
		icon: '🧠',
		skills: [
			{
				name: 'TensorFlow',
				level: 'Basic',
				details: 'Deep Learning Models',
			},
			{
				name: 'scikit-learn',
				level: 'Intermediate',
				details: 'ML Algorithms',
			},
			{
				name: 'Pandas',
				level: 'Intermediate',
				details: 'Data Analysis',
			},
			{
				name: 'NumPy',
				level: 'Intermediate',
				details: 'Numerical Computing',
			},
			{
				name: 'Matplotlib',
				level: 'Basic',
				details: 'Data Visualization',
			},
		],
	},
	{
		title: 'Tools & DevOps',
		icon: '🛠️',
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
]

export const Skills = () => {
	return (
		<Section id="skills" className="py-20">
			<m.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="space-y-16"
			>
				<div className="text-center">
					<h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
					<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						A comprehensive overview of my technical skills and proficiency levels
						across different domains
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{skillCategories.map((category, categoryIndex) => (
						<m.div
							key={category.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
							viewport={{ once: true }}
							className="bg-light-card dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border"
						>
							<div className="flex items-center gap-3 mb-6">
								<span className="text-2xl">{category.icon}</span>
								<h3 className="text-xl font-bold">{category.title}</h3>
							</div>
							<div className="space-y-4">
								{category.skills.map((skill, skillIndex) => (
									<m.div
										key={skill.name}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
										viewport={{ once: true }}
										className="relative"
									>
										<div className="flex justify-between mb-1">
											<span className="font-medium text-gray-700 dark:text-gray-300">
												{skill.name}
											</span>
											<span className="text-sm text-gray-500 dark:text-gray-400">
												{skill.level}
											</span>
										</div>
										<div className="text-sm text-gray-500 dark:text-gray-400">
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
