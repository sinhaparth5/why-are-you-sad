"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import AnimatedSection from "@/components/AnimatedSection";
import { Calendar, Sun, TrendingDown, Heart, ExternalLink, Share2, RotateCcw, Download } from "lucide-react";
import Image from "next/image";
import { generateSadnessPDF } from "@/utils/generateResultsPDF";

interface ScoreData {
	hormonal: number;
	seasonal: number;
	clinical: number;
}

interface ResultType {
	type: "hormonal" | "seasonal" | "clinical";
	percentage: number;
	label: string;
	icon: React.ReactNode;
	color: string;
	bgColor: string;
}

export default function QuizResultsPage() {
	const router = useRouter();
	const [scores, setScores] = useState<ScoreData | null>(null);
	const [results, setResults] = useState<ResultType[]>([]);
	const [dominantType, setDominantType] = useState<ResultType | null>(null);

	useEffect(() => {
		// Load scores from localStorage
		const storedScores = localStorage.getItem("quizScores");
		if (!storedScores) {
			router.push("/quiz/start");
			return;
		}

		const parsedScores: ScoreData = JSON.parse(storedScores);
		setScores(parsedScores);

		// Calculate percentages (max possible score per type is ~150)
		const maxScore = 150;
		const hormonalPct = Math.round((parsedScores.hormonal / maxScore) * 100);
		const seasonalPct = Math.round((parsedScores.seasonal / maxScore) * 100);
		const clinicalPct = Math.round((parsedScores.clinical / maxScore) * 100);

		const calculatedResults: ResultType[] = [
			{
				type: "hormonal",
				percentage: hormonalPct,
				label: "Hormonally Tragic",
				icon: <Calendar className="w-12 h-12" />,
				color: "text-mustard",
				bgColor: "bg-mustard",
			},
			{
				type: "seasonal",
				percentage: seasonalPct,
				label: "Seasonally Betrayed",
				icon: <Sun className="w-12 h-12" />,
				color: "text-coral",
				bgColor: "bg-coral",
			},
			{
				type: "clinical",
				percentage: clinicalPct,
				label: "Clinically Persistent",
				icon: <TrendingDown className="w-12 h-12" />,
				color: "text-terracotta",
				bgColor: "bg-terracotta",
			},
		];

		setResults(calculatedResults);

		// Find dominant type
		const sorted = [...calculatedResults].sort((a, b) => b.percentage - a.percentage);
		setDominantType(sorted[0]);
	}, [router]);

	if (!scores || !dominantType) {
		return null; // Loading
	}

	const handleRetake = () => {
		localStorage.removeItem("quizAnswers");
		localStorage.removeItem("quizScores");
		router.push("/quiz/start");
	};

	const handleShare = () => {
		const shareText = `I just took the "Why Are You Sad?" quiz! Turns out I'm ${dominantType.percentage}% ${dominantType.label}. Take the quiz: ${window.location.origin}/quiz/start`;
		if (navigator.share) {
			navigator.share({ title: "My Sadness Diagnosis", text: shareText });
		} else {
			navigator.clipboard.writeText(shareText);
			alert("Share text copied to clipboard!");
		}
	};

	const handleDownloadPDF = () => {
		generateSadnessPDF(results, dominantType);
	};

	return (
		<div className="min-h-screen">
			<Navigation />

			{/* Hero Results Section */}
			<section className="relative bg-gradient-to-br from-forest-green-dark via-forest-green to-forest-green-dark text-text-on-dark pt-32 pb-20 px-6 overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-15">
					<Image
						src="/images/Somber Outdoor Portrait.png"
						alt=""
						fill
						className="object-cover"
						sizes="100vw"
					/>
				</div>

				<div className="max-w-5xl mx-auto relative z-10">
					<FadeIn delay={0.2}>
						<div className="inline-block bg-mustard text-deep-black px-4 py-2 rounded-full font-sans font-semibold text-sm mb-6">
							✦ Your Results ✦
						</div>
					</FadeIn>

					<FadeIn delay={0.3}>
						<h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
							You&apos;re <span className="text-mustard">{dominantType.percentage}%</span>
							<br />
							{dominantType.label}
						</h1>
					</FadeIn>

					<FadeIn delay={0.4}>
						<p className="font-sans text-xl md:text-2xl text-cream/90 leading-relaxed mb-8">
							But that&apos;s not the whole story. Here&apos;s your full sadness breakdown:
						</p>
					</FadeIn>
				</div>
			</section>

			{/* Percentage Breakdown */}
			<section className="bg-cream py-20 px-6">
				<div className="max-w-5xl mx-auto">
					<AnimatedSection>
						<h2 className="font-display text-4xl font-bold text-forest-green mb-12 text-center">
							Your Sadness Spectrum
						</h2>
					</AnimatedSection>

					<div className="grid md:grid-cols-3 gap-6 mb-12">
						{results.map((result, index) => (
							<AnimatedSection key={result.type} delay={0.1 * index}>
								<div className="bg-white p-8 rounded-2xl shadow-lg text-center">
									<div className={`${result.color} mb-4 flex justify-center`}>{result.icon}</div>
									<h3 className="font-display text-2xl font-bold text-forest-green mb-2">
										{result.label}
									</h3>
									<div className="mb-4">
										<span className={`font-display text-5xl font-bold ${result.color}`}>
											{result.percentage}%
										</span>
									</div>
									<div className="w-full bg-cream-dark rounded-full h-3">
										<div
											className={`${result.bgColor} h-3 rounded-full transition-all duration-1000`}
											style={{ width: `${result.percentage}%` }}
										/>
									</div>
								</div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>

			{/* Detailed Breakdown */}
			<section className="bg-forest-green text-text-on-dark py-20 px-6">
				<div className="max-w-5xl mx-auto">
					<AnimatedSection>
						<h2 className="font-display text-4xl font-bold text-mustard mb-12 text-center">
							What This Means
						</h2>
					</AnimatedSection>

					<div className="space-y-8">
						{results
							.filter((r) => r.percentage >= 30)
							.map((result, index) => (
								<AnimatedSection key={result.type} delay={0.1 * index}>
									<ResultBreakdown type={result.type} percentage={result.percentage} />
								</AnimatedSection>
							))}
					</div>

					{results.every((r) => r.percentage < 30) && (
						<AnimatedSection>
							<div className="bg-forest-green-dark p-8 rounded-2xl">
								<h3 className="font-display text-2xl font-bold text-mustard mb-4">
									The Occasional Sadness
								</h3>
								<p className="font-sans text-cream/90 leading-relaxed">
									Your scores suggest you experience sadness but it doesn&apos;t fit neatly into hormonal,
									seasonal, or clinical patterns. This could mean you&apos;re dealing with situational
									stressors, normal life fluctuations, or something else entirely. If your sadness is
									interfering with daily life, consider talking to a mental health professional.
								</p>
							</div>
						</AnimatedSection>
					)}
				</div>
			</section>

			{/* When to Seek Help */}
			<section className="bg-coral text-white py-20 px-6">
				<div className="max-w-4xl mx-auto">
					<AnimatedSection>
						<div className="text-center mb-8">
							<Heart className="w-16 h-16 mx-auto mb-4" />
							<h2 className="font-display text-4xl font-bold mb-6">When to Seek Professional Help</h2>
						</div>
					</AnimatedSection>

					<AnimatedSection delay={0.2}>
						<div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl font-sans text-lg leading-relaxed space-y-4">
							<p>
								<strong>Please reach out to a mental health professional if:</strong>
							</p>
							<ul className="space-y-2 ml-6">
								<li className="flex gap-3">
									<span>•</span>
									<span>Your symptoms are interfering with work, relationships, or daily activities</span>
								</li>
								<li className="flex gap-3">
									<span>•</span>
									<span>You&apos;re having thoughts of self-harm or suicide</span>
								</li>
								<li className="flex gap-3">
									<span>•</span>
									<span>Your sadness has lasted more than 2 weeks without improvement</span>
								</li>
								<li className="flex gap-3">
									<span>•</span>
									<span>You&apos;re experiencing severe mood swings that concern you</span>
								</li>
								<li className="flex gap-3">
									<span>•</span>
									<span>You just feel like you need help (that&apos;s reason enough)</span>
								</li>
							</ul>
							<div className="mt-6 pt-6 border-t border-white/20">
								<Button href="/resources" variant="mustard" size="lg" className="w-full sm:w-auto">
									View Mental Health Resources
									<ExternalLink className="w-5 h-5" />
								</Button>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* Share & Retake */}
			<section className="bg-mustard py-16 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<AnimatedSection>
						<h2 className="font-display text-3xl font-bold text-deep-black mb-6">
							Help Normalize Mental Health Conversations
						</h2>
						<p className="font-sans text-lg text-deep-black/80 mb-8">
							Share your results (without the details) to help others feel less alone.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button onClick={handleDownloadPDF} variant="forest" size="lg">
								<Download className="w-5 h-5" />
								Download PDF
							</Button>
							<Button onClick={handleShare} variant="terracotta" size="lg">
								<Share2 className="w-5 h-5" />
								Share Results
							</Button>
							<Button onClick={handleRetake} variant="outline" size="lg">
								<RotateCcw className="w-5 h-5" />
								Retake Quiz
							</Button>
						</div>
					</AnimatedSection>
				</div>
			</section>
		</div>
	);
}

// Result breakdown component for each type
function ResultBreakdown({ type, percentage }: { type: "hormonal" | "seasonal" | "clinical"; percentage: number }) {
	const breakdowns = {
		hormonal: {
			title: "Hormonally Tragic (PMDD Pattern)",
			description:
				"Your responses suggest a strong cyclical pattern tied to your menstrual cycle, consistent with PMDD (Premenstrual Dysphoric Disorder).",
			symptoms: [
				"Mood crashes 1-2 weeks before your period",
				"Relief once menstruation starts",
				"Intense irritability, anxiety, or sadness during luteal phase",
				"Physical symptoms like bloating and cravings",
			],
			strategies: [
				"Track your cycle and symptoms for 2-3 months",
				"Talk to a gynecologist or psychiatrist about PMDD",
				"Consider SSRIs (taken during luteal phase only or continuously)",
				"Try calcium and vitamin B6 supplements (consult doctor first)",
				"Practice self-compassion during your worst days",
			],
			resources: [
				{ text: "International Association for Premenstrual Disorders", url: "https://iapmd.org/" },
				{ text: "Find a PMDD-informed provider", url: "https://iapmd.org/provider-directory" },
			],
		},
		seasonal: {
			title: "Seasonally Betrayed (SAD Pattern)",
			description:
				"Your responses show a seasonal pattern consistent with SAD (Seasonal Affective Disorder), triggered by reduced sunlight.",
			symptoms: [
				"Depression during fall/winter months",
				"Improvement in spring/summer",
				"Increased sleep and appetite in darker months",
				"Sensitivity to lack of daylight",
			],
			strategies: [
				"Get a light therapy lamp (10,000 lux, use 30 mins/day in morning)",
				"Maximize natural sunlight exposure, especially mornings",
				"Maintain consistent sleep schedule",
				"Exercise regularly, especially outdoors",
				"Consider vitamin D supplementation (check levels first)",
			],
			resources: [
				{
					text: "NIMH - Seasonal Affective Disorder",
					url: "https://www.nimh.nih.gov/health/publications/seasonal-affective-disorder",
				},
				{ text: "Find light therapy lamps", url: "https://www.amazon.com/s?k=sad+light+therapy+lamp" },
			],
		},
		clinical: {
			title: "Clinically Persistent (MDD Pattern)",
			description:
				"Your responses suggest persistent depression without clear hormonal or seasonal triggers, consistent with clinical depression (MDD).",
			symptoms: [
				"Sadness lasting weeks or months",
				"No clear cyclical or seasonal pattern",
				"Loss of interest in previously enjoyed activities",
				"Significant impact on daily functioning",
			],
			strategies: [
				"Talk to a mental health professional (therapist, psychiatrist, or PCP)",
				"Consider evidence-based therapies like CBT or DBT",
				"Discuss medication options if appropriate",
				"Build a support system — you don't have to do this alone",
				"Practice self-care without guilt",
			],
			resources: [
				{ text: "Find a therapist (Psychology Today)", url: "https://www.psychologytoday.com/us/therapists" },
				{ text: "988 Suicide & Crisis Lifeline", url: "https://988lifeline.org/" },
				{ text: "Depression and Bipolar Support Alliance", url: "https://www.dbsalliance.org/" },
			],
		},
	};

	const data = breakdowns[type];

	return (
		<div className="bg-forest-green-dark p-8 rounded-2xl">
			<h3 className="font-display text-3xl font-bold text-mustard mb-4">{data.title}</h3>
			<p className="font-sans text-cream/90 leading-relaxed mb-6">{data.description}</p>

			<div className="space-y-6">
				<div>
					<h4 className="font-sans font-bold text-cream mb-3">Common Symptoms:</h4>
					<ul className="font-sans text-cream/80 space-y-2">
						{data.symptoms.map((symptom, i) => (
							<li key={i} className="flex gap-3">
								<span className="text-mustard">•</span>
								<span>{symptom}</span>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h4 className="font-sans font-bold text-cream mb-3">Survival Strategies:</h4>
					<ul className="font-sans text-cream/80 space-y-2">
						{data.strategies.map((strategy, i) => (
							<li key={i} className="flex gap-3">
								<span className="text-mustard">✓</span>
								<span>{strategy}</span>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h4 className="font-sans font-bold text-cream mb-3">Learn More:</h4>
					<div className="space-y-2">
						{data.resources.map((resource, i) => (
							<a
								key={i}
								href={resource.url}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-mustard hover:text-mustard-light transition-colors font-sans"
							>
								<ExternalLink className="w-4 h-4" />
								<span>{resource.text}</span>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
