import { useState } from 'react';
import { Rating } from '@skeletonlabs/skeleton-react';

export const Page = () => {
	const [starValue, setStarValue] = useState(2);
	return <Rating count={3} value={starValue} onValueChange={setStarValue}></Rating>;
};
