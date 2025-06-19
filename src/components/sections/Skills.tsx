'use client'

import { Section } from '@/components/ui/Section'
import { m } from 'framer-motion'
import { useState } from 'react'

const skillCategories = [
	{
		title: 'Programming Languages',
		icon: '⚡',
		description: 'Core languages I use for development',
		color: 'from-blue-500 to-cyan-500',
		bgColor: 'bg-blue-500/10',
		borderColor: 'border-blue-500/20',
		skills: [
			{
				name: 'Python',
				level: 85,
				details: 'Data Science, Backend Development',
				icon: '🐍',
			},
			{
				name: 'Java',
				level: 80,
				details: 'DSA & Backend Development',
				icon: '☕',
			},
			{
				name: 'TypeScript',
				level: 90,
				details: 'Type-safe Web Development',
				icon: '📘',
			},
			{
				name: 'JavaScript',
				level: 85,
				details: 'Full-Stack Web Development',
				icon: '🟨',
			},
			{
				name: 'HTML5 & CSS3',
				level: 95,
				details: 'Modern Web Development',
				icon: '🌐',
			},
		],
	},
	{
		title: 'Web Development',
		icon: '🚀',
		description: 'Modern web technologies and frameworks',
		color: 'from-purple-500 to-pink-500',
		bgColor: 'bg-purple-500/10',
		borderColor: 'border-purple-500/20',
		skills: [
			{
				name: 'React.js',
				level: 88,
				details: 'Modern UI Development',
				icon: '⚛️',
			},
			{
				name: 'Next.js',
				level: 85,
				details: 'Full-Stack React Framework',
				icon: '▲',
			},
			{
				name: 'Tailwind CSS',
				level: 92,
				details: 'Responsive UI Design',
				icon: '🎨',
			},
			{
				name: 'Node.js',
				level: 82,
				details: 'Server-Side Development',
				icon: '🟢',
			},
			{
				name: 'Express.js',
				level: 80,
				details: 'REST API Development',
				icon: '🚂',
			},
			{
				name: 'MongoDB',
				level: 78,
				details: 'NoSQL Database',
				icon: '🍃',
			},
		],
	},
	{
		title: 'Tools & DevOps',
		icon: '⚙️',
		description: 'Development tools and deployment',
		color: 'from-emerald-500 to-teal-500',
		bgColor: 'bg-emerald-500/10',
		borderColor: 'border-emerald-500/20',
		skills: [
			{
				name: 'Git & GitHub',
				level: 90,
				details: 'Version Control & CI/CD',
				icon: '📚',
			},
			{
				name: 'VS Code',
				level: 95,
				details: 'Primary Development Environment',
				icon: '💻',
			},
			{
				name: 'Docker',
				level: 70,
				details: 'Containerization',
				icon: '🐳',
			},
			{
				name: 'Vercel/Netlify',
				level: 85,
				details: 'Cloud Deployment',
				icon: '☁️',
			},
			{
				name: 'Postman',
				level: 88,
				details: 'API Testing & Development',
				icon: '📮',
			},
		],
	},
]

const getLevelColor = (level: number) => {
	if (level >= 90) return 'from-emerald-400 to-green-500'
	if (level >= 80) return 'from-blue-400 to-cyan-500'
	if (level >= 70) return 'from-yellow-400 to-orange-500'
	return 'from-gray-400 to-gray-500'
}

const getLevelText = (level: number) => {
	if (level >= 90) return 'Expert'
	if (level >= 80) return 'Advanced'
	if (level >= 70) return 'Intermediate'
	return 'Basic'
}

export const Skills = () => {
	const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

	return (
		<Section id="skills" className="py-20 relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
			<div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
			<div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
			
			<m.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="relative space-y-16"
			>
				<div className="text-center space-y-6">
					<m.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full"
					>
						<span className="text-2xl">🎯</span>
						<span className="text-sm font-medium text-blue-600 dark:text-blue-400">Technical Expertise</span>
					</m.div>
					
					<m.h2 
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						viewport={{ once: true }}
						className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
					>
						Technical Skills
					</m.h2>
					<m.p 
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
					>
						Mastering the art of modern development with cutting-edge technologies and best practices
					</m.p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{skillCategories.map((category, categoryIndex) => (
						<m.div
							key={category.title}
							initial={{ opacity: 0, y: 50, scale: 0.9 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
							viewport={{ once: true }}
							className="group relative"
						>
							{/* Card with glassmorphism effect */}
							<div className={`relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-8 border ${category.borderColor} shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3`}>
								{/* Gradient overlay */}
								<div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 rounded-3xl`} />
								
								{/* Header */}
								<div className="relative flex items-center gap-4 mb-8">
									<div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
										<span className="text-2xl">{category.icon}</span>
									</div>
									<div>
										<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
											{category.title}
										</h3>
										<p className="text-gray-600 dark:text-gray-400">
											{category.description}
										</p>
									</div>
								</div>
								
								{/* Skills */}
								<div className="relative space-y-6">
									{category.skills.map((skill, skillIndex) => (
										<m.div
											key={skill.name}
											initial={{ opacity: 0, x: -30 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.6, delay: skillIndex * 0.1 + categoryIndex * 0.2 }}
											viewport={{ once: true }}
											onMouseEnter={() => setHoveredSkill(skill.name)}
											onMouseLeave={() => setHoveredSkill(null)}
											className="group/skill relative p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 cursor-pointer"
										>
											<div className="flex items-center justify-between mb-3">
												<div className="flex items-center gap-3">
													<span className="text-xl">{skill.icon}</span>
													<span className="font-semibold text-gray-800 dark:text-gray-200">
														{skill.name}
													</span>
												</div>
												<span className="text-sm font-bold text-gray-500 dark:text-gray-400">
													{getLevelText(skill.level)}
												</span>
											</div>
											
											{/* Animated progress bar */}
											<div className="relative mb-3">
												<div className="w-full h-3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
													<m.div
														initial={{ width: 0 }}
														whileInView={{ width: `${skill.level}%` }}
														transition={{ duration: 1.5, delay: skillIndex * 0.1 + 0.5 }}
														viewport={{ once: true }}
														className={`h-full rounded-full bg-gradient-to-r ${getLevelColor(skill.level)} shadow-lg relative overflow-hidden`}
													>
														<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
													</m.div>
												</div>
												<div className="absolute -top-1 right-0 text-xs font-bold text-gray-600 dark:text-gray-400">
													{skill.level}%
												</div>
											</div>
											
											<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
												{skill.details}
											</p>
											
											{/* Hover effect */}
											<div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
										</m.div>
									))}
								</div>
							</div>
						</m.div>
					))}
				</div>
			</m.div>
		</Section>
	)
}
