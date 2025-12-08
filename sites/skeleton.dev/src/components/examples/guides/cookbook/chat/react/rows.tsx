export default function Rows() {
	return (
		// https://tailwindcss.com/docs/grid-template-rows#arbitrary-values
		// - auto: size to content widths
		// - 1fr: fill available space evenly
		// - {amount}: set fixed size (ex: 320px)
		<div className="w-full grid grid-cols-2 gap-10">
			{/* Three Row Layout */}
			<div className="h-full grid grid-rows-[auto_1fr_auto] gap-1">
				<div className="bg-surface-100-900 p-4">(search)</div>
				<div className="bg-surface-100-900 p-4">(list)</div>
				<div className="bg-surface-100-900 p-4">(footer)</div>
			</div>
			{/* Two Row Layout */}
			<div className="h-full grid grid-rows-[1fr_auto] gap-1">
				{/* We've set a max height here to trigger the vertical overflow. */}
				{/* Removed max-h and space-y in your project. */}
				<div className="bg-surface-100-900 p-4 overflow-y-auto max-h-[128px] space-y-4">
					<p>(feed)</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolor ullam, qui et itaque quam distinctio dicta
						nostrum veritatis harum iure hic sequi aperiam, explicabo earum totam deserunt. Fugiat, temporibus.
					</p>
				</div>
				<div className="bg-surface-100-900 p-4">(prompt)</div>
			</div>
		</div>
	);
}
