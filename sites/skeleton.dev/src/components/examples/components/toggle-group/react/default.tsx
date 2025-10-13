import { ToggleGroup } from '@skeletonlabs/skeleton-react';

export default function Example() {
	return (
		<ToggleGroup defaultValue={['center']}>
			<ToggleGroup.Item value="left">Left</ToggleGroup.Item>
			<ToggleGroup.Item value="center">Center</ToggleGroup.Item>
			<ToggleGroup.Item value="right">Right</ToggleGroup.Item>
		</ToggleGroup>
	);
}
