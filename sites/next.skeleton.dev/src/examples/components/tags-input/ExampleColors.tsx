import { useState } from 'react';
import { TagsInput } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [flavors, setFlavors] = useState(['Vanilla', 'Chocolate', 'Strawberry']);

	return (
		<section className="w-full space-y-4">
			<TagsInput
				value={flavors}
				onValueChange={(e) => setFlavors(e.value)}
				placeholder="Add Tag..."
				tagBackground="preset-filled-primary-500"
			/>
			<TagsInput
				value={flavors}
				onValueChange={(e) => setFlavors(e.value)}
				placeholder="Add Tag..."
				tagBackground="preset-filled-secondary-500"
			/>
			<TagsInput
				value={flavors}
				onValueChange={(e) => setFlavors(e.value)}
				placeholder="Add Tag..."
				tagBackground="preset-filled-tertiary-500"
			/>
		</section>
	);
};
