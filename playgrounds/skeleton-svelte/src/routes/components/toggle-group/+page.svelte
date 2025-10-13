<script lang="ts">
	import { ToggleGroup } from '@skeletonlabs/skeleton-svelte';

	let value = $state(['center']);
</script>

<ToggleGroup {value} onValueChange={(details) => (value = details.value)}>
	<ToggleGroup.Item value="left">Left</ToggleGroup.Item>
	<ToggleGroup.Item value="center">Center</ToggleGroup.Item>
	<ToggleGroup.Item value="right">Right</ToggleGroup.Item>
</ToggleGroup>
