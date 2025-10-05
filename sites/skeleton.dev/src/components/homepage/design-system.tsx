import { BookmarkIcon, FigmaIcon, HeartIcon, TriangleIcon, UserRoundIcon } from 'lucide-react';
import { useState } from 'react';

export const spacing = ['w-4', 'w-8', 'w-16', 'w-24', 'w-32', 'w-48', 'w-56', 'w-64', 'w-72'];

export default function DesignSystem() {
	const [active, activeStep] = useState(0);

	const steps = [
		{
			label: 'The Figma UI Kit',
			desc: 'This premium kit allows you preview and mock all available interface elements, including dark mode support. Comes with a Figma plugin to import theme colors automatically.',
		},
		{
			label: 'Themes',
			desc: 'Themes are empowered by CSS custom properties, enabling simple integration into Tailwind. Register multiple themes and easily switch on demand.',
		},
		{
			label: 'Colors',
			desc: 'Manage your color palette with support for contrast tones. Make use of Color Pairings for balancing dark mode. As well as Presets to apply canned styles to elements and components.',
		},
		{
			label: 'Presets',
			desc: 'Presets are utility classes combining Tailwind and Skeleton primitives. Style buttons, badges, cards, and more. Mix and match to create any look or feel.',
		},
		{
			label: 'Typography',
			desc: 'Skeleton provides an array of opt-in utility classes for typographic elements. Includes primitives for generating semantic typography. Adjust theme settings to set the perfect typographic scale.',
		},
		{
			label: 'Spacing',
			desc: 'Use the new Tailwind spacing system to dynamically scaling using a single theme-specified scale factor.',
		},
		{
			label: 'Iconography',
			desc: "Skeleton takes an agnostic approach to icons, allowing you to bring your own icon library or mix and match to fulfill your project's aesthetic.",
		},
	];
	const btnActive = 'btn preset-filled';
	const btnInactive = 'btn preset-outlined-surface-800-200 hover:preset-tonal';

	const setStateClass = (buttonState: number) => {
		return buttonState === active ? btnActive : btnInactive;
	};

	return (
		<div className="grid grid-cols-1 xl:grid-cols-[0.75fr_2fr] gap-10">
			{/* Text */}
			<div className="space-y-8">
				<h2 className="h2">Design System</h2>
				<nav className="grid grid-cols-2 gap-4">
					{steps.map((step, i) => (
						<button
							key={step.label}
							type="button"
							onClick={() => activeStep(i)}
							className={`${setStateClass(i)} ${i === 0 ? 'col-span-2' : ''}`}
						>
							{i === 0 && <FigmaIcon className="size-4" />}
							<span>{step.label}</span>
						</button>
					))}
				</nav>
				<div className="space-y-4">
					<p className="opacity-60">{steps[active].desc}</p>
					{active === 0 && (
						<a href="/figma" className="btn preset-tonal w-full">
							Learn More &rarr;
						</a>
					)}
				</div>
			</div>
			{/* Carousel */}
			<div className="card bg-noise preset-filled-primary-500 aspect-video flex justify-center items-center overflow-hidden shadow-xl">
				{active === 0 && (
					/* Step 1: Figma */
					<img src="https://i.imgur.com/KOrl47B.png" alt="figma" className="w-full h-auto" />
				)}
				{active === 1 && (
					/* Step 2: Themes */
					<div className="w-full pt-10 pl-10">
						{/* <img src="https://i.imgur.com/6cnOrZ4.png" alt="code" className="w-full h-auto rounded-tl-container" /> */}
						{/* prettier-ignore */}
						<pre className="pre box-border overflow-hidden w-full aspect-video mt-4 ml-4 xl:mt-10 xl:ml-10">
<code>{`[data-theme='cerberus'] {
	--spacing: 0.25rem;
	--text-scaling: 1.067;
	--base-font-color: var(--color-surface-950);
	--base-font-color-dark: var(--color-surface-50);
	--base-font-family: system-ui;
	--base-font-size: inherit;
	--base-line-height: inherit;
	--base-font-weight: normal;
	--base-font-style: normal;
	--base-letter-spacing: 0em;
	--heading-font-color: inherit;
	--heading-font-color-dark: inherit;
	--heading-font-family: inherit;
	--heading-font-weight: bold;
	--heading-font-style: normal;
	--heading-letter-spacing: inherit;
	--anchor-font-color: var(--color-primary-500);
	--anchor-font-color-dark: var(--color-primary-400);
	--anchor-font-family: inherit;
	--anchor-font-size: inherit;
	--anchor-line-height: inherit;
	--anchor-font-weight: inherit;
	--anchor-font-style: inherit;
	--anchor-letter-spacing: inherit;
	--anchor-text-decoration: none;
	--anchor-text-decoration-hover: underline;
	--anchor-text-decoration-active: none;
	--anchor-text-decoration-focus: none;`.trim()}
</code>
</pre>
					</div>
				)}
				{active === 2 && (
					/* Step 3: Colors */
					<div className="grid grid-cols-3 gap-5 md:gap-10">
						<div className="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-secondary-500"></div>
						<div className="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-tertiary-500"></div>
						<div className="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-success-500"></div>
						<div className="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-error-500"></div>
						<div className="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-warning-500"></div>
						<div className="w-10 md:w-32 aspect-square rounded-full shadow-xl bg-surface-500"></div>
					</div>
				)}
				{active === 3 && (
					/* Step 4: Presets */
					<div className="md:scale-125 xl:scale-150 grid grid-cols-3 gap-4 xl:gap-10">
						<div className="flex flex-col items-center">
							<button type="button" className="btn preset-filled">
								Filled
							</button>
						</div>
						<div className="flex flex-col items-center">
							<button type="button" className="btn preset-tonal hover:preset-filled hover:brightness-100">
								Tonal
							</button>
						</div>
						<div className="flex flex-col items-center">
							<button type="button" className="btn preset-outlined hover:brightness-100">
								Outlined
							</button>
						</div>
						<div className="flex flex-col items-center">
							<button type="button" className="btn preset-filled shadow-xl">
								Elevated
							</button>
						</div>
						<div className="flex flex-col items-center">
							<button type="button" className="btn hover:preset-filled hover:brightness-100">
								Ghost
							</button>
						</div>
						<div className="flex flex-col items-center">
							<button type="button" className="btn hover:preset-filled hover:brightness-100">
								<BookmarkIcon className="size-6" />
							</button>
						</div>
					</div>
				)}
				{active === 4 && (
					/* Step 5: Typography */
					<div className="text-center space-y-4">
						<h1 className="heading-font-family text-6xl md:text-9xl leading-none font-bold">Aa</h1>
						<p className="text-xs md:text-lg">The quick brown fox jumped over the lazy dog.</p>
					</div>
				)}
				{active === 5 && (
					/* Step 6: Spacing */
					<div className="scale-75 md:scale-150 flex flex-col items-start gap-1">
						{spacing.map((rowHeight) => (
							<div key={rowHeight} className="grid grid-cols-[32px_1fr] items-center gap-2">
								<span className="text-xs text-right">{rowHeight}</span>
								<div className={`bg-surface-50 h-2 ${rowHeight}`}></div>
							</div>
						))}
					</div>
				)}
				{active === 6 && (
					/* Step 7: Iconography */
					<div className="flex gap-5 md:gap-10">
						<HeartIcon className="size-16 md:size-24" />
						<UserRoundIcon className="size-16 md:size-24" />
						<TriangleIcon className="size-16 md:size-24" />
					</div>
				)}
			</div>
		</div>
	);
}
