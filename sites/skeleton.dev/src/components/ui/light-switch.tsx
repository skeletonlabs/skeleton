import { MoonIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

type Mode = 'dark' | 'light';

const FALLBACK = 'light' as const;

export default function LightSwitch() {
	const [mode, setMode] = useState<Mode | null>(null);

	useEffect(() => {
		const stored = localStorage.getItem('mode') as Mode | null;
		setMode(stored ?? FALLBACK);
	}, []);

	useEffect(() => {
		if (!mode) {
			return;
		}
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
			{mode && (mode === 'dark' ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />)}
		</button>
	);
}
