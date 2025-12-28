import jsPDF from 'jspdf';

interface ResultType {
	type: string;
	percentage: number;
	label: string;
}

const COLORS = {
	forestGreen: '#3a4f41',
	cream: '#f5ead5',
	mustard: '#f4a93f',
	terracotta: '#c86640',
	coral: '#ff6b5a',
	deepBlack: '#0a0a0a',
};

export function generateSadnessPDF(results: ResultType[], dominantType: ResultType) {
	const doc = new jsPDF();
	const pageWidth = doc.internal.pageSize.getWidth();
	const pageHeight = doc.internal.pageSize.getHeight();
	let yPosition = 20;

	// Background color
	doc.setFillColor(245, 234, 213); // Cream
	doc.rect(0, 0, pageWidth, pageHeight, 'F');

	// Header with decorative bar
	doc.setFillColor(58, 79, 65); // Forest green
	doc.rect(0, 0, pageWidth, 40, 'F');

	// Title
	doc.setTextColor(245, 234, 213); // Cream text
	doc.setFontSize(24);
	doc.setFont('helvetica', 'bold');
	doc.text('Why Are You Sad?', pageWidth / 2, 20, { align: 'center' });

	doc.setFontSize(14);
	doc.setFont('helvetica', 'normal');
	doc.text('Your Sadness Quiz Results', pageWidth / 2, 30, { align: 'center' });

	// Main result
	yPosition = 60;
	doc.setTextColor(10, 10, 10); // Deep black
	doc.setFontSize(20);
	doc.setFont('helvetica', 'bold');
	doc.text(`You're ${dominantType.percentage}% ${dominantType.label}`, pageWidth / 2, yPosition, { align: 'center' });

	// Date
	yPosition += 15;
	doc.setFontSize(10);
	doc.setFont('helvetica', 'normal');
	doc.setTextColor(100, 100, 100);
	const today = new Date().toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	doc.text(`Results from ${today}`, pageWidth / 2, yPosition, { align: 'center' });

	// Results breakdown
	yPosition += 20;
	doc.setFontSize(16);
	doc.setFont('helvetica', 'bold');
	doc.setTextColor(58, 79, 65); // Forest green
	doc.text('Your Sadness Breakdown', 20, yPosition);

	yPosition += 10;
	results.forEach((result) => {
		// Type label
		doc.setFontSize(12);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(10, 10, 10);
		doc.text(result.label, 20, yPosition);

		// Percentage
		doc.setFont('helvetica', 'normal');
		doc.text(`${result.percentage}%`, pageWidth - 40, yPosition);

		// Progress bar
		yPosition += 5;
		const barWidth = pageWidth - 40;
		const barHeight = 8;

		// Background bar
		doc.setFillColor(220, 220, 220);
		doc.rect(20, yPosition, barWidth, barHeight, 'F');

		// Filled bar
		const fillWidth = (barWidth * result.percentage) / 100;
		if (result.type === 'hormonal') {
			doc.setFillColor(244, 169, 63); // Mustard
		} else if (result.type === 'seasonal') {
			doc.setFillColor(255, 107, 90); // Coral
		} else {
			doc.setFillColor(200, 102, 64); // Terracotta
		}
		doc.rect(20, yPosition, fillWidth, barHeight, 'F');

		yPosition += 20;
	});

	// Important note
	yPosition += 10;
	doc.setFontSize(10);
	doc.setFont('helvetica', 'bold');
	doc.setTextColor(200, 102, 64); // Terracotta
	doc.text('Important Disclaimer:', 20, yPosition);

	yPosition += 6;
	doc.setFont('helvetica', 'normal');
	doc.setTextColor(60, 60, 60);
	const disclaimerText = 'This is a humorous quiz based on scientific criteria, but it is NOT a medical diagnosis. If you\'re struggling with your mental health, please consult a healthcare professional.';
	const splitDisclaimer = doc.splitTextToSize(disclaimerText, pageWidth - 40);
	doc.text(splitDisclaimer, 20, yPosition);

	// Footer
	doc.setFontSize(9);
	doc.setTextColor(100, 100, 100);
	doc.text('why-are-you-sad.parth-sinha.workers.dev', pageWidth / 2, pageHeight - 15, { align: 'center' });
	doc.text('For entertainment purposes only. Seek professional help if needed.', pageWidth / 2, pageHeight - 10, { align: 'center' });

	// Save
	doc.save(`sadness-quiz-results-${Date.now()}.pdf`);
}

export function generateAnxietyPDF(results: ResultType[], dominantType: ResultType) {
	const doc = new jsPDF();
	const pageWidth = doc.internal.pageSize.getWidth();
	const pageHeight = doc.internal.pageSize.getHeight();
	let yPosition = 20;

	// Background color
	doc.setFillColor(245, 234, 213); // Cream
	doc.rect(0, 0, pageWidth, pageHeight, 'F');

	// Header with decorative bar
	doc.setFillColor(255, 107, 90); // Coral
	doc.rect(0, 0, pageWidth, 40, 'F');

	// Title
	doc.setTextColor(255, 255, 255); // White text
	doc.setFontSize(24);
	doc.setFont('helvetica', 'bold');
	doc.text('Anxiety Quiz Results', pageWidth / 2, 20, { align: 'center' });

	doc.setFontSize(14);
	doc.setFont('helvetica', 'normal');
	doc.text('What Kind of Anxious Are You?', pageWidth / 2, 30, { align: 'center' });

	// Main result
	yPosition = 60;
	doc.setTextColor(10, 10, 10); // Deep black
	doc.setFontSize(20);
	doc.setFont('helvetica', 'bold');
	doc.text(`You're ${dominantType.percentage}% ${dominantType.label}`, pageWidth / 2, yPosition, { align: 'center' });

	// Date
	yPosition += 15;
	doc.setFontSize(10);
	doc.setFont('helvetica', 'normal');
	doc.setTextColor(100, 100, 100);
	const today = new Date().toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	doc.text(`Results from ${today}`, pageWidth / 2, yPosition, { align: 'center' });

	// Results breakdown
	yPosition += 20;
	doc.setFontSize(16);
	doc.setFont('helvetica', 'bold');
	doc.setTextColor(255, 107, 90); // Coral
	doc.text('Your Anxiety Profile', 20, yPosition);

	yPosition += 10;
	results.forEach((result) => {
		// Type label
		doc.setFontSize(12);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(10, 10, 10);
		doc.text(result.label, 20, yPosition);

		// Percentage
		doc.setFont('helvetica', 'normal');
		doc.text(`${result.percentage}%`, pageWidth - 40, yPosition);

		// Progress bar
		yPosition += 5;
		const barWidth = pageWidth - 40;
		const barHeight = 8;

		// Background bar
		doc.setFillColor(220, 220, 220);
		doc.rect(20, yPosition, barWidth, barHeight, 'F');

		// Filled bar
		const fillWidth = (barWidth * result.percentage) / 100;
		if (result.type === 'generalized') {
			doc.setFillColor(255, 107, 90); // Coral
		} else if (result.type === 'social') {
			doc.setFillColor(200, 102, 64); // Terracotta
		} else {
			doc.setFillColor(244, 169, 63); // Mustard
		}
		doc.rect(20, yPosition, fillWidth, barHeight, 'F');

		yPosition += 20;
	});

	// Important note
	yPosition += 10;
	doc.setFontSize(10);
	doc.setFont('helvetica', 'bold');
	doc.setTextColor(200, 102, 64); // Terracotta
	doc.text('Important Disclaimer:', 20, yPosition);

	yPosition += 6;
	doc.setFont('helvetica', 'normal');
	doc.setTextColor(60, 60, 60);
	const disclaimerText = 'This is a humorous quiz based on scientific criteria, but it is NOT a medical diagnosis. If you\'re experiencing severe anxiety, please consult a healthcare professional.';
	const splitDisclaimer = doc.splitTextToSize(disclaimerText, pageWidth - 40);
	doc.text(splitDisclaimer, 20, yPosition);

	// Footer
	doc.setFontSize(9);
	doc.setTextColor(100, 100, 100);
	doc.text('why-are-you-sad.parth-sinha.workers.dev', pageWidth / 2, pageHeight - 15, { align: 'center' });
	doc.text('For entertainment purposes only. Seek professional help if needed.', pageWidth / 2, pageHeight - 10, { align: 'center' });

	// Save
	doc.save(`anxiety-quiz-results-${Date.now()}.pdf`);
}
