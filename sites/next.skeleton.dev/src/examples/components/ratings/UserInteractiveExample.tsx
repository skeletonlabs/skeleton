import React, { useState } from 'react';
import { Rating } from '@skeletonlabs/skeleton-react';
import { Star } from 'lucide-react';

export const Page: React.FC<any> = () => {
    const [value, setValue] = useState(3);
	return (
		<Rating value={value} onValueChange={setValue} width='w-44' interactive>
            <Rating.IconEmpty>
                <Star size={24} />
            </Rating.IconEmpty>
            <Rating.IconFull>
                <Star size={24} fill="white" />
            </Rating.IconFull>
        </Rating>
	);
};
