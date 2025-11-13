<script lang="ts">
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<Menu>
	<Menu.ContextTrigger class="card p-8 bg-surface-100-900 text-center">Right-click here</Menu.ContextTrigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content class="card w-48 p-2 bg-surface-100-900 shadow-xl space-y-1">
				<Menu.Item value="cut">
					<Menu.ItemText>Cut</Menu.ItemText>
				</Menu.Item>
				<Menu.Item value="copy">
					<Menu.ItemText>Copy</Menu.ItemText>
				</Menu.Item>
				<Menu.Item value="paste">
					<Menu.ItemText>Paste</Menu.ItemText>
				</Menu.Item>
				<Menu.Separator class="hr" />
				<Menu.Item value="delete">
					<Menu.ItemText>Delete</Menu.ItemText>
				</Menu.Item>
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
