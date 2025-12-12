export default function Featured() {
	return (
		<section className="grid gap-4">
			{/* Featured */}
			<header>
				<img className="h-auto max-w-full bg-surface-500 rounded-container" src="https://picsum.photos/960/512?random=1" alt="Featured" />
			</header>
			{/* Row */}
			<div className="grid grid-cols-5 gap-4">
				<img className="h-full w-full bg-surface-500 rounded-container" src="https://picsum.photos/200/200?random=2" alt="" />
				<img className="h-full w-full bg-surface-500 rounded-container" src="https://picsum.photos/200/200?random=3" alt="" />
				<img className="h-full w-full bg-surface-500 rounded-container" src="https://picsum.photos/200/200?random=4" alt="" />
				<img className="h-full w-full bg-surface-500 rounded-container" src="https://picsum.photos/200/200?random=5" alt="" />
				<img className="h-full w-full bg-surface-500 rounded-container" src="https://picsum.photos/200/200?random=6" alt="" />
			</div>
		</section>
	);
}
