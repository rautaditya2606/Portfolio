'use client'

import { Section } from '@/components/ui/Section'
import { m } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef, useCallback } from 'react'

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
	}
]

export const Projects = () => {
	const containerRef = useRef<HTMLDivElement>(null)

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

	useEffect(() => {
		const container = containerRef.current
		if (!container) return

		let scrollTimeout: NodeJS.Timeout
		let isScrolling = false
		const totalSlides = projects.length + 2 // Total including clones

		const handleInfiniteScroll = () => {
			if (!container) return
			
			const scrollLeft = container.scrollLeft
			const cardWidth = container.clientWidth

			// When reaching the end clone (after last real slide)
			if (scrollLeft >= cardWidth * (totalSlides - 1)) {
				container.style.scrollBehavior = 'auto'
				container.scrollLeft = cardWidth // Go to first real slide
				container.style.scrollBehavior = 'smooth'
			}
			// When reaching the start clone (before first real slide)
			else if (scrollLeft <= 0) {
				container.style.scrollBehavior = 'auto'
				container.scrollLeft = cardWidth * (totalSlides - 2) // Go to last real slide
				container.style.scrollBehavior = 'smooth'
			}
		}

		const handleScroll = () => {
			if (!isScrolling) {
				isScrolling = true
			}

			clearTimeout(scrollTimeout)

			scrollTimeout = setTimeout(() => {
				isScrolling = false
				const scrollLeft = container.scrollLeft
				const cardWidth = container.clientWidth
				const currentCard = Math.round(scrollLeft / cardWidth)

				// Only snap if we're not at the exact position already
				if (scrollLeft !== currentCard * cardWidth) {
					container.scrollTo({
						left: currentCard * cardWidth,
						behavior: 'smooth'
					})
				}

				// Check for infinite scroll after snapping
				requestAnimationFrame(() => {
					handleInfiniteScroll()
				})
			}, 50) // Reduced timeout for more responsive scrolling
		}

		// Add touch event handlers for better mobile experience
		let touchStart = 0
		let touchStartTime = 0

		const handleTouchStart = (e: TouchEvent) => {
			touchStart = e.touches[0].clientX
			touchStartTime = Date.now()
		}

		const handleTouchEnd = (e: TouchEvent) => {
			const touchEnd = e.changedTouches[0].clientX
			const touchEndTime = Date.now()
			
			const swipeDistance = touchEnd - touchStart
			const swipeTime = touchEndTime - touchStartTime
			
			// Calculate velocity of swipe
			const velocity = Math.abs(swipeDistance) / swipeTime
			
			// If it's a fast swipe, move to next/previous
			if (velocity > 0.5 && Math.abs(swipeDistance) > 50) {
				const direction = swipeDistance > 0 ? -1 : 1
				const cardWidth = container.clientWidth
				const currentScroll = container.scrollLeft
				const targetScroll = currentScroll + (cardWidth * direction)
				
				container.scrollTo({
					left: targetScroll,
					behavior: 'smooth'
				})
			}
		}

		container.addEventListener('scroll', handleScroll)
		container.addEventListener('touchstart', handleTouchStart)
		container.addEventListener('touchend', handleTouchEnd)
		
		// Initial setup - scroll to first real slide
		container.scrollLeft = container.clientWidth

		return () => {
			container.removeEventListener('scroll', handleScroll)
			container.removeEventListener('touchstart', handleTouchStart)
			container.removeEventListener('touchend', handleTouchEnd)
			clearTimeout(scrollTimeout)
		}
	}, [])

	// Create an array with cloned items for infinite scroll
	const extendedProjects = [
		projects[projects.length - 1], // Clone of last project
		...projects,
		projects[0] // Clone of first project
	]

	return (
		<Section id="projects" className="min-h-screen overflow-hidden py-4 md:py-0">
			<div className="text-center mb-4 md:mb-8">
				<m.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-2xl md:text-3xl font-bold"
				>
					Featured Projects
				</m.h2>
			</div>
			
			<div className="relative group">
				{/* Navigation Arrows */}
				<button
					onClick={() => scrollToProject('prev')}
					className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:text-foreground hover:bg-background hover:border-border hover:scale-110 transition-all md:flex hidden shadow-lg"
					aria-label="Previous project"
				>
					<svg 
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 24 24" 
						fill="none" 
						stroke="currentColor" 
						strokeWidth="2" 
						strokeLinecap="round" 
						strokeLinejoin="round"
						className="w-6 h-6"
					>
						<polyline points="15 18 9 12 15 6" />
					</svg>
				</button>

				<button
					onClick={() => scrollToProject('next')}
					className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:text-foreground hover:bg-background hover:border-border hover:scale-110 transition-all md:flex hidden shadow-lg"
					aria-label="Next project"
				>
					<svg 
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 24 24" 
						fill="none" 
						stroke="currentColor" 
						strokeWidth="2" 
						strokeLinecap="round" 
						strokeLinejoin="round"
						className="w-6 h-6"
					>
						<polyline points="9 18 15 12 9 6" />
					</svg>
				</button>

				{/* Projects Container */}
				<div ref={containerRef} className="projects-container relative w-full h-[calc(100vh-5rem)] md:h-[calc(100vh-8rem)] overflow-x-scroll overflow-y-hidden">
					<div className="projects-wrapper inline-flex">
						{extendedProjects.map((project, index) => (
							<div
								key={`${project.name}-${index}`}
								className="project-card w-screen flex-shrink-0 px-3 md:px-8 flex items-center justify-center"
								style={{ touchAction: 'pan-x' }}
							>
								<m.div
									initial={{ opacity: 0, x: 100 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.1 }}
									viewport={{ once: true }}
									className="bg-secondary/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 w-full max-w-sm md:max-w-3xl"
								>
									<div className="flex flex-col h-full">
										{/* Project Header */}
										<div className="mb-3 md:mb-4">
											<h3 className="text-xl md:text-2xl font-bold">{project.name}</h3>
											<p className="text-sm md:text-base text-muted-foreground mt-1">{project.type}</p>
										</div>

										{/* Achievement Badge */}
										{project.achievement && (
											<div className="mb-3 md:mb-4">
												<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs md:text-sm font-medium bg-primary/10 text-primary">
													{project.achievement}
												</span>
											</div>
										)}

										{/* Tech Stack */}
										<div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
											{project.techStack.map((tech) => (
												<span
													key={tech}
													className="px-2 md:px-3 py-0.5 rounded-full bg-secondary/10 text-secondary-foreground text-xs md:text-sm"
												>
													{tech}
												</span>
											))}
										</div>

										{/* Description */}
										<p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
											{project.description}
										</p>

										{/* Highlights */}
										<div className="flex-grow mb-4 md:mb-6">
											<ul className="space-y-2 text-sm md:text-base text-muted-foreground">
												{project.highlights.map((highlight, i) => (
													<li key={i} className="flex items-start">
														<span className="mr-2 text-primary">▹</span>
														<span className="leading-relaxed">{highlight}</span>
													</li>
												))}
											</ul>
										</div>

										{/* Project Link */}
										{project.deployedUrl && (
											<div className="mt-auto">
												<a
													href={project.deployedUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center justify-center rounded-md bg-primary px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors group"
												>
													View Project
													<svg 
														xmlns="http://www.w3.org/2000/svg" 
														viewBox="0 0 24 24" 
														fill="none" 
														stroke="currentColor" 
														strokeWidth="2" 
														strokeLinecap="round" 
														strokeLinejoin="round"
														className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
													>
														<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
														<polyline points="15 3 21 3 21 9" />
														<line x1="10" y1="14" x2="21" y2="3" />
													</svg>
												</a>
											</div>
										)}
									</div>
								</m.div>
							</div>
						))}
					</div>
				</div>

				{/* Mobile Navigation Indicators - with active state */}
				<div className="flex items-center justify-center gap-2 mt-4 md:hidden">
					{projects.map((_, index) => {
						const isActive = index === Math.floor((containerRef.current?.scrollLeft ?? 0) / (containerRef.current?.clientWidth ?? 1)) - 1
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
								className={`w-2 h-2 rounded-full transition-all duration-300 ${
									isActive 
										? 'bg-primary scale-125' 
										: 'bg-secondary/20 hover:bg-secondary/40'
								}`}
								aria-label={`Go to project ${index + 1}`}
								aria-current={isActive ? 'true' : 'false'}
							/>
						)
					})}
				</div>
			</div>
		</Section>
	)
}
