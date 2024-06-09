import React from 'react';
import { Rating } from '@skeletonlabs/skeleton-react';
import { Bone, Skull } from 'lucide-react';

export const Page: React.FC<any> = () => {
	return (
		<Rating value={3} max={6} width="w-44">
			<Rating.IconEmpty>
				<Bone size={24} />
			</Rating.IconEmpty>
			<Rating.IconFull>
				<Skull size={24} />
			</Rating.IconFull>
		</Rating>
	);
};
