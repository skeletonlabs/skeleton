export default function Columns() {
	return (
		// https://tailwindcss.com/docs/grid-template-columns#arbitrary-values
		// - auto: size to content widths
		// - 1fr: fill available space evenly
		// - {amount}: set fixed size (ex: 320px)
		<div className="w-full grid grid-cols-[auto_1fr_auto] gap-1">
			<div className="bg-surface-100-900 p-4">(nav)</div>
			<div className="bg-surface-100-900 p-4">(feed)</div>
			<div className="bg-surface-100-900 p-4">(online)</div>
		</div>
	);
}
