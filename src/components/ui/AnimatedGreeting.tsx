"use client";

import { m, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const greetings = [
	"Hey",
	"नमस्कार",
	"ನಮಸ್ಕಾರ",
	"നമസ്കാരം",
	"வணக்கம்",
	"Bonjour",
	"¡Hola!",
	"Ciao",
];

interface AnimatedGreetingProps {
	className?: string;
}

export const AnimatedGreeting = ({ className = "" }: AnimatedGreetingProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const duration = 2000; // Total time for each greeting (including animations)

		// Start with delay to ensure proper mounting
		const startDelay = setTimeout(() => {
			const interval = setInterval(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
			}, duration);

			return () => clearInterval(interval);
		}, 500);

		return () => {
			clearTimeout(startDelay);
		};
	}, []);

	return (
		<AnimatePresence mode="wait">
			<m.span
				key={currentIndex}
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -20, opacity: 0 }}
				transition={{
					y: { type: "spring", stiffness: 300, damping: 25, duration: 0.4 },
					opacity: { duration: 0.4 },
				}}
				className={`inline-block text-gray-800 dark:text-gray-200 ${className}`}
			>
				{greetings[currentIndex]}
			</m.span>
		</AnimatePresence>
	);
};
