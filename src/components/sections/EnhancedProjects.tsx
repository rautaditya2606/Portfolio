'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const projects = [
	{
		name: 'NPSP',
		type: 'Unified Property Search Platform',
		description: 'Full-stack Express.js API integrating multiple property data sources in India (DLR, DORSI, CERSAI, MCA21). Awarded 2nd place in IIC Udaan 2.0 hackathon.',
		techStack: ['Express.js', 'MongoDB', 'i18n', 'REST API', 'Jest'],
		highlights: [
			'Unified JSON schema for disparate land, urban, corporate datasets',
			'REST endpoints for property search by ID, registration, or combined query',
			'Locale support via i18n with robust error handling',
			'Mock APIs and comprehensive testing suite'
		],
		achievement: '2nd Place - IIC Udaan 2.0 Hackathon',
		featured: true
	},
	{
		name: 'NestNow',
		type: 'Luxury Rental Marketplace',
		description: 'Curated property listing platform for high-end rentals. Led to multiple internship opportunities through demonstrated full-stack capabilities.',
		techStack: ['MongoDB', 'EJS', 'Bootstrap', 'Node.js', 'Express.js'],
		highlights: [
			'User authentication with role-based listing management',
			'Dynamic search and filtering (price, location, property type)',
			'Responsive design optimized for mobile devices',
			'Scalable data seeding and initialization scripts'
		],
		achievement: '2 Internship Offers',
		featured: true
	},
	{
		name: 'Library Management System',
		type: 'Academic Resource Management',
		description: 'MongoDB-powered system for college libraries with comprehensive feature coverage and security implementation.',
		techStack: ['MongoDB', 'Express.js', 'Helmet', 'QR Code', 'Node.js'],
		highlights: [
			'Role-based access control (librarian, student)',
			'Book management: issue, return, renew with QR-code support',
			'Automated overdue reminders and usage analytics',
			'Security implementation with rate limiting and session management'
		],
		featured: true
	},
	{
		name: 'Haven',
		type: 'Roommate Matching Platform',
		description: 'Modern single-page application for flat and roommate matching with emphasis on user experience and community building.',
		techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
		highlights: [
			'Profile-based matching with lifestyle preferences',
			'Modern, responsive design with high visual fidelity',
			'Community-focused UX design and copywriting',
			'Prototype for co-living marketplace solutions'
		]
	}
]

export default function ProfessionalPortfolio() {
	const [selectedProject, setSelectedProject] = useState(0)
	const [isAnimating, setIsAnimating] = useState(false)

	const handleProjectChange = useCallback((index: number) => {
		if (isAnimating || index === selectedProject) return
		
		setIsAnimating(true)
		setSelectedProject(index)
		
		setTimeout(() => setIsAnimating(false), 300)
	}, [selectedProject, isAnimating])

	const currentProject = projects[selectedProject] || projects[0]

	return (
		<section className="min-h-screen py-16 dark:bg-dark-background bg-light-background transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-6">
				{/* Header */}
				<header className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Featured Projects
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						A showcase of full-stack development projects demonstrating technical proficiency and problem-solving capabilities.
					</p>
				</header>

				{/* Main Content Grid */}
				<div className="grid lg:grid-cols-3 gap-8">
					{/* Project Navigation */}
					<div className="lg:col-span-1">
						<div className="dark:bg-dark-card bg-light-card rounded-xl shadow-sm dark:border-dark-border border p-6 sticky top-8">
							<h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-4">
								Projects ({projects.length})
							</h3>
							<nav className="space-y-2">
								{projects.map((project, index) => (
									<button
										key={project.name}
										onClick={() => handleProjectChange(index)}
										className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
											selectedProject === index
												? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 text-blue-900 dark:text-blue-300'
												: 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
										}`}
									>
										<div className="font-medium">{project.name}</div>
										<div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{project.type}</div>
									</button>
								))}
							</nav>
						</div>
					</div>

					{/* Project Details */}
					<div className="lg:col-span-2">
						{currentProject && (
							<div className={`dark:bg-dark-card bg-light-card rounded-xl shadow-sm dark:border-dark-border border overflow-hidden transition-all duration-300 ${
								isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
							}`}>
								{/* Project Header */}
								<div className="p-8 border-b dark:border-dark-border">
									<div className="flex items-start justify-between mb-4">
										<div>
											<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
												{currentProject.name}
											</h2>
											<p className="text-lg text-gray-600 dark:text-gray-300">{currentProject.type}</p>
										</div>
									</div>

									{/* Achievement Badge */}
									{currentProject.achievement && (
										<div className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-50 text-amber-800 text-sm font-medium border border-amber-200 mb-4">
											<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M10 18l-8-4V6l8-4 8 4v8l-8 4z" />
											</svg>
											{currentProject.achievement}
										</div>
									)}
								</div>

								{/* Project Content */}
								<div className="p-8">
									{/* Description */}
									<div className="mb-8">
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Overview</h3>
										<p className="text-gray-700 dark:text-gray-300 leading-relaxed">{currentProject.description}</p>
									</div>

									{/* Tech Stack */}
									<div className="mb-8">
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technology Stack</h3>
										<div className="flex flex-wrap gap-2">
											{currentProject.techStack.map((tech) => (
												<span
													key={tech}
													className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
												>
													{tech}
												</span>
											))}
										</div>
									</div>

									{/* Key Features */}
									<div className="mb-8">
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
										<ul className="space-y-3">
											{currentProject.highlights.map((highlight, i) => (
												<li key={i} className="flex items-start">
													<svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
														<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
													</svg>
													<span className="text-gray-700 dark:text-gray-300">{highlight}</span>
												</li>
											))}
										</ul>
									</div>

									{/* Action Button */}
									<div className="flex gap-4">
										<button className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
											View Source Code
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>

				{/* Project Counter */}
				<div className="text-center mt-12">
					<div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
						<span>Project</span>
						<span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded font-medium">
							{selectedProject + 1}
						</span>
						<span>of</span>
						<span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded font-medium">
							{projects.length}
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}