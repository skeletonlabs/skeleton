import { useState } from 'react';
import { TagsInput } from '@skeletonlabs/skeleton-react';
import { XCircle as IconDelete } from 'lucide-react';

export const Page: React.FC = () => {
	const [flavors, setFlavors] = useState(['Vanilla', 'Chocolate', 'Strawberry']);

	return (
		<TagsInput
			value={flavors}
			onValueChange={(e) => setFlavors(e.value)}
			placeholder="Add Tag..."
			buttonDelete={<IconDelete className="size-4" />}
		/>
	);
};
