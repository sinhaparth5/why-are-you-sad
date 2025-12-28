"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import AnimatedSection from "@/components/AnimatedSection";
import { Brain, Users, Zap, Heart, ExternalLink, Share2, RotateCcw, Download } from "lucide-react";
import Image from "next/image";
import { generateAnxietyPDF } from "@/utils/generateResultsPDF";

interface AnxietyScoreData {
	generalized: number;
	social: number;
	panic: number;
}

interface AnxietyResultType {
	type: "generalized" | "social" | "panic";
	percentage: number;
	label: string;
	icon: React.ReactNode;
	color: string;
	bgColor: string;
}

export default function AnxietyResultsPage() {
	const router = useRouter();
	const [scores, setScores] = useState<AnxietyScoreData | null>(null);
	const [results, setResults] = useState<AnxietyResultType[]>([]);
	const [dominantType, setDominantType] = useState<AnxietyResultType | null>(null);

	useEffect(() => {
		// Load scores from localStorage
		const storedScores = localStorage.getItem("anxietyQuizScores");
		if (!storedScores) {
			router.push("/anxiety/start");
			return;
		}

		const parsedScores: AnxietyScoreData = JSON.parse(storedScores);
		setScores(parsedScores);

		// Calculate percentages (max possible score per type is ~150)
		const maxScore = 150;
		const generalizedPct = Math.round((parsedScores.generalized / maxScore) * 100);
		const socialPct = Math.round((parsedScores.social / maxScore) * 100);
		const panicPct = Math.round((parsedScores.panic / maxScore) * 100);

		const calculatedResults: AnxietyResultType[] = [
			{
				type: "generalized",
				percentage: generalizedPct,
				label: "Generalized Worrier",
				icon: <Brain className="w-12 h-12" />,
				color: "text-coral",
				bgColor: "bg-coral",
			},
			{
				type: "social",
				percentage: socialPct,
				label: "Socially Terrified",
				icon: <Users className="w-12 h-12" />,
				color: "text-terracotta",
				bgColor: "bg-terracotta",
			},
			{
				type: "panic",
				percentage: panicPct,
				label: "Panic-Prone",
				icon: <Zap className="w-12 h-12" />,
				color: "text-mustard",
				bgColor: "bg-mustard",
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
		localStorage.removeItem("anxietyQuizAnswers");
		localStorage.removeItem("anxietyQuizScores");
		router.push("/anxiety/start");
	};

	const handleShare = () => {
		const shareText = `I just took the anxiety quiz! Turns out I'm ${dominantType.percentage}% ${dominantType.label}. Take the quiz: ${window.location.origin}/anxiety/start`;
		if (navigator.share) {
			navigator.share({ title: "My Anxiety Type", text: shareText });
		} else {
			navigator.clipboard.writeText(shareText);
			alert("Share text copied to clipboard!");
		}
	};

	const handleDownloadPDF = () => {
		generateAnxietyPDF(results, dominantType);
	};

	return (
		<div className="min-h-screen">
			<Navigation />

			{/* Hero Results Section */}
			<section className="relative bg-gradient-to-br from-coral via-terracotta to-deep-black text-text-on-dark pt-32 pb-20 px-6 overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-15">
					<Image
						src="/images/Contemplative Red Light.png"
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
							But anxiety is rarely one-dimensional. Here&apos;s your full breakdown:
						</p>
					</FadeIn>
				</div>
			</section>

			{/* Percentage Breakdown */}
			<section className="bg-cream py-20 px-6">
				<div className="max-w-5xl mx-auto">
					<AnimatedSection>
						<h2 className="font-display text-4xl font-bold text-forest-green mb-12 text-center">
							Your Anxiety Profile
						</h2>
					</AnimatedSection>

					<div className="grid md:grid-cols-3 gap-6 mb-12">
						{results.map((result, index) => (
							<AnimatedSection key={result.type} delay={0.1 * index}>
								<div className="bg-white p-8 rounded-2xl shadow-lg text-center h-full">
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
									<AnxietyResultBreakdown type={result.type} />
								</AnimatedSection>
							))}
					</div>

					{results.every((r) => r.percentage < 30) && (
						<AnimatedSection>
							<div className="bg-forest-green-dark p-8 rounded-2xl">
								<h3 className="font-display text-2xl font-bold text-mustard mb-4">
									Situational Anxiety
								</h3>
								<p className="font-sans text-cream/90 leading-relaxed">
									Your scores suggest you experience anxiety but it doesn&apos;t fit strongly into GAD, social
									anxiety, or panic disorder patterns. You might be dealing with situational stress or normal
									worry. If it&apos;s interfering with daily life, consider talking to a mental health
									professional.
								</p>
							</div>
						</AnimatedSection>
					)}
				</div>
			</section>

			{/* When to Seek Help */}
			<section className="bg-terracotta text-white py-20 px-6">
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
									<span>Your anxiety is interfering with work, relationships, or daily activities</span>
								</li>
								<li className="flex gap-3">
									<span>•</span>
									<span>You&apos;re avoiding important situations or activities due to anxiety</span>
								</li>
								<li className="flex gap-3">
									<span>•</span>
									<span>You&apos;re having panic attacks or severe physical symptoms</span>
								</li>
								<li className="flex gap-3">
									<span>•</span>
									<span>Your anxiety has lasted more than 6 months without improvement</span>
								</li>
								<li className="flex gap-3">
									<span>•</span>
									<span>You&apos;re using substances to cope with anxiety</span>
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
							Share Your Results (Anonymously)
						</h2>
						<p className="font-sans text-lg text-deep-black/80 mb-8">
							Help normalize conversations about anxiety.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button onClick={handleDownloadPDF} variant="forest" size="lg">
								<Download className="w-5 h-5" />
								Download PDF
							</Button>
							<Button onClick={handleShare} variant="coral" size="lg">
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

// Result breakdown component for each anxiety type
function AnxietyResultBreakdown({ type }: { type: "generalized" | "social" | "panic" }) {
	const breakdowns = {
		generalized: {
			title: "Generalized Worrier (GAD Pattern)",
			description:
				"Your responses suggest persistent, excessive worry about multiple areas of life, consistent with Generalized Anxiety Disorder (GAD).",
			symptoms: [
				"Chronic worry that's hard to control",
				"Feeling restless, on edge, or wound up",
				"Difficulty concentrating",
				"Muscle tension and physical symptoms",
				"Sleep disturbances",
			],
			strategies: [
				"Practice scheduled 'worry time' to contain anxious thoughts",
				"Try cognitive behavioral therapy (CBT) - highly effective for GAD",
				"Learn progressive muscle relaxation",
				"Consider mindfulness meditation and grounding techniques",
				"Talk to a doctor about SSRIs or SNRIs if symptoms are severe",
			],
			resources: [
				{ text: "Anxiety & Depression Association of America", url: "https://adaa.org/" },
				{ text: "Find a CBT therapist", url: "https://www.psychologytoday.com/us/therapists" },
			],
		},
		social: {
			title: "Socially Terrified (Social Anxiety Pattern)",
			description:
				"Your responses show intense fear of social situations and being judged by others, consistent with Social Anxiety Disorder.",
			symptoms: [
				"Intense fear of social situations",
				"Worry about being judged, embarrassed, or humiliated",
				"Avoidance of social events or public speaking",
				"Physical symptoms in social settings (blushing, sweating, trembling)",
				"Excessive self-consciousness",
			],
			strategies: [
				"Gradual exposure therapy - start small and work your way up",
				"Challenge negative thoughts about social situations",
				"Practice social skills in low-stakes environments",
				"Consider group therapy for social anxiety",
				"Beta-blockers or SSRIs may help with severe symptoms",
			],
			resources: [
				{ text: "Social Anxiety Association", url: "https://socialphobia.org/" },
				{ text: "Anxiety & Depression Association", url: "https://adaa.org/understanding-anxiety/social-anxiety-disorder" },
			],
		},
		panic: {
			title: "Panic-Prone (Panic Disorder Pattern)",
			description:
				"Your responses indicate recurrent panic attacks and fear of future attacks, consistent with Panic Disorder.",
			symptoms: [
				"Sudden, intense episodes of fear",
				"Physical symptoms: racing heart, difficulty breathing, dizziness",
				"Fear of losing control or dying during attacks",
				"Avoidance of places where attacks have occurred",
				"Constant worry about having another panic attack",
			],
			strategies: [
				"Learn panic attack coping techniques (grounding, breathing)",
				"Cognitive behavioral therapy (CBT) is highly effective",
				"Gradual exposure to feared situations",
				"Avoid caffeine and alcohol which can trigger attacks",
				"SSRIs or benzodiazepines (short-term) may help severe cases",
			],
			resources: [
				{ text: "National Institute of Mental Health - Panic Disorder", url: "https://www.nimh.nih.gov/health/topics/panic-disorder" },
				{ text: "Anxiety & Depression Association", url: "https://adaa.org/understanding-anxiety/panic-disorder" },
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
								<span className="text-coral">•</span>
								<span>{symptom}</span>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h4 className="font-sans font-bold text-cream mb-3">What Can Help:</h4>
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
								className="inline-flex items-center gap-2 text-coral hover:text-coral/80 transition-colors font-sans"
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
