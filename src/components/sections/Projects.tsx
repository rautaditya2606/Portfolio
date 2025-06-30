'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Section } from '@/components/ui/Section'
import { m } from 'framer-motion'
import { trackLinkClick } from '@/utils/linkTracker'

const projects = [
	{
		name: 'NPSP',
		type: 'Unified Property Search Platform',
		description: 'Full‑stack Express.js API designed to integrate multiple property data sources in India (DLR, DORSI, CERSAI, MCA21). Won 2nd place in the IIC Udaan 2.0 hackathon with this innovative solution.',
		techStack: ['Express.js', 'MongoDB', 'i18n', 'REST API', 'Jest'],
		highlights: [
			'Unified JSON schema for disparate land, urban, corporate datasets',
			'REST endpoints for property search by ID, registration, or combined query',
			'Locale support via i18n',
			'Robust error handling and mock APIs for testing',
		],
		achievement: '🏆 2nd Place in IIC Udaan 2.0 Hackathon',
		deployedUrl: 'javascript:void(0)',
		featured: true,
		stats: { lines: '5.2K', commits: '127', contributors: '3' },
		category: 'Backend',
		gradient: 'from-blue-500/20 via-purple-500/20 to-pink-500/20'
	},
	{
		name: 'NestNow',
		type: 'Luxury Rental Marketplace',
		description: 'A curated property listing platform tailored to high-end rentals. Project led to multiple internship opportunities, demonstrating strong full-stack development capabilities.',
		techStack: ['MongoDB', 'EJS', 'Bootstrap', 'Node.js', 'Express.js'],
		highlights: [
			'User/host authentication and role-based listing management',
			'Dynamic search and filter options (price, location, property type)',
			'Mobile‑friendly UI built with EJS and Bootstrap',
			'Data seeding scripts for scalable initialization'
		],
		achievement: '💼 Secured Multiple Internship Offers',
		deployedUrl: 'javascript:void(0)',
		featured: true,
		stats: { lines: '8.1K', commits: '203', contributors: '2' },
		category: 'Full-Stack',
		gradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20'
	},
	{
		name: 'lib',
		type: 'Library Management System',
		description: 'A MongoDB‑powered system for college libraries with comprehensive feature coverage.',
		techStack: ['MongoDB', 'Express.js', 'Helmet', 'QR Code', 'Node.js'],
		highlights: [
			'Role‑based access (librarian, student)',
			'Book actions: issue, return, renew, search, with QR-code support',
			'Automated overdue reminders and usage dashboards',
			'Security: Helmet, rate-limiting, session management'
		],
		deployedUrl: 'javascript:void(0)',
		featured: true,
		stats: { lines: '4.7K', commits: '89', contributors: '1' },
		category: 'Backend',
		gradient: 'from-orange-500/20 via-amber-500/20 to-yellow-500/20'
	},
	{
		name: 'haven',
		type: 'Roommate Matching SPA',
		description: 'A visually driven, HTML/CSS single-page application for flat/roommate matching.',
		techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
		highlights: [
			'Profile-based roommate pairing with lifestyle preferences',
			'Responsive, modern design with high visual fidelity',
			'Emphasizes community and local engagement through UX and copy',
			'Landing page prototype for co-living marketplaces'
		],
		achievement: '🏠 Modern UX Design',
		deployedUrl: 'javascript:void(0)',
		stats: { lines: '2.3K', commits: '45', contributors: '1' },
		category: 'Frontend',
		gradient: 'from-red-500/20 via-rose-500/20 to-pink-500/20'
	}
]

const categories = ['All', 'Backend', 'Full-Stack', 'Frontend']

export const Projects = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const [currentSlide, setCurrentSlide] = useState(1)
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [hoveredProject, setHoveredProject] = useState<string | null>(null)
	const [autoPlay, setAutoPlay] = useState(true)
	const [expandedHighlights, setExpandedHighlights] = useState<Record<string, boolean>>({})

	const filteredProjects = selectedCategory === 'All' 
		? projects 
		: projects.filter(project => project.category === selectedCategory)

	const extendedProjects = [
		filteredProjects[filteredProjects.length - 1],
		...filteredProjects,
		filteredProjects[0]
	]

	const scrollToProject = useCallback((direction: 'next' | 'prev') => {
		const container = containerRef.current
		if (!container) return

		const cardWidth = container.clientWidth
		const currentScroll = container.scrollLeft
		const targetScroll = direction === 'next' 
			? currentScroll + cardWidth 
			: currentScroll - cardWidth

		container.scrollTo({
			left: targetScroll,
			behavior: 'smooth'
		})
	}, [])

	// Auto-play functionality
	useEffect(() => {
		if (!autoPlay) return

		const interval = setInterval(() => {
			scrollToProject('next')
		}, 4000)

		return () => clearInterval(interval)
	}, [autoPlay, scrollToProject])

	// Handle scroll events and infinite scroll
	useEffect(() => {
		const container = containerRef.current
		if (!container) return

		let scrollTimeout: NodeJS.Timeout
		const totalSlides = extendedProjects.length

		const handleInfiniteScroll = () => {
			if (!container) return
			
			const scrollLeft = container.scrollLeft
			const cardWidth = container.clientWidth

			if (scrollLeft >= cardWidth * (totalSlides - 1)) {
				container.style.scrollBehavior = 'auto'
				container.scrollLeft = cardWidth
				container.style.scrollBehavior = 'smooth'
				setCurrentSlide(1)
			} else if (scrollLeft <= 0) {
				container.style.scrollBehavior = 'auto'
				container.scrollLeft = cardWidth * (totalSlides - 2)
				container.style.scrollBehavior = 'smooth'
				setCurrentSlide(filteredProjects.length)
			} else {
				const newSlide = Math.round(scrollLeft / cardWidth)
				setCurrentSlide(newSlide)
			}
		}

		const handleScroll = () => {
			clearTimeout(scrollTimeout)
			scrollTimeout = setTimeout(() => {
				const scrollLeft = container.scrollLeft
				const cardWidth = container.clientWidth
				const currentCard = Math.round(scrollLeft / cardWidth)

				if (scrollLeft !== currentCard * cardWidth) {
					container.scrollTo({
						left: currentCard * cardWidth,
						behavior: 'smooth'
					})
				}

				requestAnimationFrame(handleInfiniteScroll)
			}, 50)
		}

		container.addEventListener('scroll', handleScroll)
		container.scrollLeft = container.clientWidth

		return () => {
			container.removeEventListener('scroll', handleScroll)
			clearTimeout(scrollTimeout)
		}
	}, [filteredProjects.length, extendedProjects.length])

	const toggleHighlights = (projectName: string) => {
		setExpandedHighlights(prev => ({
			...prev,
			[projectName]: !prev[projectName]
		}))
	}

	return (
		<Section id="projects" className="min-h-screen overflow-hidden py-8 relative">
			{/* Animated Background */}
			<div className="absolute inset-0 opacity-30">
				<div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
			</div>

			<div className="relative z-10">
				{/* Header with Category Filter */}
				<div className="text-center mb-8">
					<div className="inline-flex items-center gap-2 mb-4">
						<div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
						<m.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
						>
							Featured Projects
						</m.h2>
						<div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-500"></div>
					</div>
					
					{/* Category Filter */}
					<div className="flex justify-center gap-2 mb-6">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
									selectedCategory === category
										? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
										: 'bg-secondary/5 text-muted-foreground hover:bg-secondary/10'
								}`}
							>
								{category}
							</button>
						))}
					</div>

					{/* Auto-play Toggle */}
					<div className="flex justify-center items-center gap-3 mb-4">
						<span className="text-sm text-muted-foreground">Auto-play</span>
						<button
							onClick={() => setAutoPlay(!autoPlay)}
							className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
								autoPlay ? 'bg-blue-500' : 'bg-secondary/20'
							}`}
						>
							<div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
								autoPlay ? 'translate-x-7' : 'translate-x-1'
							}`}></div>
						</button>
					</div>
				</div>

				{/* Projects Carousel */}
				<div className="relative group">
					{/* Navigation Arrows */}
					<button
						onClick={() => scrollToProject('prev')}
						onMouseEnter={() => setAutoPlay(false)}
						onMouseLeave={() => setAutoPlay(true)}
						className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background hover:border-border hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<polyline points="15,18 9,12 15,6" />
						</svg>
					</button>

					<button
						onClick={() => scrollToProject('next')}
						onMouseEnter={() => setAutoPlay(false)}
						onMouseLeave={() => setAutoPlay(true)}
						className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background hover:border-border hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<polyline points="9,18 15,12 9,6" />
						</svg>
					</button>

					{/* Projects Container */}
					<div 
						ref={containerRef} 
						className="w-full h-[600px] overflow-x-scroll overflow-y-hidden scrollbar-hide"
						onMouseEnter={() => setAutoPlay(false)}
						onMouseLeave={() => setAutoPlay(true)}
					>
						<div className="inline-flex h-full">
							{extendedProjects.map((project, index) => (
								<div
									key={`${project.name}-${index}`}
									className="w-screen flex-shrink-0 h-full flex items-center justify-center"
									onMouseEnter={() => setHoveredProject(project.name)}
									onMouseLeave={() => setHoveredProject(null)}
								>
									<div className="w-[90%] max-w-4xl mx-auto">
										<m.div
											initial={{ opacity: 0, x: 100 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.5, delay: 0.1 }}
											viewport={{ once: true }}
											className={`relative w-full h-[550px] bg-gradient-to-br ${project.gradient} backdrop-blur-sm rounded-2xl border border-border/20 overflow-hidden transition-all duration-500 ${
												hoveredProject === project.name ? 'scale-105 shadow-2xl' : 'scale-100 shadow-xl'
											}`}
										>
											{/* Floating Elements */}
											<div className="absolute top-4 right-4 flex gap-2">
												<div className="w-3 h-3 bg-red-400 rounded-full animate-bounce"></div>
												<div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
												<div className="w-3 h-3 bg-green-400 rounded-full animate-bounce delay-200"></div>
											</div>

											{/* Project Stats */}
											<div className="absolute top-4 left-4 flex gap-3 text-xs">
												<div className="bg-background/20 backdrop-blur-sm rounded-full px-3 py-1">
													<span className="text-white/80">Lines: </span>
													<span className="text-white font-semibold">{project.stats.lines}</span>
												</div>
												<div className="bg-background/20 backdrop-blur-sm rounded-full px-3 py-1">
													<span className="text-white/80">Commits: </span>
													<span className="text-white font-semibold">{project.stats.commits}</span>
												</div>
											</div>

											{/* Project Content */}
											<div className="p-6 md:p-8 h-full flex flex-col justify-center">
												{/* Project Header */}
												<div className="mb-6">
													<div className="flex items-center gap-3 mb-2">
														<h3 className="text-3xl font-bold text-white">{project.name}</h3>
														<span className={`px-3 py-1 rounded-full text-xs font-medium ${
															project.category === 'Backend' ? 'bg-blue-500/30 text-blue-100' :
															project.category === 'Frontend' ? 'bg-pink-500/30 text-pink-100' :
															'bg-green-500/30 text-green-100'
														}`}>
															{project.category}
														</span>
													</div>
													<p className="text-xl text-white/80">{project.type}</p>
												</div>

												{/* Achievement Badge */}
												{project.achievement && (
													<div className="mb-6">
														<span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-background/20 text-white backdrop-blur-sm border border-border/30">
															{project.achievement}
														</span>
													</div>
												)}

												{/* Tech Stack with Hover Effects */}
												<div className="flex flex-wrap gap-2 mb-6">
													{project.techStack.map((tech, i) => (
														<span
															key={tech}
															className="px-3 py-1 rounded-full bg-background/10 text-white text-sm backdrop-blur-sm border border-border/20 hover:bg-background/20 hover:scale-105 transition-all duration-300 cursor-pointer"
															style={{ animationDelay: `${i * 100}ms` }}
														>
															{tech}
														</span>
													))}
												</div>

												{/* Description */}
												<p className="text-white/80 mb-6 leading-relaxed text-lg">
													{project.description}
												</p>

												{/* Expandable Highlights */}
												<div className="mb-8">
													<button
														onClick={() => toggleHighlights(project.name)}
														className="flex items-center gap-2 text-white hover:text-white/80 transition-colors mb-4"
													>
														<span className="font-semibold">Key Features</span>
														<svg 
															className={`w-4 h-4 transition-transform duration-300 ${
																expandedHighlights[project.name] ? 'rotate-180' : ''
															}`}
															fill="none" 
															stroke="currentColor" 
															viewBox="0 0 24 24"
														>
															<polyline points="6,9 12,15 18,9" />
														</svg>
													</button>
													
													<div className={`overflow-hidden transition-all duration-500 ${
														expandedHighlights[project.name] ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
													}`}>
														<ul className="space-y-2 text-white/80">
															{project.highlights.map((highlight, i) => (
																<li key={i} className="flex items-start">
																	<span className="mr-3 text-white/60 font-bold">▹</span>
																	<span className="leading-relaxed">{highlight}</span>
																</li>
															))}
														</ul>
													</div>
												</div>

												{/* Action Buttons */}
												<div className="flex gap-4 mt-auto">
													<a
														href={project.deployedUrl}
														target="_blank"
														rel="noopener noreferrer"
														onClick={() => trackLinkClick(project.deployedUrl, `View Live Demo - ${project.name}`)}
														className="flex-1 bg-background/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-background/30 transition-all duration-300 text-center border border-border/30 hover:scale-105"
													>
														View Live Demo
													</a>
													<button 
														onClick={() => trackLinkClick(`https://github.com/yourusername/${project.name.toLowerCase()}`, `View Code - ${project.name}`)}
														className="bg-white text-foreground px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105"
													>
														View Code
													</button>
												</div>
											</div>
										</m.div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Progress Indicators */}
					<div className="flex items-center justify-center gap-2 mt-6">
						{filteredProjects.map((_, index) => {
							const isActive = currentSlide === index + 1
							return (
								<button
									key={index}
									onClick={() => {
										const container = containerRef.current
										if (!container) return
										container.scrollTo({
											left: (index + 1) * container.clientWidth,
											behavior: 'smooth'
										})
									}}
									className={`transition-all duration-300 ${
										isActive 
											? 'w-8 h-2 bg-blue-500 rounded-full' 
											: 'w-2 h-2 bg-secondary/20 rounded-full hover:bg-secondary/40'
									}`}
								/>
							)
						})}
					</div>
				</div>
			</div>

			<style jsx>{`
				.scrollbar-hide {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
				.scrollbar-hide::-webkit-scrollbar {
					display: none;
				}
			`}</style>
		</Section>
	)
}
