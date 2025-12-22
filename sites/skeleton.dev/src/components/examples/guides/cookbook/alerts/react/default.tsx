export default function Default() {
	return (
		<div className="w-full card preset-outlined-surface-950-50 grid grid-cols-1 items-center gap-4 p-4 lg:grid-cols-[1fr_auto]">
			<div>
				<p className="font-bold">Hey, heads up!</p>
				<p className="text-xs opacity-60">Something of moderate importance has occurred.</p>
			</div>
			<div className="flex gap-1">
				<button className="btn preset-tonal hover:preset-filled">Dismiss</button>
			</div>
		</div>
	);
}
