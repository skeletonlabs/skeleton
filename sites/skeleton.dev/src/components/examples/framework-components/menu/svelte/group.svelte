<script lang="ts">
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<Menu>
	<Menu.Trigger>View Options</Menu.Trigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content>
				<Menu.ItemGroup>
					<Menu.ItemGroupLabel>View</Menu.ItemGroupLabel>
					<Menu.Item value="split">
						<Menu.ItemText>Split View</Menu.ItemText>
					</Menu.Item>
					<Menu.Item value="fullscreen">
						<Menu.ItemText>Fullscreen</Menu.ItemText>
					</Menu.Item>
				</Menu.ItemGroup>
				<Menu.Separator />
				<Menu.ItemGroup>
					<Menu.ItemGroupLabel>Appearance</Menu.ItemGroupLabel>
					<Menu.Item value="theme">
						<Menu.ItemText>Change Theme</Menu.ItemText>
					</Menu.Item>
					<Menu.Item value="zoom">
						<Menu.ItemText>Zoom</Menu.ItemText>
					</Menu.Item>
				</Menu.ItemGroup>
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
