'use client'

import { Section } from '@/components/ui/Section'
import { m } from 'framer-motion'

const achievements = [
	{
		title: '1st Place - EchoHacks',
		description:
			'Won first place in a 24-hour hackathon at KJ Somaiya Institute of Technology, showcasing innovation and technical excellence',
		icon: '🏆',
	},
	{
		title: '10+ Full-Stack Projects',
		description:
			'Deployed and maintained multiple web applications with real-world impact',
		icon: '🚀',
	},
	{
		title: '900+ LinkedIn Connections',
		description:
			'Building a strong professional network in tech and data science',
		icon: '🤝',
	},
	{
		title: '8.45 CGPA in Semester 1',
		description: 'Strong academic foundation in Computer Science',
		icon: '📚',
	},
	{
		title: 'Industry Experience',
		description:
			'Secured internships and collaborations with startups for 2025',
		icon: '💼',
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
	},
	{
		title: 'Mathematics Foundation',
		items: [
			'Strong in Linear Algebra',
			'Matrix Operations',
			'Currently advancing in Calculus',
			'Statistical Analysis',
		],
	},
	{
		title: 'Career Goals',
		items: [
			'Building impactful ML solutions',
			'Leading technical innovation',
			'Contributing to open source',
			'Mentoring and knowledge sharing',
		],
	},
]

const personalGrowth = [
	{
		title: 'Physical Fitness',
		description:
			'Dedicated bodybuilding enthusiast with a focus on progressive overload. Currently pursuing a lean and aesthetic physique through structured training.',
		icon: '💪',
	},
	{
		title: 'Mental Discipline',
		description:
			'Practice consistency in both technical learning and physical training. Strong believer in the mind-body connection and daily progress.',
		icon: '🧠',
	},
	{
		title: 'Balanced Lifestyle',
		description:
			'Combining tech passion with fitness goals. Regular gym workouts focusing on compound lifts while maintaining high productivity in development work.',
		icon: '⚖️',
	},
	{
		title: 'Continuous Growth',
		description:
			'Setting and achieving progressive goals in both professional and personal domains. Currently focused on strength gains and coding excellence.',
		icon: '📈',
	},
]

export const About = () => {
	return (
		<Section id="about" className="py-20">
			<m.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="space-y-16"
			>
				{/* Main Introduction */}
				<div className="text-center max-w-3xl mx-auto">
					<h2 className="text-3xl font-bold mb-6">About Me</h2>
					<p className="text-gray-600 dark:text-gray-400 mb-4">
						I&apos;m a first-year Computer Science student with a deep focus on
						Applied Machine Learning, MLOps, and Data Analytics. My journey is
						backed by strong fundamentals in Python, Java, and full-stack web
						development.
					</p>
					<p className="text-gray-600 dark:text-gray-400">
						Currently pursuing an intensive multi-phase roadmap to become an
						Applied ML Engineer, aiming to secure high-impact roles in ML/MLOps by
						mid-2027.
					</p>
				</div>

				{/* Achievements Grid */}
				<div>
					<h3 className="text-2xl font-bold mb-6 text-center">
						Key Achievements
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{achievements.map((achievement) => (
							<m.div
								key={achievement.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								viewport={{ once: true }}
								className="bg-light-card dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border"
							>
								<span className="text-2xl mb-3 block">
									{achievement.icon}
								</span>
								<h4 className="font-bold mb-2">{achievement.title}</h4>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									{achievement.description}
								</p>
							</m.div>
						))}
					</div>
				</div>

				{/* Focus Areas */}
				<div>
					<h3 className="text-2xl font-bold mb-6 text-center">
						Professional Focus
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{focusAreas.map((area) => (
							<m.div
								key={area.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								viewport={{ once: true }}
								className="bg-light-card dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border"
							>
								<h4 className="font-bold mb-4">{area.title}</h4>
								<ul className="space-y-2">
									{area.items.map((item) => (
										<li
											key={item}
											className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"
										>
											<span className="text-primary-500">•</span>
											{item}
										</li>
									))}
								</ul>
							</m.div>
						))}
					</div>
				</div>

				{/* Personal Growth */}
				<div>
					<h3 className="text-2xl font-bold mb-6 text-center">Beyond Tech</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{personalGrowth.map((item) => (
							<m.div
								key={item.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								viewport={{ once: true }}
								className="bg-light-card dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border"
							>
								<span className="text-2xl mb-3 block">{item.icon}</span>
								<h4 className="font-bold mb-2">{item.title}</h4>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									{item.description}
								</p>
							</m.div>
						))}
					</div>
				</div>
			</m.div>
		</Section>
	)
}
