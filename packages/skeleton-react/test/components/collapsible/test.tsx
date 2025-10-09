import { Collapsible } from '@/index';

export default function Test() {
	return (
		<Collapsible data-testid="root">
			<Collapsible.Trigger data-testid="trigger" />
			<Collapsible.Content data-testid="content" />
		</Collapsible>
	);
}
