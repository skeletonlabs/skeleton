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
					<Menu.Item value="split" class="menu-item">Split View</Menu.Item>
					<Menu.Item value="fullscreen" class="menu-item">Fullscreen</Menu.Item>
				</Menu.ItemGroup>
				<Menu.Separator class="border-t border-surface-300-700 my-1" />
				<Menu.ItemGroup>
					<Menu.ItemGroupLabel class="px-3 py-1 text-sm font-semibold opacity-60">Appearance</Menu.ItemGroupLabel>
					<Menu.Item value="theme" class="menu-item">Change Theme</Menu.Item>
					<Menu.Item value="zoom" class="menu-item">Zoom</Menu.Item>
				</Menu.ItemGroup>
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
