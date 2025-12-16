'use client'

import { Section } from '@/components/ui/Section'
import { m } from 'framer-motion'
import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Check, X } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/aditya-raut-3b4bba31b/',
		icon: (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	},
	{
		name: 'GitHub',
		url: 'https://github.com/rautaditya2606',
		icon: (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
			</svg>
		),
	},
]

export const Contact = () => {
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setStatus('loading')
		
		try {
			const formDataObj = new FormData()
			formDataObj.append('access_key', '89cc64df-0f60-4568-903c-05e072ad22ef')
			formDataObj.append('name', formData.name)
			formDataObj.append('email', formData.email)
			formDataObj.append('message', formData.message)
			
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formDataObj,
			})
			
			const result = await response.json()
			
			if (result.success) {
				setStatus('success')
				setFormData({ name: '', email: '', message: '' })
			} else {
				setStatus('error')
			}
		} catch {
			setStatus('error')
		}
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	return (
		<Section id="contact" className="py-24">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<m.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/5 text-primary-600 dark:text-primary-400 mb-5">
						<span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
						<span className="text-xs tracking-[0.18em] uppercase">Contact</span>
					</div>
					<h2 className="text-4xl font-semibold mb-4">Let's Connect</h2>
					<p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
						Ready to discuss your next project or just want to say hello? I&apos;m always open to new opportunities and collaborations.
					</p>
				</m.div>

				{/* Main Content - Horizontal Layout */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Contact Info - Left Side */}
					<m.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="lg:col-span-1"
					>
						<div className="relative rounded-2xl bg-light-card/70 dark:bg-dark-card/60 backdrop-blur-md p-8 shadow-sm h-fit">
							<div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/5 pointer-events-none" />
							<h3 className="text-2xl font-semibold mb-8 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-200 cursor-default">Get in Touch</h3>
							
							{/* Contact Methods */}
							<div className="space-y-6 mb-8">
								<div className="flex items-start space-x-4 group cursor-pointer">
									<div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-all duration-200">
										<EnvelopeIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
									</div>
									<div className="group-hover:translate-x-1 transition-transform duration-200">
										<h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors duration-200">Email</h4>
										<a
											href="mailto:rautaditya2606@gmail.com"
											className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-200"
										>
											rautaditya2606@gmail.com
										</a>
									</div>
								</div>

								<div className="flex items-start space-x-4 group cursor-pointer">
									<div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-all duration-200">
										<PhoneIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
									</div>
									<div className="group-hover:translate-x-1 transition-transform duration-200">
										<h4 className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-500 transition-colors duration-200">Phone</h4>
										<a
											href="tel:+919209793522"
											className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition-colors duration-200"
										>
											+91 92097 93522
										</a>
									</div>
								</div>

								<div className="flex items-start space-x-4 group cursor-pointer">
									<div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-all duration-200">
										<MapPinIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
									</div>
									<div className="group-hover:translate-x-1 transition-transform duration-200">
										<h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors duration-200">Location</h4>
										<span className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors duration-200">India</span>
									</div>
								</div>
							</div>

							{/* Social Links */}
							<div>
								<h4 className="font-medium text-gray-900 dark:text-white mb-4 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-200 cursor-default">Follow Me</h4>
								<div className="flex space-x-3">
									{socialLinks.map((social) => (
										<Link
											key={social.name}
											href={social.url}
											target="_blank"
											rel="noopener noreferrer"
											className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:scale-110 hover:shadow-lg transition-all duration-200 group"
										>
											<span className={`text-gray-600 dark:text-gray-400 transition-colors duration-200 group-hover:${social.name === 'LinkedIn' ? '[color:#0A66C2]' : social.name === 'GitHub' ? '[color:#333]' : 'text-primary-600 dark:text-primary-500'}`}>{social.icon}</span>
										</Link>
									))}
								</div>
							</div>
						</div>

						{/* Opportunities Card */}
						<div className="mt-6 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800">
							<h4 className="font-semibold text-gray-900 dark:text-white mb-3">Open for Opportunities</h4>
							<div className="grid grid-cols-2 gap-2 text-sm">
								<div className="text-gray-600 dark:text-gray-400 flex items-center gap-2"><Check className="w-4 h-4" /> ML & MLOps</div>
<div className="text-gray-600 dark:text-gray-400 flex items-center gap-2"><Check className="w-4 h-4" /> Data Science</div>
<div className="text-gray-600 dark:text-gray-400 flex items-center gap-2"><Check className="w-4 h-4" /> Full-Stack Dev</div>
<div className="text-gray-600 dark:text-gray-400 flex items-center gap-2"><Check className="w-4 h-4" /> Open Source</div>
							</div>
						</div>
					</m.div>

					{/* Contact Form - Right Side */}
					<m.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="lg:col-span-2"
					>relative rounded-2xl bg-light-card/70 dark:bg-dark-card/60 backdrop-blur-md p-8 shadow-sm">
							<div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/5 pointer-events-none" />
							<div className="mb-8">
								<h3 className="text-2xl font-semi
								<h3 className="text-2xl font-bold mb-2 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-200 cursor-default">Send a Message</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Tell me about your project, collaboration idea, or just drop a hello.
								</p>
							</div>

							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
											Full Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
											placeholder="Your full name"
										/>
									</div>

									<div>
										<label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
											Email Address
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
											placeholder="your.email@example.com"
										/>
									</div>
								</div>

								<div>
									<label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										rows={6}
										value={formData.message}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
										placeholder="Describe your project, ask a question, or just say hello..."
									/>
								</div>

								<button
									type="submit"
									disabled={status === 'loading'}
									className="w-full md:w-auto px-8 py-3 text-white bg-primary-600 hover:bg-primary-700 hover:scale-105 hover:shadow-lg disabled:bg-gray-400 disabled:hover:scale-100 disabled:hover:shadow-none rounded-lg transition-all duration-200 font-medium"
								>
									{status === 'loading' ? 'Sending Message...' : 'Send Message'}
								</button>

								{status === 'success' && (
									<div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
										<div className="text-green-600 dark:text-green-400 text-sm">
											<Check className="w-5 h-5 inline mr-2" /> Message sent successfully! I&apos;ll get back to you within 24 hours.
										</div>
									</div>
								)}

								{status === 'error' && (
									<div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
										<p className="text-red-800 dark:text-red-200 text-sm">
											<X className="w-5 h-5 inline mr-2" /> There was an error sending your message. Please try again or contact me directly.
										</p>
									</div>
								)}
							</form>
						</div>
					</m.div>
				</div>
			</div>
		</Section>
	)
}
