import { useState } from 'react';

export default function Input() {
	const [value, setValue] = useState('Hello Skeleton');

	async function handleCopy() {
		await navigator.clipboard.writeText(value);
		alert(`Copied "${value}" to clipboard!`);
	}

	return (
		<div className="flex items-center gap-4">
			<input type="text" className="input" value={value} onChange={(e) => setValue(e.target.value)} />
			<button className="btn preset-filled" onClick={handleCopy}>
				Copy
			</button>
		</div>
	);
}
