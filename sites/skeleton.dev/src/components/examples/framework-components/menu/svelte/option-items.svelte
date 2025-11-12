<script lang="ts">
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';
	import { Check } from '@lucide/svelte';

	let options = $state({ showLineNumbers: true, showMinimap: false, wordWrap: true });
</script>

<Menu
	value={options}
	onValueChange={(details) => (options = details.value)}
>
	<Menu.Trigger class="btn preset-filled">Editor Settings</Menu.Trigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content class="card w-56 p-2 bg-surface-100-900 shadow-xl space-y-1">
				<Menu.OptionItem
					type="checkbox"
					name="showLineNumbers"
					value="showLineNumbers"
					class="menu-item flex items-center justify-between"
				>
					Show Line Numbers
					<Check class="size-4" />
				</Menu.OptionItem>
				<Menu.OptionItem
					type="checkbox"
					name="showMinimap"
					value="showMinimap"
					class="menu-item flex items-center justify-between"
				>
					Show Minimap
					<Check class="size-4" />
				</Menu.OptionItem>
				<Menu.OptionItem
					type="checkbox"
					name="wordWrap"
					value="wordWrap"
					class="menu-item flex items-center justify-between"
				>
					Word Wrap
					<Check class="size-4" />
				</Menu.OptionItem>
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
