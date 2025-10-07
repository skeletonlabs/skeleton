import { Accordion } from '@skeletonlabs/skeleton-react';
import { useState } from 'react';

export default function Controlled() {
	const [value, setValue] = useState(['1']);

	return (
		<Accordion value={value} onValueChange={(details) => setValue(details.value)}>
			{['1', '2', '3'].map((item) => (
				<Accordion.Item key={item} value={item}>
					<h3>
						<Accordion.ItemTrigger>Item {item}</Accordion.ItemTrigger>
					</h3>
					<Accordion.ItemContent>Content for item {item}</Accordion.ItemContent>
				</Accordion.Item>
			))}
		</Accordion>
	);
}
