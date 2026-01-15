'use client';

import { Menu, Portal } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/components/menu/')({
	component: Page,
});

function Page() {
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
										<Menu.Item value="new">
											<Menu.ItemText>New File</Menu.ItemText>
										</Menu.Item>
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
						<Menu.Item value="disabled" disabled={true}>
							<Menu.ItemText>Disabled</Menu.ItemText>
						</Menu.Item>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}
