import { Menu, Portal } from '@skeletonlabs/skeleton-react';

export default function ContextMenu() {
	return (
		<Menu>
			<Menu.ContextTrigger className="card p-8 bg-surface-100-900 text-center">Right-click here</Menu.ContextTrigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content className="card w-48 p-2 bg-surface-100-900 shadow-xl space-y-1">
						<Menu.Item value="cut" className="menu-item">
							Cut
						</Menu.Item>
						<Menu.Item value="copy" className="menu-item">
							Copy
						</Menu.Item>
						<Menu.Item value="paste" className="menu-item">
							Paste
						</Menu.Item>
						<Menu.Separator className="border-t border-surface-300-700 my-1" />
						<Menu.Item value="delete" className="menu-item text-error-500">
							Delete
						</Menu.Item>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}
