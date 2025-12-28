# Why So Sad? 😢

A scientifically-informed, humorous mental health quiz platform that helps users understand their sadness type through engaging assessments.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🎯 Overview

**Why So Sad?** is an interactive web application that combines scientific diagnostic criteria with humor to help people identify patterns in their sadness. The platform features:

- **Sadness Quiz**: Identifies if your sadness is hormonal (PMDD), seasonal (SAD), or clinical depression
- **Anxiety Quiz**: Determines if you experience Generalized Anxiety (GAD), Social Anxiety, or Panic Disorder
- **Privacy-First Analytics**: Uses Plausible Analytics for GDPR-compliant, cookieless tracking
- **Downloadable Results**: Export your quiz results as beautifully formatted PDFs
- **Mental Health Resources**: Curated list of crisis support, therapist directories, and disorder-specific resources

## ✨ Features

### 🧠 Scientific Foundation
- Questions based on real diagnostic criteria (DSM-5, PMDD research, SAD markers)
- Percentage-based results showing your profile across different types
- Detailed breakdowns with symptoms, strategies, and resources

### 🎨 Beautiful Design
- Retro-modern aesthetic with custom color palette
- Responsive design optimized for mobile and desktop
- Smooth animations with Framer Motion
- Custom typography (Playfair Display + Montserrat)

### 🔒 Privacy-Focused
- Quiz answers stored locally (localStorage)
- Cookie consent banner with opt-in analytics
- Plausible Analytics (privacy-friendly, no cross-site tracking)
- No personal data collection

### 📱 Progressive Web App
- Installable on mobile devices
- Offline-capable quiz state
- PWA manifest with theme colors

### 🎨 User Experience
- 15-question assessments (~5 minutes each)
- Progress tracking and answer persistence
- Shareable results
- PDF export with themed design
- Crisis resources on every page

## 🚀 Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router (SSR)
- **TypeScript** - Type-safe development
- **React 19** - Latest React features

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Google Fonts** - Playfair Display & Montserrat

### Analytics & Tools
- **Plausible Analytics** - Privacy-friendly analytics
- **jsPDF** - PDF generation for results
- **ESLint** - Code linting

### Deployment
- **Cloudflare Workers** - Edge deployment
- **Wrangler** - Cloudflare deployment tool

## 📁 Project Structure

```
why-are-you-sad/
├── public/
│   ├── images/           # Hero images and backgrounds
│   ├── favicon.svg       # Site favicon
│   ├── og.jpg           # Open Graph image
│   ├── manifest.json    # PWA manifest
│   └── robots.txt       # SEO crawler instructions
├── src/
│   ├── app/
│   │   ├── about/           # About page
│   │   ├── anxiety/         # Anxiety quiz flow
│   │   │   ├── start/       # Quiz landing page
│   │   │   ├── question/[id]/ # Dynamic question pages
│   │   │   └── results/[resultId]/ # Results page
│   │   ├── how-it-works/    # Methodology page
│   │   ├── privacy/         # Privacy policy
│   │   ├── quiz/            # Sadness quiz flow
│   │   │   ├── start/
│   │   │   ├── question/[id]/
│   │   │   └── results/[resultId]/
│   │   ├── resources/       # Mental health resources
│   │   ├── terms/           # Terms of service
│   │   ├── layout.tsx       # Root layout
│   │   ├── not-found.tsx    # Custom 404 page
│   │   ├── page.tsx         # Homepage
│   │   └── sitemap.ts       # Dynamic sitemap
│   ├── components/
│   │   ├── AnimatedSection.tsx
│   │   ├── Button.tsx
│   │   ├── CookieBanner.tsx  # Cookie consent modal
│   │   ├── FadeIn.tsx
│   │   ├── Navigation.tsx
│   │   ├── PlausibleAnalytics.tsx
│   │   └── StarDecoration.tsx
│   ├── data/
│   │   ├── anxietyQuizData.ts  # Anxiety quiz questions
│   │   └── quizData.ts         # Sadness quiz questions
│   └── utils/
│       ├── cookies.ts          # Cookie management
│       └── generateResultsPDF.ts # PDF generation
└── wrangler.jsonc          # Cloudflare config
```

## 🎨 Design System

### Color Palette
- **Forest Green** (`#3a4f41`) - Primary, navigation, headings
- **Mustard** (`#f4a93f`) - Accents, CTAs
- **Coral** (`#ff6b5a`) - Anxiety quiz theme
- **Terracotta** (`#c86640`) - Secondary accents
- **Cream** (`#f5ead5`) - Backgrounds
- **Deep Black** (`#0a0a0a`) - Text, contrast

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Montserrat (sans-serif, readable)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/why-are-you-sad.git
cd why-are-you-sad
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Cloudflare

```bash
npm run deploy
```

## 📊 Quiz Methodology

### Sadness Quiz
Based on diagnostic criteria for:
- **PMDD (Premenstrual Dysphoric Disorder)**: Cyclical symptoms tied to menstrual cycle
- **SAD (Seasonal Affective Disorder)**: Depression during fall/winter months
- **Clinical Depression (MDD)**: Persistent sadness without clear patterns

### Anxiety Quiz
Based on diagnostic criteria for:
- **Generalized Anxiety Disorder (GAD)**: Excessive worry about multiple areas
- **Social Anxiety**: Fear of social situations and judgment
- **Panic Disorder**: Unexpected panic attacks and related avoidance

**Note**: These quizzes are for entertainment and self-reflection only. They are NOT medical diagnoses and should not replace professional mental health care.

## 🔒 Privacy & Analytics

- **Quiz Answers**: Stored locally in browser (localStorage)
- **Analytics**: Plausible Analytics (opt-in, GDPR-compliant)
  - No cookies
  - No cross-site tracking
  - No personal data collection
  - Anonymous usage statistics only
- **Cookie Consent**: Modal banner with explicit opt-in/opt-out

## 📄 Legal Pages

- **Privacy Policy** (`/privacy`) - Data handling practices
- **Terms of Service** (`/terms`) - Usage terms and disclaimers
- **Resources** (`/resources`) - Crisis support and mental health resources

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Important Disclaimer

**Why So Sad?** is for entertainment purposes only. It is NOT:
- A medical diagnosis or diagnostic tool
- A substitute for professional mental health care
- Provided by licensed healthcare professionals
- Capable of diagnosing any medical condition

**If you're experiencing mental health challenges:**
- Consult a qualified healthcare provider
- In crisis? Call **988 (Suicide & Crisis Lifeline)** immediately
- Visit our [Resources page](/resources) for help

## 🙏 Acknowledgments

- Mental health diagnostic criteria based on DSM-5 and peer-reviewed research
- Crisis resources curated from SAMHSA, NIMH, and leading mental health organizations
- Privacy-friendly analytics powered by [Plausible](https://plausible.io/)

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with 💚 and a healthy dose of dark humor**

*Because sometimes you just need to know WHY you're crying in the cereal aisle.*
