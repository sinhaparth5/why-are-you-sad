"use client";

import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StarDecoration from "@/components/StarDecoration";
import Image from "next/image";
import { Frown, Home, Search, HelpCircle } from "lucide-react";

export default function NotFound() {
	return (
		<div className="min-h-screen">
			<Navigation />

			{/* 404 Section */}
			<section className="relative bg-gradient-to-br from-forest-green-dark via-forest-green to-forest-green-dark text-text-on-dark min-h-screen flex items-center overflow-hidden pt-20">
				{/* Background decorative image */}
				<div className="absolute inset-0 opacity-10">
					<Image
						src="/images/Somber Outdoor Portrait.png"
						alt=""
						fill
						className="object-cover"
						sizes="100vw"
					/>
				</div>

				{/* Decorative outlined text in background */}
				<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
					<div className="font-display text-[8rem] md:text-[15rem] lg:text-[20rem] font-bold text-outline-thick text-mustard leading-none whitespace-nowrap">
						404
					</div>
				</div>

				{/* Star decorations */}
				<StarDecoration size="xl" className="absolute top-32 left-12 hidden md:block opacity-30" />
				<StarDecoration size="lg" className="absolute bottom-24 right-16 hidden md:block opacity-30" />
				<StarDecoration size="md" className="absolute top-1/3 right-1/4 hidden lg:block opacity-30" />

				<div className="relative max-w-4xl mx-auto px-6 py-20 text-center z-10">
					{/* Sad Face Icon */}
					<FadeIn delay={0.1}>
						<div className="inline-block bg-terracotta/20 p-8 rounded-full mb-8">
							<Frown className="w-24 h-24 text-terracotta" />
						</div>
					</FadeIn>

					{/* Main Headline */}
					<FadeIn delay={0.2}>
						<h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-6">
							<span className="text-mustard">404</span>
						</h1>
					</FadeIn>

					<FadeIn delay={0.3}>
						<h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
							Page Not Found
						</h2>
					</FadeIn>

					{/* Subtext */}
					<FadeIn delay={0.4}>
						<p className="font-sans text-xl md:text-2xl text-cream/90 leading-relaxed max-w-2xl mx-auto mb-4">
							Looks like this page is as lost as your serotonin on a Monday morning.
						</p>
					</FadeIn>

					<FadeIn delay={0.5}>
						<p className="font-sans text-lg text-cream/70 leading-relaxed max-w-xl mx-auto mb-12">
							The page you&apos;re looking for doesn&apos;t exist, moved, or is currently experiencing an existential crisis.
						</p>
					</FadeIn>

					{/* CTA Buttons */}
					<FadeIn delay={0.6}>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Button href="/" variant="mustard" size="lg">
								<Home className="w-5 h-5" />
								Go Home
							</Button>
							<Button href="/quiz/start" variant="coral" size="lg">
								<Search className="w-5 h-5" />
								Take the Quiz
							</Button>
							<Button href="/resources" variant="outline" size="lg">
								<HelpCircle className="w-5 h-5" />
								Get Help
							</Button>
						</div>
					</FadeIn>

					{/* Helpful Links */}
					<FadeIn delay={0.7}>
						<div className="mt-16 pt-8 border-t border-cream/10">
							<p className="font-sans text-sm text-cream/60 mb-4">Looking for something specific?</p>
							<div className="flex flex-wrap gap-4 justify-center font-sans text-sm">
								<a
									href="/about"
									className="text-cream/70 hover:text-mustard transition-colors underline"
								>
									About
								</a>
								<span className="text-cream/30">•</span>
								<a
									href="/how-it-works"
									className="text-cream/70 hover:text-mustard transition-colors underline"
								>
									How It Works
								</a>
								<span className="text-cream/30">•</span>
								<a
									href="/anxiety/start"
									className="text-cream/70 hover:text-mustard transition-colors underline"
								>
									Anxiety Quiz
								</a>
								<span className="text-cream/30">•</span>
								<a
									href="/privacy"
									className="text-cream/70 hover:text-mustard transition-colors underline"
								>
									Privacy
								</a>
								<span className="text-cream/30">•</span>
								<a
									href="/terms"
									className="text-cream/70 hover:text-mustard transition-colors underline"
								>
									Terms
								</a>
							</div>
						</div>
					</FadeIn>

					{/* Fun Message */}
					<FadeIn delay={0.8}>
						<div className="mt-12 bg-forest-green-dark/50 backdrop-blur-sm p-6 rounded-2xl max-w-lg mx-auto">
							<p className="font-sans text-cream/80 italic">
								&quot;Not all who wander are lost, but this page definitely is.&quot;
							</p>
						</div>
					</FadeIn>
				</div>
			</section>
		</div>
	);
}
