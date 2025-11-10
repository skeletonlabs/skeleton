import { Collapsible } from '@skeletonlabs/skeleton-react';

export default function Disabled() {
	return (
		<Collapsible disabled>
			<Collapsible.Trigger className="btn preset-filled">Toggle</Collapsible.Trigger>
			<Collapsible.Content>Hidden!</Collapsible.Content>
		</Collapsible>
	);
}
