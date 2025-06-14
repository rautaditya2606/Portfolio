'use client'

import { Section } from '@/components/ui/Section'
import { m } from 'framer-motion'
import { useState } from 'react'

const achievements = [
	{
		title: '2nd Place - IIC Udaan 2.0',
		description:
			'Secured second place in the IIC Udaan 2.0 hackathon, demonstrating innovative problem-solving and technical expertise',
		icon: '🥈',
		category: 'competition',
		date: 'Apr 2025',
		link: '#',
	},
	{
		title: '10+ Full-Stack Projects',
		description:
			'Deployed and maintained multiple web applications with real-world impact',
		icon: '🚀',
		category: 'projects',
		date: 'Ongoing',
		link: '#projects',
	},
	{
		title: '900+ LinkedIn Connections',
		description:
			'Building a strong professional network in tech and data science',
		icon: '🤝',
		category: 'network',
		date: '2025',
		link: 'https://linkedin.com',
	},
	{
		title: 'Industry Experience',
		description:
			'Secured internships and collaborations with startups for 2025',
		icon: '💼',
		category: 'experience',
		date: '2025',
		link: '#',
	},
]

const focusAreas = [
	{
		title: 'Data Science & ML',
		items: [
			'Focus on Applied Machine Learning',
			'MLOps pipeline development',
			'Data Analytics projects',
			'Seeking ML Engineering roles',
		],
		color: 'bg-gradient-to-br from-blue-500 to-purple-600',
	},
	{
		title: 'Mathematics Foundation',
		items: [
			'Strong in Linear Algebra',
			'Matrix Operations',
			'Currently advancing in Calculus',
			'Statistical Analysis',
		],
		color: 'bg-gradient-to-br from-green-500 to-teal-600',
	},
	{
		title: 'Career Goals',
		items: [
			'Building impactful ML solutions',
			'Leading technical innovation',
			'Contributing to open source',
			'Mentoring and knowledge sharing',
		],
		color: 'bg-gradient-to-br from-orange-500 to-red-600',
	},
]

const personalGrowth = [
	{
		title: 'Physical Fitness',
		description:
			'Dedicated bodybuilding enthusiast with a focus on progressive overload. Currently pursuing a lean and aesthetic physique through structured training.',
		icon: '💪',
		progress: 85,
		metric: 'Consistency',
	},
	{
		title: 'Balanced Lifestyle',
		description:
			'Combining tech passion with fitness goals. Regular gym workouts focusing on compound lifts while maintaining high productivity in development work.',
		icon: '⚖️',
		progress: 78,
		metric: 'Balance',
	},
	{
		title: 'Continuous Growth',
		description:
			'Setting and achieving progressive goals in both professional and personal domains. Currently focused on strength gains and coding excellence.',
		icon: '📈',
		progress: 92,
		metric: 'Growth',
	},
]

const skills = [
	{ name: 'Python', level: 90, category: 'Programming' },
	{ name: 'JavaScript', level: 90, category: 'Programming'},
	{ name: 'MongoDB', level: 70, category: 'Database'},
	{ name: 'Node.js', level: 90, category: 'JS Environment'},
	{ name: 'Express.js', level: 90, category: 'Framework'},
	{ name: 'React', level: 88, category: 'Frontend' },
	{ name: 'Java', level: 75, category: 'Programming' },
	{ name: 'Linear Algebra', level: 80, category: 'Mathematics' },
	{ name: 'Statistics', level: 78, category: 'Mathematics' },
]

const timeline = [
	{
		year: '2024',
		title: 'Started Computer Science Journey',
		description: 'Began B.Tech in Computer Science, achieved 8.45 CGPA in first semester',
		icon: '🎓',
	},
	{
		year: '2025',
		title: 'IIC Udaan 2.0 Success',
		description: 'Secured 2nd place in hackathon, demonstrating technical excellence',
		icon: '🥈',
	},
	{
		year: '2025',
		title: 'Industry Collaborations',
		description: 'Secured internships and partnerships with startups',
		icon: '🤝',
	},
	{
		year: '2025-2027',
		title: 'ML Engineering Roadmap',
		description: 'Intensive journey towards becoming Applied ML Engineer',
		icon: '🚀',
	},
]

const stats = [
	{ label: 'Projects Completed', value: '10+', icon: '🚀' },
	{ label: 'LinkedIn Connections', value: '900+', icon: '🤝' },
	{ label: 'Current CGPA', value: '8.45', icon: '📊' },
	{ label: 'Years of Coding', value: '2+', icon: '💻' },
]

const interests = [
	{ name: 'Machine Learning', icon: '🤖' },
	{ name: 'Bodybuilding', icon: '💪' },
	{ name: 'Aviation', icon: '✈️' },
	{ name: 'Automobiles', icon: '🏎️💨' },
	{ name: 'Bikes', icon: '🏍️💨' }
]

export const About = () => {
	const [activeTab, setActiveTab] = useState('overview')
	const [selectedAchievement, setSelectedAchievement] = useState(null)

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	}

	return (
		<Section id="about" className="py-20">
			<m.div
				initial="hidden"
				whileInView="visible"
				variants={containerVariants}
				viewport={{ once: true }}
				className="space-y-16"
			>
				{/* Header with Navigation */}
				<div className="text-center max-w-4xl mx-auto">
					<m.h2 
						variants={itemVariants}
						className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent"
					>
						About Me
					</m.h2>
					<m.p 
						variants={itemVariants}
						className="text-lg text-gray-600 dark:text-gray-400 mb-8"
					>
						First-year Computer Science student specializing in Applied Machine Learning, 
						MLOps, and Data Analytics. Combining technical excellence with physical discipline 
						to build impactful solutions.
					</m.p>
					
					{/* Tab Navigation */}
					<m.div 
						variants={itemVariants}
						className="flex flex-wrap justify-center gap-2 mb-8"
					>
						{['overview', 'skills', 'timeline', 'personal'].map((tab) => (
							<button
								key={tab}
								onClick={() => setActiveTab(tab)}
								className={`px-6 py-2 rounded-full font-medium transition-all ${
									activeTab === tab
										? 'bg-primary-600 text-white shadow-lg'
										: 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
								}`}
							>
								{tab.charAt(0).toUpperCase() + tab.slice(1)}
							</button>
						))}
					</m.div>
				</div>

				{/* Quick Stats */}
				<m.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
					{stats.map((stat) => (
						<div
							key={stat.label}
							className="text-center p-4 bg-light-card dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border"
						>
							<div className="text-2xl mb-2">{stat.icon}</div>
							<div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{stat.value}</div>
							<div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
						</div>
					))}
				</m.div>

				{/* Tab Content */}
				{activeTab === 'overview' && (
					<m.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="space-y-12"
					>
						{/* Achievements with Modal */}
						<div>
							<h3 className="text-2xl font-bold mb-6 text-center">Key Achievements</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{achievements.map((achievement, index) => (
									<m.div
										key={achievement.title}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										whileHover={{ scale: 1.05, rotateY: 5 }}
										className="bg-light-card dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border cursor-pointer hover:shadow-lg transition-all"
										onClick={() => setSelectedAchievement(achievement)}
									>
										<div className="flex justify-between items-start mb-3">
											<span className="text-2xl">{achievement.icon}</span>
											<span className="text-xs bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 px-2 py-1 rounded-full">
												{achievement.date}
											</span>
										</div>
										<h4 className="font-bold mb-2">{achievement.title}</h4>
										<p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
											{achievement.description}
										</p>
									</m.div>
								))}
							</div>
						</div>

						{/* Focus Areas with Gradients */}
						<div>
							<h3 className="text-2xl font-bold mb-6 text-center">Professional Focus</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{focusAreas.map((area, index) => (
									<m.div
										key={area.title}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										className="relative overflow-hidden rounded-xl"
									>
										<div className={`absolute inset-0 ${area.color} opacity-10`}></div>
										<div className="relative bg-light-card dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border">
											<h4 className="font-bold mb-4 text-lg">{area.title}</h4>
											<ul className="space-y-3">
												{area.items.map((item, itemIndex) => (
													<m.li
														key={item}
														initial={{ opacity: 0, x: -20 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
														className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-3"
													>
														<span className="w-2 h-2 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"></span>
														{item}
													</m.li>
												))}
											</ul>
										</div>
									</m.div>
								))}
							</div>
						</div>

						{/* Interests Tags */}
						<div>
							<h3 className="text-2xl font-bold mb-6 text-center">Interests & Passions</h3>
							<div className="flex flex-wrap justify-center gap-4">
								{interests.map((interest, index) => (
									<m.div
										key={interest.name}
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: index * 0.1 }}
										whileHover={{ scale: 1.1 }}
										className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
									>
										<span>{interest.icon}</span>
										<span className="font-medium">{interest.name}</span>
									</m.div>
								))}
							</div>
						</div>
					</m.div>
				)}

				{activeTab === 'skills' && (
					<m.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="space-y-8"
					>
						<h3 className="text-2xl font-bold mb-6 text-center">Technical Skills</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{skills.map((skill, index) => (
								<m.div
									key={skill.name}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.1 }}
									className="bg-light-card dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border"
								>
									<div className="flex justify-between items-center mb-2">
										<span className="font-medium">{skill.name}</span>
										<span className="text-sm text-gray-500">{skill.category}</span>
									</div>
									<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
										<m.div
											initial={{ width: 0 }}
											animate={{ width: `${skill.level}%` }}
											transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
											className="bg-gradient-to-r from-primary-500 to-primary-700 h-2 rounded-full"
										></m.div>
									</div>
									<div className="text-right text-sm text-gray-500 mt-1">{skill.level}%</div>
								</m.div>
							))}
						</div>
					</m.div>
				)}

				{activeTab === 'timeline' && (
					<m.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="space-y-8"
					>
						<h3 className="text-2xl font-bold mb-6 text-center">Journey Timeline</h3>
						<div className="relative">
							<div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 via-primary-600 to-primary-700 shadow-lg"></div>
							{timeline.map((item, index) => (
								<m.div
									key={item.year}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2 }}
									className={`relative flex items-center ${
										index % 2 === 0 ? 'justify-start' : 'justify-end'
									} mb-8`}
								>
									<div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
										<div className="bg-light-card dark:bg-dark-card rounded-xl p-4 border border-light-border dark:border-dark-border shadow-lg">
											<div className="flex items-center gap-2 mb-2">
												<span className="text-xl">{item.icon}</span>
												<span className="font-bold text-primary-600 dark:text-primary-400">{item.year}</span>
											</div>
											<h4 className="font-bold mb-1">{item.title}</h4>
											<p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
										</div>
									</div>
									<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-full border-2 border-white dark:border-gray-900 shadow-lg"></div>
								</m.div>
							))}
						</div>
					</m.div>
				)}

				{activeTab === 'personal' && (
					<m.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="space-y-8"
					>
						<h3 className="text-2xl font-bold mb-6 text-center">Personal Development</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{personalGrowth.map((item, index) => (
								<m.div
									key={item.title}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									className="bg-light-card dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border"
								>
									<div className="flex items-center justify-between mb-3">
										<span className="text-2xl">{item.icon}</span>
										<div className="text-right">
											<div className="text-sm text-gray-500">{item.metric}</div>
											<div className="text-lg font-bold text-primary-600 dark:text-primary-400">{item.progress}%</div>
										</div>
									</div>
									<h4 className="font-bold mb-2">{item.title}</h4>
									<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
									<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
										<m.div
											initial={{ width: 0 }}
											animate={{ width: `${item.progress}%` }}
											transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
											className="bg-gradient-to-r from-primary-500 to-primary-700 h-2 rounded-full"
										></m.div>
									</div>
								</m.div>
							))}
						</div>
					</m.div>
				)}

				{/* Achievement Modal */}
				{selectedAchievement && (
					<m.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
						onClick={() => setSelectedAchievement(null)}
					>
						<m.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md mx-4 shadow-2xl"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="flex items-center justify-between mb-4">
								<span className="text-3xl">{selectedAchievement.icon}</span>
								<button
									onClick={() => setSelectedAchievement(null)}
									className="text-gray-500 hover:text-gray-700 text-xl"
								>
									×
								</button>
							</div>
							<h3 className="text-xl font-bold mb-2">{selectedAchievement.title}</h3>
							<p className="text-gray-600 dark:text-gray-400 mb-4">{selectedAchievement.description}</p>
							<div className="flex justify-between items-center">
								<span className="text-sm bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full">
									{selectedAchievement.category}
								</span>
								<span className="text-sm text-gray-500">{selectedAchievement.date}</span>
							</div>
						</m.div>
					</m.div>
				)}
			</m.div>
		</Section>
	)
}