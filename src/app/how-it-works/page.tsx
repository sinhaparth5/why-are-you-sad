"use client";

import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import FadeIn from "@/components/FadeIn";
import { CheckCircle2, Brain, Calendar, Sun, TrendingDown } from "lucide-react";

export default function HowItWorksPage() {
	return (
		<div className="min-h-screen">
			<Navigation />

			{/* Hero Section */}
			<section className="relative bg-mustard pt-32 pb-20 px-6">
				<div className="max-w-4xl mx-auto">
					<FadeIn delay={0.2}>
						<h1 className="font-display text-5xl md:text-7xl font-bold text-deep-black mb-6">
							How This Works
						</h1>
					</FadeIn>
					<FadeIn delay={0.4}>
						<p className="font-sans text-xl md:text-2xl text-deep-black/80 leading-relaxed">
							The science behind our questionable but weirdly accurate sadness diagnosis system.
						</p>
					</FadeIn>
				</div>
			</section>

			{/* Quiz Methodology */}
			<section className="bg-cream py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<AnimatedSection>
						<h2 className="font-display text-4xl md:text-5xl font-bold text-forest-green mb-12 text-center">
							The Methodology
						</h2>
					</AnimatedSection>

					<div className="space-y-16">
						{/* Step 1 */}
						<AnimatedSection delay={0.1}>
							<div className="grid md:grid-cols-12 gap-8 items-center">
								<div className="md:col-span-2 flex justify-center">
									<div className="w-20 h-20 bg-mustard rounded-full flex items-center justify-center">
										<span className="font-display text-4xl font-bold text-deep-black">1</span>
									</div>
								</div>
								<div className="md:col-span-10">
									<h3 className="font-display text-3xl font-bold text-forest-green mb-4">15 Targeted Questions</h3>
									<p className="font-sans text-lg text-text-on-cream leading-relaxed">
										We ask about <strong>timing</strong> (when does sadness hit?), <strong>symptoms</strong> (cravings,
										sleep, rage), <strong>sensitivity</strong> (hormone awareness, light dependency), and{" "}
										<strong>severity</strong> (duration, impact on life).
									</p>
								</div>
							</div>
						</AnimatedSection>

						{/* Step 2 */}
						<AnimatedSection delay={0.2}>
							<div className="grid md:grid-cols-12 gap-8 items-center">
								<div className="md:col-span-2 flex justify-center">
									<div className="w-20 h-20 bg-coral rounded-full flex items-center justify-center">
										<span className="font-display text-4xl font-bold text-white">2</span>
									</div>
								</div>
								<div className="md:col-span-10">
									<h3 className="font-display text-3xl font-bold text-forest-green mb-4">Pattern Recognition</h3>
									<p className="font-sans text-lg text-text-on-cream leading-relaxed">
										Your answers are analyzed for patterns. Do they cluster around <strong>cycle days 21-28</strong>?
										That&apos;s hormonal. Worse in <strong>October-March</strong>? Seasonal. Consistent{" "}
										<strong>year-round</strong>? Clinical.
									</p>
								</div>
							</div>
						</AnimatedSection>

						{/* Step 3 */}
						<AnimatedSection delay={0.3}>
							<div className="grid md:grid-cols-12 gap-8 items-center">
								<div className="md:col-span-2 flex justify-center">
									<div className="w-20 h-20 bg-terracotta rounded-full flex items-center justify-center">
										<span className="font-display text-4xl font-bold text-white">3</span>
									</div>
								</div>
								<div className="md:col-span-10">
									<h3 className="font-display text-3xl font-bold text-forest-green mb-4">Percentage Breakdown</h3>
									<p className="font-sans text-lg text-text-on-cream leading-relaxed">
										We don&apos;t put you in a box. Most people have <strong>overlapping</strong> sadness types (e.g.,
										70% hormonal + 40% seasonal). We show you the full picture.
									</p>
								</div>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Scientific Basis */}
			<section className="bg-forest-green text-text-on-dark py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<AnimatedSection>
						<h2 className="font-display text-4xl md:text-5xl font-bold text-mustard mb-12 text-center">
							The Science (Actually Real)
						</h2>
					</AnimatedSection>

					<div className="grid md:grid-cols-3 gap-8">
						<AnimatedSection delay={0.1}>
							<div className="bg-forest-green-dark p-8 rounded-2xl h-full">
								<Calendar className="w-12 h-12 text-mustard mb-4" />
								<h3 className="font-display text-2xl font-bold mb-4">Hormonal (PMDD)</h3>
								<p className="font-sans text-cream/80 text-sm leading-relaxed mb-4">
									Based on DSM-5 criteria for Premenstrual Dysphoric Disorder. Looks for:
								</p>
								<ul className="font-sans text-sm text-cream/70 space-y-2">
									<li className="flex gap-2">
										<CheckCircle2 className="w-4 h-4 text-mustard flex-shrink-0 mt-0.5" />
										<span>Cyclical timing (luteal phase)</span>
									</li>
									<li className="flex gap-2">
										<CheckCircle2 className="w-4 h-4 text-mustard flex-shrink-0 mt-0.5" />
										<span>Mood shifts that resolve post-period</span>
									</li>
									<li className="flex gap-2">
										<CheckCircle2 className="w-4 h-4 text-mustard flex-shrink-0 mt-0.5" />
										<span>Atypical symptoms (carb cravings, hypersomnia)</span>
									</li>
								</ul>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.2}>
							<div className="bg-forest-green-dark p-8 rounded-2xl h-full">
								<Sun className="w-12 h-12 text-mustard mb-4" />
								<h3 className="font-display text-2xl font-bold mb-4">Seasonal (SAD)</h3>
								<p className="font-sans text-cream/80 text-sm leading-relaxed mb-4">
									Based on seasonal pattern specifier in DSM-5. Looks for:
								</p>
								<ul className="font-sans text-sm text-cream/70 space-y-2">
									<li className="flex gap-2">
										<CheckCircle2 className="w-4 h-4 text-mustard flex-shrink-0 mt-0.5" />
										<span>Fall/winter onset, spring/summer remission</span>
									</li>
									<li className="flex gap-2">
										<CheckCircle2 className="w-4 h-4 text-mustard flex-shrink-0 mt-0.5" />
										<span>Light sensitivity (improved mood with sunlight)</span>
									</li>
									<li className="flex gap-2">
										<CheckCircle2 className="w-4 h-4 text-mustard flex-shrink-0 mt-0.5" />
										<span>Circadian rhythm disruption</span>
									</li>
								</ul>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.3}>
							<div className="bg-forest-green-dark p-8 rounded-2xl h-full">
								<TrendingDown className="w-12 h-12 text-coral mb-4" />
								<h3 className="font-display text-2xl font-bold mb-4">Clinical (MDD)</h3>
								<p className="font-sans text-cream/80 text-sm leading-relaxed mb-4">
									Based on major depressive disorder criteria. Looks for:
								</p>
								<ul className="font-sans text-sm text-cream/70 space-y-2">
									<li className="flex gap-2">
										<CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
										<span>Persistent sadness (2+ weeks, often longer)</span>
									</li>
									<li className="flex gap-2">
										<CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
										<span>No clear cyclical or seasonal pattern</span>
									</li>
									<li className="flex gap-2">
										<CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
										<span>Functional impairment</span>
									</li>
								</ul>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* What You Get */}
			<section className="bg-cream-dark py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<AnimatedSection>
						<h2 className="font-display text-4xl md:text-5xl font-bold text-forest-green mb-12 text-center">
							What You&apos;ll Get in Your Results
						</h2>
					</AnimatedSection>

					<div className="grid md:grid-cols-2 gap-8">
						<AnimatedSection delay={0.1}>
							<div className="bg-white p-8 rounded-2xl shadow-md h-full">
								<Brain className="w-12 h-12 text-mustard mb-4" />
								<h3 className="font-display text-2xl font-bold text-forest-green mb-4">Your Diagnosis</h3>
								<p className="font-sans text-text-on-cream leading-relaxed">
									Percentage breakdown of your sadness type(s), with a dramatic title like &quot;87% Hormonally
									Tragic&quot; or &quot;92% Seasonally Betrayed&quot;.
								</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.2}>
							<div className="bg-white p-8 rounded-2xl shadow-md h-full">
								<CheckCircle2 className="w-12 h-12 text-forest-green mb-4" />
								<h3 className="font-display text-2xl font-bold text-forest-green mb-4">Survival Kit</h3>
								<p className="font-sans text-text-on-cream leading-relaxed">
									Tailored coping strategies, self-care tips, and — crucially — when your symptoms suggest you should
									talk to a professional.
								</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.3}>
							<div className="bg-white p-8 rounded-2xl shadow-md h-full">
								<Sun className="w-12 h-12 text-coral mb-4" />
								<h3 className="font-display text-2xl font-bold text-forest-green mb-4">Treatment Hints</h3>
								<p className="font-sans text-text-on-cream leading-relaxed">
									Evidence-based suggestions like light therapy for SAD, hormonal tracking for PMDD, or therapy/meds for
									clinical depression.
								</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.4}>
							<div className="bg-white p-8 rounded-2xl shadow-md h-full">
								<TrendingDown className="w-12 h-12 text-terracotta mb-4" />
								<h3 className="font-display text-2xl font-bold text-forest-green mb-4">Shareable Results</h3>
								<p className="font-sans text-text-on-cream leading-relaxed">
									Clean, funny graphics you can share without making everyone uncomfortable. Normalize talking about
									mental health!
								</p>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-forest-green text-text-on-dark py-20 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<AnimatedSection>
						<h2 className="font-display text-5xl md:text-6xl font-bold text-mustard mb-6">
							Ready to Get Diagnosed?
						</h2>
						<p className="font-sans text-xl text-cream/80 mb-8">
							It&apos;s only 15 questions. And you might finally understand why you cried at that dog commercial.
						</p>
						<Button href="/quiz/start" variant="mustard" size="lg">
							Take the Quiz
						</Button>
					</AnimatedSection>
				</div>
			</section>
		</div>
	);
}
