import { Switch } from '@skeletonlabs/skeleton-react';
import { Sun, Moon } from 'lucide-react';

export default function () {
	return (
		<Switch>
			<Switch.HiddenInput />
			<Switch.Control>
				<Switch.Thumb>
					<Switch.Context>{(ctx) => (ctx.api.checked ? <Sun size={12} /> : <Moon size={12} />)}</Switch.Context>
				</Switch.Thumb>
			</Switch.Control>
			<Switch.Label>Label</Switch.Label>
		</Switch>
	);
}
