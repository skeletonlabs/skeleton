import { MoonIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

type Mode = 'dark' | 'light';

const FALLBACK = 'light' as const;

function getMode() {
	if (typeof window === 'undefined') return FALLBACK;
	const mode = localStorage.getItem('mode') as Mode | null;
	return mode ? mode : FALLBACK;
}

export default function LightSwitch() {
	const [mode, setMode] = useState<Mode>(getMode());

	useEffect(() => {
		document.documentElement.setAttribute('data-mode', mode);
		localStorage.setItem('mode', mode);
	}, [mode]);

	return (
		<button
			className="btn-icon hover:preset-tonal"
			onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
			role="switch"
			aria-checked={mode === 'dark'}
			title="Toggle dark mode."
			aria-label="Toggle dark mode."
		>
			{mode === 'dark' ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
		</button>
	);
}
