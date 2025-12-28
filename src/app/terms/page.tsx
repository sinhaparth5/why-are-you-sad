"use client";

import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import { AlertTriangle, FileText, Scale, Shield } from "lucide-react";

export default function TermsPage() {
	return (
		<div className="min-h-screen">
			<Navigation />

			{/* Hero Section */}
			<section className="relative bg-forest-green text-text-on-dark pt-32 pb-20 px-6 overflow-hidden">
				{/* Background image */}
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
						<div className="inline-block bg-terracotta text-white px-4 py-2 rounded-full font-sans font-semibold text-sm mb-6">
							<Scale className="w-4 h-4 inline mr-2" />
							Legal Stuff
						</div>
					</FadeIn>
					<FadeIn delay={0.3}>
						<h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
							Terms of <span className="text-mustard">Service</span>
						</h1>
					</FadeIn>
					<FadeIn delay={0.4}>
						<p className="font-sans text-xl text-cream/90 leading-relaxed">
							The boring-but-necessary legal information about using Why So Sad?
						</p>
					</FadeIn>
					<FadeIn delay={0.5}>
						<p className="font-sans text-sm text-cream/70 mt-4">
							Last Updated: December 28, 2025
						</p>
					</FadeIn>
				</div>
			</section>

			{/* Important Disclaimer - Prominent */}
			<section className="bg-coral text-white py-16 px-6">
				<div className="max-w-4xl mx-auto">
					<AnimatedSection>
						<div className="flex items-start gap-4">
							<AlertTriangle className="w-12 h-12 flex-shrink-0 mt-1" />
							<div>
								<h2 className="font-display text-3xl font-bold mb-4">
									IMPORTANT: Not Medical Advice
								</h2>
								<div className="font-sans text-lg leading-relaxed space-y-3">
									<p>
										<strong>Why So Sad?</strong> is a humorous, entertainment-focused quiz. It is <strong>NOT</strong>:
									</p>
									<ul className="space-y-2 ml-6">
										<li>• A medical diagnosis or diagnostic tool</li>
										<li>• A substitute for professional mental health care</li>
										<li>• Provided by licensed healthcare professionals</li>
										<li>• Capable of diagnosing PMDD, SAD, depression, or any medical condition</li>
									</ul>
									<p className="pt-2">
										If you're experiencing mental health challenges, please consult a qualified healthcare provider.
										In crisis? Call <strong>988 (Suicide & Crisis Lifeline)</strong> immediately.
									</p>
								</div>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* Main Terms Content */}
			<section className="bg-cream py-20 px-6">
				<div className="max-w-4xl mx-auto space-y-12">

					{/* Acceptance of Terms */}
					<AnimatedSection>
						<div className="bg-white p-8 rounded-2xl shadow-md">
							<div className="flex items-center gap-3 mb-4">
								<FileText className="w-8 h-8 text-forest-green" />
								<h2 className="font-display text-3xl font-bold text-forest-green">
									1. Acceptance of Terms
								</h2>
							</div>
							<div className="font-sans text-text-on-cream leading-relaxed space-y-3">
								<p>
									By accessing and using Why So Sad? (the "Service"), you agree to be bound by these Terms of Service.
									If you do not agree with any part of these terms, please do not use the Service.
								</p>
								<p>
									We reserve the right to modify these terms at any time. Continued use of the Service after changes
									constitutes acceptance of the modified terms.
								</p>
							</div>
						</div>
					</AnimatedSection>

					{/* Nature of Service */}
					<AnimatedSection delay={0.1}>
						<div className="bg-white p-8 rounded-2xl shadow-md">
							<h2 className="font-display text-3xl font-bold text-forest-green mb-4">
								2. Nature of the Service
							</h2>
							<div className="font-sans text-text-on-cream leading-relaxed space-y-3">
								<p>
									Why So Sad? provides entertainment-focused quizzes related to mental health topics. The quizzes
									are designed to be humorous and informative, but they are <strong>not medical assessments</strong>.
								</p>
								<p>
									While our questions are informed by scientific research and diagnostic criteria, the results are
									for entertainment and self-reflection purposes only. They should never be used as a basis for
									medical decisions or self-diagnosis.
								</p>
							</div>
						</div>
					</AnimatedSection>

					{/* User Responsibilities */}
					<AnimatedSection delay={0.2}>
						<div className="bg-white p-8 rounded-2xl shadow-md">
							<h2 className="font-display text-3xl font-bold text-forest-green mb-4">
								3. User Responsibilities
							</h2>
							<div className="font-sans text-text-on-cream leading-relaxed space-y-3">
								<p>
									By using the Service, you agree to:
								</p>
								<ul className="space-y-2 ml-6">
									<li>• Use the Service for lawful purposes only</li>
									<li>• Not misrepresent quiz results as medical diagnoses</li>
									<li>• Seek professional help if experiencing mental health challenges</li>
									<li>• Not attempt to reverse engineer or scrape content from the Service</li>
									<li>• Respect the intellectual property rights of the Service</li>
								</ul>
							</div>
						</div>
					</AnimatedSection>

					{/* Privacy & Data */}
					<AnimatedSection delay={0.3}>
						<div className="bg-white p-8 rounded-2xl shadow-md">
							<h2 className="font-display text-3xl font-bold text-forest-green mb-4">
								4. Privacy & Data Collection
							</h2>
							<div className="font-sans text-text-on-cream leading-relaxed space-y-3">
								<p>
									Your quiz answers are stored locally in your browser using localStorage. We do not collect,
									store, or transmit your quiz responses to any server.
								</p>
								<p>
									For more information about how we handle data, please see our{" "}
									<a href="/privacy" className="text-forest-green underline hover:text-mustard transition-colors">
										Privacy Policy
									</a>.
								</p>
							</div>
						</div>
					</AnimatedSection>

					{/* Disclaimers & Limitations */}
					<AnimatedSection delay={0.4}>
						<div className="bg-white p-8 rounded-2xl shadow-md">
							<h2 className="font-display text-3xl font-bold text-forest-green mb-4">
								5. Disclaimers & Limitations of Liability
							</h2>
							<div className="font-sans text-text-on-cream leading-relaxed space-y-3">
								<p>
									<strong>THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.</strong>
								</p>
								<p>
									We make no warranties that:
								</p>
								<ul className="space-y-2 ml-6">
									<li>• The Service will be uninterrupted or error-free</li>
									<li>• Quiz results are accurate or applicable to your situation</li>
									<li>• The information provided is complete or up-to-date</li>
									<li>• The Service will meet your specific needs</li>
								</ul>
								<p className="pt-2">
									To the fullest extent permitted by law, we shall not be liable for any indirect, incidental,
									special, consequential, or punitive damages arising from your use of the Service.
								</p>
							</div>
						</div>
					</AnimatedSection>

					{/* External Links */}
					<AnimatedSection delay={0.5}>
						<div className="bg-white p-8 rounded-2xl shadow-md">
							<h2 className="font-display text-3xl font-bold text-forest-green mb-4">
								6. External Links & Resources
							</h2>
							<div className="font-sans text-text-on-cream leading-relaxed space-y-3">
								<p>
									The Service may contain links to third-party websites and resources. These links are provided
									for convenience only. We do not endorse, control, or assume responsibility for the content,
									privacy policies, or practices of any third-party sites.
								</p>
							</div>
						</div>
					</AnimatedSection>

					{/* Intellectual Property */}
					<AnimatedSection delay={0.6}>
						<div className="bg-white p-8 rounded-2xl shadow-md">
							<h2 className="font-display text-3xl font-bold text-forest-green mb-4">
								7. Intellectual Property
							</h2>
							<div className="font-sans text-text-on-cream leading-relaxed space-y-3">
								<p>
									All content on Why So Sad?, including but not limited to text, graphics, logos, quiz questions,
									and algorithms, is the property of Why So Sad? and is protected by copyright and intellectual
									property laws.
								</p>
								<p>
									You may not reproduce, distribute, modify, or create derivative works from any content without
									express written permission.
								</p>
							</div>
						</div>
					</AnimatedSection>

					{/* Termination */}
					<AnimatedSection delay={0.7}>
						<div className="bg-white p-8 rounded-2xl shadow-md">
							<h2 className="font-display text-3xl font-bold text-forest-green mb-4">
								8. Termination
							</h2>
							<div className="font-sans text-text-on-cream leading-relaxed space-y-3">
								<p>
									We reserve the right to terminate or suspend access to the Service at any time, without notice,
									for any reason, including violation of these Terms.
								</p>
							</div>
						</div>
					</AnimatedSection>

					{/* Governing Law */}
					<AnimatedSection delay={0.8}>
						<div className="bg-white p-8 rounded-2xl shadow-md">
							<h2 className="font-display text-3xl font-bold text-forest-green mb-4">
								9. Governing Law
							</h2>
							<div className="font-sans text-text-on-cream leading-relaxed space-y-3">
								<p>
									These Terms shall be governed by and construed in accordance with applicable laws, without
									regard to conflict of law provisions.
								</p>
							</div>
						</div>
					</AnimatedSection>

					{/* Contact */}
					<AnimatedSection delay={0.9}>
						<div className="bg-white p-8 rounded-2xl shadow-md">
							<h2 className="font-display text-3xl font-bold text-forest-green mb-4">
								10. Contact Us
							</h2>
							<div className="font-sans text-text-on-cream leading-relaxed space-y-3">
								<p>
									If you have questions about these Terms of Service, please contact us through our website.
								</p>
							</div>
						</div>
					</AnimatedSection>

				</div>
			</section>

			{/* Bottom CTA */}
			<section className="bg-mustard py-16 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<AnimatedSection>
						<Shield className="w-16 h-16 mx-auto mb-6 text-deep-black" />
						<h2 className="font-display text-3xl font-bold text-deep-black mb-4">
							Questions About These Terms?
						</h2>
						<p className="font-sans text-lg text-deep-black/80 mb-8">
							Check out our other legal pages or go back to taking the quiz.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button href="/privacy" variant="forest" size="lg">
								Privacy Policy
							</Button>
							<Button href="/quiz/start" variant="coral" size="lg">
								Take the Quiz
							</Button>
						</div>
					</AnimatedSection>
				</div>
			</section>
		</div>
	);
}
