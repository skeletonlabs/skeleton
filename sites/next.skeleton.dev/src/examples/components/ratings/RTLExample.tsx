import React, { useState } from 'react';
import { Rating } from '@skeletonlabs/skeleton-react';
import { Star } from 'lucide-react';

export const Page: React.FC<any> = () => {
	const [value, setValue] = useState(2.5);
	return (
		<div dir="rtl">
			<Rating value={value} onValueChange={setValue} step={2} width="w-44" interactive>
				<Rating.IconEmpty>
					<Star size={24} />
				</Rating.IconEmpty>
				<Rating.IconFull>
					<Star size={24} fill="white" />
				</Rating.IconFull>
			</Rating>
		</div>
	);
};
