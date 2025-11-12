import { Menu } from '@/index.js';

export default function Test() {
	return (
		<Menu>
			<Menu.Trigger data-testid="trigger">Open Menu</Menu.Trigger>
			<Menu.Positioner data-testid="positioner">
				<Menu.Content data-testid="content">
					<Menu.Item value="item-1" data-testid="item">
						Item 1
					</Menu.Item>
					<Menu.Separator data-testid="separator" />
					<Menu.ItemGroup id="group-1" data-testid="item-group">
						<Menu.ItemGroupLabel htmlFor="group-1" data-testid="item-group-label">
							Group 1
						</Menu.ItemGroupLabel>
						<Menu.Item value="item-2">Item 2</Menu.Item>
					</Menu.ItemGroup>
					<Menu.Arrow data-testid="arrow">
						<Menu.ArrowTip data-testid="arrow-tip" />
					</Menu.Arrow>
				</Menu.Content>
			</Menu.Positioner>
		</Menu>
	);
}
