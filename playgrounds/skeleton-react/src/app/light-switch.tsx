'use client';

import { Switch } from '@skeletonlabs/skeleton-react';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LightSwitch() {
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		const mode = localStorage.getItem('mode') || 'light';
		setChecked(mode === 'dark');
	}, []);

	const onCheckedChange = (event: { checked: boolean }) => {
		const mode = event.checked ? 'dark' : 'light';
		document.documentElement.setAttribute('data-mode', mode);
		localStorage.setItem('mode', mode);
		setChecked(event.checked);
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
			<Switch checked={checked} onCheckedChange={onCheckedChange}>
				<Switch.Control>
					<Switch.Thumb>
						<Switch.Context>
							{(switch_) =>
								switch_.checked ? <Sun className="size-4 stroke-surface-50-950" /> : <Moon className="size-4 stroke-surface-950-50" />
							}
						</Switch.Context>
					</Switch.Thumb>
				</Switch.Control>
				<Switch.HiddenInput />
			</Switch>
		</>
	);
}
