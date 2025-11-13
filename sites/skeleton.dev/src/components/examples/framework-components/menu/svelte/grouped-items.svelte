<script lang="ts">
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<Menu>
	<Menu.Trigger class="btn preset-filled">View Options</Menu.Trigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content class="card w-56 p-2 bg-surface-100-900 shadow-xl space-y-1">
				<Menu.ItemGroup>
					<Menu.ItemGroupLabel class="px-3 py-1 text-sm font-semibold opacity-60">View</Menu.ItemGroupLabel>
					<Menu.Item value="split">
						<Menu.ItemText>Split View</Menu.ItemText>
					</Menu.Item>
					<Menu.Item value="fullscreen">
						<Menu.ItemText>Fullscreen</Menu.ItemText>
					</Menu.Item>
				</Menu.ItemGroup>
				<Menu.Separator class="hr" />
				<Menu.ItemGroup>
					<Menu.ItemGroupLabel class="px-3 py-1 text-sm font-semibold opacity-60">Appearance</Menu.ItemGroupLabel>
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
