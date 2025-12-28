"use client";

import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import { Lightbulb, Heart, AlertCircle, Sparkles } from "lucide-react";

export default function AboutPage() {
	return (
		<div className="min-h-screen">
			<Navigation />

			{/* Hero Section */}
			<section className="relative bg-forest-green text-text-on-dark pt-32 pb-20 px-6 overflow-hidden">
				{/* Background image */}
				<div className="absolute inset-0 opacity-10">
					<Image
						src="/images/Elegance in Himalayan Blossom.png"
						alt=""
						fill
						className="object-cover"
						sizes="100vw"
						priority
					/>
				</div>

				<div className="max-w-4xl mx-auto relative z-10">
					<FadeIn delay={0.2}>
						<h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
							About This <span className="text-mustard">Questionable</span> Project
						</h1>
					</FadeIn>
					<FadeIn delay={0.4}>
						<p className="font-sans text-xl md:text-2xl text-cream/90 leading-relaxed">
							A scientifically-informed but hilariously dramatic mental health quiz that helps you figure out if your
							sadness is hormonal, seasonal, or genuinely persistent.
						</p>
					</FadeIn>
				</div>
			</section>

			{/* Mission Section */}
			<section className="bg-cream py-20 px-6">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
					<AnimatedSection>
						<div>
							<h2 className="font-display text-4xl md:text-6xl font-bold text-forest-green mb-6">
								Why This Exists
							</h2>
							<div className="space-y-4 font-sans text-lg text-text-on-cream leading-relaxed">
								<p>
									Because sometimes you&apos;re crying in the cereal aisle and you just need to know <em>why</em>.
								</p>
								<p>
									Is it your hormones playing tricks? Is it the fact that the sun abandoned you at 4pm? Or are you just
									genuinely, historically sad and need to talk to someone?
								</p>
								<p>
									This quiz uses real scientific markers for PMDD, Seasonal Affective Disorder (SAD), and clinical
									depression — but makes it funny enough that you can share your results without making everyone
									uncomfortable.
								</p>
							</div>
						</div>
					</AnimatedSection>

					<AnimatedSection delay={0.2}>
						<div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src="/images/Somber Outdoor Portrait.png"
								alt="Contemplative portrait"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* What Makes It Different */}
			<section className="bg-forest-green-dark text-text-on-dark py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<AnimatedSection>
						<h2 className="font-display text-4xl md:text-6xl font-bold text-mustard mb-12 text-center">
							What Makes This Different
						</h2>
					</AnimatedSection>

					<div className="grid md:grid-cols-2 gap-8">
						<AnimatedSection delay={0.1}>
							<div className="bg-forest-green p-8 rounded-2xl">
								<Lightbulb className="w-12 h-12 text-mustard mb-4" />
								<h3 className="font-display text-2xl font-bold mb-4">Actually Scientific</h3>
								<p className="font-sans text-cream/80 leading-relaxed">
									Questions are based on real diagnostic criteria for PMDD, SAD, and clinical depression. We&apos;re
									funny, but we&apos;re not making stuff up.
								</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.2}>
							<div className="bg-forest-green p-8 rounded-2xl">
								<Heart className="w-12 h-12 text-coral mb-4" />
								<h3 className="font-display text-2xl font-bold mb-4">Genuinely Helpful</h3>
								<p className="font-sans text-cream/80 leading-relaxed">
									Each result includes actual survival tips, coping strategies, and — most importantly — when to seek
									professional help.
								</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.3}>
							<div className="bg-forest-green p-8 rounded-2xl">
								<Sparkles className="w-12 h-12 text-mustard mb-4" />
								<h3 className="font-display text-2xl font-bold mb-4">Actually Funny</h3>
								<p className="font-sans text-cream/80 leading-relaxed">
									Mental health content doesn&apos;t have to be depressing. We can laugh about the absurdity of our
									hormones while still taking our well-being seriously.
								</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.4}>
							<div className="bg-forest-green p-8 rounded-2xl">
								<AlertCircle className="w-12 h-12 text-coral mb-4" />
								<h3 className="font-display text-2xl font-bold mb-4">Brutally Honest</h3>
								<p className="font-sans text-cream/80 leading-relaxed">
									We&apos;ll tell you if your results suggest you need professional help. This is parody, but
									we&apos;re not joking about mental health.
								</p>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Disclaimer Section */}
			<section className="bg-cream py-20 px-6">
				<div className="max-w-4xl mx-auto">
					<AnimatedSection>
						<div className="bg-deep-black text-text-on-dark p-12 rounded-2xl">
							<h2 className="font-display text-4xl font-bold text-mustard mb-6">Important Disclaimer</h2>
							<div className="space-y-4 font-sans text-cream/90 leading-relaxed">
								<p className="text-lg">
									<strong>This is a parody website.</strong> While our questions are based on real scientific markers,
									this quiz is NOT a medical diagnosis and should NOT replace professional mental health care.
								</p>
								<p>
									If you&apos;re experiencing persistent sadness, anxiety, or thoughts of self-harm, please reach out
									to a mental health professional or call a crisis hotline immediately.
								</p>
								<p>
									This quiz is meant to provide validation, humor, and a gentle nudge toward self-awareness — not
									actual medical advice.
								</p>
							</div>

							<div className="mt-8">
								<Button href="/resources" variant="mustard" size="md">
									View Mental Health Resources
								</Button>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-mustard py-20 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<AnimatedSection>
						<h2 className="font-display text-5xl md:text-6xl font-bold text-deep-black mb-6">
							Ready to Diagnose Your Sadness?
						</h2>
						<p className="font-sans text-xl text-deep-black/80 mb-8">
							Find out if it&apos;s hormones, seasons, or just life.
						</p>
						<Button href="/quiz/start" variant="forest" size="lg">
							Take the Quiz Now
						</Button>
					</AnimatedSection>
				</div>
			</section>
		</div>
	);
}
