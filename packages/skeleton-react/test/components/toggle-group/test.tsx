import { ToggleGroup } from '@/index.js';

export default function Test() {
	return (
		<ToggleGroup data-testid="root">
			<ToggleGroup.Item value="item" data-testid="item" />
		</ToggleGroup>
	);
}
