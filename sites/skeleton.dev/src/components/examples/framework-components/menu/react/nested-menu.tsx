import { Menu, Portal } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<Menu>
			<Menu.Trigger className="btn preset-filled">Open Menu</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content className="card w-56 p-2 bg-surface-100-900 shadow-xl space-y-1">
						<Menu>
							<Menu.TriggerItem>New</Menu.TriggerItem>
							<Portal>
								<Menu.Positioner>
									<Menu.Content className="card w-56 p-2 bg-surface-100-900 shadow-xl space-y-1">
										<Menu.Item value="project">
											<Menu.ItemText>New Project</Menu.ItemText>
										</Menu.Item>
										<Menu.Item value="file">
											<Menu.ItemText>New File</Menu.ItemText>
										</Menu.Item>
										<Menu.Item value="folder">
											<Menu.ItemText>New Folder</Menu.ItemText>
										</Menu.Item>
									</Menu.Content>
								</Menu.Positioner>
							</Portal>
						</Menu>
						<Menu.Item value="open">
							<Menu.ItemText>Open File</Menu.ItemText>
						</Menu.Item>
						<Menu.Separator className="hr" />
						<Menu.Item value="save">
							<Menu.ItemText>Save</Menu.ItemText>
						</Menu.Item>
						<Menu.Item value="export">
							<Menu.ItemText>Export</Menu.ItemText>
						</Menu.Item>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}
