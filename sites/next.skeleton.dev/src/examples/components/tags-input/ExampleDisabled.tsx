import { TagsInput } from "@skeletonlabs/skeleton-react";
import { useState } from "react";

export const Page: React.FC = () => {
	const [flavors, setFlavors] = useState([
		"Vanilla",
		"Chocolate",
		"Strawberry",
	]);

	return (
		<TagsInput
			name="example"
			value={flavors}
			onValueChange={(e) => setFlavors(e.value)}
			placeholder="Add Tag..."
			disabled
		/>
	);
};
