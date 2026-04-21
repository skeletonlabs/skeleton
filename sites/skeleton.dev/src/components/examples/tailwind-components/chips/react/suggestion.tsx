export default function Suggestion() {
	return (
		<div className="card preset-filled-surface-100-900 w-full max-w-md p-4">
			<div className="flex justify-center items-center gap-2">
				<span className="text-sm opacity-60">Rating</span>
				{/* --- */}
				<button className="chip preset-outlined-surface-400-600">
					<span>Bad</span>
				</button>
				<button className="chip preset-outlined-surface-400-600">
					<span>Good</span>
				</button>
				<button className="chip preset-outlined-surface-400-600">
					<span>Awesome</span>
				</button>
				{/* --- */}
			</div>
		</div>
	);
}
