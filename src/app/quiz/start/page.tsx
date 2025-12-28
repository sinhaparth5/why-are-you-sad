"use client";

import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import AnimatedSection from "@/components/AnimatedSection";
import { getTotalQuestions } from "@/data/quizData";
import { Clock, CheckCircle, Brain, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function QuizStartPage() {
	const totalQuestions = getTotalQuestions();

	return (
		<div className="min-h-screen">
			<Navigation />

			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-forest-green via-forest-green-dark to-deep-black text-text-on-dark pt-32 pb-20 px-6 overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 opacity-15">
					<Image
						src="/images/Contemplative Woman at Twilight.png"
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
							Ready to Diagnose Your <span className="text-mustard">Sadness</span>?
						</h1>
					</FadeIn>

					<FadeIn delay={0.4}>
						<p className="font-sans text-xl md:text-2xl text-cream/90 leading-relaxed mb-8">
							Answer {totalQuestions} questions to find out if you&apos;re hormonally tragic, seasonally betrayed,
							or just genuinely, historically sad.
						</p>
					</FadeIn>

					<FadeIn delay={0.5}>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button href="/quiz/question/1" variant="mustard" size="lg">
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
								<Clock className="w-12 h-12 text-mustard mb-4" />
								<h3 className="font-display text-xl font-bold text-forest-green mb-2">~5 Minutes</h3>
								<p className="font-sans text-sm text-text-on-cream">
									{totalQuestions} quick questions. No essay responses, we promise.
								</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.2}>
							<div className="bg-white p-6 rounded-2xl shadow-md h-full">
								<Brain className="w-12 h-12 text-coral mb-4" />
								<h3 className="font-display text-xl font-bold text-forest-green mb-2">Science-Based</h3>
								<p className="font-sans text-sm text-text-on-cream">
									Questions based on real PMDD, SAD, and MDD diagnostic criteria.
								</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.3}>
							<div className="bg-white p-6 rounded-2xl shadow-md h-full">
								<CheckCircle className="w-12 h-12 text-terracotta mb-4" />
								<h3 className="font-display text-xl font-bold text-forest-green mb-2">No Judgment</h3>
								<p className="font-sans text-sm text-text-on-cream">
									We&apos;re here to validate your experience, not make you feel worse.
								</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.4}>
							<div className="bg-white p-6 rounded-2xl shadow-md h-full">
								<AlertCircle className="w-12 h-12 text-forest-green mb-4" />
								<h3 className="font-display text-xl font-bold text-forest-green mb-2">Real Help</h3>
								<p className="font-sans text-sm text-text-on-cream">
									Your results include actual coping strategies and when to seek help.
								</p>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Important Notes */}
			<section className="bg-forest-green-dark text-text-on-dark py-16 px-6">
				<div className="max-w-4xl mx-auto">
					<AnimatedSection>
						<div className="bg-deep-black p-8 rounded-2xl border-2 border-mustard">
							<h3 className="font-display text-2xl font-bold text-mustard mb-4">Before You Start</h3>
							<div className="font-sans text-cream/90 space-y-3">
								<p className="flex items-start gap-3">
									<span className="text-mustard mt-1">•</span>
									<span>
										<strong>This is not a medical diagnosis.</strong> It&apos;s a humorous quiz based on real
										science, but only a healthcare provider can diagnose you.
									</span>
								</p>
								<p className="flex items-start gap-3">
									<span className="text-mustard mt-1">•</span>
									<span>
										<strong>We don&apos;t store your answers.</strong> Everything stays in your browser. Check our{" "}
										<a href="/privacy" className="text-mustard hover:text-mustard-light underline">
											privacy policy
										</a>
										.
									</span>
								</p>
								<p className="flex items-start gap-3">
									<span className="text-mustard mt-1">•</span>
									<span>
										<strong>If you&apos;re in crisis,</strong> please reach out to the{" "}
										<a
											href="tel:988"
											className="text-mustard hover:text-mustard-light underline font-semibold"
										>
											988 Suicide & Crisis Lifeline
										</a>{" "}
										or view our{" "}
										<a href="/resources" className="text-mustard hover:text-mustard-light underline">
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
			<section className="bg-mustard py-20 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<AnimatedSection>
						<h2 className="font-display text-4xl md:text-5xl font-bold text-deep-black mb-6">
							Let&apos;s Figure This Out
						</h2>
						<p className="font-sans text-lg text-deep-black/80 mb-8">
							You deserve to understand what&apos;s going on. Ready?
						</p>
						<Button href="/quiz/question/1" variant="forest" size="lg">
							Start Quiz Now
						</Button>
					</AnimatedSection>
				</div>
			</section>
		</div>
	);
}
