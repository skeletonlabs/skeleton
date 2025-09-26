import { Accordion } from '@/index';

export default function Test() {
	return (
		<Accordion data-testid="root">
			<Accordion.Item value="item" data-testid="item">
				<Accordion.ItemHeading data-testid="item-heading">
					<Accordion.ItemTrigger data-testid="item-trigger" />
					<Accordion.ItemIndicator data-testid="item-indicator" />
					<Accordion.ItemContent data-testid="item-content" />
				</Accordion.ItemHeading>
			</Accordion.Item>
		</Accordion>
	);
}
