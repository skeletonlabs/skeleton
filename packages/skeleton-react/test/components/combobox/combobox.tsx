import { Combobox } from '@/index';

export default function ComboboxTest() {
	return (
		<Combobox data-testid="root">
			<Combobox.Label data-testid="label" />
			<Combobox.Control data-testid="control">
				<Combobox.Input data-testid="input" />
				<Combobox.Trigger data-testid="trigger" />
			</Combobox.Control>
			<Combobox.Positioner data-testid="positioner">
				<Combobox.Content data-testid="content">
					<Combobox.ItemGroup data-testid="item-group">
						<Combobox.ItemGroupLabel data-testid="item-group-label" />
						<Combobox.Item item="item" data-testid="item">
							<Combobox.ItemText data-testid="item-text" />
							<Combobox.ItemIndicator data-testid="item-indicator" />
						</Combobox.Item>
					</Combobox.ItemGroup>
				</Combobox.Content>
			</Combobox.Positioner>
		</Combobox>
	);
}
