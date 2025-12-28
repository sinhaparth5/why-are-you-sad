import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

// Display Serif for headings - elegant, high-contrast modern serif
const playfairDisplay = Playfair_Display({
	variable: "--font-display",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
});

// Sans-Serif for body text - clean, geometric, highly readable
const montserrat = Montserrat({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Why Are You Sad? | Scientifically Questionable Sadness Quiz",
	description:
		"Is it hormones? Seasonal? Or genuinely, historically sad? Take our parody mental health quiz to diagnose your sadness with dramatic precision. PMDD, SAD, or clinical depression – let's find out!",
	keywords: ["mental health quiz", "sadness quiz", "PMDD", "SAD", "seasonal depression", "parody quiz", "hormonal sadness"],
	authors: [{ name: "Why Are You Sad" }],
	openGraph: {
		title: "Why Are You Sad? | Sadness Diagnosis Quiz",
		description: "Find out if your sadness is hormonal, seasonal, or genuinely persistent. A scientifically-informed parody.",
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Why Are You Sad? | Take the Quiz",
		description: "Is it hormones? Seasonal? Or are you just genuinely sad? Find out now!",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-scroll-behavior="smooth">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
			</head>
			<body className={`${playfairDisplay.variable} ${montserrat.variable} antialiased`}>{children}</body>
		</html>
	);
}
