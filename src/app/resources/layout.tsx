import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mental Health Resources | Why Are You Sad?",
	description: "Real mental health resources including crisis hotlines (988), therapist directories, and support for PMDD, SAD, and depression. Get help now.",
	openGraph: {
		title: "Mental Health Resources | Why Are You Sad?",
		description: "Crisis support, therapist directories, and resources for PMDD, SAD, and depression. Help is available 24/7.",
		images: [
			{
				url: "/images/Contemplative Woman at Twilight.png",
				width: 1200,
				height: 630,
				alt: "Mental Health Resources",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Mental Health Resources | Why Are You Sad?",
		description: "Crisis support, therapist directories, and resources for PMDD, SAD, and depression. Help is available 24/7.",
		images: ["/images/Contemplative Woman at Twilight.png"],
	},
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
