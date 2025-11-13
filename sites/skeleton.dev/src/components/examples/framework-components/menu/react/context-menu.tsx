import { Menu, Portal } from '@skeletonlabs/skeleton-react';

export default function ContextMenu() {
	return (
		<Menu>
			<Menu.ContextTrigger>Right-click here</Menu.ContextTrigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						<Menu.Item value="cut">
							<Menu.ItemText>Cut</Menu.ItemText>
						</Menu.Item>
						<Menu.Item value="copy">
							<Menu.ItemText>Copy</Menu.ItemText>
						</Menu.Item>
						<Menu.Item value="paste">
							<Menu.ItemText>Paste</Menu.ItemText>
						</Menu.Item>
						<Menu.Separator />
						<Menu.Item value="delete">
							<Menu.ItemText>Delete</Menu.ItemText>
						</Menu.Item>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}
