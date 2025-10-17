<script lang="ts">
	import { BoldIcon, ItalicIcon, UnderlineIcon } from '@lucide/svelte';
	import { ToggleGroup } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="flex gap-4 flex-col sm:flex-row">
	<div>
		<p class="mb-2">Horizontal</p>
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
	</div>

	<div>
		<p class="mb-2">Vertical</p>
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
</div>
