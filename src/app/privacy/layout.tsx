import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy | Why Are You Sad?",
	description: "We respect your privacy. Learn about our data practices: we don't store quiz answers, don't sell data, and use only basic anonymous analytics.",
	openGraph: {
		title: "Privacy Policy | Why Are You Sad?",
		description: "Your privacy matters. We don't store your quiz answers or sell your data. Learn about our privacy practices.",
		images: [
			{
				url: "/images/Somber Outdoor Portrait.png",
				width: 1200,
				height: 630,
				alt: "Privacy Policy",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Privacy Policy | Why Are You Sad?",
		description: "Your privacy matters. We don't store your quiz answers or sell your data.",
		images: ["/images/Somber Outdoor Portrait.png"],
	},
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
