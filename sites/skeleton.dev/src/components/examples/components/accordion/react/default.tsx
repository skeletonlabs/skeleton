import { Accordion } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<Accordion>
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
