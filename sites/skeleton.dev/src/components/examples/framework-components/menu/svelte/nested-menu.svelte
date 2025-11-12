<script lang="ts">
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<Menu>
	<Menu.Trigger class="btn preset-filled">Open Menu</Menu.Trigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content class="card w-56 p-2 bg-surface-100-900 shadow-xl space-y-1">
				<Menu>
					<Menu.TriggerItem class="menu-item">New</Menu.TriggerItem>
					<Portal>
						<Menu.Positioner>
							<Menu.Content class="card w-56 p-2 bg-surface-100-900 shadow-xl space-y-1">
								<Menu.Item value="project" class="menu-item">New Project</Menu.Item>
								<Menu.Item value="file" class="menu-item">New File</Menu.Item>
								<Menu.Item value="folder" class="menu-item">New Folder</Menu.Item>
							</Menu.Content>
						</Menu.Positioner>
					</Portal>
				</Menu>
				<Menu.Item value="open" class="menu-item">Open File</Menu.Item>
				<Menu.Separator class="border-t border-surface-300-700 my-1" />
				<Menu.Item value="save" class="menu-item">Save</Menu.Item>
				<Menu.Item value="export" class="menu-item">Export</Menu.Item>
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
