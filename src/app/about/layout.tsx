import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About | Why So Sad?",
	description: "Learn about our scientifically-informed mental health quiz. Based on real diagnostic criteria for PMDD, SAD, and clinical depression, but with humor and validation.",
	openGraph: {
		title: "About | Why So Sad?",
		description: "A scientifically-informed humorous mental health quiz to help you understand your sadness.",
		images: [
			{
				url: "/images/Elegance in Himalayan Blossom.png",
				width: 1200,
				height: 630,
				alt: "About Why So Sad",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "About | Why So Sad?",
		description: "A scientifically-informed humorous mental health quiz to help you understand your sadness.",
		images: ["/images/Elegance in Himalayan Blossom.png"],
	},
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
