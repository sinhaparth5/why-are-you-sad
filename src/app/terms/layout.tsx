import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service | Why So Sad?",
	description: "Terms of Service for Why So Sad? - A humorous mental health quiz. Important disclaimers and legal information.",
	openGraph: {
		title: "Terms of Service | Why So Sad?",
		description: "Terms of Service and disclaimers for the Why So Sad? quiz platform.",
		images: [
			{
				url: "/images/Elegance in Himalayan Blossom.png",
				width: 1200,
				height: 630,
				alt: "Terms of Service",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Terms of Service | Why So Sad?",
		description: "Terms of Service and disclaimers for the Why So Sad? quiz platform.",
		images: ["/images/Elegance in Himalayan Blossom.png"],
	},
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
