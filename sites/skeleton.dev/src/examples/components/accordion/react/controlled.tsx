import { Accordion } from '@skeletonlabs/skeleton-react';
import { useState } from 'react';

export default function Controlled() {
	const [value, setValue] = useState(['item-1']);

	return (
		<Accordion value={value} onValueChange={(e) => setValue(e.value)}>
			<Accordion.Item value="item-1">
				<Accordion.ItemHeading>
					<Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
				</Accordion.ItemHeading>
				<Accordion.ItemContent>Content for Item 1</Accordion.ItemContent>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-2">
				<Accordion.ItemHeading>
					<Accordion.ItemTrigger>Item 2</Accordion.ItemTrigger>
				</Accordion.ItemHeading>
				<Accordion.ItemContent>Content for Item 2</Accordion.ItemContent>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-3">
				<Accordion.ItemHeading>
					<Accordion.ItemTrigger>Item 3</Accordion.ItemTrigger>
				</Accordion.ItemHeading>
				<Accordion.ItemContent>Content for Item 3</Accordion.ItemContent>
			</Accordion.Item>
		</Accordion>
	);
}
