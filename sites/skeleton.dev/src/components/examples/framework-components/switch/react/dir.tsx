import { Switch } from '@skeletonlabs/skeleton-react';

export default function Dir() {
	return (
		<Switch dir="rtl">
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
			<Switch.Label>Label</Switch.Label>
			<Switch.HiddenInput />
		</Switch>
	);
}
