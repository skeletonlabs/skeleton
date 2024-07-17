import { Listbox } from '@skeletonlabs/skeleton-svelte';
import { useState } from 'react';

const Example = () => {
	const fruits = ['Apple', 'Banana', 'Orange', 'Watermelon'];
	const [selectedFruits, setSelectedFruits] = useState(['Apple', 'Banana']);

	return (
		<Listbox name="fruits" value={selectedFruits} onChange={setSelectedFruits}>
			{fruits.map((fruit) => (
				<Listbox.Item key={fruit} id={fruit} value={fruit}>
					{fruit}
				</Listbox.Item>
			))}
		</Listbox>
	);
};

export default Example;
