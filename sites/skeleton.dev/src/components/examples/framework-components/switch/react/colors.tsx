import { Switch } from '@skeletonlabs/skeleton-react';

export default function Colors() {
	return (
		<Switch>
			<Switch.Control className="preset-filled-secondary-50-950 data-[state=checked]:preset-filled-secondary-500">
				<Switch.Thumb />
			</Switch.Control>
			<Switch.Label>Label</Switch.Label>
			<Switch.HiddenInput />
		</Switch>
	);
}
