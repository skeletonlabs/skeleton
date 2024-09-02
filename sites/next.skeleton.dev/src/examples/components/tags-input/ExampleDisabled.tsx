import { useState } from 'react';
import { TagsInput } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [flavors, setFlavors] = useState(['Vanilla', 'Chocolate', 'Stawberry']);

	return <TagsInput name="example" value={flavors} onValueChange={setFlavors} placeholder="Add Tag..." disabled />;
};
