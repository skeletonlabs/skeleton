import { Rating } from '@skeletonlabs/skeleton-react';
import { useState } from 'react';

export const Page = () => {
	// You may optionally implement useState
	const [starValue, setStarValue] = useState(2);

	return <Rating value={starValue} onValueChange={setStarValue} />;
};
