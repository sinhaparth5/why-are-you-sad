"use client";

import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import StarDecoration from "@/components/StarDecoration";
import AnimatedSection from "@/components/AnimatedSection";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import { motion } from "framer-motion";
import { Frown, Moon, Cloud, Waves, Star, Link as LinkIcon, MapPin, Mail, Phone, Music, Scissors, Palette, Cat } from "lucide-react";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Navigation />

			{/* Hero Section - Forest Green Background with decorative elements */}
			<section className="relative bg-forest-green text-text-on-dark min-h-screen flex items-center overflow-hidden pt-20">
				{/* Decorative outlined text in background */}
				<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15">
					<div className="font-display text-[8rem] md:text-[15rem] lg:text-[20rem] font-bold text-outline-thick text-mustard leading-none whitespace-nowrap">
						WHY
					</div>
				</div>

				{/* Star decorations */}
				<StarDecoration size="xl" className="absolute top-32 left-12 hidden md:block" />
				<StarDecoration size="lg" className="absolute bottom-24 right-16 hidden md:block" />
				<StarDecoration size="md" className="absolute top-1/3 right-1/4 hidden lg:block" />

				<div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
					{/* Left side - Content */}
					<div className="relative z-10 space-y-8">
						{/* Main Headline */}
						<FadeIn delay={0.2}>
							<div className="space-y-4">
								<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
									Why Are You <span className="text-mustard">Sad</span>?
								</h1>
								<p className="font-display text-3xl md:text-4xl text-cream/80 italic">
									A scientifically questionable investigation
								</p>
							</div>
						</FadeIn>

						{/* Subtext */}
						<FadeIn delay={0.4}>
							<p className="font-sans text-lg md:text-xl text-cream/90 leading-relaxed max-w-xl">
								Is it hormones? Seasonal? Or are you just genuinely, historically sad? Take our dramatically
								over-analyzed quiz to find out if your sadness has excellent timing or if it&apos;s here to stay.
							</p>
						</FadeIn>

						{/* CTA Buttons */}
						<FadeIn delay={0.6}>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button href="/quiz/start" variant="mustard" size="lg">
									<span>Take the Quiz</span>
									<Frown className="w-5 h-5" />
								</Button>
								<Button href="/about" variant="outline" size="lg">
									How does this work?
								</Button>
							</div>
						</FadeIn>

						{/* Small disclaimer */}
						<FadeIn delay={0.8}>
							<p className="font-sans text-xs text-cream/60 max-w-md">
								⚠️ This is for entertainment. Not medical advice. If you&apos;re genuinely struggling, please see{" "}
								<a href="/resources" className="underline hover:text-mustard transition-colors">
									real resources
								</a>
								.
							</p>
						</FadeIn>
					</div>

					{/* Right side - Hero Image with terracotta overlay */}
					<div className="relative lg:ml-auto max-w-md w-full">
						{/* Decorative terracotta rectangle - 200x200px, static, no animation */}
						<div className="absolute -top-6 -left-6 w-[200px] h-[200px] bg-terracotta rounded-2xl"></div>

						{/* Main hero image - Square (1:1) ratio */}
						<div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src="/images/Traditional_Indian_Elegance.png"
								alt="Contemplative portrait representing thoughtful sadness"
								width={1200}
								height={1200}
								className="w-full h-auto object-cover"
								priority
							/>

							{/* Overlay gradient for better text contrast */}
							<div className="absolute inset-0 bg-gradient-to-t from-deep-black/40 via-transparent to-transparent pointer-events-none"></div>
						</div>

						{/* Star decoration on image */}
						<StarDecoration size="lg" className="absolute -bottom-4 -right-4" />
					</div>
				</div>
			</section>

			{/* Features/Preview Section - Cream Background */}
			<section className="bg-cream py-20 px-6">
				<div className="max-w-7xl mx-auto">
					{/* Section Header */}
					<AnimatedSection>
						<div className="text-center mb-16">
							<h2 className="font-display text-5xl md:text-7xl font-bold text-deep-black mb-6">
								What&apos;s Your Sadness Type?
							</h2>
							<p className="font-sans text-xl text-text-on-cream max-w-3xl mx-auto">
								We&apos;ll help you figure out if your sadness is hormonal (excellent timing), seasonal (blame the sun), or
								genuinely persistent (ouch).
							</p>
						</div>
					</AnimatedSection>

					{/* Feature Cards */}
					<div className="grid md:grid-cols-3 gap-8">
						{/* Hormonal */}
						<AnimatedSection delay={0.1}>
							<motion.div
								className="bg-mustard-light/20 border-2 border-mustard p-8 rounded-2xl transition-shadow h-full"
								whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<div className="mb-4">
									<Moon className="w-16 h-16 text-mustard" />
								</div>
								<h3 className="font-display text-3xl font-bold text-forest-green mb-4">Hormonally Tragic</h3>
								<p className="font-sans text-text-on-cream leading-relaxed mb-4">
									Your sadness arrives like clockwork, 7-12 days before your period. It&apos;s not you, it&apos;s your
									progesterone.
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="badge-pill text-xs">PMDD</span>
									<span className="badge-pill text-xs">Cycle-linked</span>
									<span className="badge-pill text-xs">Serotonin drama</span>
								</div>
							</motion.div>
						</AnimatedSection>

						{/* Seasonal */}
						<AnimatedSection delay={0.2}>
							<motion.div
								className="bg-forest-green-light/20 border-2 border-forest-green p-8 rounded-2xl transition-shadow h-full"
								whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<div className="mb-4">
									<Cloud className="w-16 h-16 text-forest-green" />
								</div>
								<h3 className="font-display text-3xl font-bold text-forest-green mb-4">Seasonally Betrayed</h3>
								<p className="font-sans text-text-on-cream leading-relaxed mb-4">
									October to March is your villain origin story. When the sun ghosts at 4pm, so does your serotonin.
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="badge-pill text-xs">SAD</span>
									<span className="badge-pill text-xs">Winter blues</span>
									<span className="badge-pill text-xs">Light-dependent</span>
								</div>
							</motion.div>
						</AnimatedSection>

						{/* Clinical/Persistent */}
						<AnimatedSection delay={0.3}>
							<motion.div
								className="bg-terracotta/20 border-2 border-terracotta p-8 rounded-2xl transition-shadow h-full"
								whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<div className="mb-4">
									<Waves className="w-16 h-16 text-terracotta" />
								</div>
								<h3 className="font-display text-3xl font-bold text-forest-green mb-4">Genuinely, Historically Sad</h3>
								<p className="font-sans text-text-on-cream leading-relaxed mb-4">
									Your sadness doesn&apos;t care about calendars or cycles. It&apos;s been here since 2019 and it&apos;s not
									leaving.
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="badge-pill text-xs">Persistent</span>
									<span className="badge-pill text-xs">Not a phase</span>
									<span className="badge-pill text-xs">Seek help</span>
								</div>
							</motion.div>
						</AnimatedSection>
					</div>

					{/* CTA */}
					<AnimatedSection>
						<div className="text-center mt-12">
							<Button href="/quiz/start" variant="coral" size="lg">
								Diagnose My Sadness Now
							</Button>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* How It Works - Mustard accent section */}
			<section className="bg-forest-green py-20 px-6 relative overflow-hidden">
				{/* Background decorative image */}
				<div className="absolute right-0 top-0 w-96 h-96 opacity-15">
					<Image
						src="/images/Somber Outdoor Portrait.png"
						alt=""
						fill
						className="object-cover"
						sizes="384px"
					/>
				</div>

				{/* Background decorative text */}
				<div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-15">
					<div className="font-display text-[10rem] md:text-[15rem] font-bold text-outline-thick text-mustard leading-none whitespace-nowrap">
						QUIZ
					</div>
				</div>

				<div className="max-w-5xl mx-auto relative z-10">
					<h2 className="font-display text-5xl md:text-6xl font-bold text-mustard mb-12 text-center">
						How This Works
					</h2>

					<div className="space-y-8">
						{/* Step 1 */}
						<div className="flex gap-6 items-start">
							<div className="flex-shrink-0 w-12 h-12 bg-mustard rounded-full flex items-center justify-center font-display text-2xl font-bold text-deep-black">
								1
							</div>
							<div className="text-text-on-dark">
								<h3 className="font-display text-2xl font-bold mb-2">Answer 15 deeply personal questions</h3>
								<p className="font-sans text-cream/80">
									We&apos;ll ask about timing, symptoms, rage levels, and your relationship with carbs.
								</p>
							</div>
						</div>

						{/* Step 2 */}
						<div className="flex gap-6 items-start">
							<div className="flex-shrink-0 w-12 h-12 bg-mustard rounded-full flex items-center justify-center font-display text-2xl font-bold text-deep-black">
								2
							</div>
							<div className="text-text-on-dark">
								<h3 className="font-display text-2xl font-bold mb-2">We scientifically over-analyze your answers</h3>
								<p className="font-sans text-cream/80">
									Based on real markers for PMDD, SAD, and clinical depression (but make it funny).
								</p>
							</div>
						</div>

						{/* Step 3 */}
						<div className="flex gap-6 items-start">
							<div className="flex-shrink-0 w-12 h-12 bg-mustard rounded-full flex items-center justify-center font-display text-2xl font-bold text-deep-black">
								3
							</div>
							<div className="text-text-on-dark">
								<h3 className="font-display text-2xl font-bold mb-2">Get your dramatic diagnosis</h3>
								<p className="font-sans text-cream/80">
									Percentage-based results + survival kit + when to actually seek professional help.
								</p>
							</div>
						</div>
					</div>

					<div className="text-center mt-12">
						<Button href="/how-it-works" variant="outline" size="md">
							Read the full methodology
						</Button>
					</div>
				</div>
			</section>

			{/* Testimonials/Social Proof (Humor) - Cream */}
			<section className="bg-cream py-20 px-6 relative overflow-hidden">
				{/* Background decorative images */}
				<div className="absolute top-0 left-0 w-64 h-64 opacity-15">
					<Image
						src="/images/Contemplative Red Light.png"
						alt=""
						fill
						className="object-cover"
						sizes="256px"
					/>
				</div>
				<div className="absolute bottom-0 right-0 w-64 h-64 opacity-15">
					<Image
						src="/images/Winter Serenity Portrait.png"
						alt=""
						fill
						className="object-cover"
						sizes="256px"
					/>
				</div>

				<div className="max-w-6xl mx-auto relative z-10">
					<h2 className="font-display text-5xl md:text-6xl font-bold text-deep-black mb-12 text-center">
						What People Are Saying
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						{/* Testimonial 1 */}
						<div className="bg-white p-6 rounded-xl shadow-md h-full">
							<div className="flex gap-1 mb-4">
								<Star className="w-5 h-5 text-mustard fill-mustard" />
								<Star className="w-5 h-5 text-mustard fill-mustard" />
								<Star className="w-5 h-5 text-mustard fill-mustard" />
								<Star className="w-5 h-5 text-mustard fill-mustard" />
								<Star className="w-5 h-5 text-mustard fill-mustard" />
							</div>
							<p className="font-sans text-text-on-cream italic mb-4">
								&quot;87% hormonally tragic. Finally, scientific proof that I&apos;m not just being dramatic.&quot;
							</p>
							<p className="font-sans text-sm text-text-muted">— Sarah, 28</p>
						</div>

						{/* Testimonial 2 */}
						<div className="bg-white p-6 rounded-xl shadow-md h-full">
							<div className="flex gap-1 mb-4">
								<Star className="w-5 h-5 text-mustard fill-mustard" />
								<Star className="w-5 h-5 text-mustard fill-mustard" />
								<Star className="w-5 h-5 text-mustard fill-mustard" />
								<Star className="w-5 h-5 text-mustard fill-mustard" />
								<Star className="w-5 h-5 text-mustard fill-mustard" />
							</div>
							<p className="font-sans text-text-on-cream italic mb-4">
								&quot;Turns out I&apos;m 92% seasonally betrayed. Buying a sun lamp immediately.&quot;
							</p>
							<p className="font-sans text-sm text-text-muted">— Emma, 31</p>
						</div>

						{/* Testimonial 3 */}
						<div className="bg-white p-6 rounded-xl shadow-md h-full">
							<div className="flex gap-1 mb-4">
								<Star className="w-5 h-5 text-mustard fill-mustard" />
								<Star className="w-5 h-5 text-mustard fill-mustard" />
								<Star className="w-5 h-5 text-mustard fill-mustard" />
								<Star className="w-5 h-5 text-mustard fill-mustard" />
								<Star className="w-5 h-5 text-mustard fill-mustard" />
							</div>
							<p className="font-sans text-text-on-cream italic mb-4">
								&quot;I cried in the cereal aisle AND got validated by a quiz. 10/10 would diagnose again.&quot;
							</p>
							<p className="font-sans text-sm text-text-muted">— Alex, 26</p>
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA - Deep Black */}
			<section className="bg-deep-black text-text-on-dark py-20 px-6 relative overflow-hidden">
				{/* Background image overlay */}
				<div className="absolute inset-0 opacity-10">
					<Image
						src="/images/Contemplative Woman at Twilight.png"
						alt=""
						fill
						className="object-cover"
						sizes="100vw"
					/>
				</div>

				<StarDecoration size="xl" className="absolute top-12 right-12 opacity-20 z-10" />
				<StarDecoration size="lg" className="absolute bottom-12 left-12 opacity-20 z-10" />

				<div className="max-w-4xl mx-auto text-center relative z-10">
					<h2 className="font-display text-5xl md:text-7xl font-bold mb-6">Ready to find out?</h2>
					<p className="font-sans text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
						Your sadness has been waiting for this moment. Give it the scientific validation it deserves.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button href="/quiz/start" variant="mustard" size="lg">
							Take the Sadness Quiz
						</Button>
						<Button href="/anxiety/start" variant="coral" size="lg">
							Or try the Anxiety Quiz
						</Button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-forest-green-dark text-text-on-dark py-12 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="grid md:grid-cols-4 gap-8 mb-8">
						{/* Brand */}
						<div className="md:col-span-2">
							<h3 className="font-display text-2xl font-bold mb-4">Why Are You Sad?</h3>
							<p className="font-sans text-cream/70 text-sm max-w-md">
								A scientifically-informed humorous mental health quiz. Not medical advice, just vibes and validation.
							</p>
						</div>

						{/* Links */}
						<div>
							<h4 className="font-sans font-bold mb-4">Explore</h4>
							<ul className="space-y-2 font-sans text-sm">
								<li>
									<a href="/about" className="text-cream/70 hover:text-mustard transition-colors">
										About
									</a>
								</li>
								<li>
									<a href="/how-it-works" className="text-cream/70 hover:text-mustard transition-colors">
										How It Works
									</a>
								</li>
								<li>
									<a href="/resources" className="text-cream/70 hover:text-mustard transition-colors">
										Mental Health Resources
									</a>
								</li>
								<li>
									<a href="/privacy" className="text-cream/70 hover:text-mustard transition-colors">
										Privacy Policy
									</a>
								</li>
							</ul>
						</div>

						{/* Quizzes */}
						<div>
							<h4 className="font-sans font-bold mb-4">Quizzes</h4>
							<ul className="space-y-2 font-sans text-sm">
								<li>
									<a href="/quiz/start" className="text-cream/70 hover:text-mustard transition-colors">
										Sadness Quiz
									</a>
								</li>
								<li>
									<a href="/anxiety/start" className="text-cream/70 hover:text-mustard transition-colors">
										Anxiety Quiz
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Bottom bar */}
					<div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="font-sans text-sm text-cream/60">
							&copy; 2025 Why Are You Sad. Built with Next.js & Tailwind CSS.
						</p>
						<div className="flex gap-6">
							<a href="/privacy" className="font-sans text-sm text-cream/60 hover:text-mustard transition-colors">
								Privacy
							</a>
							<a href="/disclaimer" className="font-sans text-sm text-cream/60 hover:text-mustard transition-colors">
								Disclaimer
							</a>
							<a href="/contact" className="font-sans text-sm text-cream/60 hover:text-mustard transition-colors">
								Contact
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
