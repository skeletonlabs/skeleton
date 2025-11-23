import { useState } from 'react';

export default function ButtonGroup() {
	const [active, setActive] = useState('january');
	const months = ['january', 'february', 'march'];
	return (
		<nav className="btn-group preset-outlined-surface-200-800 flex-col p-2 md:flex-row">
			{months.map((month, i) => (
				<button key={i} type="button" className={`btn capitalize ${active == month && 'preset-filled'}`} onClick={() => setActive(month)}>
					{month}
				</button>
			))}
		</nav>
	);
}
