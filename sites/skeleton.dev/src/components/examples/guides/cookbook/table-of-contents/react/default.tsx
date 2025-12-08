interface PageHeadings {
	/** The text value within the heading tag; stripped of HTML. */
	text: string;
	/** A generated slug value based on the text. */
	slug: string;
	/** Depth indicates headings H1-H6. */
	depth: number;
}

/** The generated list of page headings, slugs, and depth. */
const headings: PageHeadings[] = [
	{ text: 'Real World Example', slug: 'real-world-example', depth: 1 },
	{ text: 'Semantic Markup', slug: 'semantic-markup', depth: 1 },
	{ text: 'Utilities', slug: 'utilities', depth: 1 },
	{ text: 'Grid', slug: 'grid', depth: 2 },
	{ text: 'Alignment', slug: 'alignment', depth: 2 },
	{ text: 'Responsive Design', slug: 'responsive-design', depth: 2 },
	{ text: 'In Conclusion', slug: 'in-conclusion', depth: 1 },
];

const indentations = {
	0: 'pl-0',
	1: 'pl-2',
	2: 'pl-4',
	3: 'pl-6',
	4: 'pl-8',
	5: 'pl-10',
} as const;

/** Provide a padding-left class based on the depth. */
function setIndentationClass(depth: number) {
	return indentations[depth as keyof typeof indentations] ?? 'pl-0';
}

export default function Default() {
	return (
		<nav className="card bg-surface-100-900 p-4">
			{/* Table of Contents */}
			<div className="text-sm space-y-2">
				{/* Label */}
				<div className="font-bold">On This Page</div>
				{/* Links */}
				<ul className="space-y-2">
					{/* Consider a fixed scroll position at the top of your page layouts. */}
					<li>
						<a href={`#_top`} className="anchor block">
							Overview
						</a>
					</li>
					{/* Loop through the available headings. */}
					{headings.map((heading: PageHeadings) => (
						<li key={heading.slug}>
							{/* Apply a indentation class based on the depth. */}
							<a href={`#${heading.slug}`} className={`anchor block ${setIndentationClass(heading.depth)}`}>
								{heading.text}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
