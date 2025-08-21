import React from 'react';
import { Avatar } from '@skeletonlabs/skeleton-react';
import { Skull } from 'lucide-react';

export const Page: React.FC = () => {
	return (
		<div className="flex gap-4">
			<Avatar name="One">1</Avatar>
			<Avatar name="icon" background="preset-filled-primary-500">
				<Skull size={24} />
			</Avatar>
		</div>
	);
};
