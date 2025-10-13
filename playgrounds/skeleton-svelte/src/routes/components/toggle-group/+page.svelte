<script lang="ts">
	import { ToggleGroup } from '@skeletonlabs/skeleton-svelte';
</script>

<ToggleGroup defaultValue="center">
	<ToggleGroup.Item value="left">Left</ToggleGroup.Item>
	<ToggleGroup.Item value="center">Center</ToggleGroup.Item>
	<ToggleGroup.Item value="right">Right</ToggleGroup.Item>
</ToggleGroup>
