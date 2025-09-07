import { Combobox } from '@skeletonlabs/skeleton-react';

export default function () {
	return (
		<Combobox data-testid="root">
			<Combobox.Label data-testid="label" />
			<Combobox.Control data-testid="control">
				<Combobox.Input data-testid="input" />
				<Combobox.Trigger data-testid="trigger" />
			</Combobox.Control>
			<Combobox.Positioner data-testid="positioner">
				<Combobox.Content data-testid="content">
					<Combobox.Item item="item-1" data-testid="item" />
				</Combobox.Content>
			</Combobox.Positioner>
		</Combobox>
	);
}
