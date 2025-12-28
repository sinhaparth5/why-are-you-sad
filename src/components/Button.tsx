"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	href?: string;
	onClick?: () => void;
	variant?: "mustard" | "coral" | "terracotta" | "forest" | "outline";
	size?: "sm" | "md" | "lg";
	className?: string;
	type?: "button" | "submit" | "reset";
}

export default function Button({
	children,
	href,
	onClick,
	variant = "mustard",
	size = "md",
	className = "",
	type = "button",
}: ButtonProps) {
	const baseStyles = "font-sans font-semibold rounded-full inline-flex items-center justify-center gap-2";

	const sizeStyles = {
		sm: "px-6 py-2 text-sm",
		md: "px-8 py-4 text-base",
		lg: "px-10 py-5 text-lg",
	};

	const variantStyles = {
		mustard: "bg-mustard text-deep-black shadow-lg",
		coral: "bg-coral text-white shadow-lg",
		terracotta: "bg-terracotta text-text-on-dark shadow-lg",
		forest: "bg-forest-green text-text-on-dark shadow-lg",
		outline: "border-2 border-mustard text-mustard shadow-md",
	};

	const hoverVariants = {
		mustard: { backgroundColor: "#e09522", scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" },
		coral: { backgroundColor: "#e85544", scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" },
		terracotta: { backgroundColor: "#b55935", scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" },
		forest: { backgroundColor: "#2d3e33", scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" },
		outline: { backgroundColor: "#f4a93f", color: "#0a0a0a", scale: 1.05, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" },
	};

	const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

	const MotionLink = motion.create(Link);

	if (href) {
		return (
			<MotionLink
				href={href}
				className={combinedStyles}
				whileHover={hoverVariants[variant]}
				whileTap={{ scale: 0.98 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
			>
				{children}
			</MotionLink>
		);
	}

	return (
		<motion.button
			type={type}
			onClick={onClick}
			className={combinedStyles}
			whileHover={hoverVariants[variant]}
			whileTap={{ scale: 0.98 }}
			transition={{ type: "spring", stiffness: 400, damping: 17 }}
		>
			{children}
		</motion.button>
	);
}
