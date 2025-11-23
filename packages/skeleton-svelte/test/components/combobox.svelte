<script lang="ts">
	import { Combobox } from '../../../src/index.js';
</script>

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
					<Combobox.ItemText data-testid="item-text">Item</Combobox.ItemText>
					<Combobox.ItemIndicator data-testid="item-indicator" />
				</Combobox.Item>
			</Combobox.ItemGroup>
		</Combobox.Content>
	</Combobox.Positioner>
</Combobox>
