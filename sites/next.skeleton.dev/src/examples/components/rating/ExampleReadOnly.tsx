import { useState } from 'react';
import { Rating } from '@skeletonlabs/skeleton-react';

export const Page = () => {
	const [starValue, setStarValue] = useState(2);
	return <Rating value={starValue} onValueChange={setStarValue} readOnly></Rating>;
};
