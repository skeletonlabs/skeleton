import { useState } from 'react';

export default function Select() {
	const colors = ['red', 'blue', 'green'];
	const [color, setColor] = useState(colors[0]);

	return (
		<div className="flex gap-2">
			{/* Loop through the available colors */}
			{color &&
				colors.map((c) => (
					// On selection, set the color state, dynamically update classes
					<button className={`chip capitalize ${color === c ? 'preset-filled' : 'preset-tonal'}`} onClick={() => setColor(c)} key={c}>
						<span>{c}</span>
					</button>
				))}
		</div>
	);
}
