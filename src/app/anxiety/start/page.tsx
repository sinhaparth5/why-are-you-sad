"use client";

import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import AnimatedSection from "@/components/AnimatedSection";
import { getTotalAnxietyQuestions } from "@/data/anxietyQuizData";
import { Clock, CheckCircle, Brain, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function AnxietyQuizStartPage() {
	const totalQuestions = getTotalAnxietyQuestions();

	return (
		<div className="min-h-screen">
			<Navigation />

			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-coral via-terracotta to-deep-black text-text-on-dark pt-32 pb-20 px-6 overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 opacity-15">
					<Image
						src="/images/Contemplative Red Light.png"
						alt=""
						fill
						className="object-cover"
						sizes="100vw"
					/>
				</div>

				<div className="max-w-4xl mx-auto relative z-10">
					<FadeIn delay={0.2}>
						<div className="inline-block bg-mustard text-deep-black px-4 py-2 rounded-full font-sans font-semibold text-sm mb-6">
							✦ Scientifically Questionable ✦
						</div>
					</FadeIn>

					<FadeIn delay={0.3}>
						<h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
							What Kind of <span className="text-mustard">Anxious</span> Are You?
						</h1>
					</FadeIn>

					<FadeIn delay={0.4}>
						<p className="font-sans text-xl md:text-2xl text-cream/90 leading-relaxed mb-8">
							Answer {totalQuestions} questions to find out if you&apos;re generally anxious, socially terrified,
							or panic-prone.
						</p>
					</FadeIn>

					<FadeIn delay={0.5}>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button href="/anxiety/question/1" variant="mustard" size="lg">
								Start the Quiz
							</Button>
							<Button href="/how-it-works" variant="outline" size="lg">
								How This Works
							</Button>
						</div>
					</FadeIn>
				</div>
			</section>

			{/* What to Expect */}
			<section className="bg-cream py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<AnimatedSection>
						<h2 className="font-display text-4xl md:text-5xl font-bold text-forest-green mb-12 text-center">
							What to Expect
						</h2>
					</AnimatedSection>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<AnimatedSection delay={0.1}>
							<div className="bg-white p-6 rounded-2xl shadow-md h-full">
								<Clock className="w-12 h-12 text-coral mb-4" />
								<h3 className="font-display text-xl font-bold text-forest-green mb-2">~5 Minutes</h3>
								<p className="font-sans text-sm text-text-on-cream">
									{totalQuestions} questions about your anxiety patterns and triggers.
								</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.2}>
							<div className="bg-white p-6 rounded-2xl shadow-md h-full">
								<Brain className="w-12 h-12 text-terracotta mb-4" />
								<h3 className="font-display text-xl font-bold text-forest-green mb-2">Science-Based</h3>
								<p className="font-sans text-sm text-text-on-cream">
									Based on criteria for GAD, Social Anxiety, and Panic Disorder.
								</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.3}>
							<div className="bg-white p-6 rounded-2xl shadow-md h-full">
								<CheckCircle className="w-12 h-12 text-mustard mb-4" />
								<h3 className="font-display text-xl font-bold text-forest-green mb-2">No Judgment</h3>
								<p className="font-sans text-sm text-text-on-cream">
									Anxiety is real, valid, and treatable. We&apos;re here to help you understand it.
								</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.4}>
							<div className="bg-white p-6 rounded-2xl shadow-md h-full">
								<AlertCircle className="w-12 h-12 text-forest-green mb-4" />
								<h3 className="font-display text-xl font-bold text-forest-green mb-2">Real Strategies</h3>
								<p className="font-sans text-sm text-text-on-cream">
									Get personalized coping techniques and know when to seek professional help.
								</p>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Important Notes */}
			<section className="bg-deep-black text-text-on-dark py-16 px-6">
				<div className="max-w-4xl mx-auto">
					<AnimatedSection>
						<div className="bg-forest-green-dark p-8 rounded-2xl border-2 border-coral">
							<h3 className="font-display text-2xl font-bold text-coral mb-4">Before You Start</h3>
							<div className="font-sans text-cream/90 space-y-3">
								<p className="flex items-start gap-3">
									<span className="text-coral mt-1">•</span>
									<span>
										<strong>This is not a medical diagnosis.</strong> It&apos;s a humorous quiz based on real
										science, but only a healthcare provider can diagnose you.
									</span>
								</p>
								<p className="flex items-start gap-3">
									<span className="text-coral mt-1">•</span>
									<span>
										<strong>We don&apos;t store your answers.</strong> Everything stays in your browser. Check our{" "}
										<a href="/privacy" className="text-coral hover:text-coral/80 underline">
											privacy policy
										</a>
										.
									</span>
								</p>
								<p className="flex items-start gap-3">
									<span className="text-coral mt-1">•</span>
									<span>
										<strong>If you&apos;re in crisis,</strong> please reach out to the{" "}
										<a
											href="tel:988"
											className="text-coral hover:text-coral/80 underline font-semibold"
										>
											988 Suicide & Crisis Lifeline
										</a>{" "}
										or view our{" "}
										<a href="/resources" className="text-coral hover:text-coral/80 underline">
											mental health resources
										</a>
										.
									</span>
								</p>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-coral py-20 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<AnimatedSection>
						<h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
							Let&apos;s Name Your Anxiety
						</h2>
						<p className="font-sans text-lg text-white/90 mb-8">
							Understanding your anxiety type is the first step to managing it.
						</p>
						<Button href="/anxiety/question/1" variant="mustard" size="lg">
							Start Quiz Now
						</Button>
					</AnimatedSection>
				</div>
			</section>
		</div>
	);
}
