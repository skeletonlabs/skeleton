<script lang="ts">
	import { Menu } from '@/index.js';
</script>

<Menu>
	<Menu.Trigger data-testid="trigger">
		<Menu.Indicator data-testid="indicator" />
	</Menu.Trigger>
	<Menu.ContextTrigger data-testid="context-trigger">
		<Menu.Indicator data-testid="indicator" />
	</Menu.ContextTrigger>
	<Menu.Positioner data-testid="positioner">
		<Menu.Content data-testid="content">
			<Menu.ItemGroup data-testid="item-group">
				<Menu.ItemGroupLabel data-testid="item-group-label" />
				<Menu.Item value="item" data-testid="item">
					<Menu.ItemText data-testid="item-text" />
					<Menu.ItemIndicator data-testid="item-indicator" />
				</Menu.Item>
				<Menu>
					<Menu.TriggerItem data-testid="trigger-item">
						<Menu.ItemText data-testid="item-text" />
						<Menu.ItemIndicator data-testid="item-indicator" />
					</Menu.TriggerItem>
				</Menu>
			</Menu.ItemGroup>
			<Menu.Separator data-testid="separator" />
			<Menu.Arrow data-testid="arrow">
				<Menu.ArrowTip data-testid="arrow-tip" />
			</Menu.Arrow>
		</Menu.Content>
	</Menu.Positioner>
</Menu>
