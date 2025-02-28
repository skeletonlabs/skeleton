import { useState } from 'react';

import { Rating } from '@skeletonlabs/skeleton-react';
import { Bone, Skull } from 'lucide-react';

export const Page = () => {
	const [starValue, setStarValue] = useState(2);
	return (
		<Rating
			value={starValue}
			onValueChange={(e) => setStarValue(e.value)}
			iconEmpty={<Bone size={24} />}
			iconFull={<Skull size={24} />}
		></Rating>
	);
};
