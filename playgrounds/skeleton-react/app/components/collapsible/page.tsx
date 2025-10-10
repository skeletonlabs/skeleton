'use client';

import { Collapsible } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<Collapsible>
			<Collapsible.Trigger>Toggle</Collapsible.Trigger>
			<Collapsible.Content>Content</Collapsible.Content>
		</Collapsible>
	);
}
