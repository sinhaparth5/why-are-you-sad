export default function Home() {
	return (
		<div className="min-h-screen">
			{/* Header Section - Forest Green Background */}
			<header className="bg-forest-green text-text-on-dark py-12 px-6">
				<div className="max-w-6xl mx-auto">
					<h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight">
						PORTFOLIO
					</h1>
					<p className="font-sans text-lg md:text-xl mt-4 opacity-90">
						A retro-modern design system
					</p>
				</div>
			</header>

			{/* Hero Section - Cream Background */}
			<section className="bg-cream py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<h2 className="font-display text-5xl md:text-7xl font-bold text-forest-green mb-6">
						Hello, I&apos;m Han!
					</h2>
					<p className="font-sans text-xl text-text-on-light max-w-2xl leading-relaxed">
						This is your new SSR website with a sophisticated earth-toned retro-modern color scheme.
						The design features elegant typography and a warm, professional aesthetic.
					</p>

					{/* Scroll Down Button - Mustard Yellow */}
					<button className="mt-8 bg-mustard hover:bg-mustard-dark text-deep-black font-sans font-semibold px-8 py-4 rounded-full transition-colors">
						Scroll down
					</button>
				</div>
			</section>

			{/* Experience Section - Ochre Background */}
			<section className="bg-ochre py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<h3 className="font-display text-4xl md:text-6xl font-bold text-deep-black mb-8">
						Experience
					</h3>
					<div className="space-y-6 font-sans">
						<div className="bg-cream p-6 rounded-lg">
							<h4 className="font-semibold text-xl text-forest-green mb-2">Senior Designer</h4>
							<p className="text-text-muted mb-2">2020 - Present</p>
							<p className="text-text-on-light">Creating beautiful, functional designs with modern tools.</p>
						</div>
						<div className="bg-cream p-6 rounded-lg">
							<h4 className="font-semibold text-xl text-forest-green mb-2">UI/UX Developer</h4>
							<p className="text-text-muted mb-2">2018 - 2020</p>
							<p className="text-text-on-light">Bridging the gap between design and development.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer Section - Deep Black Background */}
			<footer className="bg-deep-black text-text-on-dark py-12 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
						<div>
							<h4 className="font-display text-2xl font-bold mb-2">Let&apos;s Connect</h4>
							<p className="font-sans opacity-80">Building the future, one pixel at a time.</p>
						</div>

						{/* LinkedIn Button - Terracotta */}
						<button className="bg-terracotta hover:bg-burnt-orange text-text-on-dark font-sans font-semibold px-6 py-3 rounded-lg transition-colors">
							LinkedIn
						</button>
					</div>

					<div className="mt-8 pt-8 border-t border-off-black font-sans text-sm opacity-60">
						<p>&copy; 2025 Portfolio. Powered by Next.js with Tailwind CSS.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
