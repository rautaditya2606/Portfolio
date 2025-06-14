'use client'

import { Section } from '@/components/ui/Section'
import { m } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const projects = [
	{
		name: 'NPSP – National Property Search Platform',
		type: 'Award-Winning API-first Property Data Aggregator',
		achievement: '🏆 Second Place Winner - National Competition',
		techStack: ['Express.js', 'EJS', 'JavaScript', 'REST API', 'i18n'],
		description:
			'A unified property search platform that revolutionizes how government property data is accessed and standardized across multiple sources.',
		highlights: [
			'Built comprehensive REST API integrating DLR, DORSI, CERSAI, and MCA21 data sources',
			'Implemented advanced data transformation layer for schema normalization',
			'Developed multilingual support with i18n integration',
			'Created standardized JSON output format for heterogeneous data sources',
			'Designed for government and legal sector requirements',
		],
		deployedUrl: '#',
		featured: true,
	},
	{
		name: 'NestNow',
		type: 'Property Rental Platform',
		achievement: '💼 Led to Industry Internship Offer',
		techStack: ['Express.js', 'MongoDB', 'EJS', 'Bootstrap', 'JavaScript'],
		description:
			'A sophisticated Airbnb-style rental platform that caught industry attention, showcasing full-stack development capabilities.',
		highlights: [
			'Implemented secure authentication system for hosts and users',
			'Built comprehensive host panel for property management',
			'Developed advanced property filtering and search system',
			'Created responsive UI optimized for luxury property showcase',
			'Designed scalable MongoDB schema for property listings',
		],
		deployedUrl: '#',
		featured: true,
	},
	{
		name: 'ASTECH Club Website',
		type: 'Club Management & Showcase Platform',
		techStack: ['EJS', 'Express.js', 'JavaScript', 'Bootstrap', 'CSS'],
		description:
			'A comprehensive platform for managing club activities, events, and member registrations with mobile-responsive design.',
		highlights: [
			'Over 120 student members, 3+ major events',
			'Event management for ASTECH Festival, SIH Grand Finale 2024, SciFest\'25',
			'Project showcases including NADAL Rocket, BB84 QKD',
			'Mobile-responsive design with event management',
			'Backend routing for events, workshops, and initiatives',
			'Deployed via Railway Hosting',
		],
		deployedUrl: '#',
	},
	{
		name: 'Auditext',
		type: 'Audio Transcription Web App',
		techStack: ['Node.js', 'Express.js', 'EJS', 'Deepgram API'],
		description:
			'A full-stack audio transcription platform leveraging Deepgram\'s AI for real-time speech-to-text conversion.',
		highlights: [
			'Dual input modes: file uploads and live microphone streaming',
			'Integration with Deepgram\'s nova model',
			'Automatic language detection',
			'Support for multiple audio formats',
			'Production-ready with error handling and modular design',
		],
		deployedUrl: '#',
	},
	{
		name: 'lib – Library Management',
		type: 'College Library Automation Tool',
		techStack: ['Express.js', 'MongoDB', 'EJS', 'Bootstrap', 'JavaScript'],
		description:
			'A comprehensive library management system with QR-based operations and role-based access.',
		highlights: [
			'Role-based access control',
			'QR code-based book issuing/return',
			'Automated overdue reminders',
			'Rich book categorization',
			'Secure with Helmet and rate-limiting',
		],
		deployedUrl: '#',
	},
]

export const Projects = () => {
	const containerRef = useRef<HTMLDivElement>(null)

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
								className="bg-secondary/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 w-full max-w-2xl md:max-w-4xl"
							>
								<div className="flex flex-col h-full">
									<h3 className="text-xl md:text-2xl font-bold mb-2">{project.name}</h3>
									<p className="text-base md:text-lg text-muted-foreground mb-2">{project.type}</p>
									{project.achievement && (
										<p className="text-sm md:text-base text-primary mb-3 md:mb-4">{project.achievement}</p>
									)}
									<div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
										{project.techStack.map((tech) => (
											<span
												key={tech}
												className="px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm"
											>
												{tech}
											</span>
										))}
									</div>
									<p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">{project.description}</p>
									<ul className="list-disc list-inside space-y-1.5 md:space-y-2 mb-4 md:mb-6 text-sm md:text-base text-muted-foreground">
										{project.highlights.map((highlight, i) => (
											<li key={i} className="leading-relaxed">{highlight}</li>
										))}
									</ul>
									{project.deployedUrl && (
										<Link
											href={project.deployedUrl}
											className="mt-auto inline-flex items-center justify-center rounded-md bg-primary px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-primary-foreground hover:bg-primary/90"
										>
											View Project
										</Link>
									)}
								</div>
							</m.div>
						</div>
					))}
				</div>
			</div>
		</Section>
	)
}
