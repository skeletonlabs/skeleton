<script lang="ts">
	import BoldIcon from '@lucide/svelte/icons/bold';
	import ItalicIcon from '@lucide/svelte/icons/italic';
	import UnderlineIcon from '@lucide/svelte/icons/underline';
	import { ToggleGroup } from '@skeletonlabs/skeleton-svelte';
</script>

<ToggleGroup defaultValue={['bold']} multiple>
	<ToggleGroup.Item value="bold">
		<BoldIcon class="size-4" />
	</ToggleGroup.Item>
	<ToggleGroup.Item value="italic">
		<ItalicIcon class="size-4" />
	</ToggleGroup.Item>
	<ToggleGroup.Item value="underline">
		<UnderlineIcon class="size-4" />
	</ToggleGroup.Item>
</ToggleGroup>
