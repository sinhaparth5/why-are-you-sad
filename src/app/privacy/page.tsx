"use client";

import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import FadeIn from "@/components/FadeIn";
import { Shield, Lock, Eye, Database } from "lucide-react";

export default function PrivacyPage() {
	return (
		<div className="min-h-screen">
			<Navigation />

			{/* Hero Section */}
			<section className="relative bg-forest-green-dark text-text-on-dark pt-32 pb-20 px-6">
				<div className="max-w-4xl mx-auto">
					<FadeIn delay={0.2}>
						<Shield className="w-16 h-16 text-mustard mb-6" />
						<h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
							Privacy Policy
						</h1>
					</FadeIn>
					<FadeIn delay={0.4}>
						<p className="font-sans text-xl md:text-2xl text-cream/90 leading-relaxed">
							We take your privacy seriously. Here&apos;s exactly what we do (and don&apos;t do) with your data.
						</p>
					</FadeIn>
					<FadeIn delay={0.6}>
						<p className="font-sans text-sm text-cream/60 mt-4">
							Last updated: {new Date().toLocaleDateString()}
						</p>
					</FadeIn>
				</div>
			</section>

			{/* Quick Summary */}
			<section className="bg-mustard py-12 px-6">
				<div className="max-w-4xl mx-auto">
					<AnimatedSection>
						<div className="bg-deep-black text-text-on-dark p-8 rounded-2xl">
							<h2 className="font-display text-3xl font-bold text-mustard mb-4">TL;DR</h2>
							<ul className="font-sans space-y-3 text-cream/90">
								<li className="flex gap-3">
									<span className="text-mustard">✓</span>
									<span>We don&apos;t collect or store your quiz answers permanently</span>
								</li>
								<li className="flex gap-3">
									<span className="text-mustard">✓</span>
									<span>We don&apos;t sell your data to anyone</span>
								</li>
								<li className="flex gap-3">
									<span className="text-mustard">✓</span>
									<span>We use basic analytics to improve the site (anonymous)</span>
								</li>
								<li className="flex gap-3">
									<span className="text-mustard">✓</span>
									<span>Your results are yours — we don&apos;t keep them</span>
								</li>
							</ul>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* Main Content */}
			<section className="bg-cream py-20 px-6">
				<div className="max-w-4xl mx-auto space-y-16">
					<AnimatedSection>
						<div>
							<div className="flex items-center gap-4 mb-4">
								<Database className="w-10 h-10 text-forest-green" />
								<h2 className="font-display text-3xl font-bold text-forest-green">What We Collect</h2>
							</div>
							<div className="font-sans text-text-on-cream leading-relaxed space-y-4">
								<p>
									<strong>Quiz Responses:</strong> When you take the quiz, your answers are processed in your browser
									to generate results. We do NOT store your individual answers on our servers.
								</p>
								<p>
									<strong>Anonymous Analytics:</strong> We use analytics tools (like Google Analytics or similar) to
									understand how people use the site — things like page views, quiz completion rates, and bounce rates.
									This data is anonymous and aggregated.
								</p>
								<p>
									<strong>Cookies:</strong> We use basic cookies for site functionality and analytics. You can disable
									them in your browser, but some features may not work.
								</p>
							</div>
						</div>
					</AnimatedSection>

					<AnimatedSection>
						<div>
							<div className="flex items-center gap-4 mb-4">
								<Lock className="w-10 h-10 text-forest-green" />
								<h2 className="font-display text-3xl font-bold text-forest-green">How We Use Data</h2>
							</div>
							<div className="font-sans text-text-on-cream leading-relaxed space-y-4">
								<p>
									We use aggregated, anonymous data to:
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4">
									<li>Improve quiz accuracy and question wording</li>
									<li>Understand which result types are most common</li>
									<li>Fix bugs and improve user experience</li>
									<li>Make the site load faster and work better</li>
								</ul>
								<p className="mt-4">
									<strong>We will NEVER:</strong>
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4">
									<li>Sell your data to third parties</li>
									<li>Share your individual quiz answers with anyone</li>
									<li>Use your data for targeted advertising</li>
									<li>Track you across other websites (beyond basic analytics)</li>
								</ul>
							</div>
						</div>
					</AnimatedSection>

					<AnimatedSection>
						<div>
							<div className="flex items-center gap-4 mb-4">
								<Eye className="w-10 h-10 text-forest-green" />
								<h2 className="font-display text-3xl font-bold text-forest-green">Your Rights</h2>
							</div>
							<div className="font-sans text-text-on-cream leading-relaxed space-y-4">
								<p>You have the right to:</p>
								<ul className="list-disc list-inside space-y-2 ml-4">
									<li>Know what data we collect (see above)</li>
									<li>Opt out of analytics by using browser privacy settings or ad blockers</li>
									<li>Delete your browser history and cookies to remove any local data</li>
									<li>Request information about how we handle your data (contact us)</li>
								</ul>
							</div>
						</div>
					</AnimatedSection>

					<AnimatedSection>
						<div>
							<h2 className="font-display text-3xl font-bold text-forest-green mb-4">Third-Party Services</h2>
							<div className="font-sans text-text-on-cream leading-relaxed space-y-4">
								<p>
									This site may use third-party services like:
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4">
									<li><strong>Google Analytics:</strong> Anonymous usage tracking (if enabled)</li>
									<li><strong>Hosting Provider:</strong> Your visit generates server logs (IP address, browser type, etc.)</li>
									<li><strong>CDN Services:</strong> For faster image and asset delivery</li>
								</ul>
								<p className="mt-4">
									These services have their own privacy policies. We don&apos;t control them, but we only use services
									that respect user privacy.
								</p>
							</div>
						</div>
					</AnimatedSection>

					<AnimatedSection>
						<div>
							<h2 className="font-display text-3xl font-bold text-forest-green mb-4">Children&apos;s Privacy</h2>
							<div className="font-sans text-text-on-cream leading-relaxed">
								<p>
									This site is not intended for children under 13. We don&apos;t knowingly collect data from children.
									If you&apos;re a parent and believe your child has used this site, please contact us.
								</p>
							</div>
						</div>
					</AnimatedSection>

					<AnimatedSection>
						<div>
							<h2 className="font-display text-3xl font-bold text-forest-green mb-4">Changes to This Policy</h2>
							<div className="font-sans text-text-on-cream leading-relaxed">
								<p>
									We may update this policy occasionally. If we make significant changes, we&apos;ll update the date
									at the top of this page. Continued use of the site after changes means you accept the new policy.
								</p>
							</div>
						</div>
					</AnimatedSection>

					<AnimatedSection>
						<div>
							<h2 className="font-display text-3xl font-bold text-forest-green mb-4">Contact Us</h2>
							<div className="font-sans text-text-on-cream leading-relaxed">
								<p>
									Questions about this privacy policy? Want to request data deletion or learn more?
								</p>
								<p className="mt-4">
									Email us at: <a href="mailto:privacy@whyareyousad.com" className="text-mustard hover:text-mustard-dark underline">privacy@whyareyousad.com</a>
								</p>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* Footer Note */}
			<section className="bg-forest-green-dark text-text-on-dark py-12 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<AnimatedSection>
						<p className="font-sans text-cream/80">
							<strong>Bottom line:</strong> We respect your privacy. This is a parody mental health quiz, not a data
							harvesting operation.
						</p>
					</AnimatedSection>
				</div>
			</section>
		</div>
	);
}
