'use client';

import { Avatar } from '@skeletonlabs/skeleton-react/composed';

export default function () {
	return (
		<Avatar>
			<Avatar.Image src="https://i.pravatar.cc/150?img=48" />
			<Avatar.Fallback>SK</Avatar.Fallback>
		</Avatar>
	);
}
