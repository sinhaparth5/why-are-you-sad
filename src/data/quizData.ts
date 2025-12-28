export type SadnessType = "hormonal" | "seasonal" | "clinical";

export interface QuizOption {
	text: string;
	scores: {
		hormonal: number;
		seasonal: number;
		clinical: number;
	};
}

export interface QuizQuestion {
	id: number;
	question: string;
	description?: string;
	options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
	{
		id: 1,
		question: "When does your sadness typically hit the hardest?",
		description: "Think about patterns over the past few months",
		options: [
			{
				text: "The week or two before my period (like clockwork)",
				scores: { hormonal: 10, seasonal: 0, clinical: 2 },
			},
			{
				text: "During fall/winter months when it gets darker earlier",
				scores: { hormonal: 0, seasonal: 10, clinical: 2 },
			},
			{
				text: "It's pretty consistent year-round, no clear pattern",
				scores: { hormonal: 0, seasonal: 0, clinical: 10 },
			},
			{
				text: "Random — no rhyme or reason to it",
				scores: { hormonal: 3, seasonal: 3, clinical: 6 },
			},
		],
	},
	{
		id: 2,
		question: "How long do your sad episodes typically last?",
		description: "Be honest about the duration",
		options: [
			{
				text: "A few days to a week, then it lifts after my period starts",
				scores: { hormonal: 10, seasonal: 0, clinical: 1 },
			},
			{
				text: "Months at a time, especially October through March",
				scores: { hormonal: 0, seasonal: 10, clinical: 3 },
			},
			{
				text: "Weeks to months with no clear end in sight",
				scores: { hormonal: 0, seasonal: 2, clinical: 10 },
			},
			{
				text: "Just a day or two here and there",
				scores: { hormonal: 5, seasonal: 5, clinical: 3 },
			},
		],
	},
	{
		id: 3,
		question: "Do you notice your mood improving with specific conditions?",
		description: "What seems to help?",
		options: [
			{
				text: "Yes — once my period starts, I feel like myself again",
				scores: { hormonal: 10, seasonal: 0, clinical: 0 },
			},
			{
				text: "Yes — sunny days or bright light exposure help a lot",
				scores: { hormonal: 0, seasonal: 10, clinical: 2 },
			},
			{
				text: "Not really — nothing consistently makes me feel better",
				scores: { hormonal: 0, seasonal: 0, clinical: 10 },
			},
			{
				text: "It varies — sometimes things help, sometimes they don't",
				scores: { hormonal: 4, seasonal: 4, clinical: 6 },
			},
		],
	},
	{
		id: 4,
		question: "Which physical symptoms do you experience during sad episodes?",
		description: "Select what resonates most",
		options: [
			{
				text: "Bloating, breast tenderness, intense carb cravings",
				scores: { hormonal: 10, seasonal: 1, clinical: 1 },
			},
			{
				text: "Sleeping way more than usual, craving comfort foods",
				scores: { hormonal: 3, seasonal: 10, clinical: 4 },
			},
			{
				text: "Changes in appetite (way more or way less), sleep issues",
				scores: { hormonal: 2, seasonal: 2, clinical: 10 },
			},
			{
				text: "Fatigue and low energy, but nothing too dramatic",
				scores: { hormonal: 5, seasonal: 5, clinical: 6 },
			},
		],
	},
	{
		id: 5,
		question: "How aware are you of your menstrual cycle's impact on your mood?",
		description: "Only answer honestly if you menstruate",
		options: [
			{
				text: "Extremely — I can predict my breakdown days on a calendar",
				scores: { hormonal: 10, seasonal: 0, clinical: 1 },
			},
			{
				text: "Somewhat — there's a connection but it's not super obvious",
				scores: { hormonal: 6, seasonal: 2, clinical: 4 },
			},
			{
				text: "Not really — my mood doesn't seem tied to my cycle",
				scores: { hormonal: 0, seasonal: 5, clinical: 8 },
			},
			{
				text: "I don't menstruate / Not applicable",
				scores: { hormonal: 0, seasonal: 5, clinical: 5 },
			},
		],
	},
	{
		id: 6,
		question: "How does sunlight (or lack of it) affect your mood?",
		description: "Think about seasonal changes",
		options: [
			{
				text: "I'm basically a plant — no sun = immediate wilting",
				scores: { hormonal: 0, seasonal: 10, clinical: 2 },
			},
			{
				text: "I notice I feel worse in winter, but it's manageable",
				scores: { hormonal: 2, seasonal: 7, clinical: 4 },
			},
			{
				text: "Sunlight doesn't really change how I feel",
				scores: { hormonal: 4, seasonal: 0, clinical: 8 },
			},
			{
				text: "I actually prefer overcast/gloomy days",
				scores: { hormonal: 2, seasonal: 1, clinical: 6 },
			},
		],
	},
	{
		id: 7,
		question: "Do you experience sudden, intense irritability or rage?",
		description: "The kind that feels out of proportion",
		options: [
			{
				text: "Yes — always right before my period (I warn people)",
				scores: { hormonal: 10, seasonal: 1, clinical: 2 },
			},
			{
				text: "Yes — especially during darker months",
				scores: { hormonal: 1, seasonal: 8, clinical: 4 },
			},
			{
				text: "Yes — but it's constant, not tied to any pattern",
				scores: { hormonal: 2, seasonal: 2, clinical: 9 },
			},
			{
				text: "Not really — I'm more sad than angry",
				scores: { hormonal: 3, seasonal: 4, clinical: 7 },
			},
		],
	},
	{
		id: 8,
		question: "How does your sadness impact your daily functioning?",
		description: "Be real about the interference",
		options: [
			{
				text: "Severely for a few days, then back to normal",
				scores: { hormonal: 9, seasonal: 3, clinical: 4 },
			},
			{
				text: "Moderately for several months (fall/winter)",
				scores: { hormonal: 2, seasonal: 10, clinical: 5 },
			},
			{
				text: "Significantly and persistently — work, relationships, everything",
				scores: { hormonal: 1, seasonal: 3, clinical: 10 },
			},
			{
				text: "Mildly — I can mostly push through",
				scores: { hormonal: 4, seasonal: 5, clinical: 5 },
			},
		],
	},
	{
		id: 9,
		question: "Have you noticed a pattern over multiple years?",
		description: "Looking back over time",
		options: [
			{
				text: "Yes — every single month, same time, like clockwork",
				scores: { hormonal: 10, seasonal: 0, clinical: 2 },
			},
			{
				text: "Yes — every fall/winter for at least 2+ years",
				scores: { hormonal: 0, seasonal: 10, clinical: 3 },
			},
			{
				text: "Yes — ongoing for months/years with no seasonal pattern",
				scores: { hormonal: 0, seasonal: 1, clinical: 10 },
			},
			{
				text: "No clear multi-year pattern yet",
				scores: { hormonal: 4, seasonal: 4, clinical: 5 },
			},
		],
	},
	{
		id: 10,
		question: "Do you feel hopeless or like things will never get better?",
		description: "This is about persistent feelings",
		options: [
			{
				text: "Only during the worst PMS days — then it passes",
				scores: { hormonal: 8, seasonal: 1, clinical: 4 },
			},
			{
				text: "Mostly in winter — spring brings relief",
				scores: { hormonal: 1, seasonal: 9, clinical: 5 },
			},
			{
				text: "Yes, frequently and persistently",
				scores: { hormonal: 1, seasonal: 2, clinical: 10 },
			},
			{
				text: "Rarely or never",
				scores: { hormonal: 3, seasonal: 3, clinical: 1 },
			},
		],
	},
	{
		id: 11,
		question: "How's your interest in activities you normally enjoy?",
		description: "Think about hobbies, socializing, etc.",
		options: [
			{
				text: "Disappears for a week pre-period, then returns",
				scores: { hormonal: 10, seasonal: 1, clinical: 3 },
			},
			{
				text: "Drops significantly in fall/winter",
				scores: { hormonal: 1, seasonal: 10, clinical: 4 },
			},
			{
				text: "Consistently low or gone for weeks/months",
				scores: { hormonal: 1, seasonal: 2, clinical: 10 },
			},
			{
				text: "Pretty normal most of the time",
				scores: { hormonal: 2, seasonal: 2, clinical: 2 },
			},
		],
	},
	{
		id: 12,
		question: "Have you had thoughts of self-harm or suicide?",
		description: "Please answer honestly — this is important",
		options: [
			{
				text: "Yes, but only during PMS and they pass quickly",
				scores: { hormonal: 9, seasonal: 1, clinical: 5 },
			},
			{
				text: "Yes, particularly during winter months",
				scores: { hormonal: 1, seasonal: 8, clinical: 7 },
			},
			{
				text: "Yes, frequently and persistently",
				scores: { hormonal: 2, seasonal: 3, clinical: 10 },
			},
			{
				text: "No, never or extremely rarely",
				scores: { hormonal: 1, seasonal: 1, clinical: 1 },
			},
		],
	},
	{
		id: 13,
		question: "How do you feel about tracking your symptoms?",
		description: "Have you tried it?",
		options: [
			{
				text: "I track my cycle and can predict mood crashes",
				scores: { hormonal: 10, seasonal: 2, clinical: 3 },
			},
			{
				text: "I notice patterns with seasons/daylight hours",
				scores: { hormonal: 2, seasonal: 10, clinical: 3 },
			},
			{
				text: "I've tried but there's no clear pattern",
				scores: { hormonal: 2, seasonal: 2, clinical: 9 },
			},
			{
				text: "I haven't really tracked anything",
				scores: { hormonal: 4, seasonal: 4, clinical: 5 },
			},
		],
	},
	{
		id: 14,
		question: "What tends to trigger your worst symptoms?",
		description: "Think about what makes things worse",
		options: [
			{
				text: "The luteal phase of my cycle (days 14-28)",
				scores: { hormonal: 10, seasonal: 0, clinical: 2 },
			},
			{
				text: "Short days, lack of sunlight, winter",
				scores: { hormonal: 0, seasonal: 10, clinical: 2 },
			},
			{
				text: "No specific trigger — it's just always there",
				scores: { hormonal: 0, seasonal: 1, clinical: 10 },
			},
			{
				text: "Stress, major life events, or random factors",
				scores: { hormonal: 4, seasonal: 3, clinical: 7 },
			},
		],
	},
	{
		id: 15,
		question: "If you could describe your sadness in one phrase:",
		description: "Choose what resonates most",
		options: [
			{
				text: "\"It's like my brain betrays me once a month\"",
				scores: { hormonal: 10, seasonal: 0, clinical: 2 },
			},
			{
				text: "\"I hibernate emotionally when the sun disappears\"",
				scores: { hormonal: 0, seasonal: 10, clinical: 2 },
			},
			{
				text: "\"It's a heavy fog that never fully lifts\"",
				scores: { hormonal: 1, seasonal: 2, clinical: 10 },
			},
			{
				text: "\"It comes and goes without warning\"",
				scores: { hormonal: 5, seasonal: 5, clinical: 6 },
			},
		],
	},
];

export const getTotalQuestions = () => quizQuestions.length;
