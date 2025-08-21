import { Accordion } from '../../../src/composed/index.js';

export default function () {
	return (
		<Accordion data-testid="root">
			<Accordion.Item value="item" data-testid="item">
				<Accordion.Heading data-testid="heading">
					<Accordion.Trigger data-testid="trigger" />
					<Accordion.Content data-testid="content" />
				</Accordion.Heading>
			</Accordion.Item>
		</Accordion>
	);
}
