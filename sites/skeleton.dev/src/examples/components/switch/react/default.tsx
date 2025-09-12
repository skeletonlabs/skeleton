import { Switch } from '@skeletonlabs/skeleton-react';

export default function () {
	return (
		<Switch>
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
			<Switch.Label>Label</Switch.Label>
			<Switch.HiddenInput />
		</Switch>
	);
}
