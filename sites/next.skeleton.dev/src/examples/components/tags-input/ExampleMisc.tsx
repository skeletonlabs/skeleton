import { useState } from 'react';
import { TagsInput } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [flavors, setFlavors] = useState(['Vanilla', 'Chocolate', 'Stawberry']);

	return (
		<section className="w-full space-y-4">
			<p>Not Editable Tags</p>
			<TagsInput value={flavors} onValueChange={setFlavors} placeholder="Add Tag..." editable={false} />
			<p>Add Tag on Paste</p>
			<TagsInput value={flavors} onValueChange={setFlavors} placeholder="Add Tag..." addOnPaste />
		</section>
	);
};
