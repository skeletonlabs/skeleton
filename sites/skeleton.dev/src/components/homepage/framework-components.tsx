import { Switch } from '@skeletonlabs/skeleton-react';
import { ChevronRightIcon } from 'lucide-react';

export default function FrameworkComponents() {
	return (
		<div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
			<div className="space-y-10">
				<div className="text-center space-y-2">
					<h2 className="h2">Tailwind Components</h2>
					<p className="text-balance opacity-60">
						Common visual interfaces, such as cards, buttons, and tables. Using semantic HTML elements and Tailwind utility classes.
					</p>
				</div>
				<div className="card bg-noise preset-filled-secondary-500 aspect-video shadow-xl flex justify-center items-center">
					<a href="/docs/tailwind/buttons" target="_blank" className="btn preset-filled scale-150 shadow-xl">
						<span>Button</span>
						<ChevronRightIcon className="size-4" />
					</a>
				</div>
			</div>
			<div className="space-y-10">
				<div className="text-center space-y-2">
					<h2 className="h2">Functional Components</h2>
					<p className="text-balance opacity-60">
						Interactive components for supported frameworks. Handle state and logic for user interaction and form elements.
					</p>
				</div>
				<div className="card bg-noise preset-filled-secondary-500 aspect-video shadow-xl flex justify-center items-center">
					<Switch className="scale-[2.0] shadow-xl">
						<Switch.Control className="data-[state=checked]:bg-surface-100">
							<Switch.Thumb />
						</Switch.Control>
						<Switch.HiddenInput />
					</Switch>
				</div>
			</div>
		</div>
	);
}
