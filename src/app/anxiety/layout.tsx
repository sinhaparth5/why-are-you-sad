import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Anxiety Quiz | What Kind of Anxious Are You?",
	description: "Take our science-based quiz to identify your anxiety type: Generalized (GAD), Social Anxiety, or Panic Disorder. 15 questions, ~5 minutes.",
	openGraph: {
		title: "Anxiety Quiz | What Kind of Anxious Are You?",
		description: "Discover if you're generally anxious, socially terrified, or panic-prone. Science-based assessment in 5 minutes.",
		images: [
			{
				url: "/images/Contemplative Red Light.png",
				width: 1200,
				height: 630,
				alt: "Take the Anxiety Quiz",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Anxiety Quiz | What Kind of Anxious Are You?",
		description: "Discover if you're generally anxious, socially terrified, or panic-prone. Science-based assessment in 5 minutes.",
		images: ["/images/Contemplative Red Light.png"],
	},
};

export default function AnxietyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
