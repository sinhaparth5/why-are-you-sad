import Link from "next/link";
import { Frown, Menu } from "lucide-react";
import Button from "./Button";

export default function Navigation() {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-forest-green/10">
			<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
				{/* Logo/Brand */}
				<Link href="/" className="flex items-center gap-2 group">
					<Frown className="w-7 h-7 text-forest-green group-hover:text-mustard transition-colors" />
					<span className="font-display text-2xl font-bold text-forest-green group-hover:text-mustard transition-colors">
						Why Are You Sad?
					</span>
				</Link>

				{/* Navigation Links */}
				<div className="hidden md:flex items-center gap-8">
					<Link href="/about" className="font-sans text-text-on-cream hover:text-mustard transition-colors">
						About
					</Link>
					<Link href="/how-it-works" className="font-sans text-text-on-cream hover:text-mustard transition-colors">
						How It Works
					</Link>
					<Link href="/resources" className="font-sans text-text-on-cream hover:text-mustard transition-colors">
						Resources
					</Link>
					<Button href="/quiz/start" variant="mustard" size="sm">
						Take Quiz
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<button className="md:hidden text-forest-green hover:text-mustard transition-colors">
					<Menu className="w-6 h-6" />
				</button>
			</div>
		</nav>
	);
}
