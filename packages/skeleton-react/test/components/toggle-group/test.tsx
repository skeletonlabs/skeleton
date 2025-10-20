import { ToggleGroup } from '@/index';

export default function Test() {
	return (
		<ToggleGroup data-testid="root">
			<ToggleGroup.Item value="item" data-testid="item" />
		</ToggleGroup>
	);
}
