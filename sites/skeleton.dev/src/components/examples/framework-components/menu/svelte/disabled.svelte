<script lang="ts">
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<Menu>
	<Menu.Trigger class="btn preset-filled">Open Menu</Menu.Trigger>
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
				<Menu.Item value="disabled" disabled={true}>
					<Menu.ItemText>Disabled</Menu.ItemText>
				</Menu.Item>
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
