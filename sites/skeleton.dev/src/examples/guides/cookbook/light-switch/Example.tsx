'use client';

import { Switch } from '@skeletonlabs/skeleton-react';
import { useEffect, useState } from 'react';
import Script from 'next/script';

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
			<Script
				strategy="beforeInteractive"
				dangerouslySetInnerHTML={{
					__html: `
		const mode = localStorage.getItem('mode') || 'light';
		document.documentElement.setAttribute('data-mode', mode);
          `
				}}
			/>
			<Switch checked={checked} onCheckedChange={onCheckedChange} />
		</>
	);
}
