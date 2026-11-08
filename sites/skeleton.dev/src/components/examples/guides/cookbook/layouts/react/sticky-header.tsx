export default function StickyHeader() {
	return (
		// NOTE: to simulate <body> scrolling in this preview, we've used custom styles.
		// In a real world application you should opt for the following instead:
		// <div class="h-screen grid grid-rows-[auto_1fr_auto]">
		<div className="relative h-[320px] w-full overflow-y-auto">
			{/* Header */}
			<header className="bg-primary-500/80 sticky top-0 z-10 p-4 backdrop-blur-sm">
				(header)
			</header>
			{/* Main */}
			<main className="preset-filled-secondary-500 space-y-4 p-4">
				<p className="preset-filled-warning-500 p-4">Paragraph 1</p>
				<p className="preset-filled-warning-500 p-4">Paragraph 2</p>
				<p className="preset-filled-warning-500 p-4">Paragraph 3</p>
				<p className="preset-filled-warning-500 p-4">Paragraph 4</p>
				<p className="preset-filled-warning-500 p-4">Paragraph 5</p>
			</main>
			{/* Footer */}
			<footer className="preset-filled-tertiary-500 p-4">(footer)</footer>
		</div>
	);
}
