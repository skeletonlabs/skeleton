import React, { useState } from 'react';

export const Page: React.FC = () => {
	// The default color state
	let [color, setColor] = useState('red');
	// The available set of colors
	const colors = ['red', 'blue', 'green'];

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
};
