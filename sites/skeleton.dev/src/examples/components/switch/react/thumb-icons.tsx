import { Switch } from '@skeletonlabs/skeleton-react';
import { Moon, Sun } from 'lucide-react';

export default function ThumbIcons() {
	return (
		<Switch>
			<Switch.HiddenInput />
			<Switch.Control>
				<Switch.Thumb>
					<Switch.Context>
						{(switch_) =>
							switch_.checked ? <Sun className="size-3 stroke-surface-50-950" /> : <Moon className="size-3 stroke-surface-950-50" />
						}
					</Switch.Context>
				</Switch.Thumb>
			</Switch.Control>
			<Switch.Label>Label</Switch.Label>
		</Switch>
	);
}
