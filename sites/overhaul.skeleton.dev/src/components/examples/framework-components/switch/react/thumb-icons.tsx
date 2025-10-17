import { Switch } from '@skeletonlabs/skeleton-react';
import { MoonIcon, SunIcon } from 'lucide-react';

export default function ThumbIcons() {
	return (
		<Switch>
			<Switch.HiddenInput />
			<Switch.Control>
				<Switch.Thumb>
					<Switch.Context>
						{(switch_) => (switch_.checked ? <SunIcon className="size-3" /> : <MoonIcon className="size-3" />)}
					</Switch.Context>
				</Switch.Thumb>
			</Switch.Control>
			<Switch.Label>Label</Switch.Label>
		</Switch>
	);
}
