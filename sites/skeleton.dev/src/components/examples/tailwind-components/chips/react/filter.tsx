import { useState } from 'react';
import { CheckIcon } from 'lucide-react';

export default function Filter() {
	const colors = ['red', 'green', 'blue'];
	const [color, setColor] = useState(colors[0]);

	return (
		<div className="card preset-filled-surface-100-900 w-full max-w-md p-4">
			<div className="flex justify-center items-center gap-2">
				<span className="text-sm opacity-60">Favorite Color</span>
				{/* --- */}
				{colors.map((c) => (
					<button
						key={c}
						className={`chip capitalize preset-outlined-surface-400-600 ${color === c ? 'preset-tonal-primary' : ''}`}
						onClick={() => setColor(c)}
					>
						{color === c && <CheckIcon size={14} />}
						<span>{c}</span>
					</button>
				))}
				{/* --- */}
			</div>
		</div>
	);
}
