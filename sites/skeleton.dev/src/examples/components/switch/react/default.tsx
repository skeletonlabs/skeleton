import { Switch } from '@skeletonlabs/skeleton-react';
import { useState } from 'react';

export default function Default() {
	const [checked, setChecked] = useState(false);

	return (
		<Switch checked={checked} onCheckedChange={(e) => setChecked(e.checked)}>
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
			<Switch.Label>Label</Switch.Label>
			<Switch.HiddenInput />
		</Switch>
	);
}
