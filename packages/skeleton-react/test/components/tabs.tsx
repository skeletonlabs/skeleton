import { Tabs } from '../../src/index.js';

export default function Test() {
	return (
		<Tabs defaultValue="tab-1" data-testid="root">
			<Tabs.List data-testid="list">
				<Tabs.Trigger value="tab" data-testid="trigger" />
				<Tabs.Indicator data-testid="indicator" />
			</Tabs.List>
			<Tabs.Content value="tab" data-testid="content" />
		</Tabs>
	);
}
