import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sadness Quiz | Why Are You Sad?",
	description: "Take our scientifically-informed quiz to find out if your sadness is hormonal (PMDD), seasonal (SAD), or clinical depression. 15 questions, ~5 minutes.",
	openGraph: {
		title: "Sadness Quiz | Why Are You Sad?",
		description: "Discover your sadness type: hormonal, seasonal, or clinical. Science-based questions in 5 minutes.",
		images: [
			{
				url: "/images/Winter Serenity Portrait.png",
				width: 1200,
				height: 630,
				alt: "Take the Sadness Quiz",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Sadness Quiz | Why Are You Sad?",
		description: "Discover your sadness type: hormonal, seasonal, or clinical. Science-based questions in 5 minutes.",
		images: ["/images/Winter Serenity Portrait.png"],
	},
};

export default function QuizLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
