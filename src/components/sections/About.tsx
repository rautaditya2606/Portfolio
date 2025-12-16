'use client'

import { Section } from '@/components/ui/Section'
import { m } from 'framer-motion'
import { useState } from 'react'
import {
	Medal,
	Rocket,
	Handshake,
	Dumbbell,
	Scale,
	TrendingUp,
	GraduationCap,
	BarChart3,
	Github,
	Star,
	Linkedin,
	Bot,
	Plane,
	Car,
	Bike,
	X
} from 'lucide-react'

interface Achievement {
	title: string;
	description: string;
	icon: React.ReactNode;
	category: string;
	date: string;
	link: string;
}

interface TimelineItem {
	year: string;
	title: string;
	description: string;
	icon: React.ReactNode;
	image?: string;
	images?: string[]; // For multiple images
}

const achievements: Achievement[] = [
	{
		title: '2nd Place - IIC Udaan 2.0',
		description:
			'Secured second place in the IIC Udaan 2.0 hackathon, demonstrating innovative problem-solving and technical expertise',
		icon: <Medal className="w-6 h-6" />,
		category: 'competition',
		date: 'Apr 2025',
		link: '#',
	},
	{
		title: '10+ Full-Stack Projects',
		description:
			'Deployed and maintained multiple web applications with real-world impact',
		icon: <Rocket className="w-6 h-6" />,
		category: 'projects',
		date: 'Ongoing',
		link: '#projects',
	},
	{
		title: '10+ Machine Learning & Deep Learning Projects',
		description:
			'Built and experimented across ML pipelines, model training, and practical deployments',
		icon: <Bot className="w-6 h-6" />,
		category: 'ml',
		date: 'Ongoing',
		link: '#projects',
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
		color: 'bg-gradient-to-br from-[#abcdef] to-[#abcdef]',
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
		icon: <Dumbbell className="w-6 h-6" />,
		progress: 85,
		metric: 'Consistency',
	},
	{
		title: 'Balanced Lifestyle',
		description:
			'Combining tech passion with fitness goals. Regular gym workouts focusing on compound lifts while maintaining high productivity in development work.',
		icon: <Scale className="w-6 h-6" />,
		progress: 78,
		metric: 'Balance',
	},
	{
		title: 'Continuous Growth',
		description:
			'Setting and achieving progressive goals in both professional and personal domains. Currently focused on strength gains and coding excellence.',
		icon: <TrendingUp className="w-6 h-6" />,
		progress: 92,
		metric: 'Growth',
	},
]

const skills = [
	{ name: 'Python', level: 90, category: 'Programming' },
	{ name: 'JavaScript', level: 90, category: 'Programming' },
	{ name: 'MongoDB', level: 70, category: 'Database' },
	{ name: 'Node.js', level: 90, category: 'JS Environment' },
	{ name: 'Express.js', level: 90, category: 'Framework' },
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
		icon: <GraduationCap className="w-6 h-6" />,
		image: '/computer-science-journey.jpeg',
	},
	{
		year: '2025',
		title: 'IIC Udaan 2.0 Success',
		description: 'Secured 2nd place in hackathon, demonstrating technical excellence',
		icon: <Medal className="w-6 h-6" />,
		image: '/iic-udaan-success.jpeg',
	},
	{
		year: '2025',
		title: 'Industry Collaborations',
		description: 'Secured internships and partnerships with startups',
		icon: <Handshake className="w-6 h-6" />,
		images: ['/industry-collaboration.jpeg', '/industry-collaboration-2.png'],
	},
	{
		year: '2025-2027',
		title: 'ML Engineering Roadmap',
		description: 'Intensive journey towards becoming Applied ML Engineer',
		icon: <Rocket className="w-6 h-6" />,
		image: '/ml-engineering-roadmap.jpeg',
	},
]

const stats = [
	{ label: 'Total Internships', value: '3', icon: <BarChart3 className="w-6 h-6" /> },
	{ label: 'Github Repos', value: '57', icon: <Github className="w-6 h-6" /> },
	{ label: 'Projects Completed', value: '20+', icon: <Star className="w-6 h-6" /> },
	{ label: 'LinkedIn Connections', value: '900+', icon: <Linkedin className="w-6 h-6" /> },
]

const interests = [
	{ name: 'Machine Learning', icon: <Bot className="w-6 h-6" /> },
	{ name: 'Bodybuilding', icon: <Dumbbell className="w-6 h-6" /> },
	{ name: 'Aviation', icon: <Plane className="w-6 h-6" /> },
	{ name: 'Automobiles', icon: <Car className="w-6 h-6" /> },
	{ name: 'Bikes', icon: <Bike className="w-6 h-6" /> }
]

export const About = () => {
	const [activeTab, setActiveTab] = useState('overview')
	const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)
	const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

	const TimelineItem = ({ item, index }: { item: TimelineItem; index: number }) => {
		return (
			<m.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{
					delay: index * 0.2,
					type: "spring",
					stiffness: 100,
					damping: 20
				}}
				className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'
					} mb-24`}
			>
				{/* Content container */}
				<div className={`w-5/12 relative ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
					<m.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{
							type: "spring",
							stiffness: 100,
							damping: 20,
							delay: index * 0.1
						}}
						className="relative rounded-2xl p-4 bg-light-card/70 dark:bg-dark-card/60 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300"
					>
						<div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/5 pointer-events-none" />
						{/* Single Image */}
						{item.image && (
							<div className="mb-4 relative overflow-hidden rounded-lg">
								<img
									src={item.image}
									alt={item.title}
									className="w-full object-contain"
									onError={(e) => {
										const target = e.currentTarget;
										target.style.display = 'none';
										const parent = target.parentElement;
										if (parent) {
											parent.innerHTML = `
												<div class="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
													<div class="text-center">
														<div className="text-2xl mb-2"><Camera className="w-8 h-8" /></div>
														<div class="text-xs text-gray-500 dark:text-gray-400">Image not found</div>
													</div>
												</div>
											`;
										}
									}}
								/>
							</div>
						)}

						{/* Multiple Images */}
						{item.images && item.images.length > 0 && (
							<div className="mb-4 relative overflow-hidden rounded-lg">
								<div className="grid grid-cols-2 gap-2">
									{item.images.map((imageSrc, imgIndex) => (
										<div key={imgIndex} className="relative overflow-hidden rounded-lg">
											<img
												src={imageSrc}
												alt={`${item.title} ${imgIndex + 1}`}
												className="w-full h-32 object-cover"
												onError={(e) => {
													const target = e.currentTarget;
													target.style.display = 'none';
													const parent = target.parentElement;
													if (parent) {
														parent.innerHTML = `
															<div class="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
																<div class="text-center">
																	<div className="text-lg mb-1"><Camera className="w-6 h-6" /></div>
																	<div class="text-xs text-gray-500 dark:text-gray-400">Image ${imgIndex + 1}</div>
																</div>
															</div>
														`;
													}
												}}
											/>
										</div>
									))}
								</div>
							</div>
						)}

						<div className="flex items-center gap-2 mb-2">
							<span className="text-xl">{item.icon}</span>
							<span className="font-bold text-blue-600 dark:text-blue-400">{item.year}</span>
						</div>
						<h4 className="font-bold mb-1">{item.title}</h4>
						<p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
					</m.div>
				</div>

				{/* Timeline node */}
				<m.div
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					transition={{
						type: "spring",
						stiffness: 200,
						damping: 20,
						delay: index * 0.2
					}}
					className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#abcdef] to-[#abcdef] rounded-full border-4 border-white dark:border-gray-900 z-10"
				/>

				{/* Horizontal connector line */}
				<m.div
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 20,
						delay: index * 0.3
					}}
					className={`absolute top-1/2 -translate-y-1/2 h-0.5 origin-left ${index % 2 === 0
							? 'right-1/2 w-[6.625rem] bg-gradient-to-l from-purple-600 to-transparent'
							: 'left-1/2 w-[6.625rem] bg-gradient-to-r from-blue-500 to-transparent'
						}`}
				/>
			</m.div>
		)
	}

	return (
		<Section id="about" className="py-20">
			<div>
				<m.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ type: "spring", stiffness: 100, damping: 20 }}
					className="space-y-16"
				>
					{/* Big profile image placeholder */}
					<div className="flex justify-center mb-8">
						<div
							className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gradient-to-r from-[#abcdef] to-[#abcdef] shadow-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-pointer transform transition-transform hover:scale-105"
							onClick={() => setIsProfileModalOpen(true)}
						>
							<img
								src="/about-me-image.jpeg"
								alt="Profile"
								className="object-cover w-full h-full"
								onError={(e) => {
									const parent = e.currentTarget.parentElement;
									const placeholder = parent?.querySelector('.profile-placeholder') as HTMLElement | null;
									if (parent && placeholder) {
										e.currentTarget.style.display = 'none';
										placeholder.style.display = 'flex';
									}
								}}
							/>
							<div className="profile-placeholder absolute inset-0 flex-col items-center justify-center text-gray-400 dark:text-gray-300 text-center select-none" style={{ display: 'none' }}>
								<div className="text-5xl mb-2">🖼️</div>
								<div className="text-base font-medium">Add your profile picture</div>
								<div className="text-xs mt-1">public/about-me-image.jpeg</div>
							</div>
						</div>
					</div>

					{/* Profile Image Modal */}
					{isProfileModalOpen && (
						<m.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm"
							onClick={() => setIsProfileModalOpen(false)}
						>
							<m.div
								initial={{ scale: 0.9, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.9, opacity: 0 }}
								transition={{ type: "spring", stiffness: 300, damping: 25 }}
								className="relative max-w-4xl w-full max-h-[90vh] rounded-xl overflow-hidden shadow-2xl"
								onClick={(e) => e.stopPropagation()}
							>
								<img
									src="/about-me-image.jpeg"
									alt="Profile"
									className="w-full h-full object-contain bg-white dark:bg-gray-900"
								/>
								<button
									onClick={() => setIsProfileModalOpen(false)}
									className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white flex items-center justify-center transition-all"
								>
									<span className="text-2xl">&times;</span>
								</button>
							</m.div>
						</m.div>
					)}

					{/* Header with Navigation */}
					<div className="text-center max-w-4xl mx-auto">
						<m.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ type: "spring", stiffness: 100, damping: 20 }}
							className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent"
						>
							About Me
						</m.h2>
						<m.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
							className="text-lg text-gray-600 dark:text-gray-400 mb-8"
						>
							First-year Computer Science student specializing in Applied Machine Learning,
							MLOps, and Data Analytics. Combining technical excellence with physical discipline
							to build impactful solutions.
						</m.p>

						{/* Tab Navigation */}
						<div className="flex flex-wrap justify-center gap-2 mb-8">
							{['overview', 'skills', 'timeline', 'personal'].map((tab, i) => (
								<m.button
									key={tab}
									onClick={() => setActiveTab(tab)}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										type: "spring",
										stiffness: 100,
										damping: 20,
										delay: i * 0.1
									}}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === tab
											? 'bg-gradient-to-r from-[#abcdef] to-[#abcdef] text-white shadow-lg'
											: 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
										}`}
								>
									{tab.charAt(0).toUpperCase() + tab.slice(1)}
								</m.button>
							))}
						</div>
					</div>

					{/* Quick Stats */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
						{stats.map((stat, i) => (
							<m.div
								key={stat.label}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 20,
									delay: i * 0.1
								}}
								whileHover={{ scale: 1.05 }}
								className="relative text-center p-4 rounded-2xl bg-light-card/70 dark:bg-dark-card/60 backdrop-blur-md shadow-sm hover:shadow-md transition-all"
							>
								<div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/5 pointer-events-none" />
								<m.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{
										type: "spring",
										stiffness: 200,
										damping: 20
									}}
									className="text-2xl mb-2"
								>
									{stat.icon}
								</m.div>
								<div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{stat.value}</div>
								<div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
							</m.div>
						))}
					</div>

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
											className="relative rounded-2xl p-6 bg-light-card/70 dark:bg-dark-card/60 backdrop-blur-md cursor-pointer shadow-sm hover:shadow-md transition-all"
											onClick={() => setSelectedAchievement(achievement)}
										>
											<div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/5 pointer-events-none" />
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

							{/* GitHub Activity Heatmap */}
							<div>
								<h3 className="text-2xl font-bold mb-6 text-center">Contribution Activity</h3>
								<m.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									className="relative rounded-2xl p-6 bg-light-card/70 dark:bg-dark-card/60 backdrop-blur-md shadow-sm overflow-x-auto"
								>
									<div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/5 pointer-events-none" />
									<img
										src="https://ghchart.rshah.org/b7ff2a/rautaditya2606"
										alt="GitHub contribution calendar"
										className="w-full min-w-[720px]"
									/>
								</m.div>
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
											<div className="relative rounded-2xl p-6 bg-light-card/70 dark:bg-dark-card/60 backdrop-blur-md shadow-sm">
												<div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/5 pointer-events-none" />
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
										className="relative rounded-2xl p-6 bg-light-card/70 dark:bg-dark-card/60 backdrop-blur-md shadow-sm"
									>
										<div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/5 pointer-events-none" />
										<div className="flex justify-between items-center mb-2">
											<span className="font-medium">{skill.name}</span>
											<span className="text-sm text-gray-500">{skill.category}</span>
										</div>
										<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
											<m.div
												initial={{ width: 0 }}
												animate={{ width: `${skill.level}%` }}
												transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
												className="bg-gradient-to-r from-[#abcdef] to-[#abcdef] h-2 rounded-full"
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
								{/* Main vertical line */}
								<div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#abcdef] to-[#abcdef]"></div>

								{/* Timeline items */}
								{timeline.map((item, index) => (
									<TimelineItem key={item.year} item={item} index={index} />
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
										className="relative rounded-2xl p-6 bg-light-card/70 dark:bg-dark-card/60 backdrop-blur-md shadow-sm"
									>
										<div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/5 pointer-events-none" />
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
												className="bg-gradient-to-r from-[#abcdef] to-[#abcdef] h-2 rounded-full"
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
										<X className="w-5 h-5" />
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
			</div>
		</Section>
	)
}