export default function StickyHeader() {
	return (
		// NOTE: to simulate <body> scrolling in this preview, we've used custom styles.
		// In a real world application you should opt for the following instead:
		// <div class="h-screen grid grid-rows-[auto_1fr_auto]">
		<div className="w-full h-[320px] overflow-y-auto relative">
			{/* Header */}
			<header className="sticky top-0 z-10 bg-primary-500/80 backdrop-blur-sm p-4">(header)</header>
			{/* Main */}
			<main className="preset-filled-secondary-500 p-4 space-y-4">
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
