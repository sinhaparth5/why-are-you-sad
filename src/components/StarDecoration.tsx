"use client";

import { motion } from "framer-motion";

interface StarDecorationProps {
	size?: "sm" | "md" | "lg" | "xl";
	className?: string;
	animate?: boolean;
}

export default function StarDecoration({ size = "md", className = "", animate = true }: StarDecorationProps) {
	const sizeClasses = {
		sm: "text-2xl",
		md: "text-4xl",
		lg: "text-5xl",
		xl: "text-6xl",
	};

	if (!animate) {
		return <span className={`star-accent ${sizeClasses[size]} ${className}`}>✦</span>;
	}

	return (
		<motion.span
			className={`star-accent ${sizeClasses[size]} ${className} inline-block`}
			animate={{
				y: [0, -10, 0],
				rotate: [0, 5, -5, 0],
				scale: [1, 1.1, 1],
			}}
			transition={{
				duration: 4,
				repeat: Infinity,
				ease: "easeInOut",
			}}
		>
			✦
		</motion.span>
	);
}
