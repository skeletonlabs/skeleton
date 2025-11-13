import { Menu, Portal } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<Menu>
			<Menu.Trigger>Open Menu</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						<Menu>
							<Menu.TriggerItem value="new">
								<Menu.ItemText>New</Menu.ItemText>
							</Menu.TriggerItem>
							<Portal>
								<Menu.Positioner>
									<Menu.Content>
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
						<Menu.Separator />
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
