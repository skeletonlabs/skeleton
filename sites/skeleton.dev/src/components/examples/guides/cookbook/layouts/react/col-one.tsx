export default function ColOne() {
	return (
		<div className="grid w-full grid-rows-[auto_1fr_auto]">
			{/* Header */}
			<header className="preset-filled-primary-500 p-4">(header)</header>
			{/* Main */}
			<main className="preset-filled-secondary-500 space-y-4 p-4">
				<p className="preset-filled-warning-500 p-4">Paragraph 1</p>
				<p className="preset-filled-warning-500 p-4">Paragraph 2</p>
				<p className="preset-filled-warning-500 p-4">Paragraph 3</p>
			</main>
			{/* Footer */}
			<footer className="preset-filled-tertiary-500 p-4">(footer)</footer>
		</div>
	);
}
