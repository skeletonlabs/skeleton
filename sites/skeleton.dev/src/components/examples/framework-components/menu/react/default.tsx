import { Menu, Portal } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<Menu>
			<Menu.Trigger className="btn preset-filled">Open Menu</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content className="card w-56 p-2 bg-surface-100-900 shadow-xl space-y-1">
						<Menu.Item value="new" className="menu-item">
							New File
						</Menu.Item>
						<Menu.Item value="open" className="menu-item">
							Open File
						</Menu.Item>
						<Menu.Separator className="border-t border-surface-300-700 my-1" />
						<Menu.Item value="save" className="menu-item">
							Save
						</Menu.Item>
						<Menu.Item value="export" className="menu-item">
							Export
						</Menu.Item>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}
