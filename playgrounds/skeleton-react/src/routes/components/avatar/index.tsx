'use client';

import { Avatar } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/components/avatar/')({
	component: Page,
});

function Page() {
	return (
		<Avatar>
			<Avatar.Image src="https://picsum.photos/100/100" />
			<Avatar.Fallback>SK</Avatar.Fallback>
		</Avatar>
	);
}
