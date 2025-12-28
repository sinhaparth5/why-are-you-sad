# Why Are You Sad? - Project Progress Tracker

## 🎯 Project Overview
A scientifically-informed parody mental health quiz website using Next.js SSR, retro-modern design theme, and proper animations.

**Tech Stack:**
- Next.js 15 (SSR for security - answers hidden from frontend)
- Tailwind CSS v4
- TypeScript
- Retro-Modern Theme (from theme.jpg)

---

## 🎨 Design System

### Color Palette (From theme.jpg)
- ✅ Forest Green: `#3a4f41` - Headers & sections
- ✅ Cream/Beige: `#f5ead5` - Main background
- ✅ Mustard/Golden: `#f4a93f` - Buttons & accents
- ✅ Terracotta: `#c86640` - Image overlays
- ✅ Coral/Salmon: `#ff6b5a` - CTA buttons
- ✅ Deep Black: `#0a0a0a` - Text & contrast elements

### Typography
- ✅ Playfair Display - Display serif for headings
- ✅ Montserrat - Sans-serif for body text
- ✅ Custom CSS classes: `.text-outline`, `.badge-pill`, `.diamond-bullet`

### Image Guidelines
- Source: lummi.ai (curated, free-to-use images)
- **Homepage Hero**: 16:9 landscape (1920x1080)
- **Quiz Illustrations**: 1:1 square (800x800) or 4:3 (800x600)
- **Result Cards**: 4:5 portrait (1080x1350) for social sharing
- **Decorative Elements**: SVG or small PNGs with transparency

---

## 📋 Website Structure (26 Pages Total)

### Phase 1: Core Quiz Flow (Priority 1) 🔥
- [ ] 1. Homepage/Landing (`/`)
- [ ] 2. Quiz Start/Instructions (`/quiz/start`)
- [ ] 3-17. Quiz Questions (`/quiz/question/[id]`) - 15 questions
- [ ] 18. Loading/Results Animation (`/quiz/calculating`)
- [ ] 19. Results Page (`/quiz/results/[resultId]`)

### Phase 2: Anxiety Quiz (Priority 2)
- [ ] 20. Anxiety Quiz Intro (`/anxiety/start`)
- [ ] 21-35. Anxiety Questions (`/anxiety/question/[id]`)
- [ ] 36. Anxiety Results (`/anxiety/results/[resultId]`)

### Phase 3: Informational Pages (Priority 3)
- [ ] 37. About (`/about`)
- [ ] 38. How It Works (`/how-it-works`)
- [ ] 39. Privacy Policy (`/privacy`)
- [ ] 40. Disclaimer (`/disclaimer`)
- [ ] 41. Resources (`/resources`) - Real mental health resources

### Phase 4: Optional/Future
- [ ] 42. FAQ (`/faq`)
- [ ] 43. Contact (`/contact`)
- [ ] 44. Share Result Preview (`/share/[id]`)

---

## 🧪 Sadness Quiz Structure (15-17 Questions)

### Section 1: Timing & Cycle (3 questions) - MOST IMPORTANT
- [ ] Q1: When does peak sadness hit?
- [ ] Q2: Does sadness lift when period starts?
- [ ] Q3: Worst month of the year?

### Section 2: Atypical Symptoms (3 questions)
- [ ] Q4: Peak comfort-seeking behavior?
- [ ] Q5: Attitude toward sunlight?
- [ ] Q6: Carb/sugar/chocolate craving intensity?

### Section 3: Hormonal Sensitivity (2 questions)
- [ ] Q7: Irrational rage episodes?
- [ ] Q8: Self-rated hormone sensitivity?

### Section 4: Seriousness Check (2 questions)
- [ ] Q9: Have you thought about professional help?
- [ ] Q10: Most representative inner monologue?

### Section 5: Physical Symptoms (3 questions) - NEW
- [ ] Q11: Breast tenderness/bloating timing?
- [ ] Q12: Energy crash patterns?
- [ ] Q13: Sleep pattern changes?

### Section 6: Social/Behavioral (2 questions) - NEW
- [ ] Q14: Social withdrawal timing?
- [ ] Q15: Productivity crash patterns?

### TOTAL: 15 Questions

---

## 🎭 Anxiety Quiz Structure (15 Questions)

### Question Topics (To be defined)
- [ ] Timing of anxiety
- [ ] Physical symptoms (heart racing, sweating)
- [ ] Social situations
- [ ] Avoidance behaviors
- [ ] Worry content themes
- [ ] Sleep impact
- [ ] Catastrophizing levels
- [ ] Panic attack frequency
- [ ] Health anxiety markers
- [ ] Performance anxiety
- [ ] General worry patterns
- [ ] Relaxation ability
- [ ] Physical tension
- [ ] Breathing patterns
- [ ] Professional help consideration

---

## 🧮 Scoring System

### Sadness Quiz Results
- **Mostly A** → 75-95% Hormonally Tragic (PMDD vibes)
- **Mostly B** → 70-90% Seasonally Betrayed (SAD vibes)
- **Mostly C** → 80-100% Genuinely & Historically Sad
- **Mixed A+B** → Winter Hormone Hell
- **Mixed A+C/B+C** → Hybrid Sad Girl
- **Very Mixed** → Chaotic Sadness Gremlin

### Result Page Components
- [ ] Percentage breakdown (primary diagnosis)
- [ ] Dramatic title/description
- [ ] Scientific explanation (simplified & funny)
- [ ] Survival kit recommendations
- [ ] When to seek help (serious moment)
- [ ] Share to social media button
- [ ] Retake quiz button
- [ ] Try anxiety quiz CTA

---

## 🖼️ Image Requirements (lummi.ai recommendations needed)

### Homepage
- [ ] Hero image: Contemplative/moody scene (16:9, 1920x1080)
  - Suggestions: person looking out window, rainy day, cozy melancholy vibes

### Quiz Pages
- [ ] Section 1 icon: Calendar/moon phases (1:1, 400x400)
- [ ] Section 2 icon: Sun/light imagery (1:1, 400x400)
- [ ] Section 3 icon: Emotions/feelings abstract (1:1, 400x400)
- [ ] Section 4 icon: Support/helping hands (1:1, 400x400)
- [ ] Section 5 icon: Body/wellness (1:1, 400x400)
- [ ] Section 6 icon: Social/community (1:1, 400x400)

### Results Pages
- [ ] Hormonally Tragic: Moon/cycle imagery (4:5, 1080x1350)
- [ ] Seasonally Betrayed: Winter/dark sky (4:5, 1080x1350)
- [ ] Genuinely Sad: Contemplative portrait (4:5, 1080x1350)
- [ ] Hybrid results: Abstract emotional art (4:5, 1080x1350)

### Decorative Elements
- [ ] Star/sparkle icons (SVG or PNG with transparency)
- [ ] Geometric shapes matching theme (terracotta rectangles, etc.)
- [ ] Loading animation elements

---

## ⚙️ Technical Implementation Plan

### Phase 1: Setup & Configuration
- [x] ✅ Tailwind CSS v4 configuration
- [x] ✅ Custom color palette from theme.jpg
- [x] ✅ Typography setup (Playfair Display + Montserrat)
- [x] ✅ Custom CSS utility classes
- [ ] Create reusable component library
- [ ] Setup animation library (Framer Motion recommended)

### Phase 2: SSR Quiz Logic
- [ ] Create API routes for quiz submission (`/api/quiz/submit`)
- [ ] Server-side answer validation
- [ ] Result calculation logic (server-side)
- [ ] Session management (store progress without exposing answers)
- [ ] Generate unique result IDs

### Phase 3: Database/Storage (Optional but Recommended)
- [ ] Decide: Database or file-based storage?
- [ ] Store anonymized results for statistics
- [ ] Share functionality (store results for sharing via link)

### Phase 4: Components
- [ ] `<Button>` component (mustard, coral, terracotta variants)
- [ ] `<QuestionCard>` component
- [ ] `<ProgressBar>` component
- [ ] `<ResultCard>` component
- [ ] `<Badge>` component (pill-shaped)
- [ ] `<StarDecoration>` component
- [ ] `<OutlineText>` component

### Phase 5: Animations
- [ ] Page transitions (fade, slide)
- [ ] Question reveal animations
- [ ] Progress bar animations
- [ ] Loading/calculating results animation (dramatic!)
- [ ] Result reveal animation
- [ ] Hover effects on buttons
- [ ] Scroll-triggered animations

---

## 📝 Content Writing Status

### Copy Writing
- [ ] Homepage hero copy
- [ ] Quiz intro/instructions
- [ ] All 15 sadness questions + answers (finalized)
- [ ] All 15 anxiety questions + answers
- [ ] All result page variations (6+ templates)
- [ ] About page content
- [ ] Privacy policy
- [ ] Disclaimer text
- [ ] Resources page content

### Finalized Questions
- [ ] Export questions to JSON/TypeScript file
- [ ] Proofread for tone consistency
- [ ] Scientific accuracy check
- [ ] Humor level review

---

## 🚀 Development Phases

### 🔥 PHASE 1: HOMEPAGE (Current Priority)
**Goal:** Create engaging landing page with theme.jpg design

**Tasks:**
- [ ] Design homepage layout
- [ ] Get hero image from lummi.ai
- [ ] Write homepage copy
- [ ] Create "Start Quiz" CTA button
- [ ] Add decorative elements (stars, outlined text)
- [ ] Implement animations (fade-in, parallax)
- [ ] Mobile responsiveness
- [ ] Add navigation to About/Privacy

**Files to create:**
- [ ] `src/app/page.tsx` (already exists - needs redesign)
- [ ] `src/components/Button.tsx`
- [ ] `src/components/StarDecoration.tsx`
- [ ] Image assets in `/public/images/`

---

### PHASE 2: QUIZ QUESTION FLOW
**Tasks:**
- [ ] Create question data structure (TypeScript types)
- [ ] Build question page component
- [ ] Implement progress tracker
- [ ] Add navigation (back/next)
- [ ] Server-side answer storage
- [ ] Question transition animations
- [ ] Mobile-optimized question cards

**Files to create:**
- [ ] `src/app/quiz/start/page.tsx`
- [ ] `src/app/quiz/question/[id]/page.tsx`
- [ ] `src/data/sadness-questions.ts`
- [ ] `src/types/quiz.ts`
- [ ] `src/components/QuestionCard.tsx`
- [ ] `src/components/ProgressBar.tsx`
- [ ] `src/api/quiz/answer/route.ts`

---

### PHASE 3: RESULTS PAGE
**Tasks:**
- [ ] Create scoring algorithm (server-side)
- [ ] Design result card layouts
- [ ] Write all result variations
- [ ] Add social sharing functionality
- [ ] Create shareable result images
- [ ] Add "Retake" and "Try Anxiety Quiz" CTAs
- [ ] Dramatic result reveal animation

**Files to create:**
- [ ] `src/app/quiz/calculating/page.tsx`
- [ ] `src/app/quiz/results/[id]/page.tsx`
- [ ] `src/lib/scoring.ts`
- [ ] `src/components/ResultCard.tsx`
- [ ] `src/components/ShareButton.tsx`
- [ ] `src/api/quiz/calculate/route.ts`

---

### PHASE 4: INFORMATIONAL PAGES
**Tasks:**
- [ ] About page
- [ ] Privacy policy
- [ ] Disclaimer
- [ ] Resources (real mental health links)
- [ ] How it works
- [ ] Navigation menu component

**Files to create:**
- [ ] `src/app/about/page.tsx`
- [ ] `src/app/privacy/page.tsx`
- [ ] `src/app/disclaimer/page.tsx`
- [ ] `src/app/resources/page.tsx`
- [ ] `src/app/how-it-works/page.tsx`
- [ ] `src/components/Navigation.tsx`

---

### PHASE 5: ANXIETY QUIZ (Duplicate structure)
- [ ] Replicate quiz flow for anxiety
- [ ] Write anxiety questions
- [ ] Create anxiety scoring logic
- [ ] Design anxiety-specific results

---

### PHASE 6: POLISH & LAUNCH
- [ ] Cross-browser testing
- [ ] Mobile testing (iOS/Android)
- [ ] Performance optimization
- [ ] SEO optimization (meta tags, OG images)
- [ ] Accessibility audit (WCAG AA)
- [ ] Analytics setup (optional)
- [ ] Deploy to production

---

## 🎬 Animation Checklist

### Homepage Animations
- [ ] Hero text fade-in + slide-up
- [ ] Decorative stars twinkle/pulse
- [ ] CTA button hover effects (scale, color shift)
- [ ] Scroll-triggered section reveals
- [ ] Outlined text parallax effect

### Quiz Animations
- [ ] Question slide-in transition
- [ ] Answer option hover states
- [ ] Progress bar fill animation
- [ ] Page transition effects
- [ ] Back button micro-interaction

### Results Animations
- [ ] Loading spinner (dramatic countdown?)
- [ ] Result percentage counter (0% → final %)
- [ ] Result card reveal (curtain open effect?)
- [ ] Badge/pill entrance animations
- [ ] Confetti/particle effects (optional)

---

## 📦 Recommended Libraries

### Animations
- [ ] Framer Motion (React animations)
- [ ] React Spring (physics-based)
- [ ] GSAP (advanced timeline animations)

### Utilities
- [ ] clsx / classnames (conditional classes)
- [ ] date-fns (date formatting if needed)

### Icons (if not using emojis)
- [ ] Lucide React (clean icon set)
- [ ] React Icons

---

## ✅ Current Status

**Completed:**
- ✅ Next.js project setup
- ✅ Tailwind CSS v4 configuration
- ✅ Color palette from theme.jpg
- ✅ Typography (Playfair Display + Montserrat)
- ✅ Custom CSS utilities (text-outline, badges, etc.)
- ✅ Demo page with all design elements

**Next Up:**
- 🔥 Create PROGRESS.md (this file)
- 🔥 Get image recommendations from lummi.ai
- 🔥 Redesign homepage with proper theme
- 🔥 Finalize all 15 sadness quiz questions

---

## 📌 Important Notes

### Legal/Ethical Requirements
- ⚠️ Clear disclaimer: "This is parody, not medical advice"
- ⚠️ Include real mental health resources
- ⚠️ Suicide prevention hotline links
- ⚠️ Privacy policy (even if not collecting data)
- ⚠️ Accessibility compliance

### SSR Security
- ✅ Quiz answers NEVER exposed in frontend JavaScript
- ✅ Scoring logic stays server-side
- ✅ Results generated via API routes only
- ✅ No answer key in client bundle

### Design Consistency
- Use theme.jpg palette consistently
- Maintain 2-3 main CTA colors (mustard, coral)
- Keep font pairing strict (Playfair + Montserrat only)
- Reuse custom CSS classes (.text-outline, .badge-pill, etc.)

---

## 🎯 Success Metrics (Post-Launch)

- [ ] Quiz completion rate >60%
- [ ] Mobile usability score >90
- [ ] Page load time <2 seconds
- [ ] Social shares >100 in first week
- [ ] Accessibility score (Lighthouse) >95

---

## 📅 Timeline (Rough Estimate)

**Week 1:** Homepage + Quiz structure + Questions finalized
**Week 2:** Quiz flow implementation + Results page
**Week 3:** Anxiety quiz + Informational pages
**Week 4:** Polish, testing, launch

---

## 🆘 Resources & Links

- [Next.js SSR Documentation](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lummi.ai](https://lummi.ai) - Image source
- [National Suicide Prevention Lifeline](https://988lifeline.org/)
- [Mental Health Resources](https://www.nami.org/Home)

---

**Last Updated:** 2025-12-28
**Current Phase:** Phase 1 - Homepage Development
**Status:** 🚧 In Progress
