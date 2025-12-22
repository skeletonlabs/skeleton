export default function ColTwo() {
	return (
		<div className="w-full grid grid-rows-[auto_1fr_auto]">
			{/* Header */}
			<header className="preset-filled-primary-500 p-4">(header)</header>
			{/* Grid Columns */}
			<div className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
				{/* Left Sidebar. */}
				<aside className="preset-filled-success-500 p-4">(sidebar)</aside>
				{/* Main Content */}
				<main className="preset-filled-secondary-500 p-4 space-y-4">
					<p className="preset-filled-warning-500 p-4">Paragraph 1</p>
					<p className="preset-filled-warning-500 p-4">Paragraph 2</p>
					<p className="preset-filled-warning-500 p-4">Paragraph 3</p>
				</main>
			</div>
			{/* Footer */}
			<footer className="preset-filled-tertiary-500 p-4">(footer)</footer>
		</div>
	);
}
