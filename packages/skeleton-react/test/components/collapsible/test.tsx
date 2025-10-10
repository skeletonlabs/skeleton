import { Collapsible } from '@/index';

export default function Test() {
	return (
		<Collapsible data-testid="root">
			<Collapsible.Trigger data-testid="trigger">
				<Collapsible.Indicator data-testid="indicator" />
			</Collapsible.Trigger>
			<Collapsible.Content data-testid="content" />
		</Collapsible>
	);
}
