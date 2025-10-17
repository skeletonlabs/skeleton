import { Switch } from '@skeletonlabs/skeleton-react';

export default function Colors() {
	return (
		<Switch>
			<Switch.Control className="data-[state=checked]:preset-filled-success-500">
				<Switch.Thumb />
			</Switch.Control>
			<Switch.Label>Label</Switch.Label>
			<Switch.HiddenInput />
		</Switch>
	);
}
