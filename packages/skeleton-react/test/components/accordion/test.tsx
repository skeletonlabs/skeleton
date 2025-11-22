import { Accordion } from '../../../src/index.js';

export default function Test() {
	return (
		<Accordion data-testid="root">
			<Accordion.Item value="item" data-testid="item">
				<Accordion.ItemTrigger data-testid="item-trigger" />
				<Accordion.ItemIndicator data-testid="item-indicator" />
				<Accordion.ItemContent data-testid="item-content" />
			</Accordion.Item>
		</Accordion>
	);
}
