export default function Quad() {
	return (
		<section className="grid grid-cols-2 gap-4">
			{/* Row */}
			<img className="h-64 w-64 bg-surface-500 rounded-container" src="https://picsum.photos/256/256?random=1" alt="" />
			<img className="h-64 w-64 bg-surface-500 rounded-container" src="https://picsum.photos/256/256?random=2" alt="" />
			{/* Row */}
			<img className="h-64 w-64 bg-surface-500 rounded-container" src="https://picsum.photos/256/256?random=3" alt="" />
			<img className="h-64 w-64 bg-surface-500 rounded-container" src="https://picsum.photos/256/256?random=4" alt="" />
		</section>
	);
}
