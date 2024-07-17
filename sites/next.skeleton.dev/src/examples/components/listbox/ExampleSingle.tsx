import { Listbox } from '@skeletonlabs/skeleton-svelte';
import { useState } from 'react';

const Example = () => {
	const fruits = ['Apple', 'Banana', 'Orange', 'Watermelon'];
	const [selectedFruit, setSelectedFruit] = useState('Apple');

	return (
		<Listbox name="fruit" value={selectedFruit} onChange={setSelectedFruit}>
			{fruits.map((fruit) => (
				<Listbox.Item key={fruit} id={fruit} value={fruit}>
					{fruit}
				</Listbox.Item>
			))}
		</Listbox>
	);
};

export default Example;
