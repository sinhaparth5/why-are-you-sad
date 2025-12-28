"use client";

import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import FadeIn from "@/components/FadeIn";
import { Phone, Globe, MessageCircle, Heart, ExternalLink } from "lucide-react";

export default function ResourcesPage() {
	return (
		<div className="min-h-screen">
			<Navigation />

			{/* Hero Section */}
			<section className="relative bg-coral text-white pt-32 pb-20 px-6">
				<div className="max-w-4xl mx-auto">
					<FadeIn delay={0.2}>
						<h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
							Real Mental Health Resources
						</h1>
					</FadeIn>
					<FadeIn delay={0.4}>
						<p className="font-sans text-xl md:text-2xl leading-relaxed opacity-90">
							If you&apos;re genuinely struggling, these resources can help. You don&apos;t have to go through this alone.
						</p>
					</FadeIn>
				</div>
			</section>

			{/* Crisis Hotlines */}
			<section className="bg-deep-black text-text-on-dark py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<AnimatedSection>
						<div className="text-center mb-12">
							<Phone className="w-16 h-16 text-coral mx-auto mb-4" />
							<h2 className="font-display text-4xl md:text-5xl font-bold text-mustard mb-4">
								Crisis Support (24/7)
							</h2>
							<p className="font-sans text-xl text-cream/80">
								If you&apos;re in crisis or having thoughts of self-harm, please reach out immediately.
							</p>
						</div>
					</AnimatedSection>

					<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
						<AnimatedSection delay={0.1}>
							<div className="bg-forest-green p-6 rounded-xl h-full">
								<h3 className="font-display text-2xl font-bold mb-3">988 Suicide & Crisis Lifeline</h3>
								<p className="font-sans text-cream/80 mb-4">Call or text <strong className="text-mustard">988</strong></p>
								<p className="font-sans text-sm text-cream/70">
									Free, confidential support 24/7 for people in distress, prevention, and crisis resources.
								</p>
								<a
									href="https://988lifeline.org/"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 mt-4 text-mustard hover:text-mustard-light transition-colors"
								>
									<span>Visit Website</span>
									<ExternalLink className="w-4 h-4" />
								</a>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.2}>
							<div className="bg-forest-green p-6 rounded-xl h-full">
								<h3 className="font-display text-2xl font-bold mb-3">Crisis Text Line</h3>
								<p className="font-sans text-cream/80 mb-4">Text <strong className="text-mustard">HELLO</strong> to <strong className="text-mustard">741741</strong></p>
								<p className="font-sans text-sm text-cream/70">
									Free, 24/7 support for those in crisis. Text from anywhere in the US to connect with a trained counselor.
								</p>
								<a
									href="https://www.crisistextline.org/"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 mt-4 text-mustard hover:text-mustard-light transition-colors"
								>
									<span>Visit Website</span>
									<ExternalLink className="w-4 h-4" />
								</a>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Mental Health Organizations */}
			<section className="bg-cream py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<AnimatedSection>
						<div className="text-center mb-12">
							<Heart className="w-16 h-16 text-forest-green mx-auto mb-4" />
							<h2 className="font-display text-4xl md:text-5xl font-bold text-forest-green mb-4">
								Mental Health Organizations
							</h2>
						</div>
					</AnimatedSection>

					<div className="grid md:grid-cols-3 gap-6">
						<AnimatedSection delay={0.1}>
							<div className="bg-white p-6 rounded-xl shadow-md h-full">
								<h3 className="font-display text-xl font-bold text-forest-green mb-3">NAMI</h3>
								<p className="font-sans text-sm text-text-on-cream mb-4">
									National Alliance on Mental Illness - Education, support, and advocacy.
								</p>
								<a
									href="https://www.nami.org/"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-mustard hover:text-mustard-dark transition-colors text-sm"
								>
									<span>nami.org</span>
									<ExternalLink className="w-4 h-4" />
								</a>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.2}>
							<div className="bg-white p-6 rounded-xl shadow-md h-full">
								<h3 className="font-display text-xl font-bold text-forest-green mb-3">Mental Health America</h3>
								<p className="font-sans text-sm text-text-on-cream mb-4">
									Screening tools, resources, and community support.
								</p>
								<a
									href="https://www.mhanational.org/"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-mustard hover:text-mustard-dark transition-colors text-sm"
								>
									<span>mhanational.org</span>
									<ExternalLink className="w-4 h-4" />
								</a>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.3}>
							<div className="bg-white p-6 rounded-xl shadow-md h-full">
								<h3 className="font-display text-xl font-bold text-forest-green mb-3">Anxiety & Depression Assoc.</h3>
								<p className="font-sans text-sm text-text-on-cream mb-4">
									Resources for anxiety and depression management.
								</p>
								<a
									href="https://adaa.org/"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-mustard hover:text-mustard-dark transition-colors text-sm"
								>
									<span>adaa.org</span>
									<ExternalLink className="w-4 h-4" />
								</a>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Find a Therapist */}
			<section className="bg-forest-green text-text-on-dark py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<AnimatedSection>
						<div className="text-center mb-12">
							<MessageCircle className="w-16 h-16 text-mustard mx-auto mb-4" />
							<h2 className="font-display text-4xl md:text-5xl font-bold text-mustard mb-4">
								Find a Therapist
							</h2>
						</div>
					</AnimatedSection>

					<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
						<AnimatedSection delay={0.1}>
							<div className="bg-forest-green-dark p-6 rounded-xl h-full">
								<h3 className="font-display text-xl font-bold mb-3">Psychology Today</h3>
								<p className="font-sans text-sm text-cream/80 mb-4">
									Comprehensive therapist directory with filters for specialty, insurance, and location.
								</p>
								<a
									href="https://www.psychologytoday.com/us/therapists"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-mustard hover:text-mustard-light transition-colors text-sm"
								>
									<span>Find a Therapist</span>
									<ExternalLink className="w-4 h-4" />
								</a>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.2}>
							<div className="bg-forest-green-dark p-6 rounded-xl h-full">
								<h3 className="font-display text-xl font-bold mb-3">BetterHelp / Talkspace</h3>
								<p className="font-sans text-sm text-cream/80 mb-4">
									Online therapy platforms - convenient and often more affordable than traditional therapy.
								</p>
								<div className="flex gap-4 text-sm">
									<a
										href="https://www.betterhelp.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 text-mustard hover:text-mustard-light transition-colors"
									>
										<span>BetterHelp</span>
										<ExternalLink className="w-4 h-4" />
									</a>
									<a
										href="https://www.talkspace.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 text-mustard hover:text-mustard-light transition-colors"
									>
										<span>Talkspace</span>
										<ExternalLink className="w-4 h-4" />
									</a>
								</div>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Specific Conditions */}
			<section className="bg-cream-dark py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<AnimatedSection>
						<h2 className="font-display text-4xl md:text-5xl font-bold text-forest-green mb-12 text-center">
							Condition-Specific Resources
						</h2>
					</AnimatedSection>

					<div className="grid md:grid-cols-3 gap-6">
						<AnimatedSection delay={0.1}>
							<div className="bg-white p-6 rounded-xl shadow-md h-full">
								<h3 className="font-display text-xl font-bold text-forest-green mb-3">PMDD</h3>
								<p className="font-sans text-sm text-text-on-cream mb-4">
									International Association for Premenstrual Disorders
								</p>
								<a
									href="https://iapmd.org/"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-mustard hover:text-mustard-dark transition-colors text-sm"
								>
									<span>iapmd.org</span>
									<ExternalLink className="w-4 h-4" />
								</a>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.2}>
							<div className="bg-white p-6 rounded-xl shadow-md h-full">
								<h3 className="font-display text-xl font-bold text-forest-green mb-3">SAD (Seasonal)</h3>
								<p className="font-sans text-sm text-text-on-cream mb-4">
									Information and treatment options for Seasonal Affective Disorder
								</p>
								<a
									href="https://www.nimh.nih.gov/health/publications/seasonal-affective-disorder"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-mustard hover:text-mustard-dark transition-colors text-sm"
								>
									<span>NIMH Resources</span>
									<ExternalLink className="w-4 h-4" />
								</a>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.3}>
							<div className="bg-white p-6 rounded-xl shadow-md h-full">
								<h3 className="font-display text-xl font-bold text-forest-green mb-3">Depression</h3>
								<p className="font-sans text-sm text-text-on-cream mb-4">
									Depression and Bipolar Support Alliance
								</p>
								<a
									href="https://www.dbsalliance.org/"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-mustard hover:text-mustard-dark transition-colors text-sm"
								>
									<span>dbsalliance.org</span>
									<ExternalLink className="w-4 h-4" />
								</a>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Final Note */}
			<section className="bg-mustard py-16 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<p className="font-sans text-lg md:text-xl text-deep-black leading-relaxed">
						<strong>Remember:</strong> Seeking help is a sign of strength, not weakness. Your mental health matters, and
						you deserve support.
					</p>
				</div>
			</section>
		</div>
	);
}
