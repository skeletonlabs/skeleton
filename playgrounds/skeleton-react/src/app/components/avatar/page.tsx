'use client';

import { Avatar } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<Avatar>
			<Avatar.Image src="https://picsum.photos/100/100" />
			<Avatar.Fallback>SK</Avatar.Fallback>
		</Avatar>
	);
}
