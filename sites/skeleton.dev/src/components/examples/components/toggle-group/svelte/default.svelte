<script lang="ts">
	import { BoldIcon, ItalicIcon, UnderlineIcon } from '@lucide/svelte';
	import { ToggleGroup } from '@skeletonlabs/skeleton-svelte';
</script>

<ToggleGroup defaultValue={['bold']} multiple>
	<ToggleGroup.Item value="bold">
		<BoldIcon className='size-4' />
	</ToggleGroup.Item>
	<ToggleGroup.Item value="italic">
		<ItalicIcon className='size-4' />
	</ToggleGroup.Item>
	<ToggleGroup.Item value="underline">
		<UnderlineIcon className='size-4' />
	</ToggleGroup.Item>
</ToggleGroup>
