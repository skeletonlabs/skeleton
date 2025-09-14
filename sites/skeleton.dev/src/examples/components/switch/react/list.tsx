import { Switch } from '@skeletonlabs/skeleton-react';

export default function List() {
	return (
		<div className="grid gap-2 w-full">
			{['Option 1', 'Option 2', 'Option 3'].map((label, i) => (
				<div key={label}>
					<Switch className="flex justify-between p-2">
						<Switch.Label>{label}</Switch.Label>
						<Switch.Control>
							<Switch.Thumb />
						</Switch.Control>
						<Switch.HiddenInput />
					</Switch>
					{i < 2 && <hr className="hr" />}
				</div>
			))}
		</div>
	);
}
