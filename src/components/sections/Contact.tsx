'use client'

import { Section } from '@/components/ui/Section'
import { m } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { EnvelopeIcon, GlobeAltIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const socialLinks = [
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/aditya-raut-3b4bba31b/',
		icon: (
			<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	},
	{
		name: 'GitHub',
		url: 'https://github.com/rautaditya2606',
		icon: (
			<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
			</svg>
		),
	},
]

interface FormData {
	name: string
	email: string
	message: string
}

export const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>()

	const onSubmit = async (data: FormData) => {
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})

			if (!response.ok) {
				throw new Error('Failed to send message')
			}

			reset()
			alert("Thank you for your message! I'll get back to you soon.")
		} catch (error) {
			console.error('Error submitting form:', error)
			alert('There was an error sending your message. Please try again.')
		}
	}

	return (
		<Section id="contact" className="py-20">
			<div className="max-w-4xl mx-auto">
				<m.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
					<p className="text-gray-600 dark:text-gray-400">
						Having a question or want to work together? Feel free to reach out!
					</p>
				</m.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Contact Form */}
					<m.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="bg-light-card dark:bg-dark-card rounded-xl p-6 border border-light-border dark:border-dark-border"
					>
						<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-2"
								>
									Name
								</label>
								<input
									{...register('name', { required: 'Name is required' })}
									type="text"
									id="name"
									className="w-full px-4 py-2 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
									placeholder="Your name"
								/>
								{errors.name && (
									<p className="mt-1 text-sm text-red-500">
										{errors.name.message}
									</p>
								)}
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-2"
								>
									Email
								</label>
								<input
									{...register('email', {
										required: 'Email is required',
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'Invalid email address',
										},
									})}
									type="email"
									id="email"
									className="w-full px-4 py-2 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
									placeholder="your.email@example.com"
								/>
								{errors.email && (
									<p className="mt-1 text-sm text-red-500">
										{errors.email.message}
									</p>
								)}
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-2"
								>
									Message
								</label>
								<textarea
									{...register('message', { required: 'Message is required' })}
									id="message"
									rows={4}
									className="w-full px-4 py-2 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
									placeholder="Your message..."
								/>
								{errors.message && (
									<p className="mt-1 text-sm text-red-500">
										{errors.message.message}
									</p>
								)}
							</div>

							<button
								type="submit"
								className="w-full px-8 py-3 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors duration-300"
							>
								Send Message
							</button>
						</form>
					</m.div>

					{/* Contact Info & Socials */}
					<m.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						{/* Contact Methods */}
						<div className="space-y-4">
							<h3 className="text-xl font-bold mb-4">Contact Information</h3>
							<div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
								<EnvelopeIcon className="w-6 h-6" />
								<a
									href="mailto:rautaditya2606@gmail.com"
									className="hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
								>
									rautaditya2606@gmail.com
								</a>
							</div>
							<div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
								<PhoneIcon className="w-6 h-6" />
								<a
									href="tel:+919209793522"
									className="hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
								>
									+91 92097 93522
								</a>
							</div>
							<div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
								<GlobeAltIcon className="w-6 h-6" />
								<span>Based in India</span>
							</div>
						</div>

						{/* Social Links */}
						<div>
							<h3 className="text-xl font-bold mb-4">Connect with Me</h3>
							<div className="flex gap-4">
								{socialLinks.map((social) => (
									<Link
										key={social.name}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 rounded-lg bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"
									>
										<span className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
											{social.icon}
										</span>
									</Link>
								))}
							</div>
						</div>

						{/* Additional Info */}
						<div className="bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-lg p-6">
							<h4 className="font-medium mb-2">
								Looking for opportunities in:
							</h4>
							<ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
								<li>Machine Learning & MLOps</li>
								<li>Data Science Projects</li>
								<li>Full-Stack Development</li>
								<li>Open Source Collaboration</li>
							</ul>
						</div>
					</m.div>
				</div>
			</div>
		</Section>
	)
}
