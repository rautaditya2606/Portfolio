'use client'

import { Section } from '@/components/ui/Section'
import { m, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Car, Plane, Telescope } from 'lucide-react'

interface Achievement {
	title: string
	value: string
}

interface Stat {
	label: string
	value: string
}

interface ObsessionItem {
	title: string
	description: string
	icon: React.ReactNode
	details: string[]
	color: string
	achievements: Achievement[]
	stats: Stat[]
	funFact: string
	bgImage: string
}

const obsessions: ObsessionItem[] = [
	{
		title: 'Automobiles',
		description:
			'Passionate about Italian supercars and over-engineered bikes, especially MV Agusta and Ducati. The perfect blend of engineering and art.',
		icon: <Car className="w-8 h-8" />,
		details: [],
		stats: [
			{ label: 'Favorite Car', value: 'De Tomaso P72' },
			{ label: 'Dream Bike', value: 'Ducati Superleggera V4' },
		],
		bgImage: '/images/automotive-bg.jpg',
		color: 'from-[#abcdef] to-[#abcdef]',
		achievements: [
			{ title: 'Car Enthusiast', value: 'Expert' }
		],
		funFact: 'Can identify car models by engine sound alone',
	},
	{
		title: 'Military Aviation',
		description:
			'Deeply interested in jets, airpower, and combat systems. Fascinated by the technological advancement in military aviation.',
		icon: <Plane className="w-8 h-8" />,
		details: [],
		stats: [
			{ label: 'Favorite Jet', value: 'SR-72 Blackbird' },
			{ label: 'Dream Flight', value: 'A350-900' },
			{ label: 'Ceiling', value: '65,000 ft' },
		],
		bgImage: '/images/aviation-bg.jpg',
		color: 'from-[#abcdef] to-[#abcdef]',
		achievements: [
			{ title: 'Aviation History', value: 'Expert' },
			{ title: 'Flight Simulator', value: 'Pro' }
		],
		funFact: 'Can identify various aircraft by sight',
	},
	{
		title: 'Astronomy',
		description:
			'Former stargazer with telescope experience. Can identify planets and stars without aids. The mysteries of space continue to captivate me.',
		icon: <Telescope className="w-8 h-8" />,
		details: [],
		stats: [
			{ label: 'Favorite Planet', value: 'Saturn' },
			{ label: 'Telescope', value: 'Phoenix 60700' },
			{ label: 'Magnification', value: '175x Max' },
		],
		bgImage: '/images/astronomy-bg.jpg',
		color: 'from-purple-500 to-indigo-600',
		achievements: [
			{ title: 'Star Navigation', value: 'Expert' },
			{ title: 'Deep Sky Observer', value: 'Certified' }
		],
		funFact: 'Can point out all planets at night sky',
	},
]

const FloatingParticles = ({ count = 20 }) => {
	// Use deterministic positions based on index to avoid hydration mismatch
	const getPosition = (index: number) => {
		const seed = index * 137.5 // Use golden angle approximation for good distribution
		const x = (seed * 0.618033988749895) % 1 * 100
		const y = (seed * 0.381966011250105) % 1 * 100
		return { x, y }
	}

	const getDuration = (index: number) => {
		return 2 + (index % 3) // 2-4 seconds
	}

	const getDelay = (index: number) => {
		return (index % 2) // 0 or 1 second delay
	}

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{[...Array(count)].map((_, i) => {
				const position = getPosition(i)
				return (
					<m.div
						key={i}
						className="absolute w-1 h-1 bg-white/20 rounded-full"
						initial={{
							x: position.x + '%',
							y: position.y + '%',
						}}
						animate={{
							y: ['-10%', '110%'],
							opacity: [0, 1, 0],
						}}
						transition={{
							duration: getDuration(i),
							repeat: Infinity,
							ease: 'linear',
							delay: getDelay(i),
						}}
					/>
				)
			})}
		</div>
	)
}

export const Obsessions = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const [selectedCard, setSelectedCard] = useState<number | null>(null)
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect()
				setMousePosition({
					x: e.clientX - rect.left,
					y: e.clientY - rect.top,
				})
			}
		}

		const container = containerRef.current
		if (container) {
			container.addEventListener('mousemove', handleMouseMove)
			return () => container.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return (
		<Section id="obsession" className="py-20 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-light-background dark:bg-dark-background" />

			{/* Floating background elements */}
			<div className="absolute inset-0">
				<FloatingParticles count={30} />
			</div>

			<div ref={containerRef} className="relative z-10">
				<m.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<m.h2 className="text-5xl font-bold mb-6 relative inline-block text-white">
						Beyond Tech
					</m.h2>
					<m.p
						className="text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
					>
						Obsessions that fuel creativity, inspire innovation, and drive
						relentless pursuit of excellence
					</m.p>
				</m.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{obsessions.map((obsession, index) => (
						<m.div
							key={obsession.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="relative group cursor-pointer"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							onClick={() =>
								setSelectedCard(
									selectedCard === index ? null : index
								)
							}
						>
							<m.div
								className="bg-light-card dark:bg-dark-card rounded-3xl p-6 border border-light-border dark:border-dark-border hover:border-transparent transition-all duration-500 relative overflow-hidden backdrop-blur-sm"
								whileHover={{
									y: -8,
									boxShadow:
										'0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(59,130,246,0.3)',
								}}
								animate={{
									boxShadow:
										hoveredIndex === index
											? '0 25px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(147,51,234,0.3)'
											: '0 4px 6px rgba(0,0,0,0.05)',
								}}
							>
								{/* Gradient overlay */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${obsession.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
								/>

								{/* Magnetic mouse follow effect */}
								<m.div
									className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									animate={{
										background:
											hoveredIndex === index
												? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.1) 0%, transparent 50%)`
												: undefined,
									}}
								/>

								<div className="relative z-10">
									<div className="flex items-center justify-between mb-6">
										<m.div
											className="text-5xl transform group-hover:scale-110 transition-transform duration-300"
											whileHover={{ rotate: [0, -10, 10, 0] }}
											transition={{ duration: 0.5 }}
										>
											{obsession.icon}
										</m.div>
										<m.div
											initial={{ scale: 0, rotate: 180 }}
											animate={{
												scale: hoveredIndex === index ? 1 : 0,
												rotate: hoveredIndex === index ? 0 : 180,
											}}
											className="bg-gradient-to-r from-[#abcdef] to-[#abcdef] rounded-full p-3 shadow-lg"
										>
											<svg
												className="w-6 h-6 text-white"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path d="M13 10V3L4 14h7v7l9-11h-7z" />
											</svg>
										</m.div>
									</div>

									<h3 className="text-2xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-[#abcdef] group-hover:to-[#abcdef] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
										{obsession.title}
									</h3>

									<p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
										{obsession.description}
									</p>

									{/* Achievement badges */}
									<div className="flex flex-wrap gap-2 mb-4">
										{obsession.achievements.map((achievement, i) => (
											<m.span
												key={achievement.title}
												initial={{ opacity: 0, scale: 0 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{ delay: i * 0.1 + 0.3 }}
												className="px-3 py-1 text-xs bg-gradient-to-r from-[#abcdef]/20 to-[#abcdef]/20 text-[#abcdef] rounded-full border border-[#abcdef]/30"
											>
												{achievement.title}
											</m.span>
										))}
									</div>

									<AnimatePresence>
										{hoveredIndex === index && (
											<m.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: 'auto' }}
												exit={{ opacity: 0, height: 0 }}
												transition={{ duration: 0.3 }}
												className="space-y-3 mb-4"
											>
												{obsession.stats.map((stat, statIndex) => (
													<m.div
														key={stat.label}
														initial={{ x: -20, opacity: 0 }}
														animate={{ x: 0, opacity: 1 }}
														transition={{ delay: statIndex * 0.1 }}
														className="flex justify-between items-center text-sm"
													>
														<span className="text-gray-500 dark:text-gray-400 font-medium">
															{stat.label}
														</span>
														<span className="font-bold bg-gradient-to-r from-[#abcdef] to-[#abcdef] bg-clip-text text-transparent">
															{stat.value}
														</span>
													</m.div>
												))}
											</m.div>
										)}
									</AnimatePresence>

									<AnimatePresence>
										{selectedCard === index && (
											<m.div
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -20 }}
												transition={{ duration: 0.3 }}
												className="pt-4 border-t border-gray-200 dark:border-gray-700"
											>
												<div className="flex items-center gap-3 mb-3">
													<div className="w-8 h-8 bg-gradient-to-r from-[#abcdef] to-[#abcdef] rounded-full flex items-center justify-center">
														<svg
															className="w-4 h-4 text-white"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
														</svg>
													</div>
													<span className="text-sm font-medium text-gray-600 dark:text-gray-400">
														Fun Fact
													</span>
												</div>
												<p className="text-sm text-gray-700 dark:text-gray-300 italic">
													{obsession.funFact}
												</p>
											</m.div>
										)}
									</AnimatePresence>
								</div>
							</m.div>
						</m.div>
					))}
				</div>

				{/* Interactive hint */}
				<m.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5, duration: 0.5 }}
					className="text-center mt-12"
				>
					<p className="text-gray-500 dark:text-gray-400 text-sm">
						Hover to explore details • Click for fun facts
					</p>
				</m.div>
			</div>
		</Section>
	)
}