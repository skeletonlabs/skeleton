import { useState } from 'react';
import { TagsInput } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [flavors, setFlavors] = useState(['Vanilla', 'Chocolate', 'Strawberry']);

	return <TagsInput name="example" value={flavors} onValueChange={(e) => setFlavors(e.value)} placeholder="Add Tag..." disabled />;
};
