'use client';

import { Switch } from '@skeletonlabs/skeleton-react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LightSwitch() {
	const [mode, setMode] = useState<'dark' | 'light' | null>(null);

	useEffect(() => {
		const mode = localStorage.getItem('mode') || 'light';
		setMode(mode === 'dark' ? 'dark' : 'light');
	}, []);

	const onCheckedChange = (event: { checked: boolean }) => {
		const mode = event.checked ? 'dark' : 'light';
		setMode(mode);
		document.documentElement.setAttribute('data-mode', mode);
		localStorage.setItem('mode', mode);
	};

	return (
		<>
			<script
				dangerouslySetInnerHTML={{
					__html: `
						const mode = localStorage.getItem('mode') || 'light';
						document.documentElement.setAttribute('data-mode', mode);
          			`,
				}}
			/>
			<Switch checked={mode === 'dark'} onCheckedChange={onCheckedChange}>
				<Switch.Control>
					<Switch.Thumb>
						<Switch.Context>
							{(switch_) =>
								switch_.checked ? (
									<SunIcon className="size-4 stroke-surface-50-950" />
								) : (
									<MoonIcon className="size-4 stroke-surface-950-50" />
								)
							}
						</Switch.Context>
					</Switch.Thumb>
				</Switch.Control>
				<Switch.HiddenInput />
			</Switch>
		</>
	);
}
