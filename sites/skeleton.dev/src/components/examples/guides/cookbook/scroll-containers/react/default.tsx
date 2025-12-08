export default function Default() {
	return (
		<div className="w-full">
			{/* Scroll Container */}
			<div className="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
				{/* Generate a array of 8 items; loop through each item */}
				{Array.from({ length: 8 }).map((_, i) => (
					// Each scrollable card element
					<div key={i} className="snap-start shrink-0 card preset-filled py-20 w-40 md:w-80 text-center">
						<span>{i + 1}</span>
					</div>
				))}
			</div>
		</div>
	);
}
