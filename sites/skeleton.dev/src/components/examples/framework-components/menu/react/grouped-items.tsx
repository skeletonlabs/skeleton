import { Menu, Portal } from '@skeletonlabs/skeleton-react';

export default function GroupedItems() {
	return (
		<Menu>
			<Menu.Trigger className="btn preset-filled">View Options</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content className="card w-56 p-2 bg-surface-100-900 shadow-xl space-y-1">
						<Menu.ItemGroup>
							<Menu.ItemGroupLabel className="px-3 py-1 text-sm font-semibold opacity-60">View</Menu.ItemGroupLabel>
							<Menu.Item value="split">Split View</Menu.Item>
							<Menu.Item value="fullscreen">Fullscreen</Menu.Item>
						</Menu.ItemGroup>
						<Menu.Separator className="hr" />
						<Menu.ItemGroup>
							<Menu.ItemGroupLabel className="px-3 py-1 text-sm font-semibold opacity-60">Appearance</Menu.ItemGroupLabel>
							<Menu.Item value="theme">Change Theme</Menu.Item>
							<Menu.Item value="zoom">Zoom</Menu.Item>
						</Menu.ItemGroup>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}
