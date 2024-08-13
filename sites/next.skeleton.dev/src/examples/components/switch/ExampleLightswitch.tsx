import React from 'react';
import { Switch } from '@skeletonlabs/skeleton-react';
import { Moon as IconMoon, Sun as IconSun } from 'lucide-react';

export const Page: React.FC = () => {
	// Bind to the checked state
	const [mode, setMode] = React.useState(false);

	// Handle the change in state when toggled.
	function handleModeChange(newValue: boolean) {
		// Update the bound state
		setMode(newValue);

		// NOTE: implementation may differ per Tailwind config and framework:
		// https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
		console.log({ mode });
	}

	return (
		<Switch
			name="mode"
			controlActive="bg-surface-200"
			checked={mode}
			onCheckedChange={handleModeChange}
			inactiveChild={<IconMoon size="14" />}
			activeChild={<IconSun size="14" />}
		/>
	);
};
