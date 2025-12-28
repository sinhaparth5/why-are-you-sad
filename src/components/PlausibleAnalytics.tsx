"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getCookie } from "@/utils/cookies";

export default function PlausibleAnalytics() {
	const [shouldLoad, setShouldLoad] = useState(false);

	useEffect(() => {
		// Check if user has consented to analytics
		const consent = getCookie("cookieConsent");
		if (consent === "accepted") {
			setShouldLoad(true);
		}
	}, []);

	if (!shouldLoad) return null;

	return (
		<>
			<Script
				src="https://plausible.io/js/pa-b0TJAdgetKX1CwQo_RWam.js"
				strategy="afterInteractive"
				async
			/>
			<Script id="plausible-init" strategy="afterInteractive">
				{`
					window.plausible = window.plausible || function() {
						(plausible.q = plausible.q || []).push(arguments)
					};
					plausible.init = plausible.init || function(i) {
						plausible.o = i || {}
					};
					plausible.init();
				`}
			</Script>
		</>
	);
}
