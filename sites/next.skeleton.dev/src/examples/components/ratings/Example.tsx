import React from 'react';
import { Rating } from '@skeletonlabs/skeleton-react';
import { Star } from 'lucide-react';

export const Page: React.FC<any> = () => {
	return (
		<Rating
			value={3}
			width="w-44"
			iconEmpty={<Star size={24} />}
			iconFull={<Star size={24} className="fill-surface-950-50" />}
		/>
	);
};
