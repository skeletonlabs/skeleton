import React from 'react';
import { Avatar } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	return (
		<div className="flex gap-4">
			<Avatar name="Jane Michelle Doe"></Avatar>
			<Avatar name="Jane Michelle Doe" initials={[0, -1]}></Avatar>
			<Avatar name="Jane Michelle Doe" initials={[0, 1, 2]}></Avatar>
		</div>
	);
};
