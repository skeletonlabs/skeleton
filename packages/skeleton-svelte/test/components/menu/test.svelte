<script lang="ts">
	import { Menu } from '@/index.js';
</script>

<Menu>
	<Menu.Trigger data-testid="trigger" />
	<Menu.Positioner data-testid="positioner">
		<Menu.Content data-testid="content">
			<Menu.ItemGroup id="group" data-testid="item-group">
				<Menu.ItemGroupLabel htmlFor="group" data-testid="item-group-label" />
				<Menu.Item value="item" data-testid="item" />
			</Menu.ItemGroup>
			<Menu.Separator data-testid="separator" />
			<Menu.Arrow data-testid="arrow">
				<Menu.ArrowTip data-testid="arrow-tip" />
			</Menu.Arrow>
		</Menu.Content>
	</Menu.Positioner>
</Menu>
