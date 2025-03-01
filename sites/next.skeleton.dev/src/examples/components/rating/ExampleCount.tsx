import { Rating } from "@skeletonlabs/skeleton-react";
import { useState } from "react";

export const Page = () => {
	const [starValue, setStarValue] = useState(2);
	return (
		<Rating
			count={3}
			value={starValue}
			onValueChange={(e) => setStarValue(e.value)}
		/>
	);
};
