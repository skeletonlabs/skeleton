import React from 'react';
import { Rating } from '@skeletonlabs/skeleton-react';
import { Star } from 'lucide-react';

export const Page: React.FC<any> = () => {
	return (
		<Rating value={3} width="w-44">
			<Rating.IconEmpty>
				<Star size={24} />
			</Rating.IconEmpty>
			<Rating.IconFull>
				<Star size={24} fill="white" />
			</Rating.IconFull>
		</Rating>
	);
};
