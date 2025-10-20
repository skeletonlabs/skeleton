<script lang="ts">
	import { BoldIcon, ItalicIcon, UnderlineIcon } from '@lucide/svelte';
	import { ToggleGroup } from '@skeletonlabs/skeleton-svelte';

	let value = $state(['bold']);
</script>

<div class="flex flex-col items-center gap-4">
	<ToggleGroup {value} onValueChange={(details) => (value = details.value)} multiple>
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
	<pre class="pre">{JSON.stringify(value)}</pre>
</div>
