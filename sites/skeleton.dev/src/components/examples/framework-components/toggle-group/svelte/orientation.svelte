<script lang="ts">
	import { BoldIcon, ItalicIcon, UnderlineIcon } from '@lucide/svelte';
	import { ToggleGroup } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="flex flex-col items-center gap-4">
	<p>Horizontal</p>
	<ToggleGroup defaultValue={['bold']} multiple orientation="horizontal">
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

	<p>Vertical</p>
	<ToggleGroup defaultValue={['bold']} multiple orientation="vertical" class="flex-col">
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
</div>
