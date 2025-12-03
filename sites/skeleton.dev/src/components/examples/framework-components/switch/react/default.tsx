import { Switch } from '@skeletonlabs/skeleton-react';
import { useState } from 'react';

export default function Default() {
	const [checked, setChecked] = useState(false);

	return (
		<div className="flex flex-col items-center gap-4">
			<Switch checked={checked} onCheckedChange={(details) => setChecked(details.checked)}>
				<Switch.Control>
					<Switch.Thumb />
				</Switch.Control>
				<Switch.Label>Label</Switch.Label>
				<Switch.HiddenInput />
			</Switch>
			<p>
				<span className="opacity-60">Checked: </span>
				<code className="code">{checked}</code>
			</p>
		</div>
	);
}
