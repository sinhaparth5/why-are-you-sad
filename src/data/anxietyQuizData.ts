export type AnxietyType = "generalized" | "social" | "panic";

export interface AnxietyQuizOption {
	text: string;
	scores: {
		generalized: number;
		social: number;
		panic: number;
	};
}

export interface AnxietyQuizQuestion {
	id: number;
	question: string;
	description?: string;
	options: AnxietyQuizOption[];
}

export const anxietyQuizQuestions: AnxietyQuizQuestion[] = [
	{
		id: 1,
		question: "What kind of situations make you most anxious?",
		description: "Think about what triggers your anxiety",
		options: [
			{
				text: "Basically everything — work, health, money, relationships, you name it",
				scores: { generalized: 10, social: 2, panic: 3 },
			},
			{
				text: "Social situations — parties, meetings, being around people",
				scores: { generalized: 2, social: 10, panic: 2 },
			},
			{
				text: "Situations where I've had panic attacks before, or fear I might have one",
				scores: { generalized: 3, social: 2, panic: 10 },
			},
			{
				text: "It varies — sometimes one thing, sometimes another",
				scores: { generalized: 6, social: 5, panic: 5 },
			},
		],
	},
	{
		id: 2,
		question: "How often do you experience anxiety?",
		description: "Be honest about the frequency",
		options: [
			{
				text: "Pretty much constantly — it's my baseline state",
				scores: { generalized: 10, social: 3, panic: 2 },
			},
			{
				text: "Whenever I have to interact with people or be in social settings",
				scores: { generalized: 2, social: 10, panic: 1 },
			},
			{
				text: "In intense bursts that come out of nowhere",
				scores: { generalized: 2, social: 1, panic: 10 },
			},
			{
				text: "Off and on — some days are worse than others",
				scores: { generalized: 6, social: 5, panic: 5 },
			},
		],
	},
	{
		id: 3,
		question: "What physical symptoms do you experience?",
		description: "Select what resonates most",
		options: [
			{
				text: "Muscle tension, headaches, stomach issues, chronic fatigue",
				scores: { generalized: 10, social: 3, panic: 3 },
			},
			{
				text: "Blushing, sweating, trembling when people are watching me",
				scores: { generalized: 2, social: 10, panic: 4 },
			},
			{
				text: "Racing heart, difficulty breathing, feeling like I'm dying",
				scores: { generalized: 3, social: 3, panic: 10 },
			},
			{
				text: "Restlessness, trouble sleeping, feeling on edge",
				scores: { generalized: 7, social: 4, panic: 5 },
			},
		],
	},
	{
		id: 4,
		question: "How would you describe your worry pattern?",
		description: "Think about how your mind works",
		options: [
			{
				text: "I worry about everything all the time — it jumps from topic to topic",
				scores: { generalized: 10, social: 2, panic: 2 },
			},
			{
				text: "I constantly replay social interactions and worry what people think of me",
				scores: { generalized: 3, social: 10, panic: 2 },
			},
			{
				text: "I'm terrified of having another panic attack and dying",
				scores: { generalized: 2, social: 2, panic: 10 },
			},
			{
				text: "I ruminate on specific fears or obsessive thoughts",
				scores: { generalized: 6, social: 4, panic: 5 },
			},
		],
	},
	{
		id: 5,
		question: "Do you avoid certain situations because of anxiety?",
		description: "Be honest about avoidance behaviors",
		options: [
			{
				text: "Not really — the anxiety follows me everywhere anyway",
				scores: { generalized: 10, social: 2, panic: 2 },
			},
			{
				text: "Yes — I avoid parties, public speaking, eating in front of others",
				scores: { generalized: 2, social: 10, panic: 3 },
			},
			{
				text: "Yes — I avoid places where I've had panic attacks (crowds, driving, planes)",
				scores: { generalized: 2, social: 3, panic: 10 },
			},
			{
				text: "Sometimes — depends on how anxious I'm feeling that day",
				scores: { generalized: 6, social: 6, panic: 6 },
			},
		],
	},
	{
		id: 6,
		question: "How long have you been experiencing this anxiety?",
		description: "Think about duration",
		options: [
			{
				text: "Months or years — it's been a constant companion",
				scores: { generalized: 10, social: 5, panic: 3 },
			},
			{
				text: "Since I can remember — social situations have always terrified me",
				scores: { generalized: 3, social: 10, panic: 2 },
			},
			{
				text: "Since my first panic attack — now I'm afraid it'll happen again",
				scores: { generalized: 2, social: 2, panic: 10 },
			},
			{
				text: "It comes and goes in waves",
				scores: { generalized: 6, social: 5, panic: 5 },
			},
		],
	},
	{
		id: 7,
		question: "What makes your anxiety worse?",
		description: "Identify your triggers",
		options: [
			{
				text: "Uncertainty, change, too many things on my plate",
				scores: { generalized: 10, social: 3, panic: 3 },
			},
			{
				text: "Being the center of attention or feeling judged",
				scores: { generalized: 2, social: 10, panic: 2 },
			},
			{
				text: "Being in places I can't easily escape from",
				scores: { generalized: 3, social: 3, panic: 10 },
			},
			{
				text: "Stress, lack of sleep, or caffeine",
				scores: { generalized: 7, social: 4, panic: 6 },
			},
		],
	},
	{
		id: 8,
		question: "Do you experience sudden, intense episodes of fear?",
		description: "Think about panic-like symptoms",
		options: [
			{
				text: "No — my anxiety is more of a constant low-level buzz",
				scores: { generalized: 10, social: 3, panic: 1 },
			},
			{
				text: "Only in specific social situations that I dread",
				scores: { generalized: 2, social: 10, panic: 4 },
			},
			{
				text: "Yes — sudden attacks that peak within minutes and feel terrifying",
				scores: { generalized: 1, social: 2, panic: 10 },
			},
			{
				text: "Sometimes, but they're not super intense",
				scores: { generalized: 5, social: 5, panic: 7 },
			},
		],
	},
	{
		id: 9,
		question: "How does your anxiety affect your daily life?",
		description: "Consider the impact",
		options: [
			{
				text: "It makes everything harder — work, decisions, relaxation",
				scores: { generalized: 10, social: 3, panic: 3 },
			},
			{
				text: "It limits my social life and career opportunities",
				scores: { generalized: 3, social: 10, panic: 3 },
			},
			{
				text: "I've structured my entire life to avoid panic attacks",
				scores: { generalized: 2, social: 3, panic: 10 },
			},
			{
				text: "It interferes sometimes but isn't totally debilitating",
				scores: { generalized: 6, social: 6, panic: 6 },
			},
		],
	},
	{
		id: 10,
		question: "What are you most afraid of?",
		description: "Identify your core fear",
		options: [
			{
				text: "That something bad will happen and I won't be able to handle it",
				scores: { generalized: 10, social: 2, panic: 3 },
			},
			{
				text: "That people will judge, reject, or humiliate me",
				scores: { generalized: 2, social: 10, panic: 2 },
			},
			{
				text: "That I'll have a panic attack and lose control or die",
				scores: { generalized: 2, social: 2, panic: 10 },
			},
			{
				text: "A mix of different fears depending on the situation",
				scores: { generalized: 6, social: 5, panic: 5 },
			},
		],
	},
	{
		id: 11,
		question: "Can you identify what you're anxious about?",
		description: "Think about specificity",
		options: [
			{
				text: "Not really — it's just a general sense of dread about everything",
				scores: { generalized: 10, social: 2, panic: 2 },
			},
			{
				text: "Yes — specifically social evaluation and embarrassment",
				scores: { generalized: 2, social: 10, panic: 2 },
			},
			{
				text: "Yes — having another panic attack",
				scores: { generalized: 2, social: 2, panic: 10 },
			},
			{
				text: "Sometimes yes, sometimes it's just free-floating anxiety",
				scores: { generalized: 7, social: 4, panic: 4 },
			},
		],
	},
	{
		id: 12,
		question: "How do you cope with your anxiety?",
		description: "What strategies do you use?",
		options: [
			{
				text: "I try to control everything and make endless to-do lists",
				scores: { generalized: 10, social: 3, panic: 3 },
			},
			{
				text: "I avoid social situations entirely or leave early",
				scores: { generalized: 2, social: 10, panic: 4 },
			},
			{
				text: "I carry 'safety items' and avoid triggers obsessively",
				scores: { generalized: 3, social: 3, panic: 10 },
			},
			{
				text: "I use breathing exercises, meditation, or distraction",
				scores: { generalized: 6, social: 5, panic: 6 },
			},
		],
	},
	{
		id: 13,
		question: "Do you worry about worrying?",
		description: "Meta-anxiety check",
		options: [
			{
				text: "Yes — I worry that my constant worrying will make me sick",
				scores: { generalized: 10, social: 3, panic: 3 },
			},
			{
				text: "I worry that my social anxiety makes me seem weird",
				scores: { generalized: 3, social: 10, panic: 3 },
			},
			{
				text: "I'm terrified I'll have a panic attack in public",
				scores: { generalized: 2, social: 4, panic: 10 },
			},
			{
				text: "Not really — I just want the anxiety to stop",
				scores: { generalized: 5, social: 4, panic: 5 },
			},
		],
	},
	{
		id: 14,
		question: "How is your sleep affected by anxiety?",
		description: "Think about sleep patterns",
		options: [
			{
				text: "I lie awake worrying about tomorrow's problems",
				scores: { generalized: 10, social: 3, panic: 3 },
			},
			{
				text: "I replay social interactions and cringe all night",
				scores: { generalized: 3, social: 10, panic: 3 },
			},
			{
				text: "I wake up with my heart racing, afraid I'll panic",
				scores: { generalized: 3, social: 3, panic: 10 },
			},
			{
				text: "I have trouble falling or staying asleep",
				scores: { generalized: 7, social: 5, panic: 6 },
			},
		],
	},
	{
		id: 15,
		question: "If you could describe your anxiety in one phrase:",
		description: "Choose what resonates most",
		options: [
			{
				text: "\"My brain won't shut up about worst-case scenarios\"",
				scores: { generalized: 10, social: 2, panic: 2 },
			},
			{
				text: "\"Everyone is watching and judging me\"",
				scores: { generalized: 2, social: 10, panic: 2 },
			},
			{
				text: "\"I'm terrified I'll lose control of my body\"",
				scores: { generalized: 2, social: 2, panic: 10 },
			},
			{
				text: "\"I'm just constantly on edge\"",
				scores: { generalized: 7, social: 5, panic: 5 },
			},
		],
	},
];

export const getTotalAnxietyQuestions = () => anxietyQuizQuestions.length;
