import { Menu, Portal } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<Menu>
			<Menu.Trigger className="btn preset-filled">Open Menu</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content className="card w-56 p-2 bg-surface-100-900 shadow-xl space-y-1">
						<Menu.Item value="new">New File</Menu.Item>
						<Menu.Item value="open">Open File</Menu.Item>
						<Menu.Separator className="hr" />
						<Menu.Item value="save">Save</Menu.Item>
						<Menu.Item value="export">Export</Menu.Item>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}
