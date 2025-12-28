"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Shield, ExternalLink } from "lucide-react";
import { setCookie, getCookie } from "@/utils/cookies";

export default function CookieBanner() {
	const [showBanner, setShowBanner] = useState(false);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
		// Check if user has already made a choice
		const consent = getCookie("cookieConsent");
		if (consent === null) {
			// Show banner after a short delay for better UX
			setTimeout(() => setShowBanner(true), 1000);
		}
	}, []);

	const handleAccept = () => {
		setCookie("cookieConsent", "accepted", 365); // Store for 1 year
		setShowBanner(false);
		// Reload to initialize analytics
		window.location.reload();
	};

	const handleDecline = () => {
		setCookie("cookieConsent", "declined", 365); // Store for 1 year
		setShowBanner(false);
	};

	// Don't render anything on server
	if (!isClient) return null;

	return (
		<AnimatePresence>
			{showBanner && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-deep-black/60 backdrop-blur-sm z-50"
					/>

					{/* Modal */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 20 }}
						transition={{ type: "spring", duration: 0.5 }}
						className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] max-w-lg max-h-[90vh] overflow-y-auto"
					>
						<div className="bg-cream border-4 border-forest-green rounded-2xl shadow-2xl overflow-hidden">
							{/* Header */}
							<div className="bg-forest-green text-text-on-dark px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
								<div className="flex items-center gap-2 sm:gap-3 min-w-0">
									<Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-mustard flex-shrink-0" />
									<h2 className="font-display text-lg sm:text-2xl font-bold truncate">Cookie Preferences</h2>
								</div>
								<button
									onClick={handleDecline}
									className="text-cream/70 hover:text-mustard transition-colors flex-shrink-0"
									aria-label="Close"
								>
									<X className="w-5 h-5 sm:w-6 sm:h-6" />
								</button>
							</div>

							{/* Content */}
							<div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
								<div className="space-y-2 sm:space-y-3">
									<p className="font-sans text-sm sm:text-base text-text-on-cream leading-relaxed">
										We use cookies to improve your experience and understand how you use our site. We use{" "}
										<strong>Plausible Analytics</strong>, a privacy-friendly analytics tool that:
									</p>
									<ul className="font-sans text-xs sm:text-sm text-text-on-cream space-y-1.5 sm:space-y-2 ml-4 sm:ml-6">
										<li className="flex gap-2">
											<span className="text-forest-green flex-shrink-0">•</span>
											<span>Does not use cookies or track you across sites</span>
										</li>
										<li className="flex gap-2">
											<span className="text-forest-green flex-shrink-0">•</span>
											<span>Does not collect personal data</span>
										</li>
										<li className="flex gap-2">
											<span className="text-forest-green flex-shrink-0">•</span>
											<span>Is fully GDPR, CCPA, and PECR compliant</span>
										</li>
										<li className="flex gap-2">
											<span className="text-forest-green flex-shrink-0">•</span>
											<span>Helps us understand which content is most helpful</span>
										</li>
									</ul>
								</div>

								<div className="bg-mustard/10 border border-mustard/30 rounded-lg p-3 sm:p-4">
									<div className="flex items-start gap-2 sm:gap-3">
										<Shield className="w-4 h-4 sm:w-5 sm:h-5 text-forest-green flex-shrink-0 mt-0.5" />
										<div className="font-sans text-xs sm:text-sm text-text-on-cream">
											<p className="font-semibold mb-1">Your Privacy Matters</p>
											<p>
												We only collect anonymous usage statistics. No personal data, no cross-site tracking, no
												ads.
											</p>
										</div>
									</div>
								</div>

								<div className="pt-1 sm:pt-2">
									<a
										href="/privacy"
										className="inline-flex items-center gap-1.5 sm:gap-2 font-sans text-xs sm:text-sm text-forest-green hover:text-mustard transition-colors underline"
									>
										Read our Privacy Policy
										<ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
									</a>
								</div>
							</div>

							{/* Actions */}
							<div className="px-4 sm:px-6 py-3 sm:py-4 bg-cream-dark/30 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end">
								<button
									onClick={handleDecline}
									className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 font-sans font-semibold text-sm sm:text-base text-text-on-cream bg-white border-2 border-forest-green rounded-lg hover:bg-cream transition-colors"
								>
									Decline Analytics
								</button>
								<button
									onClick={handleAccept}
									className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 font-sans font-semibold text-sm sm:text-base text-deep-black bg-mustard rounded-lg hover:bg-mustard-light shadow-md hover:shadow-lg transition-all"
								>
									Accept & Continue
								</button>
							</div>

							{/* Footer Note */}
							<div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-forest-green-dark/5 border-t border-forest-green/10">
								<p className="font-sans text-[10px] sm:text-xs text-text-muted text-center leading-relaxed">
									Essential cookies (for quiz state) are always enabled. You can change your preferences anytime in
									settings.
								</p>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
