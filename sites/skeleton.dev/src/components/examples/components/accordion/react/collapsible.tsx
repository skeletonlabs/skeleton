import { Accordion } from '@skeletonlabs/skeleton-react';

export default function Collapsible() {
	return (
		<Accordion collapsible>
			<Accordion.Item value="item-1">
				<h3>
					<Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
				</h3>
				<Accordion.ItemContent>Content for Item 1</Accordion.ItemContent>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-2">
				<h3>
					<Accordion.ItemTrigger>Item 2</Accordion.ItemTrigger>
				</h3>
				<Accordion.ItemContent>Content for Item 2</Accordion.ItemContent>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-3">
				<h3>
					<Accordion.ItemTrigger>Item 3</Accordion.ItemTrigger>
				</h3>
				<Accordion.ItemContent>Content for Item 3</Accordion.ItemContent>
			</Accordion.Item>
		</Accordion>
	);
}
