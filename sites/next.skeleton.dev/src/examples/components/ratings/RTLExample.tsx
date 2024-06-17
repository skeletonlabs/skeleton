import React, { useState } from 'react';
import { Rating } from '@skeletonlabs/skeleton-react';
import { Star } from 'lucide-react';

export const Page: React.FC<any> = () => {
	const [value, setValue] = useState(2.5);
	return (
		<div dir="rtl">
			<Rating
				value={value}
				onValueChange={setValue}
				step={2}
				width="w-44"
				interactive
				iconEmpty={<Star size={24} />}
				iconFull={<Star size={24} className="fill-surface-950-50" />}
			/>
		</div>
	);
};
