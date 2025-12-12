export default function ColThree() {
	return (
		<div className="w-full">
			{/* Header */}
			<header className="preset-filled-primary-500 p-4">(header)</header>
			{/* Grid Column */}
			<div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto]">
				{/* Sidebar (Left) */}
				<aside className="preset-filled-success-500 p-4">(sidebar)</aside>
				{/* Main */}
				<main className="preset-filled-secondary-500 p-4 space-y-4">
					<p className="preset-filled-warning-500 p-4">Paragraph 1</p>
					<p className="preset-filled-warning-500 p-4">Paragraph 2</p>
					<p className="preset-filled-warning-500 p-4">Paragraph 3</p>
				</main>
				{/* Sidebar (Right) */}
				<aside className="preset-filled-success-500 p-4">(sidebar)</aside>
			</div>
			{/* Footer */}
			<footer className="preset-filled-tertiary-500 p-4">(footer)</footer>
		</div>
	);
}
