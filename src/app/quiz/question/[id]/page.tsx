"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import { quizQuestions, getTotalQuestions, type QuizOption } from "@/data/quizData";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export default function QuizQuestionPage() {
	const params = useParams();
	const router = useRouter();
	const questionId = parseInt(params.id as string);
	const totalQuestions = getTotalQuestions();

	const [selectedOption, setSelectedOption] = useState<number | null>(null);
	const [answers, setAnswers] = useState<Record<number, number>>({});

	// Load answers from localStorage on mount
	useEffect(() => {
		const storedAnswers = localStorage.getItem("quizAnswers");
		if (storedAnswers) {
			const parsed = JSON.parse(storedAnswers);
			setAnswers(parsed);
			if (parsed[questionId] !== undefined) {
				setSelectedOption(parsed[questionId]);
			}
		}
	}, [questionId]);

	// Get current question
	const currentQuestion = quizQuestions.find((q) => q.id === questionId);

	// Redirect if invalid question ID
	useEffect(() => {
		if (!currentQuestion || questionId < 1 || questionId > totalQuestions) {
			router.push("/quiz/start");
		}
	}, [currentQuestion, questionId, totalQuestions, router]);

	if (!currentQuestion) {
		return null; // Loading or redirecting
	}

	const progress = (questionId / totalQuestions) * 100;
	const isLastQuestion = questionId === totalQuestions;
	const isFirstQuestion = questionId === 1;

	const handleOptionSelect = (optionIndex: number) => {
		setSelectedOption(optionIndex);
	};

	const handleNext = () => {
		if (selectedOption === null) return;

		// Save answer to localStorage
		const updatedAnswers = { ...answers, [questionId]: selectedOption };
		setAnswers(updatedAnswers);
		localStorage.setItem("quizAnswers", JSON.stringify(updatedAnswers));

		// Navigate to next question or results
		if (isLastQuestion) {
			// Calculate results and navigate to results page
			const resultId = calculateResultId(updatedAnswers);
			router.push(`/quiz/results/${resultId}`);
		} else {
			router.push(`/quiz/question/${questionId + 1}`);
		}
	};

	const handlePrevious = () => {
		if (!isFirstQuestion) {
			router.push(`/quiz/question/${questionId - 1}`);
		}
	};

	return (
		<div className="min-h-screen bg-cream">
			<Navigation />

			{/* Progress Bar */}
			<div className="fixed top-16 left-0 right-0 h-2 bg-cream-dark z-40">
				<div
					className="h-full bg-mustard transition-all duration-300 ease-out"
					style={{ width: `${progress}%` }}
				/>
			</div>

			{/* Question Section */}
			<section className="pt-32 pb-20 px-6">
				<div className="max-w-3xl mx-auto">
					{/* Question Number */}
					<FadeIn delay={0.1}>
						<div className="flex items-center justify-between mb-8">
							<div className="font-sans text-sm text-forest-green/60">
								Question {questionId} of {totalQuestions}
							</div>
							<div className="font-sans text-sm text-forest-green/60">{Math.round(progress)}% complete</div>
						</div>
					</FadeIn>

					{/* Question Text */}
					<FadeIn delay={0.2}>
						<h1 className="font-display text-4xl md:text-5xl font-bold text-forest-green mb-4">
							{currentQuestion.question}
						</h1>
					</FadeIn>

					{currentQuestion.description && (
						<FadeIn delay={0.3}>
							<p className="font-sans text-lg text-forest-green/70 mb-10">{currentQuestion.description}</p>
						</FadeIn>
					)}

					{/* Options */}
					<div className="space-y-4 mb-12">
						{currentQuestion.options.map((option, index) => (
							<FadeIn key={index} delay={0.4 + index * 0.1}>
								<button
									onClick={() => handleOptionSelect(index)}
									className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 ${
										selectedOption === index
											? "border-mustard bg-mustard/10 shadow-lg"
											: "border-cream-dark bg-white hover:border-forest-green/30 hover:shadow-md"
									}`}
								>
									<div className="flex items-start gap-4">
										<div
											className={`flex-shrink-0 w-6 h-6 rounded-full border-2 mt-0.5 transition-all ${
												selectedOption === index
													? "border-mustard bg-mustard"
													: "border-forest-green/30"
											}`}
										>
											{selectedOption === index && <CheckCircle className="w-5 h-5 text-white" />}
										</div>
										<p className="font-sans text-base md:text-lg text-text-on-cream flex-1">
											{option.text}
										</p>
									</div>
								</button>
							</FadeIn>
						))}
					</div>

					{/* Navigation Buttons */}
					<FadeIn delay={0.8}>
						<div className="flex flex-col sm:flex-row gap-4 justify-between">
							<div>
								{!isFirstQuestion && (
									<Button onClick={handlePrevious} variant="outline" size="md">
										<ArrowLeft className="w-5 h-5" />
										Previous
									</Button>
								)}
							</div>
							<Button
								onClick={handleNext}
								variant="mustard"
								size="md"
								className={selectedOption === null ? "opacity-50 cursor-not-allowed" : ""}
							>
								{isLastQuestion ? "See Results" : "Next Question"}
								{!isLastQuestion && <ArrowRight className="w-5 h-5" />}
							</Button>
						</div>
					</FadeIn>
				</div>
			</section>
		</div>
	);
}

// Helper function to calculate result ID based on answers
function calculateResultId(answers: Record<number, number>): string {
	const scores = {
		hormonal: 0,
		seasonal: 0,
		clinical: 0,
	};

	// Calculate total scores
	Object.entries(answers).forEach(([questionId, optionIndex]) => {
		const question = quizQuestions.find((q) => q.id === parseInt(questionId));
		if (question && question.options[optionIndex]) {
			const option = question.options[optionIndex];
			scores.hormonal += option.scores.hormonal;
			scores.seasonal += option.scores.seasonal;
			scores.clinical += option.scores.clinical;
		}
	});

	// Store scores in localStorage for results page
	localStorage.setItem("quizScores", JSON.stringify(scores));

	// Generate a simple result ID (could be enhanced with actual encoding)
	const timestamp = Date.now();
	return `${timestamp}`;
}
