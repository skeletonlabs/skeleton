import { useState } from 'react';
import { TagsInput } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [flavors, setFlavors] = useState(['Vanilla', 'Chocolate', 'Strawberry']);

	return (
		<section className="w-full space-y-4">
			<p>Not Editable Tags</p>
			<TagsInput value={flavors} onValueChange={(e) => setFlavors(e.value)} placeholder="Add Tag..." editable={false} />
			<p>Add Tag on Paste</p>
			<TagsInput value={flavors} onValueChange={(e) => setFlavors(e.value)} placeholder="Add Tag..." addOnPaste />
		</section>
	);
};
