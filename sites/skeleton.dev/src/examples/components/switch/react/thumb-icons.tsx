import { Switch } from '@skeletonlabs/skeleton-react';
import { Sun, Moon } from 'lucide-react';

export default function () {
	return (
		<Switch>
			<Switch.HiddenInput />
			<Switch.Control>
				<Switch.Thumb>
					<Switch.Context>
						{(ctx) =>
							ctx.api.checked ? <Sun className="size-3 stroke-surface-50-950" /> : <Moon className="size-3 stroke-surface-950-50" />
						}
					</Switch.Context>
				</Switch.Thumb>
			</Switch.Control>
			<Switch.Label>Label</Switch.Label>
		</Switch>
	);
}
