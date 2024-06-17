import React, { useState } from 'react';
import { Rating } from '@skeletonlabs/skeleton-react';
import { Star } from 'lucide-react';

export const Page: React.FC<any> = () => {
	const [value, setValue] = useState(3);
	return (
		<Rating
			value={value}
			onValueChange={setValue}
			width="w-44"
			interactive
			iconEmpty={<Star size={24} />}
			iconFull={<Star size={24} className="fill-surface-950-50" />}
		/>
	);
};
