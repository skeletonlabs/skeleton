<script lang="ts">
	import { BoldIcon, ItalicIcon, UnderlineIcon } from '@lucide/svelte';
	import { ToggleGroup } from '@skeletonlabs/skeleton-svelte';
</script>

<ToggleGroup defaultValue={['bold']} multiple dir="rtl">
	<ToggleGroup.Item value="bold">
		<BoldIcon />
	</ToggleGroup.Item>
	<ToggleGroup.Item value="italic">
		<ItalicIcon />
	</ToggleGroup.Item>
	<ToggleGroup.Item value="underline">
		<UnderlineIcon />
	</ToggleGroup.Item>
</ToggleGroup>
