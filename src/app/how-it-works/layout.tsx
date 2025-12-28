import { Metadata } from "next";

export const metadata: Metadata = {
	title: "How It Works | Why Are You Sad?",
	description: "Learn the science behind our quiz. Based on DSM-5 criteria for PMDD, SAD, and MDD. Understand our methodology and what your results mean.",
	openGraph: {
		title: "How It Works | Why Are You Sad?",
		description: "The science and methodology behind our sadness quiz. Based on real diagnostic criteria.",
		images: [
			{
				url: "/images/Radiant Holi Reveler.png",
				width: 1200,
				height: 630,
				alt: "How Our Quiz Works",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "How It Works | Why Are You Sad?",
		description: "The science and methodology behind our sadness quiz. Based on real diagnostic criteria.",
		images: ["/images/Radiant Holi Reveler.png"],
	},
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
